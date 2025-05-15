import NavLink from "./NavLink";

export default function ListItem({ children, ...props }) {
    return (
        <NavLink
            {...props}
            className=" w-[100%]  px-2 py-2  active:text-green-600 flex items-center gap-2"
        >
            {children}
        </NavLink>
    );
}
