import Head from 'next/head';
import { Space, Table, Breadcrumb, Typography } from 'antd';

/**
 * Import Custom Files
 */
import Api from "@/helpers/Api.helper";

/**
 * Fetch Data from server and pass this 
 * into props
 */
export const getServerSideProps = async () => {

    const response = await Api.get('users');

    return { 
        props: { 
            users: JSON.parse(JSON.stringify(response.data.data))
        } 
    };
};

const Index = ({ users }) => {

    const { Title } = Typography;

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Created Date',
            dataIndex: 'createdAt',
            key: 'createdAt',
        },
        {
            title: 'Action',
            key: 'action',
            render: () => (
                <Space size="middle">
                    <a>View</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];

    return (
        <>
            <Head>
                <title>User Listing</title>
            </Head>
            <Breadcrumb style={{ margin: '16px 0' }} items={[{ title: 'Dashboard' }, { title: 'User Listing' }]} />
            <div className="site-layout-background">
                <Title>Users List</Title>
                <Table columns={columns} dataSource={users} rowKey="id" />
            </div>
        </>
    );
};

export default Index;