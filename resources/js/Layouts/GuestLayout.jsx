export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0 dark:bg-gray-900">
            <div className=" w-full overflow-hidden bg-white shadow-md  sm:rounded-lg dark:bg-gray-800">
                {children}
            </div>
        </div>
    );
}
