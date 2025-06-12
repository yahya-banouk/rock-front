import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import type { RootState } from '../redux/store';

const RoleRedirect = () => {
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);

  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }

  if (user.role === 'recruiter') return <Navigate to="/recruiter" replace />;
  if (user.role === 'talent') return <Navigate to="/candidate" replace />;

  return <Navigate to="/login" replace />;
};

export default RoleRedirect;
