import { Link } from "@inertiajs/react";
import { FaHandHoldingHeart } from "react-icons/fa6";

export default function ApplicationLogo(props) {
    return (
        <Link href={"/"}>
            <FaHandHoldingHeart className={`w-16 h-16 ${props.className}`} />{" "}
        </Link>
    );
}
