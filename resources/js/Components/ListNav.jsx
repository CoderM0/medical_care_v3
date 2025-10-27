import { Link } from "@inertiajs/react";

export default function ListNav({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                "px-4 mx-1 flex items-center gap-2 py-2 hover:bg-blue-100 rounded-md hover:text-blue-900  " +
                (active
                    ? " bg-blue-50 hover:bg-blue-50 rounded-md text-blue-900"
                    : "") +
                className
            }
        >
            {children}
        </Link>
    );
}
