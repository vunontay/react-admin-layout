import { cn } from "@/lib/utils";
import { useSidebarToggle } from "@/stores/use-sidebar-toggle";

interface IPageWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const PageWrapper = ({ children }: IPageWrapperProps) => {
    const { toggleCollapse } = useSidebarToggle();

    return (
        <div
            className={cn(
                "bg-sidebar flex-grow text-sidebar-foreground p-2 mt-16",
                toggleCollapse ? "sm:pl-[18rem]" : "sm:pl-[5.6rem]"
            )}
        >
            {children}
        </div>
    );
};

export default PageWrapper;
