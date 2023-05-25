
import { signIn } from "next-auth/react";
import ClientLayout from "../layouts/client/index";

export default function Login() {

    return (
        <>
            Not signed in <br />
            <button onClick={signIn}>Sign in</button>
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
