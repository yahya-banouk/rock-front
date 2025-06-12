import { useState } from 'react';
import { Button, Card, Input, Upload, message, Typography } from 'antd';
import { UploadOutlined, LogoutOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import type { AppDispatch } from '../redux/store';
import { mockMatchJobs } from '../api/mockAiApi';
import type { RootState } from '../redux/store';

const { Title, Text } = Typography;

const HomeCandidate = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.user);
  const [cvData, setCvData] = useState('');
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  const handleCVSubmit = async () => {
    if (!cvData) {
      message.error('Please provide CV data or LinkedIn URL');
      return;
    }
    setLoading(true);
    const results = await mockMatchJobs(cvData);
    setJobs(results);
    setLoading(false);
  };

  const handleApply = (jobTitle: string) => {
    message.success(`Applied to ${jobTitle}! (mock)`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Navbar */}
      <div className="flex justify-between items-center mb-6">
        <Title level={4}>Welcome, {user?.username}</Title>
        <Button type="primary" icon={<LogoutOutlined />} onClick={handleLogout}>
          Logout
        </Button>
      </div>

      {/* CV Section */}
      <Card className="mb-6 shadow-md">
        <Title level={5}>Upload Your CV or LinkedIn Profile</Title>
        <Input.TextArea
          rows={4}
          placeholder="Paste your CV text or LinkedIn URL here"
          value={cvData}
          onChange={(e) => setCvData(e.target.value)}
        />
        <Upload beforeUpload={() => false} showUploadList={false}>
          <Button icon={<UploadOutlined />} className="mt-2">
            Upload PDF (not processed in mock)
          </Button>
        </Upload>
        <Button type="primary" className="mt-4" onClick={handleCVSubmit} loading={loading}>
          Get Job Recommendations
        </Button>
      </Card>

      {/* Recommended Jobs */}
      {jobs.length > 0 && (
        <div className="space-y-4">
          <Title level={5}>Recommended Jobs</Title>
          {jobs.map((job, index) => (
            <Card key={index} className="shadow-sm">
              <div className="flex justify-between items-center">
                <div>
                  <Text strong>{job.title}</Text>
                  <br />
                  <Text type="secondary">{job.company}</Text>
                  <br />
                  <Text type="success">Match Score: {job.match}%</Text>
                </div>
                <Button type="primary" onClick={() => handleApply(job.title)}>
                  Apply
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeCandidate;
