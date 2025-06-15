import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../redux/authSlice';
import LoginForm from '../components/LoginForm';
import { unwrapResult } from '@reduxjs/toolkit';
import type { AppDispatch } from '../redux/store';


const Login = () => {
  const dispatch = useDispatch<AppDispatch>();;
  const navigate = useNavigate();
  const { error } = useSelector((state: any) => state.auth);

  const handleFinish = async (values: any) => {
    try {
      const resultAction = await dispatch(loginUser(values));
      const data = unwrapResult(resultAction);
  
      const role = data.user.role;
      navigate(role === 'recruiter' ? '/recruiter' : '/candidate');
    } catch (err: any) {
      console.error('Login failed:', err);
    }
  };
  

  return (
    <div>
      <LoginForm onFinish={handleFinish} />
      {error && <p className="text-red-500 text-center">{error}</p>}
    </div>
  );
};

export default Login;
