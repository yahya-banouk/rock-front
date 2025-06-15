import React from "react";
import { Form, Input, Button, Card, Typography, Select } from "antd";

const { Title } = Typography;

interface SignUpFormProps {
    onFinish: (values: any) => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onFinish }) => {
    return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <Card
                className="w-full max-w-sm shadow-xl rounded-2xl"
                bodyStyle={{ padding: "2rem" }}
            >
                <Title level={3} className="text-center mb-6">
                    Sign Up
                </Title>
                <Form
                name="login"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                layout="vertical"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: "Please input your username!" }]}
                    >
                        <Input size="large" />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="Email"
                        rules={[{ required: true, message: "Please input your email!" }]}
                    >
                        <Input size="large" />
                    </Form.Item>
                    <Form.Item
                        label="Role"
                        name="role"
                        rules={[{ required: true, message: "Please select your role!" }]}
                    >
                        <Select
                            options={[
                                { value: "recruiter", label: "Recruiter" },
                                { value: "talent", label: "Talent" }
                            ]}
                            size="large"
                        />
                    </Form.Item>
                        
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: "Please input your password!" }]}
                    >
                        <Input.Password size="large" />
                    </Form.Item>
                        
                    <Form.Item>
                        <Button type="primary" htmlType="submit" block size="large">
                            Sign Up
                        </Button>
                        <Button
                        type="link"
                        className="mt-4"
                        onClick={() => {
                            window.location.href = "/login";
                        }}
                        >
                            Already have an account? Login
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default SignUpForm;
