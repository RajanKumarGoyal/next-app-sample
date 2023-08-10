
import ClientLayout from "../layouts/client/index";

export default function Home() {

    return (
        <>
            <div style={{ padding: 24, minHeight: 360 }}>
                Home Page
            </div>
        </>
    );
};

/**
 * To change the layout of the page 
 * call the below function
 */
Home.getLayout = function getLayout(page) {
    return (
        <ClientLayout>
            {page}
        </ClientLayout>
    )
};

