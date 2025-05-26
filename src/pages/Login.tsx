import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/authSlice';
import type { AppDispatch } from '../redux/store';
import LoginForm from '../components/LoginForm';

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    dispatch(login({ username: values.username }));
    navigate('/');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <LoginForm onFinish={onFinish} />
    </div>
  );
};

export default Login;
