import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../redux/authSlice';
import type { AppDispatch } from '../redux/store';
import SignUpForm from '../components/SignupForm';

const SignUp = () => {
    const dispatch = useDispatch<AppDispatch>();;
    const { error } = useSelector((state: any) => state.auth);

    const onFinish = (values: any) => {
        dispatch(signupUser(values));
    };

    return (
        <div>
            <SignUpForm onFinish={onFinish} />
            {error && <p className="text-red-500 text-center">{error}</p>}
        </div>
    );
};

export default SignUp;
