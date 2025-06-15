
import type {User, userRole} from '../types/User';

interface MockUser extends User {
    password: string;
    confirmed: boolean;
}

const mockUsers: MockUser[] = [
    { username: 'recruiter1', password: '1234', role: 'recruiter', confirmed: true, email:"recruiter1@gmail.com", status: 'active' },
    { username: 'talent1', password: 'abcd', role: 'talent', confirmed: true, email:"telent1@gmail.com", status: 'active' },
];

export const mockLogin = async (
    username: string,
    password: string
    ): Promise<{ token: string; user: User }> => {
    const user = mockUsers.find((u) => u.username === username && u.password === password);
    if (!user) throw new Error('Invalid credentials');
    if (!user.confirmed) throw new Error('Please confirm your email');

    return {
        token: `mock-jwt-token-${user.username}`,
        user: {
        username: user.username,
        role: user.role,
        email: user.email,
        status: user.status,
        },
    };
};

export const mockSignup = async (username: string, password: string, role: userRole, email: string) => {
    const existing = mockUsers.find((u) => u.username === username);
    if (existing) throw new Error('User already exists');

    mockUsers.push({ username, password, role, confirmed: false, email, status: 'active' });

    console.log(`[Email Sent] Confirmation link for ${username}`);

    return { message: 'Confirmation email sent' };
};

export const mockConfirmEmail = async (username: string) => {
    const user = mockUsers.find((u) => u.username === username);
    if (!user) throw new Error('User not found');

    user.confirmed = true;
    return { message: 'Email confirmed successfully' };
};
