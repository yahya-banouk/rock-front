import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/authSlice';
import type { AppDispatch } from '../redux/store';

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(login({ username: 'user' }));
    navigate('/');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Login</h2>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default Login;