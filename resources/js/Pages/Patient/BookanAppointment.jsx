import BackBtn from "@/Components/BackBtn";
import PatientLayout from "@/Layouts/PatientLayout";
import { useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa6";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { MdDeveloperBoardOff } from "react-icons/md";

export default function BookanAppointment({
    availbaleSlotes,
    doctor,
    patient,
}) {
    const [openModal, setOpenModal] = useState(false);
    const { data, setData, post, processing } = useForm();
    useEffect(() => {
        setData("price", 20);
        setData("employee_id", doctor.employee.id);
    }, []);
    const add_reservation = () => {
        if (Object.keys(data).length == 5) {
            post(route("patient.appointment.reserve"));
        }
    };

    return (
        <PatientLayout patient={patient}>
            <div className="">
                {/*  */}

                {openModal ? (
                    <div className="absolute top-0 right-[0%] w-full bg-black/30 h-screen  overflow-hidden">
                        <div class="w-full max-w-lg mx-auto p-8">
                            <div class="bg-white rounded-lg shadow-lg p-6">
                                <div className="flex justify-between">
                                    <h2 class="text-lg font-medium mb-6">
                                        معلومات الحجز
                                    </h2>
                                    <button
                                        onClick={() => {
                                            setOpenModal(false);
                                            setData("reservation", "");
                                        }}
                                    >
                                        <IoMdCloseCircleOutline
                                            color="red"
                                            size={"1.7rem"}
                                        />
                                    </button>
                                </div>

                                <div>
                                    <div class="">
                                        <div class="">
                                            <label
                                                for="card-number"
                                                class="block text-sm font-medium text-gray-700 mb-2"
                                            >
                                                الاعراض الأولية{" "}
                                            </label>
                                            <input
                                                type="text"
                                                name="details"
                                                onChange={(e) =>
                                                    setData(
                                                        "details",
                                                        e.target.value
                                                    )
                                                }
                                                id="details"
                                                placeholder="حرارة ..."
                                                class="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                                            />
                                        </div>
                                        <p className="border-t my-2"></p>
                                        <p className="my-2 font-bold text-center">
                                            معلومات الدفع
                                        </p>
                                        <div class="">
                                            <label
                                                for="card-number"
                                                class="block text-sm font-medium text-gray-700 mb-2"
                                            >
                                                رقم الحساب
                                            </label>
                                            <input
                                                type="number"
                                                name="card-number"
                                                onChange={(e) =>
                                                    setData(
                                                        "card_num",
                                                        e.target.value
                                                    )
                                                }
                                                id="card-number"
                                                placeholder="0000 0000 0000 0000"
                                                class="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                                            />
                                        </div>

                                        <div class="w-full my-2 sm:col-span-1">
                                            <label
                                                for="cvv"
                                                class="block text-sm font-medium text-gray-700 mb-2"
                                            >
                                                مبلغ الدفع
                                            </label>
                                            <p class="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500">
                                                20$
                                            </p>
                                        </div>
                                    </div>
                                    <div class="mt-8">
                                        <button
                                            onClick={add_reservation}
                                            type="submit"
                                            class="w-full flex justify-center items-center bg-green-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg focus:outline-none"
                                        >
                                            {processing ? (
                                                <FaSpinner
                                                    size={"1rem"}
                                                    color="white"
                                                    className="animate-spin"
                                                />
                                            ) : (
                                                <p> دفع</p>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        {" "}
                        <div className="bg-gray-50 shadow-sm flex justify-between items-center px-16">
                            <h1 className="py-5 font-bold">
                                المواعيد المتاحة لدى الطبيب{" "}
                                {doctor.employee.name}
                            </h1>
                            <BackBtn />
                        </div>
                        <div className="flex justify-between w-10/12 mx-auto mt-5 border p-5 rounded-lg">
                            {availbaleSlotes.map((slot) => {
                                return (
                                    <div key={slot.id} className="">
                                        <p className="text-center">
                                            {slot.date}
                                        </p>
                                        <p className="my-2 font-bold text-center">
                                            {slot.day_name}
                                        </p>
                                        <div className="flex flex-col">
                                            {!slot.off ? (
                                                Object.values(
                                                    slot.available_hourse
                                                ).map((houre) => {
                                                    return (
                                                        <div
                                                            key={houre}
                                                            className="flex gap-2 items-center"
                                                        >
                                                            <input
                                                                type="radio"
                                                                id={`${
                                                                    slot.full_date
                                                                }-${houre
                                                                    .split(":")
                                                                    .join("")}`}
                                                                name="shitstuff"
                                                                className="hidden"
                                                            />
                                                            <label
                                                                onClick={() =>
                                                                    setData(
                                                                        "reservation",
                                                                        {
                                                                            date: slot.full_date,
                                                                            time: houre,
                                                                            doctor_id:
                                                                                doctor.id,
                                                                        }
                                                                    )
                                                                }
                                                                htmlFor={`${
                                                                    slot.full_date
                                                                }-${houre
                                                                    .split(":")
                                                                    .join("")}`}
                                                                className={` inline-block px-7 py-1.5 overflow-hidden text-sm font-semibold transition-transform rounded-full cursor-pointer bg-white text-green-500 hover:bg-green-400/50 text-green-700/70  hover:text-white p-1 my-1
                                                          `}
                                                            >
                                                                {houre}
                                                            </label>
                                                        </div>
                                                    );
                                                })
                                            ) : (
                                                <p className="flex flex-col items-center font-bold text-red-500">
                                                    عطلة{" "}
                                                    <MdDeveloperBoardOff
                                                        size={"2.5rem"}
                                                        color="red"
                                                    />{" "}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}{" "}
                        </div>
                        <button
                            className="block w-1/3 mx-auto my-5 text-center bg-green-700 p-2 px-10 rounded-xl text-white font-bold"
                            onClick={() =>
                                data.reservation && setOpenModal(true)
                            }
                        >
                            حجز
                        </button>{" "}
                    </>
                )}

                {/*  */}
            </div>
        </PatientLayout>
    );
}
