import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export default function Start() {
  const { loginWithRedirect } = useAuth0();
  const [role, setRole] = useState<'talent' | 'recruiter'>('talent');
  const [isNewUser, setIsNewUser] = useState(false); // 👈 choose between login and signup

  const handleAuth = () => {
    loginWithRedirect({
      appState: { target: role === 'talent' ? '/talent' : '/recruiter' },
      authorizationParams: {
        ...(isNewUser && { screen_hint: 'signup' }), // 👈 only add for signup
        role, // 👈 required by your Action
      },
    });
  };

  return (
    <div>
      <h2>{isNewUser ? 'Sign Up' : 'Login'}</h2>

      <label>
        <input type="radio" value="talent" checked={role === 'talent'} onChange={() => setRole('talent')} />
        Talent
      </label>
      <label>
        <input type="radio" value="recruiter" checked={role === 'recruiter'} onChange={() => setRole('recruiter')} />
        Recruiter
      </label>

      <div>
        <label>
          <input
            type="checkbox"
            checked={isNewUser}
            onChange={() => setIsNewUser(!isNewUser)}
          />
          I’m new (sign up)
        </label>
      </div>

      <button onClick={handleAuth}>
        {isNewUser ? 'Sign up' : 'Log in'} as {role}
      </button>
    </div>
  );
}
