
import { useState } from 'react';
import { useRouter } from "next/router";
import { Layout, Menu, theme } from 'antd';
import { useSession, signOut } from "next-auth/react";
import { PieChartOutlined, UserOutlined, TeamOutlined, LogoutOutlined } from '@ant-design/icons';

import 'antd/dist/reset.css';

export default function Home({ children }) {

    const router = useRouter();
    
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            // The user is not authenticated, handle it here.
            router.push('/login');
        },
    });

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
        getItem('Dashboard', '/admin', <PieChartOutlined />),
        getItem('Users', '/admin/users', <UserOutlined />),
        getItem('Companies', '/admin/companies', <TeamOutlined />),
        getItem('Log Out', 'logout', <LogoutOutlined />),
    ];

    const manuHandler = ({ key }) => {

        if (key === 'logout') {

            signOut();

        } else {

            (key === '/admin/users' || key === '/admin') ? router.push(key) : console.log('Routes are not initialized yet');
        }
    };

    if (status === 'loading') {
        return <>Loading...</>
    } else {

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
                    <Content style={{ margin: '24px 16px', padding: 24, minHeight: 280, background: colorBgContainer }}>
                        {children}
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Next Js App Designed in Antd
                    </Footer>
                </Layout>
            </Layout>
        );

    };
};
