
import { useState } from 'react';
import { Layout, Menu, theme } from 'antd';
import { PieChartOutlined, UserOutlined, DesktopOutlined, TeamOutlined } from '@ant-design/icons';

import 'antd/dist/reset.css';

export default function Home({ children }) {

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
        getItem('Users', '1', <PieChartOutlined />),
        getItem('Jobs', '2', <DesktopOutlined />),
        getItem('Campaigns', 'sub1', <UserOutlined />, [
            getItem('Emails', '3'),
            getItem('Email Status', '4'),
            getItem('Logs', '5'),
        ]),
        getItem('Companies', 'sub2', <TeamOutlined />, [getItem('Contact', '6'), getItem('Group', '8')]),
    ];

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" style={{
                    float: 'left', width: '120px', height: '31px',
                    margin: '16px 24px 16px 24px', background: 'rgba(255, 255, 255, 0.3)'
                }} />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }} />
                <Content style={{ margin: '0 16px' }}>
                    {children}
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Next Js App Designed in Antd
                </Footer>
            </Layout>
        </Layout>
    );
};
