"use client"; // This must be a Client Component
import { useRouter } from "next/navigation";

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
    const router = useRouter();

    const err = JSON.parse(error.message);
    const statusCode = err.status;
    let errMsg = err.detail;

    const handleClick = () => {
        if (statusCode === 404) {
            router.push("/");
        } else if (statusCode === 429) {
            errMsg = "You've refreshed the page too fast, please wait before trying again."
        } else {
            window.location.reload();
        }
    };

    return (
        <div className="flex h-screen items-center justify-center flex-col">
            <h1 className="text-red-500 text-2xl font-bold">Something went wrong!</h1>
            <p className="text-gray-500">{errMsg}</p>
            <button
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
                onClick={handleClick} // Trigger page refresh on click
            >
                Retry
            </button>
        </div>
    );
}
