import { Link } from "@inertiajs/react";

export default function NavLink({
    upactive = false,
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                "inline-flex items-center  px-1   font-medium leading-5 rounded-xl transition duration-150 ease-in-out focus:outline-none " +
                (upactive ? " text-white " : "text-gray-100 ") +
                (active
                    ? " text-white  pr-2   bg-gradient-to-tl from-indigo-900 to-indigo-600 font-bold"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 focus:border-gray-300 focus:text-gray-700 ") +
                className
            }
        >
            {children}
        </Link>
    );
}
