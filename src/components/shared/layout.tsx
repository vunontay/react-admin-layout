import { Outlet } from "react-router-dom";
import { Header, PageWrapper, Sidebar } from "@/components/shared";

export const MainLayout = () => {
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
