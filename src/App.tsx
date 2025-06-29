import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from './redux/store';
import Start from './pages/Start';
import TalentDashboard from './pages/TalentDashboard';
import RecruiterDashboard from './pages/RecruiterDashboard';
import { ProtectedRoute, RoleGuard } from './components/ProtectedRoute';
import AuthSync from './components/AuthSync';

export default function App() {
  const { isAuthenticated, role } = useSelector((s: RootState) => s.auth);
  const location = useLocation();
  const roleRedirect =
    role === 'talent' ? '/talent' : role === 'recruiter' ? '/recruiter' : null;
  const shouldRedirect = (location.pathname === '/' || location.pathname === '/login') && isAuthenticated && roleRedirect;
  if (isAuthenticated && !role) {
    return <div>Loading role, please wait...</div>;
  }
  return (
    <>
      <AuthSync />
      {shouldRedirect && <Navigate to={roleRedirect!} />}
      <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/login" element={<Navigate to="/" />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<RoleGuard role="talent" />}>
            <Route path="/talent" element={<TalentDashboard />} />
          </Route>
          <Route element={<RoleGuard role="recruiter" />}>
            <Route path="/recruiter" element={<RecruiterDashboard />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}
