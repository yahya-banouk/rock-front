import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/authSlice';
import type { AppDispatch } from '../redux/store';

const Home = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };

    return (
        <div style={{ padding: '2rem' }}>
            <h2>Welcome</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Home;