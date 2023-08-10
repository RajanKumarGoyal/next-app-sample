
import Head from 'next/head';
import { Breadcrumb, Typography } from 'antd';

export default function Home() {

    const { Title } = Typography;

    return (
        <>
            <Head>
                <title>Admin Dashboard</title>
            </Head>
            <Breadcrumb style={{ margin: '16px 0' }} items={[{ title: 'Dashboard' }]} />
            <div className="site-layout-background">
                <Title>Dashboard</Title>
            </div>
        </>
    );
};

