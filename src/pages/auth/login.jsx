import { useRouter } from 'next/router';
import { getServerSession } from "next-auth/next";
import { signIn, getProviders } from "next-auth/react";
import { Button, Checkbox, Form, Input, Typography, notification } from 'antd';

import ClientLayout from "../../layouts/client/index";
import { authOptions } from "../api/auth/[...nextauth]";

export async function getServerSideProps(context) {

    const session = await getServerSession(context.req, context.res, authOptions);

    /**
     * Redirect back to admin if user
     * is already logged in
     */
    if (session) {
        return { redirect: { destination: "/admin" } };
    }

    const providers = await getProviders();

    return {
        props: { 
            providers: providers ?? [] 
        },
    };
};

export default function SignIn({ providers }) {

    const router = useRouter();
    const { Title } = Typography;

    const onFinish = (values) => {

        /**
         * Sign In by Next Auth
         */
        signIn("credentials", { ...values, redirect: false })
            .then(({ ok, error }) => {
                if (ok) {
                    router.push("/admin/users");
                } else {
                    notification.error({
                        message: 'User Login In',
                        description: 'Email/Password Incorect, Please check!'
                    });
                }
            })
    };

    const btnHandler = (providerId) => signIn(providerId, { callbackUrl: '/admin/users' });
    
    return (
        <div className="site-layout-background">
            <Title>Login</Title>
            <div className='login-form' style={{ margin: '16px 0' }}>

                <Form name="basic" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} style={{ maxWidth: 600, }} initialValues={{ remember: true }}
                    onFinish={onFinish} autoComplete="off">
                    <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]} >
                        <Input />
                    </Form.Item>

                    <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]} >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }} >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }} >

                        <Button type="primary" htmlType="submit"> Submit </Button>

                        {/* {Object.values(providers).filter(({ id }) => id !== 'credentials').map((provider) => (
                            <div key={provider.name}>
                                <Button onClick={() => btnHandler(provider.id)}>Sign in with {provider.name}</Button>
                            </div>
                        ))} */}

                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

/**
 * To change the layout of the page 
 * call the below function
 */
SignIn.getLayout = function getLayout(page) {
    return (
        <ClientLayout>
            {page}
        </ClientLayout>
    )
};