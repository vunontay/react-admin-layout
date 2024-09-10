import { ClipLoader } from "react-spinners";

export const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <ClipLoader
                color="#3498db"
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
};
