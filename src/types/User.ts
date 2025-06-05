export type userRole = 'admin' | 'recruiter' | 'talent';
export type userStatus = 'active' | 'inactive' | 'banned';

export interface User {
    username: string;
    email: string;
    role: userRole;
    status: userStatus;
}