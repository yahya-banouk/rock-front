import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch } from 'react-redux';
import { setCredentials, logout } from '../redux/authSlice';

export default function AuthSync() {
  const { isAuthenticated, getIdTokenClaims } = useAuth0();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      (async () => {
        const claims: any = await getIdTokenClaims();
        const token = claims.__raw;
        const roles = claims['https://app.example.com/roles'] as string[] | undefined;
        const role = roles?.[0] as 'talent' | 'recruiter' | undefined;
        if (role) dispatch(setCredentials({ token, role }));
      })();
    } else {
      dispatch(logout());
    }
  }, [isAuthenticated, getIdTokenClaims]);

  return null;
}
