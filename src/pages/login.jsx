
import { signIn } from "next-auth/react";
import ClientLayout from "../layouts/client/index";

export default function Login() {

    return (
        <>
            Not signed in <br />
            <button onClick={() => signIn('github', { callbackUrl: '/admin/users' })}>Sign in with GitHub</button>
            <br />
            {/* 'credentials', { callbackUrl: '/admin' } */}
            <button onClick={() => signIn()}>Sign in with Credentials</button>
        </>
    );
};

/**
 * To change the layout of the page 
 * call the below function
 */
Login.getLayout = function getLayout(page) {
    return (
        <ClientLayout>
            {page}
        </ClientLayout>
    )
};
