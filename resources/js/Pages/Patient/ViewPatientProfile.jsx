import BackBtn from "@/Components/BackBtn";
import PatientLayout from "@/Layouts/PatientLayout";
import { Link } from "@inertiajs/react";

export default function ViewPatientProfile({ patient }) {
    console.log(patient);

    return (
        <PatientLayout patient={patient}>
            <div className="py-6">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h1 className="text-2xl font-bold text-blue-800">
                                الملف الشخصي
                            </h1>
                            <p className="text-gray-600 mt-1">
                                معلوماتك الشخصية والطبية
                            </p>
                        </div>
                        <BackBtn />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                        <div className="lg:col-span-1">
                            <div className="bg-white border border-blue-100 rounded-xl p-6 shadow-lg text-center">
                                <div className="mb-4">
                                    <img
                                        className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-blue-200"
                                        src={`/storage/${patient.avatar}`}
                                        alt="صورة المريض"
                                    />
                                </div>
                                <h1 className="text-xl font-bold text-blue-800 mb-2">
                                    {patient.name}
                                </h1>

                                <div className="space-y-3 mt-4">
                                    <div className="flex justify-between items-center bg-blue-50 rounded-lg p-3">
                                        <span className="text-blue-700 font-medium">
                                            الحالة
                                        </span>
                                        <span
                                            className={`px-3 py-1 rounded-full text-sm font-bold ${
                                                patient.active
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-red-100 text-red-700"
                                            }`}
                                        >
                                            {patient.active ? "نشط" : "غير نشط"}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center bg-blue-50 rounded-lg p-3">
                                        <span className="text-blue-700 font-medium">
                                            انضم بتاريخ
                                        </span>
                                        <span className="text-gray-600 text-sm">
                                            {new Date(
                                                patient.created_at
                                            ).toLocaleDateString("ar-EG")}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-3">
                            <div className="bg-white border border-blue-100 rounded-xl p-6 shadow-lg">
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="w-1 h-6 bg-blue-500 rounded-full"></div>
                                    <h2 className="text-xl font-bold text-blue-800">
                                        المعلومات الشخصية
                                    </h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-blue-50 rounded-lg p-4">
                                        <div className="text-blue-700 font-medium mb-2">
                                            الاسم الكامل
                                        </div>
                                        <div className="text-gray-800 font-bold text-lg">
                                            {patient.name}
                                        </div>
                                    </div>

                                    <div className="bg-blue-50 rounded-lg p-4">
                                        <div className="text-blue-700 font-medium mb-2">
                                            الجنس
                                        </div>
                                        <div className="text-gray-800 font-bold text-lg">
                                            {patient.gender}
                                        </div>
                                    </div>

                                    <div className="bg-blue-50 rounded-lg p-4">
                                        <div className="text-blue-700 font-medium mb-2">
                                            العمر
                                        </div>
                                        <div className="text-gray-800 font-bold text-lg">
                                            {patient.age} سنة
                                        </div>
                                    </div>

                                    <div className="bg-blue-50 rounded-lg p-4">
                                        <div className="text-blue-700 font-medium mb-2">
                                            زمرة الدم
                                        </div>
                                        <div className="text-gray-800 font-bold text-lg">
                                            {patient.blood_type}
                                        </div>
                                    </div>

                                    <div className="bg-blue-50 rounded-lg p-4 md:col-span-2">
                                        <div className="text-blue-700 font-medium mb-2">
                                            البريد الإلكتروني
                                        </div>
                                        <a
                                            href={`mailto:${patient.user.email}`}
                                            className="text-blue-600 hover:text-blue-800 font-bold text-lg"
                                        >
                                            {patient.user.email}
                                        </a>
                                    </div>

                                    {patient.additional_case && (
                                        <div className="bg-blue-50 rounded-lg p-4 md:col-span-2">
                                            <div className="text-blue-700 font-medium mb-2">
                                                الحساسية والملاحظات الطبية
                                            </div>
                                            <div className="text-gray-800 leading-relaxed">
                                                {patient.additional_case}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-blue-100">
                                    <Link
                                        href={route("patient.profile.edit")}
                                        className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-center py-3 px-4 rounded-lg font-bold transition-all duration-200"
                                    >
                                        تعديل المعلومات الطبية
                                    </Link>
                                    <Link
                                        href={route("profile.edit")}
                                        className="flex-1 bg-green-500 hover:bg-green-600 text-white text-center py-3 px-4 rounded-lg font-bold transition-all duration-200"
                                    >
                                        تعديل معلومات الحساب
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PatientLayout>
    );
}
