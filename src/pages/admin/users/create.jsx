import Head from 'next/head';
import bcryptjs from 'bcryptjs';
import { Input, Form, Breadcrumb, Typography, Button, Row, Col } from 'antd';

import prisma from "@/server/lib/prisma";

const index = () => {

    const { Title } = Typography;

    const onSubmit = async (input) => {

        const { password } = input;

        input = {
            ...input,
            password: bcryptjs.hashSync(password, 10)
        };

        const createdUser = await prisma.user.create({ data: input });
        console.log('createdUser', createdUser);
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
                                <Button type="primary" htmlType="submit">Submit</Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default index;