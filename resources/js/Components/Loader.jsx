import { FaSpinner } from "react-icons/fa6";

export default function Loader() {
    return (
        <div className="w-full h-[500px] flex justify-center items-center">
            {" "}
            <FaSpinner size={"2rem"} color="blue" className="animate-spin" />
        </div>
    );
}
