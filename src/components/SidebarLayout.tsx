// src/components/SidebarLayout.tsx
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  SearchOutlined,
  BarChartOutlined,
  DashboardOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/authSlice';
import type { ReactNode } from 'react';
import type { RootState, AppDispatch } from '../redux/store';

const { Header, Sider, Content } = Layout;

interface SidebarLayoutProps {
  role: 'talent' | 'recruiter';
  children: ReactNode;
}

const SidebarLayout = ({ role, children }: SidebarLayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.auth.user);

  const menuItems = [
    { label: 'Dashboard', key: '/dashboard', icon: <DashboardOutlined /> },
    {
      label: 'Profile & Recommendations',
      key: '/profile',
      icon: <UserOutlined />,
    },
    {
      label: role === 'talent' ? 'Search Jobs' : 'Search Talents',
      key: '/search',
      icon: <SearchOutlined />,
    },
    {
      label: 'Activity Tracker',
      key: '/tracker',
      icon: <BarChartOutlined />,
    },
    { label: 'Logout', key: 'logout', icon: <LogoutOutlined />, danger: true },
  ];

  const handleMenuClick = ({ key }: any) => {
    if (key === 'logout') {
      dispatch(logout());
      navigate('/login');
    } else {
      navigate(key);
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider theme="light">
        <div className="text-center py-4 font-bold">{user?.username}</div>
        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          onClick={handleMenuClick}
          items={menuItems}
        />
      </Sider>
      <Layout>
        <Header className="bg-white shadow px-6 text-xl font-semibold">
          {role === 'talent' ? 'Talent Portal' : 'Recruiter Portal'}
        </Header>
        <Content className="p-6 bg-gray-50">{children}</Content>
      </Layout>
    </Layout>
  );
};

export default SidebarLayout;
