import { lazy } from "react";
import withSuspense from "@/hocs/with-suspense";
import LoadingPage from "@/components/shared/loading-page";

const LoadingComponent = () => <LoadingPage />;

export const AdminPage = withSuspense(
    lazy(() => import("@/pages/AdminPage")),
    <LoadingComponent />
);

export const LoginPage = withSuspense(
    lazy(() => import("@/pages/Auth/LoginPage")),
    <LoadingComponent />
);
