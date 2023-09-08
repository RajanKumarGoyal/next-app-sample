import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Input, Form, Breadcrumb, Typography, Button, Row, Col, notification } from 'antd';

/**
 * Import Custom Files
 */
import Api from "@/helpers/Api.helper";

const Index = () => {

    const router = useRouter();
    const { Title } = Typography;
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (input) => {

        setIsLoading(true);
        Api.post("users", input).then((response) => {

            if ('status' in response.data && response.data.status === 200) {
                setIsLoading(false);
                notification.success({ 
                    message: 'Create User', 
                    description: 'User created successfully.' 
                });
                router.push('/admin/users');

            } else {

                setIsLoading(false);
                notification.error({ 
                    message: 'Create User', 
                    description: 'Error occured! Please try again after some time.' 
                });
            }

        }).catch((err) => {
            setIsLoading(false);
            notification.error({ 
                message: 'Create User', 
                description: err.message 
            });
        });
    };

    return (
        <>
            <Head>
                <title>Create User</title>
            </Head>
            <Breadcrumb style={{ margin: '16px 0' }} items={[{ title: 'Dashboard' }, { title: 'Create User' }]} />
            <div className="site-layout-background">
                <Title>Create User</Title>
                <Row>
                    <Col lg={16}>

                        <Form name="basic" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} style={{ maxWidth: 600, }} initialValues={{ remember: true }}
                            onFinish={onSubmit} autoComplete="off">

                            <Form.Item label="Name" name="name" initialValue={'Rajan'} rules={[{ required: true, message: 'Please enter name!' }]} >
                                <Input />
                            </Form.Item>

                            <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please enter email!' }]} >
                                <Input />
                            </Form.Item>

                            <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please enter password!' }]} >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item wrapperCol={{ offset: 8, span: 16 }} >
                                <Button loading={isLoading} type="primary" htmlType="submit">Submit</Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default Index;