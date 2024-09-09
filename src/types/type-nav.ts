import { ReactNode } from "react";

// Base interface for all menu items
interface IBaseMenuItem {
    title: string;
    path: string;
    icon: ReactNode;
}

// Interface for items without submenu
interface ISimpleMenuItem extends IBaseMenuItem {
    submenu: false;
}

// Interface for items with submenu
interface ISubmenuItem extends IBaseMenuItem {
    submenu: true;
    subMenuItems: IBaseMenuItem[];
}

// Union type for all possible menu items
export type ISideNavItem = ISimpleMenuItem | ISubmenuItem;

// Interface for a group of menu items
export interface ISideNavItemGroup {
    title: string;
    menuList: ISideNavItem[];
}

// Type for the entire sidebar structure
export type SidebarStructure = ISideNavItemGroup[];
