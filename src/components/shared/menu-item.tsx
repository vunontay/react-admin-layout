import { useSidebarToggle } from "@/stores/use-sidebar-toggle";
import { ISideNavItem } from "@/types/type-nav";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface MenuItemProps {
    item: ISideNavItem;
}

const MenuItem = ({ item }: MenuItemProps) => {
    const { toggleCollapse } = useSidebarToggle();
    const [subMenuOpen, setSubMenuOpen] = useState<boolean>(false);
    const location = useLocation();

    const commonLinkClasses =
        "flex items-center min-h-[40px] h-full py-2 px-4 rounded-md transition-all duration-300 ease-in-out text-xs font-medium capitalize";
    const commonTextClasses =
        "ml-4 leading-6 text-xs whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out text-xs font-medium capitalize";
    const inactiveClasses =
        "text-sidebar-foreground hover:text-sidebar-muted-foreground hover:bg-sidebar-muted";
    const activeClasses = "text-sidebar-muted-foreground bg-sidebar-muted";

    const getLinkClasses = (path: string) =>
        `${commonLinkClasses} ${
            isActive(path) ? activeClasses : inactiveClasses
        }`;

    const isActive = (path: string) => location.pathname === path;

    return item.submenu ? (
        <div className="rounded-md min-w-[10px]">
            <Link
                onClick={() => setSubMenuOpen(!subMenuOpen)}
                to=""
                className={getLinkClasses(item.path)}
            >
                {item.icon}
                {toggleCollapse && (
                    <span className={commonTextClasses}>{item.title}</span>
                )}
                {toggleCollapse && (
                    <ChevronRight
                        className={`ml-auto stroke-2 size-4 transition-transform duration-300 ease-in-out ${
                            subMenuOpen ? "transform rotate-90" : ""
                        }`}
                    />
                )}
            </Link>
            {subMenuOpen && toggleCollapse && (
                <div className="bg-sidebar border-l-4">
                    <div className="grid gap-y-2 px-6 py-2 leading-5">
                        {item.subMenuItems.map((subItem, index) => (
                            <Link
                                key={index}
                                to={subItem.path}
                                className={getLinkClasses(subItem.path)}
                            >
                                <span>{subItem.title}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    ) : (
        <Link className={getLinkClasses(item.path)} to={item.path}>
            {item.icon}
            {toggleCollapse && (
                <span className={commonTextClasses}>{item.title}</span>
            )}
        </Link>
    );
};

export default MenuItem;
