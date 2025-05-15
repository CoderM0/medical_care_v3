import { FaSpinner } from "react-icons/fa6";
import { MdDoneOutline } from "react-icons/md";
import { TbXboxXFilled } from "react-icons/tb";

export default function OnGoing({
    succ,
    fail,
    fail_text,
    succ_text,
    loading_text,
}) {
    return (
        <div className="absolute top-0 right-0 z-20 w-screen h-screen bg-black/30">
            <div className="w-1/2 mt-40 h-60 flex flex-col gap-5 justify-center items-center mx-auto p-2 rounded-xl bg-white">
                {fail && <TbXboxXFilled size={"2rem"} color="red" />}
                {fail && <p className="text-red-500"> {fail_text}</p>}

                {succ ? (
                    <MdDoneOutline
                        size={"2rem"}
                        color="green"
                        className="animate-bounce"
                    />
                ) : (
                    !fail && (
                        <FaSpinner
                            size={"2rem"}
                            color="darkyellow"
                            className="animate-spin"
                        />
                    )
                )}
                {succ ? (
                    <p className="text-green-500"> {succ_text}</p>
                ) : (
                    !fail && <p className="text-yellow-800"> {loading_text} </p>
                )}
                {/*  */}
            </div>
        </div>
    );
}
