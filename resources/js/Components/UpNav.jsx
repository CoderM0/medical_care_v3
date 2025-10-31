import { Link } from "@inertiajs/react";

export default function UpNav({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                "flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 rounded-lg px-4 py-2 font-medium " +
                (active
                    ? "text-white bg-blue-600 shadow-md font-semibold"
                    : "text-blue-700 hover:text-blue-800 hover:bg-blue-50 border border-transparent hover:border-blue-200") +
                " " +
                className
            }
        >
            {children}
        </Link>
    );
}
