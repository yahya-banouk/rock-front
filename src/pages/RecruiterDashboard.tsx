import { useAuth0 } from '@auth0/auth0-react';

export default function RecruiterDashboard() {
  const { user, logout } = useAuth0();
  return (
    <div>
      <h2>Recruiter Dashboard</h2>
      <p>Welcome, {user?.name}</p>
      <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
        Logout
      </button>
    </div>
  );
}
