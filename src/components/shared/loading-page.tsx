import { ClipLoader } from "react-spinners";

const LoadingPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <ClipLoader
                color="#3498db"
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
            <span className="mt-4 text-xl font-semibold">Đang tải...</span>
        </div>
    );
};

export default LoadingPage;
