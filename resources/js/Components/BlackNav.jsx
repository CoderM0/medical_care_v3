import { Link } from "@inertiajs/react";

export default function BlackNav({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                "flex items-center w-full transition-all duration-300 ease-in-out focus:outline-none " +
                (active
                    ? "text-blue-600 bg-blue-50 border-r-2 border-blue-500 font-semibold"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50 hover:border-r-2 hover:border-blue-300") +
                " " +
                className
            }
        >
            {children}
        </Link>
    );
}
