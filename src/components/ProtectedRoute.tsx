import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../redux/store';

export function ProtectedRoute() {
  const auth = useSelector((state: RootState) => state.auth);
  if (!auth.isAuthenticated) return <Navigate to="/login" />;
  return <Outlet />;
}

export function RoleGuard({ role }: { role: string }) {
  const userRole = useSelector((state: RootState) => state.auth.role);
  if (userRole !== role) return <Navigate to="/" />;
  return <Outlet />;
}
