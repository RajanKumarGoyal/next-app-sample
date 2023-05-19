import Layout from "../layouts/admin";

export default function App({ Component, pageProps }) {

    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

    return getLayout(<Component {...pageProps} />);
}
