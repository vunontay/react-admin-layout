import { lazy } from "react";
import { Loading } from "@/components/shared";
import withSuspense from "@/hocs/with-suspense";

const LoadingComponent = () => <Loading />;

export const AdminPage = withSuspense(
    lazy(() => import("@/pages/AdminPage")),
    <LoadingComponent />
);

export const LoginPage = withSuspense(
    lazy(() => import("@/pages/Auth/LoginPage")),
    <LoadingComponent />
);
