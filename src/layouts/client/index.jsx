import { Layout, Menu } from 'antd';
import 'antd/dist/reset.css';

const Home = ({ children }) => {

    const { Header, Content, Footer } = Layout;

    return (
        <Layout className="layout">
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <div className="demo-logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}
                    items={[{ key: '/', label: 'Home' }, { key: '/', label: 'About Us' }, { key: '/', label: 'Contact Us' }, { key: '/login', label: 'Sign In' }]}
                />
            </Header>
            <Content style={{ padding: 24, minHeight: 280, margin: '24px 16px' }}>
                {children}
            </Content>
            <Footer style={{ textAlign: 'center' }}>Next Js Project using Ant</Footer>
        </Layout>
    );
};

export default Home;