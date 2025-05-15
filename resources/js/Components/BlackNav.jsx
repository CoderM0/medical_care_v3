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
                "inline-flex items-center  px-1   font-medium leading-5  transition duration-150 ease-in-out focus:outline-none " +
                (active
                    ? " text-white border-b border-b-white pr-2  px-2 font-bold"
                    : "border-transparent text-gray-300 hover:border-gray-300 hover:text-white focus:border-gray-300 focus:text-white ") +
                className
            }
        >
            {children}
        </Link>
    );
}
