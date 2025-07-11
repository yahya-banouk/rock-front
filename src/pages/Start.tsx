import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Typography, Card } from 'antd';
import Logo from '../components/ui/Logo';
import { RoleSelector } from '../components/ui/RoleSelector';
import { AuthToggle } from '../components/ui/AuthToggle';
import { PrimaryButton } from '../components/ui/PrimaryButton';

const { Title, Text } = Typography;

export default function Start() {
  const { loginWithRedirect } = useAuth0();
  const [role, setRole] = useState<'talent' | 'recruiter'>('talent');
  const [isNewUser, setIsNewUser] = useState(false);

  const handleAuth = () => {
    loginWithRedirect({
      appState: { target: role === 'talent' ? '/talent' : '/recruiter' },
      authorizationParams: {
        ...(isNewUser && { screen_hint: 'signup' }),
        role,
      },
    });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#F9FAFB' }}>
      <Card style={{ width: 400, padding: 24, borderRadius: 16, textAlign: 'center' }}>
        <Logo />
        <Title level={3}>Welcome to CareerLift</Title>
        <Text type="secondary">Helping Talents grow & Recruiters hire better</Text>

        <div style={{ marginTop: 24 }}>
          <RoleSelector value={role} onChange={setRole} />
          <AuthToggle checked={isNewUser} onChange={() => setIsNewUser(!isNewUser)} />
        </div>

        <div style={{ marginTop: 32 }}>
          <PrimaryButton text={`${isNewUser ? 'Sign up' : 'Log in'} as ${role}`} onClick={handleAuth} />
        </div>
      </Card>
    </div>
  );
}
