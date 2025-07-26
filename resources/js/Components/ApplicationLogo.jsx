import { Link } from "@inertiajs/react";
import { FaHandHoldingHeart } from "react-icons/fa6";

export default function ApplicationLogo(props) {
    return (
        <Link href={"/"}>
            <FaHandHoldingHeart className={`w-14 h-14 ${props.className}`} />{" "}
        </Link>
    );
}
