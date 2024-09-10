import { ModeToggle, UserNav } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSidebarToggle } from "@/stores/use-sidebar-toggle";
import { Menu } from "lucide-react";

export const Header = () => {
    const { invokeToggleCollapse, toggleCollapse } = useSidebarToggle();
    const handleSideBarToggle = () => {
        invokeToggleCollapse();
    };

    return (
        <header
            className={cn(
                "fixed bg-sidebar w-full z-[1000] px-4 shadow-sm shadow-slate-500/40",
                toggleCollapse ? "sm:pl-[18rem]" : "sm:pl-[5.6rem]"
            )}
        >
            <div className="flex items-center justify-between h-16">
                <Button
                    onClick={handleSideBarToggle}
                    size={"icon"}
                    variant={"outline"}
                    className="order-2 bg-sidebar-muted text-sidebar-muted-foreground h-[30px] ease-in-out flex items-center justify-center"
                >
                    <Menu />
                </Button>
                <div className="flex items-center justify-between sm:order-2 order-1">
                    <div className="p-2">
                        <ModeToggle />
                    </div>
                    <div className="h-10 w-10 rounded-full bg-sidebar-muted flex items-center justify-center text-center">
                        <UserNav />
                    </div>
                </div>
            </div>
        </header>
    );
};
