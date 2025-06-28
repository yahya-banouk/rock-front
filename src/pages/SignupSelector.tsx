
import { useAuth0 } from "@auth0/auth0-react";

export default function SignupSelector() {
  const { loginWithRedirect } = useAuth0();

  const handleSignup = (role: string) => {
    loginWithRedirect({
      screen_hint: "signup",
      appState: { role }
    } as any);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Choisissez votre rôle</h2>
      <button onClick={() => handleSignup("recruiter")}>Je suis Recruteur</button>
      <button onClick={() => handleSignup("talent")}>Je suis Talent</button>
    </div>
  );
}