import { ROUTES } from "@/constants/routes";
import { ISideNavItemGroup } from "@/types/type-nav";

import {
    ChartBarStacked,
    ChartNoAxesCombined,
    Home,
    Kanban,
    LayoutDashboard,
    Settings,
    UserRoundCog,
} from "lucide-react";

export const SIDEBAR_ITEM: ISideNavItemGroup[] = [
    {
        title: "Dashboard",
        menuList: [
            {
                title: "Dashboard",
                path: ROUTES.HOME,
                icon: <LayoutDashboard className="size-4" />,
                submenu: false,
            },
        ],
    },
    {
        title: "Management",
        menuList: [
            {
                title: "Products",
                path: "",
                icon: <Kanban className="size-4" />,
                submenu: true,
                subMenuItems: [
                    {
                        title: "All",
                        path: "",
                        icon: <Home className="size-4" />,
                    },
                    {
                        title: "New",
                        path: "",
                        icon: <Home className="size-4" />,
                    },
                ],
            },
            {
                title: "Users",
                path: "",
                icon: <UserRoundCog className="size-4" />,
                submenu: false,
            },
            {
                title: "Categories",
                path: "",
                icon: <ChartBarStacked className="size-4" />,
                submenu: false,
            },
        ],
    },
    {
        title: "Other",
        menuList: [
            {
                title: "Analysis",
                path: "",
                icon: <ChartNoAxesCombined className="size-4" />,
                submenu: false,
            },
            {
                title: "Settings",
                path: "",
                icon: <Settings className="size-4" />,
                submenu: false,
            },
        ],
    },
];
