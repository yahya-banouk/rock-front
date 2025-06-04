import React from 'react';
import { Form, Input, Button, Card, Typography } from 'antd';

const { Title } = Typography;

interface LoginFormProps {
  onFinish: (values: any) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onFinish }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <Card
        className="w-full max-w-sm shadow-xl rounded-2xl"
        bodyStyle={{ padding: '2rem' }}
      >
        <Title level={3} className="text-center mb-6">
          Login
        </Title>
        <Form name="login" initialValues={{ remember: true }} onFinish={onFinish} layout="vertical">
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password size="large" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block size="large">
              Log In
            </Button>
            <Button
              type="link"
              className="mt-4"
              onClick={() => {
                // Handle navigation to signup page
                window.location.href = '/signup';
              }
            }
            >
              Don't have an account? Sign Up
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default LoginForm;
