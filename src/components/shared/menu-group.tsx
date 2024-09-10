import { MenuItem } from "@/components/shared";
import { cn } from "@/lib/utils";
import { useSidebarToggle } from "@/stores/use-sidebar-toggle";
import { ISideNavItemGroup } from "@/types/type-nav";

interface IMenuGroupProps {
    menuGroup: ISideNavItemGroup;
}

export const MenuGroup = ({ menuGroup }: IMenuGroupProps) => {
    const { toggleCollapse } = useSidebarToggle();
    return (
        <>
            <h3
                className={cn(
                    "py-4 tracking-[.1rem] font-medium uppercase text-xs text-sidebar-foreground",
                    !toggleCollapse && "text-center"
                )}
            >
                {toggleCollapse ? menuGroup.title : "..."}
            </h3>
            {menuGroup.menuList?.map((item, index) => {
                return <MenuItem key={index} item={item} />;
            })}
        </>
    );
};
