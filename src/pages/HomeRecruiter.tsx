import { useState } from 'react';
import {
  Button,
  Card,
  Form,
  Input,
  Switch,
  Typography,
  message,
} from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import type { AppDispatch, RootState } from '../redux/store';
import { mockMatchTalents } from '../api/mockAiApi';

const { Title, Text } = Typography;

const HomeRecruiter = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.user);

  const [form] = Form.useForm();
  const [isPublic, setIsPublic] = useState(true);
  const [matches, setMatches] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  const onFinish = async (values: any) => {
    const jobData = { ...values, isPublic };
    message.success('Job offer created (mock)');
    setLoading(true);
    const candidates = await mockMatchTalents(jobData);
    setMatches(candidates);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Navbar */}
      <div className="flex justify-between items-center mb-6">
        <Title level={4}>Hello, {user?.username}</Title>
        <Button type="primary" icon={<LogoutOutlined />} onClick={handleLogout}>
          Logout
        </Button>
      </div>

      {/* Job Offer Form */}
      <Card className="mb-6 shadow-md">
        <Title level={5}>Create a Job Offer</Title>
        <Form layout="vertical" form={form} onFinish={onFinish}>
          <Form.Item name="title" label="Job Title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Description" rules={[{ required: true }]}>
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item name="skills" label="Required Skills (comma separated)">
            <Input />
          </Form.Item>
          <Form.Item label="Publish Publicly">
            <Switch checked={isPublic} onChange={setIsPublic} />
          </Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Submit Job
          </Button>
        </Form>
      </Card>

      {/* Recommendations */}
      {matches.length > 0 && (
        <div className="space-y-4">
          <Title level={5}>Matched Candidates</Title>
          {matches.map((candidate, idx) => (
            <Card key={idx} className="shadow-sm">
              <Text strong>{candidate.name}</Text>
              <br />
              <Text>Skills: {candidate.skills.join(', ')}</Text>
              <br />
              <Text type="success">Match Score: {candidate.match}%</Text>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeRecruiter;
