import Layout from "../layouts/admin";
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps: { session, ...pageProps } }) {

    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

    return (
        <SessionProvider>
            {getLayout(<Component {...pageProps} />)}
        </SessionProvider>
    );
}
