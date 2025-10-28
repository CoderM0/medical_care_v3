import Loader from "@/Components/Loader";
import DoctorLayout from "@/Layouts/DoctorLayout";
import { Link, useForm } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";
export default function EndedAppointments({ employee, appointments }) {
    const serachRef = useRef();
    const { delete: destroy, processing } = useForm();
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
        destroy(route("doctor.ended_appointment.delete", id), {
            onSuccess: () => setFiltredAppointments(appointments),
        });
    };
    return (
        <DoctorLayout employee={employee}>
            <div className="flex-1 h-[90vh]">
                <div className="bg-white rounded-b-2xl shadow-lg border border-gray-200 h-full">
                    <div className="p-6">
                        <div className="relative mb-6 max-w-md mx-auto">
                            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                                <svg
                                    className="w-5 h-5 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </div>
                            <input
                                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-2xl text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 disabled:bg-gray-100 disabled:text-gray-400"
                                type="text"
                                ref={serachRef}
                                disabled={appointments.length == 0}
                                onChange={(e) => searchfunc(e.target.value)}
                                placeholder="ابحث عن مريض بالاسم..."
                            />
                            {serachRef.current?.value && (
                                <button
                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                    onClick={() => {
                                        serachRef.current.value = "";
                                        searchfunc("");
                                    }}
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            )}
                        </div>

                        {processing ? (
                            <div className="flex justify-center items-center py-12">
                                <Loader />
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {appointments.length == 0 ? (
                                    <div className="text-center py-12">
                                        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <svg
                                                className="w-10 h-10 text-gray-400"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={1.5}
                                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                        </div>
                                        <p className="text-xl font-semibold text-gray-600 mb-2">
                                            لا يوجد مواعيد منتهية بعد
                                        </p>
                                        <p className="text-gray-400">
                                            سيظهر هنا المواعيد المنتهية بعد
                                            إكمال الكشوفات
                                        </p>
                                    </div>
                                ) : filtredAppointments.length == 0 ? (
                                    <div className="text-center py-8">
                                        <p className="text-gray-600 text-lg">
                                            لم يتم العثور على مرضى بهذا الاسم
                                        </p>
                                    </div>
                                ) : (
                                    filtredAppointments.map((appiontment) => (
                                        <div
                                            key={appiontment.id}
                                            className="bg-gradient-to-l from-white to-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                                        >
                                            <div className="flex items-start gap-6">
                                                <div className="flex items-center gap-4 flex-1">
                                                    <div className="relative">
                                                        <img
                                                            className="w-16 h-16 rounded-2xl object-cover border-2 border-white shadow-sm"
                                                            src={`/storage/${appiontment.patient.avatar}`}
                                                            alt={
                                                                appiontment
                                                                    .patient
                                                                    .name
                                                            }
                                                        />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                                            {
                                                                appiontment
                                                                    .patient
                                                                    .name
                                                            }
                                                        </h3>
                                                        <div className="flex items-center gap-4 text-sm text-gray-600">
                                                            <span className="flex items-center gap-1 bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
                                                                <svg
                                                                    className="w-4 h-4"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={
                                                                            2
                                                                        }
                                                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                                    />
                                                                </svg>
                                                                {
                                                                    appiontment.date
                                                                }
                                                            </span>
                                                            <span className="flex items-center gap-1 bg-green-50 text-green-600 px-3 py-1 rounded-full">
                                                                <svg
                                                                    className="w-4 h-4"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={
                                                                            2
                                                                        }
                                                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                                    />
                                                                </svg>
                                                                {viewtime(
                                                                    appiontment.time
                                                                )}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex-1">
                                                    <div className="bg-white rounded-xl border border-gray-200 p-4">
                                                        <div className="flex items-center gap-2 mb-3">
                                                            <svg
                                                                className="w-5 h-5 text-orange-500"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={
                                                                        2
                                                                    }
                                                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                                                />
                                                            </svg>
                                                            <span className="font-semibold text-gray-700">
                                                                الأعراض الأولية
                                                            </span>
                                                        </div>
                                                        <p className="text-gray-600 text-sm leading-relaxed">
                                                            {
                                                                appiontment.details
                                                            }
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="flex flex-col gap-3 min-w-[200px]">
                                                    <Link
                                                        href={route(
                                                            "doctor.show_medical_record",
                                                            appiontment.patient_id
                                                        )}
                                                        className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-xl transition-all duration-300 font-medium shadow-sm hover:shadow-md justify-center text-sm"
                                                    >
                                                        <svg
                                                            className="w-4 h-4"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                            />
                                                        </svg>
                                                        السجل الطبي
                                                    </Link>
                                                    <button
                                                        onClick={() =>
                                                            end_app(
                                                                appiontment.id
                                                            )
                                                        }
                                                        className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-3 rounded-xl transition-all duration-300 font-medium shadow-sm hover:shadow-md justify-center text-sm"
                                                    >
                                                        <svg
                                                            className="w-4 h-4"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                            />
                                                        </svg>
                                                        حذف الموعد
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </DoctorLayout>
    );
}
