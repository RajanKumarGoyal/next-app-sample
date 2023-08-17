import { Layout, Menu } from 'antd';
import { useRouter } from "next/router";

import 'antd/dist/reset.css';

const Home = ({ children }) => {

    const router = useRouter();
    const { Header, Content, Footer } = Layout;

    const manuHandler = ({ key }) => {

        (key === '/' || key === '/auth/login') ? router.push(key) : console.log('Routes are not initialized yet');
    };

    return (
        <Layout className="layout">
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <div className="demo-logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}
                    onClick={manuHandler}
                    items={[
                        { key: '/', label: 'Home' },
                        { key: '/about-us', label: 'About Us' },
                        { key: '/contact-us', label: 'Contact Us' },
                        { key: '/auth/login', label: 'Sign In' },
                    ]} />
            </Header>
            <Content style={{ padding: 24, minHeight: 280, margin: '24px 16px' }}>
                {children}
            </Content>
            <Footer style={{ textAlign: 'center' }}>Next Js Project using Ant</Footer>
        </Layout>
    );
};

export default Home;