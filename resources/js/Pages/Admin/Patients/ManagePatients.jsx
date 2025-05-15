import AdminLayout from "@/Layouts/AdminLayout";
import { Link } from "@inertiajs/react";

export default function ManagePatients({ patients }) {
    console.log(patients);
    return (
        <AdminLayout>
            {patients.length == 0 ? (
                <p className="text-2xl my-5 font-bold text-red-500 text-center ">
                    {" "}
                    لا يوجد مرضى في الارشيف حاليا{" "}
                </p>
            ) : (
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th
                                scope="col"
                                className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                الاسم
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                العمر
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                الجنس
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                زمرة الدم
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                الحالة
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {patients.map((patient) => {
                            return (
                                <tr className="hover:bg-gray-50 transition-colors duration-150">
                                    <td className=" py-4 ">
                                        <div className="flex items-center">
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">
                                                    {patient.name}
                                                </div>
                                                <div className="text-sm text-gray-500">
                                                    {patient.user.email}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">
                                            {patient.age}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">
                                            {patient.gender}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">
                                            {patient.blood_type}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {patient.active ? (
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                نشط
                                            </span>
                                        ) : (
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                                غير نشط
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                                        <Link
                                            href={route(
                                                "admin.delete_patient",
                                                patient.id
                                            )}
                                            method="DELETE"
                                            className="text-red-600 hover:text-red-900"
                                        >
                                            حذف
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            )}
        </AdminLayout>
    );
}
