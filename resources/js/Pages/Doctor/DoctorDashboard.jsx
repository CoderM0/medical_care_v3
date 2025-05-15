import Loader from "@/Components/Loader";
import DoctorLayout from "@/Layouts/DoctorLayout";
import { Link, useForm } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";
import { AiOutlineFileSearch } from "react-icons/ai";
import { FaCalendarCheck } from "react-icons/fa6";
import { ImLab } from "react-icons/im";
import { MdLocalPharmacy } from "react-icons/md";

export default function DoctorDashboard({ employee, appointments }) {
    const serachRef = useRef();
    const { put, processing } = useForm();
    const [filtredAppointments, setFiltredAppointments] =
        useState(appointments);
    const viewtime = (datetime) => {
        const date = new Date(datetime);
        let hours = date.getUTCHours().toString().padStart(2, "0");
        const minutes = date.getUTCMinutes().toString().padStart(2, "0");
        const ampm = hours >= 12 ? "مساءاَ" : "صباحاَ";

        // Convert hours to 12-hour format
        hours = hours % 12;
        hours = hours ? hours : 12; // Handle midnight (0) as 12
        return `${hours}:${minutes} ${ampm}`;
    };
    const searchfunc = (word) => {
        if (word == "") {
            setFiltredAppointments(appointments);
        } else {
            let newapp = appointments.filter((appoint) =>
                appoint.patient.name.includes(word)
            );
            setFiltredAppointments(newapp);
        }
    };
    useEffect(() => {
        setFiltredAppointments(appointments);
    }, [appointments.length]);
    const end_app = (id) => {
        put(route("doctor.end_appointment", id), {
            onSuccess: () => setFiltredAppointments(appointments),
        });
    };
    return (
        <DoctorLayout employee={employee}>
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800 ">
                        {/*  */}
                        <div class="relative w-1/2 mx-auto mb-6">
                            <input
                                class="appearance-none border-2 pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-gray-400 focus:border-gray-400 "
                                id="username"
                                type="text"
                                ref={serachRef}
                                onChange={(e) => searchfunc(e.target.value)}
                                placeholder="ابحث بالاسم..."
                            />
                            <div
                                class="absolute left-4 inset-y-0 flex items-center cursor-pointer"
                                onClick={() => {
                                    serachRef.current.value = "";
                                    searchfunc("");
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="-ml-1 mr-3 h-5 w-5 text-gray-400 hover:text-gray-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </div>
                        </div>
                        {/*  */}
                        {processing ? (
                            <Loader />
                        ) : (
                            <ul>
                                {appointments.length == 0 ? (
                                    <p className="text-2xl my-5 font-bold text-center">
                                        لا يوجد حجوزات اليوم
                                    </p>
                                ) : filtredAppointments.length == 0 ? (
                                    <p className="text-center my-2">
                                        لم يتم العثور على مرضى بهذا الاسم
                                    </p>
                                ) : (
                                    filtredAppointments.map((appiontment) => {
                                        return (
                                            <li
                                                key={appiontment.id}
                                                className="flex flex-col  py-4 px-6 border rounded-lg my-2"
                                            >
                                                <div className="flex">
                                                    <img
                                                        className="w-12 h-12 mx-2 rounded-full object-cover mr-4"
                                                        src={`/storage/${appiontment.patient.avatar}`}
                                                        alt="User avatar"
                                                    />
                                                    <div className="flex-1">
                                                        {" "}
                                                        <h3 className="text-lg font-medium text-gray-800">
                                                            {
                                                                appiontment
                                                                    .patient
                                                                    .name
                                                            }
                                                        </h3>
                                                        <p className="text-gray-600 text-base">
                                                            <span className="text-green-700 font-bold uppercase">
                                                                {
                                                                    appiontment.date
                                                                }
                                                            </span>{" "}
                                                            -{" "}
                                                            {viewtime(
                                                                appiontment.time
                                                            )}{" "}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center mx-3 gap-3 my-3">
                                                    <p className="font-bold">
                                                        الاعراض الاولية :
                                                    </p>
                                                    <p>{appiontment.details}</p>
                                                </div>
                                                <div className="w-full flex justify-around items-center">
                                                    <Link
                                                        href={route(
                                                            "doctor.show_medical_record",
                                                            appiontment.patient_id
                                                        )}
                                                        className="flex items-center gap-3  border border-green-500 bg-green-500 text-white rounded-md px-2 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
                                                    >
                                                        عرض السجل الطبي{" "}
                                                        <AiOutlineFileSearch />
                                                    </Link>
                                                    <Link
                                                        href={route(
                                                            "doctor.add_lab_test",
                                                            appiontment.patient_id
                                                        )}
                                                        className="border flex gap-3 items-center border-blue-500 bg-blue-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-blue-600 focus:outline-none focus:shadow-outline"
                                                    >
                                                        طلب تحليل مخبري{" "}
                                                        <ImLab />
                                                    </Link>
                                                    <Link
                                                        href={route(
                                                            "doctor.add_description",
                                                            appiontment.patient_id
                                                        )}
                                                        className="border flex gap-3 items-center border-yellow-500 bg-yellow-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-yellow-600 focus:outline-none focus:shadow-outline"
                                                    >
                                                        صرف وصفة
                                                        <MdLocalPharmacy />
                                                    </Link>
                                                    <button
                                                        onClick={() =>
                                                            end_app(
                                                                appiontment.id
                                                            )
                                                        }
                                                        className="border flex gap-3 items-center border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
                                                    >
                                                        انهاء
                                                        <FaCalendarCheck />
                                                    </button>
                                                </div>
                                            </li>
                                        );
                                    })
                                )}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </DoctorLayout>
    );
}
