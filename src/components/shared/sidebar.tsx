import { MenuGroup } from "@/components/shared";
import { useSidebarToggle } from "@/stores/use-sidebar-toggle";
import { SIDEBAR_ITEM } from "@/constants/sizebar";
import { cn } from "@/lib/utils";

export const Sidebar = () => {
    const { toggleCollapse } = useSidebarToggle();

    return (
        <aside
            className={cn(
                "sidebar overflow-y-auto overflow-x-hidden fixed z-[1001] bg-sidebar text-gray-500 h-full shadow-lg shadow-gray-900/20 transition-all duration-300 ease-in-out",
                toggleCollapse ? "w-64" : "w-[5rem] left-0",
                "sm:translate-x-0",
                !toggleCollapse && "!-translate-x-full sm:!translate-x-0"
            )}
        >
            <div className="flex relative items-center py-5 px-3.5 overflow-hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    className={cn(
                        "size-10 min-h-fit transition-all duration-300 ease-in-out",
                        toggleCollapse ? "mx-3.5" : "mx-auto"
                    )}
                >
                    <rect width="256" height="256" fill="none"></rect>
                    <line
                        x1="208"
                        y1="128"
                        x2="128"
                        y2="208"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                    ></line>
                    <line
                        x1="192"
                        y1="40"
                        x2="40"
                        y2="192"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="16"
                    ></line>
                </svg>
            </div>
            <nav className="flex flex-col gap-2">
                <div
                    className={cn(
                        "flex flex-col gap-2 px-4 transition-all duration-300",
                        !toggleCollapse && "items-center"
                    )}
                >
                    {SIDEBAR_ITEM.map((item, index) => (
                        <MenuGroup key={index} menuGroup={item} />
                    ))}
                </div>
            </nav>
        </aside>
    );
};
