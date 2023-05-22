
import { useState } from 'react';
import { useRouter } from "next/router";
import { Layout, Menu, theme } from 'antd';
import { PieChartOutlined, UserOutlined, DesktopOutlined, TeamOutlined } from '@ant-design/icons';

import 'antd/dist/reset.css';

export default function Home({ children }) {

    const router = useRouter();
    const { Header, Content, Footer, Sider } = Layout;

    const [collapsed, setCollapsed] = useState(false);
    const { token: { colorBgContainer } } = theme.useToken();

    function getItem(label, key, icon, children) {
        return {
            key,
            icon,
            children,
            label,
        };
    };

    const items = [
        getItem('Users', 'users', <PieChartOutlined />),
        getItem('Jobs', 'jobs', <DesktopOutlined />),
        getItem('Campaigns', 'campaigns', <UserOutlined />, [
            getItem('Emails', 'campaign/emails'),
            getItem('Email Status', 'campaign/status'),
            getItem('Logs', 'campaign/logs'),
        ]),
        getItem('Companies', 'companies', <TeamOutlined />),
    ];

    const manuHandler = ({ key }) => {

        (key === 'users') ? router.push(key) : console.log('Routes are not initialized yet');
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" style={{
                    float: 'left', width: '120px', height: '31px',
                    margin: '16px 24px 16px 24px', background: 'rgba(255, 255, 255, 0.3)'
                }} />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={manuHandler} />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }} />
                <Content style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                    background: colorBgContainer,
                }}>
                    {children}
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Next Js App Designed in Antd
                </Footer>
            </Layout>
        </Layout>
    );
};
