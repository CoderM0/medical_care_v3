import PatientLayout from "@/Layouts/PatientLayout";
import { Link } from "@inertiajs/react";
import { FaUserDoctor } from "react-icons/fa6";

export default function ShowPatientAppointments({ patient, appointments }) {
    const viewtime = (datetime) => {
        const date = new Date(datetime);
        let hours = date.getUTCHours().toString().padStart(2, "0");
        const minutes = date.getUTCMinutes().toString().padStart(2, "0");
        const ampm = hours >= 12 ? "مساءا" : "صباحا";

        hours = hours % 12;
        hours = hours ? hours : 12;
        return `${hours}:${minutes} ${ampm}`;
    };
    return (
        <PatientLayout patient={patient}>
            {appointments.length == 0 ? (
                <p className="text-center my-6 text-red-600">
                    {" ليس لديك حجوزات اليوم"}
                </p>
            ) : (
                <div className="overflow-hidden bg-white  shadow-sm sm:rounded-lg dark:bg-gray-800 w-10/12 mx-auto">
                    <ul>
                        {appointments.map((appiontment) => {
                            return (
                                <li
                                    key={appiontment.id}
                                    className="flex items-center gap-5 py-4 px-6 my-5 border rounded-md"
                                >
                                    <img
                                        className="w-12 h-12 rounded-full object-cover mr-4"
                                        src={`/storage/${appiontment.doctor.employee.avatar}`}
                                        alt="User avatar"
                                    />
                                    <div className="flex-1">
                                        <h3 className="text-lg font-medium text-gray-800">
                                            {appiontment.doctor.employee.name}
                                        </h3>
                                        <p className="text-gray-600 text-base">
                                            <span className="text-green-700 font-bold uppercase">
                                                {appiontment.date}
                                            </span>{" "}
                                            - {viewtime(appiontment.time)}{" "}
                                        </p>
                                    </div>

                                    <div className="w-[30%] flex justify-between">
                                        <Link
                                            href={route(
                                                "patient.view_doc",
                                                appiontment.doctor.employee.id
                                            )}
                                            className="flex items-center gap-3  border border-green-500 bg-green-500 text-white rounded-md px-2 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
                                        >
                                            عرض الملف الشخصي <FaUserDoctor />
                                        </Link>
                                        <Link
                                            href={route(
                                                "patient.appointment.cancel",
                                                appiontment.id
                                            )}
                                            method="DELETE"
                                            className="flex items-center gap-3  border border-red-500 bg-red-500 text-white rounded-md px-2 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
                                        >
                                            الغاء الموعد
                                            <FaUserDoctor />
                                        </Link>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </PatientLayout>
    );
}
