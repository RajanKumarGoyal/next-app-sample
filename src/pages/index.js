
import { Breadcrumb } from 'antd';

export default function Home() {

    return (
        <>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, minHeight: 360 }}>
                Dashboard
            </div>
        </>
    );
};

/**
 * To change the layout of the page 
 * call the below function
 */
// import Layout from "../layouts/admin/index-2";
// Home.getLayout = function getLayout(page) {
//     return (
//         <Layout>
//             {page}
//         </Layout>
//     )
// };
