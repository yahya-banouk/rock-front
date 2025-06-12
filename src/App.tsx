import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from './redux/store';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import HomeCandidate from './pages/HomeCandidate';
import HomeRecruiter from './pages/HomeRecruiter';
import RoleRedirect from './pages/RoleRedirect';

const App = () => {
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);

  return (
    <Routes>
      <Route path="/" element={<RoleRedirect />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/candidate" element={
        isAuthenticated && user?.role === 'talent' ? <HomeCandidate /> : <Navigate to="/login" />
      }/>
      <Route path="/recruiter" element={
        isAuthenticated && user?.role === 'recruiter' ? <HomeRecruiter /> : <Navigate to="/login" />
      }/>
    </Routes>
  );
};

export default App;
