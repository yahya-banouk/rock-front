import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signup } from '../redux/authSlice';
import type { AppDispatch } from '../redux/store';

const Signup = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const handleSignup = () => {
        dispatch(signup({ username: 'newUser' }));
        navigate('/');
    };

    return (
        <div style={{ padding: '2rem' }}>
            <h2>Sign Up</h2>
            <button onClick={handleSignup}>Sign Up</button>
        </div>
        );
};

export default Signup;