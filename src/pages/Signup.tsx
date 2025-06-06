import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../redux/authSlice';
import { Form, Input, Button, Select } from 'antd';
import type { AppDispatch } from '../redux/store';

const SignUp = () => {
    const dispatch = useDispatch<AppDispatch>();;
    const { error } = useSelector((state: any) => state.auth);

    const onFinish = (values: any) => {
        dispatch(signupUser(values));
    };

    return (
        <Form onFinish={onFinish} layout="vertical">
            <Form.Item name="username" label="Username" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name="password" label="Password" rules={[{ required: true }]}>
                <Input.Password />
            </Form.Item>
            <Form.Item name="role" label="Role" rules={[{ required: true }]}>
                <Select options={[{ value: 'recruiter' }, { value: 'talent' }]} />
            </Form.Item>
            <Button htmlType="submit">Sign Up</Button>
            {error && <p className="text-red-500">{error}</p>}
        </Form>
    );
};

export default SignUp;
