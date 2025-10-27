import AdminLayout from "@/Layouts/AdminLayout";
import { Link } from "@inertiajs/react";

export default function ManagePatients({ patients }) {
    return (
        <AdminLayout>
            {patients.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl border border-gray-200">
                    <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-10 h-10 text-blue-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M12 4.5v15m7.5-7.5h-15"
                            />
                        </svg>
                    </div>
                    <p className="text-xl font-semibold text-gray-600 mb-2">
                        لا يوجد مرضى في الأرشيف حالياً
                    </p>
                    <p className="text-gray-400">
                        سيظهر هنا قائمة المرضى عند إضافتهم للنظام
                    </p>
                </div>
            ) : (
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                    <div className="px-6 py-4 bg-gradient-to-l from-blue-50 to-white border-b border-gray-200">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-gray-800">
                                سجلات المرضى
                            </h3>
                            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                                {patients.length} مريض
                            </span>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600">
                                        المريض
                                    </th>
                                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600">
                                        العمر
                                    </th>
                                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600">
                                        الجنس
                                    </th>
                                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600">
                                        زمرة الدم
                                    </th>
                                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600">
                                        الحالة
                                    </th>
                                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600">
                                        الإجراءات
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-100">
                                {patients.map((patient) => (
                                    <tr
                                        key={patient.id}
                                        className="hover:bg-blue-50 transition-all duration-200 group"
                                    >
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="relative">
                                                    <img
                                                        src={`/storage/${patient.avatar}`}
                                                        alt={patient.name}
                                                        className="w-12 h-12 rounded-xl object-cover border-2 border-white shadow-sm"
                                                    />
                                                    <div
                                                        className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                                                            patient.active
                                                                ? "bg-green-400"
                                                                : "bg-gray-300"
                                                        }`}
                                                    ></div>
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-gray-800">
                                                        {patient.name}
                                                    </p>
                                                    <p className="text-xs text-gray-500 mt-1">
                                                        {patient.user?.email ||
                                                            "—"}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="px-6 py-4">
                                            <span className="text-sm font-medium text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
                                                {patient.age || "—"}
                                            </span>
                                        </td>

                                        <td className="px-6 py-4">
                                            <span className="text-sm text-gray-600">
                                                {patient.gender || "—"}
                                            </span>
                                        </td>

                                        <td className="px-6 py-4">
                                            <span className="text-sm font-medium text-red-600 bg-red-50 px-3 py-1 rounded-full">
                                                {patient.blood_type || "—"}
                                            </span>
                                        </td>

                                        <td className="px-6 py-4">
                                            <span
                                                className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium ${
                                                    patient.active
                                                        ? "bg-green-100 text-green-700"
                                                        : "bg-gray-100 text-gray-600"
                                                }`}
                                            >
                                                <span
                                                    className={`w-2 h-2 rounded-full ${
                                                        patient.active
                                                            ? "bg-green-500"
                                                            : "bg-gray-400"
                                                    }`}
                                                ></span>
                                                {patient.active
                                                    ? "نشط"
                                                    : "غير نشط"}
                                            </span>
                                        </td>

                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <Link
                                                    href={route(
                                                        "admin.delete_patient",
                                                        patient.id
                                                    )}
                                                    method="DELETE"
                                                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-all duration-200 hover:shadow-sm"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className="w-4 h-4"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M6 18L18 6M6 6l12 12"
                                                        />
                                                    </svg>
                                                    حذف
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </AdminLayout>
    );
}
