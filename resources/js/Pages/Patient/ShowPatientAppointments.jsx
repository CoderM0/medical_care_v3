import PatientLayout from "@/Layouts/PatientLayout";
import { Link } from "@inertiajs/react";
import { FaCalendarXmark, FaUserDoctor } from "react-icons/fa6";

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
            <div className="py-6">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-blue-800 mb-2">
                        مواعيدي
                    </h1>
                    <p className="text-gray-600 text-sm">
                        قائمة المواعيد المحجوزة الخاصة بك
                    </p>
                </div>

                {appointments.length == 0 ? (
                    <div className="text-center py-12">
                        <div className="text-gray-400 text-6xl mb-4">📅</div>
                        <p className="text-gray-500 text-xl font-bold mb-2">
                            ليس لديك حجوزات اليوم
                        </p>
                        <p className="text-gray-400 text-sm">
                            يمكنك حجز موعد جديد من خلال الأقسام المتاحة
                        </p>
                    </div>
                ) : (
                    <div className="max-w-4xl mx-auto">
                        <div className="grid gap-4">
                            {appointments.map((appiontment) => {
                                return (
                                    <div
                                        key={appiontment.id}
                                        className="bg-white border border-blue-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                                    >
                                        <div className="flex items-center gap-4">
                                            <img
                                                className="w-16 h-16 rounded-full object-cover border-2 border-blue-200"
                                                src={`/storage/${appiontment.doctor.employee.avatar}`}
                                                alt="صورة الطبيب"
                                            />
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-blue-900 mb-2">
                                                    {
                                                        appiontment.doctor
                                                            .employee.name
                                                    }
                                                </h3>
                                                <div className="flex items-center gap-4">
                                                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                                                        {appiontment.date}
                                                    </span>
                                                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                                                        {viewtime(
                                                            appiontment.time
                                                        )}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <Link
                                                    href={route(
                                                        "patient.view_doc",
                                                        appiontment.doctor
                                                            .employee.id
                                                    )}
                                                    className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all duration-200 font-medium"
                                                >
                                                    <FaUserDoctor />
                                                    <span>الملف الشخصي</span>
                                                </Link>
                                                <Link
                                                    href={route(
                                                        "patient.appointment.cancel",
                                                        appiontment.id
                                                    )}
                                                    method="DELETE"
                                                    className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-all duration-200 font-medium"
                                                >
                                                    <FaCalendarXmark />
                                                    <span>إلغاء الموعد</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </PatientLayout>
    );
}
