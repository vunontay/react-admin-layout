import { Outlet } from "react-router-dom";
import Sidebar from "@/components/shared/sidebar";
import Header from "@/components/shared/header";
import PageWrapper from "@/components/shared/page-wrapper";

const MainLayout = () => {
    return (
        <>
            <div className="flex min-h-screen">
                <Sidebar />
                <Header />
                <PageWrapper>
                    <Outlet />
                </PageWrapper>
            </div>
        </>
    );
};

export default MainLayout;
