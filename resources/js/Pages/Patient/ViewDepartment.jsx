import BackBtn from "@/Components/BackBtn";
import PatientLayout from "@/Layouts/PatientLayout";
import { Link } from "@inertiajs/react";
import { FaCircleInfo, FaRegAddressBook, FaUserDoctor } from "react-icons/fa6";

export default function ViewDepartment({
    department_doctors,
    patient,
    depdesc,
}) {
    console.log(department_doctors);
    return (
        <PatientLayout patient={patient}>
            <div className="py-6">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex gap-2 items-center">
                        <FaCircleInfo className="text-blue-600 text-lg" />
                        <p className="text-xl font-bold text-blue-800">
                            حول القسم
                        </p>
                    </div>
                    <BackBtn />
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
                    <p className="text-gray-700 leading-relaxed">{depdesc}</p>
                </div>

                {department_doctors.length > 0 ? (
                    <div>
                        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-lg mb-6">
                            <h2 className="text-xl font-bold">
                                أطباء قسم{" "}
                                {department_doctors[0].department.title}
                            </h2>
                        </div>

                        <div className="grid gap-4">
                            {department_doctors.map((emp, index) => {
                                return (
                                    <div
                                        className="bg-white border border-blue-100 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300"
                                        key={emp.id}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-3 flex-1">
                                                <span className="text-blue-600 font-bold text-lg w-6">
                                                    {index + 1}
                                                </span>
                                                <img
                                                    className="w-14 h-14 rounded-full object-cover border-2 border-blue-200"
                                                    src={`/storage/${emp.avatar}`}
                                                    alt="صورة الطبيب"
                                                />
                                                <div className="flex-1">
                                                    <h3 className="text-lg font-bold text-blue-900">
                                                        {emp.name}
                                                    </h3>
                                                    <p className="text-blue-600 font-medium">
                                                        {emp.specialty.title}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <Link
                                                    href={route(
                                                        "patient.view_doc",
                                                        emp.id
                                                    )}
                                                    className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all duration-200 font-medium"
                                                >
                                                    <FaUserDoctor />
                                                    <span>عرض</span>
                                                </Link>

                                                <Link
                                                    href={route(
                                                        "patient.appointment.index",
                                                        emp.doctor.id
                                                    )}
                                                    className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-all duration-200 font-medium"
                                                >
                                                    <FaRegAddressBook />
                                                    <span>حجز موعد</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <div className="text-gray-400 text-6xl mb-4">👨‍⚕️</div>
                        <p className="text-gray-500 text-xl font-bold">
                            لا يوجد أطباء في هذا القسم بعد
                        </p>
                    </div>
                )}
            </div>
        </PatientLayout>
    );
}
