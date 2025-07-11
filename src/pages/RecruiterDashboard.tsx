import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';

export default function RecruiterDashboard() {
  const { user, logout, getAccessTokenSilently } = useAuth0();
  const [response, setResponse] = useState<string | null>(null);

  const testSecureAPI = async () => {
    try {
      const token = await getAccessTokenSilently();
      const payload = JSON.parse(atob(token.split('.')[1]));
      console.log("✅ EMAIL:", payload["https://app.example.com/email"]);
      console.log("✅ ROLE:", payload["https://app.example.com/roles"]);
      const res = await fetch('http://localhost:8000/apec', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          search_term: 'Python',
          title: 'Développeur Python',
          contract_type: 'CDI',
          nbr_max_items: 3,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.detail || 'Unknown error');
      }

      setResponse(`✅ Success: ${data.message}`);
    } catch (error: any) {
      setResponse(`❌ Error: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Recruiter Dashboard</h2>
      <p>Welcome, {user?.name}</p>
      <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
        Logout
      </button>

      <div style={{ marginTop: 20 }}>
        <button onClick={testSecureAPI}>🔐 Test Secure API</button>
        {response && <p>{response}</p>}
      </div>
    </div>
  );
}
