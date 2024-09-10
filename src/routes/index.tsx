// src/router/index.tsx
import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
import { AdminPage, LoginPage } from "@/routes/lazy-components";
import { MainLayout } from "@/components/shared";
import NotFoundPage from "@/pages/NotFoundPage";

export const router = createBrowserRouter([
    {
        path: ROUTES.HOME,
        element: <MainLayout />,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: ROUTES.HOME,
                element: <AdminPage />,
            },
        ],
    },
    {
        path: ROUTES.AUTH.LOGIN,
        element: <LoginPage />,
        errorElement: <NotFoundPage />,
    },
]);
