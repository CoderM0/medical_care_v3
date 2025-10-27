import DeleteEmploy from "@/Components/DeleteEmploy";
import AdminLayout from "@/Layouts/AdminLayout";
import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";
export default function Management({ employees, jobs }) {
    const [filteredEmployees, setFilteredEmployees] = useState([...employees]);

    const filterItems = (item) => {
        if (item == "all") {
            setFilteredEmployees(employees);
        } else {
            const tmp = employees.filter(
                (emp) => emp.job_description.job_title == item
            );

            setFilteredEmployees(tmp);
        }
    };
    useEffect(() => {
        setFilteredEmployees(employees);
    }, [employees]);
    const handleSearch = () => {};
    return (
        <AdminLayout>
            <div className="bg-white shadow-lg rounded-2xl border border-gray-100 w-full mx-auto overflow-hidden">
                <div className="bg-gradient-to-l from-blue-50 to-white p-6 flex flex-col lg:flex-row gap-4 items-center justify-between border-b border-gray-200 sticky top-0 z-20">
                    <div className="flex items-center gap-3">
                        <div className="w-3 h-8 bg-blue-500 rounded-full"></div>
                        <h2 className="text-2xl font-bold text-gray-800">
                            إدارة الموظفين
                        </h2>
                        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                            {filteredEmployees.length} موظف
                        </span>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
                        <div className="relative w-full sm:w-64">
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
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
                                type="text"
                                placeholder="ابحث عن موظف..."
                                onChange={(e) => handleSearch(e.target.value)}
                                className="w-full pl-4 pr-10 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 bg-white shadow-sm"
                            />
                        </div>

                        <select
                            name="job_id"
                            onChange={(e) => filterItems(e.target.value)}
                            className="w-full sm:w-56 px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 shadow-sm"
                        >
                            <option value="all">جميع الوظائف</option>
                            {jobs.map((job) => (
                                <option key={job.id} value={job.job_title}>
                                    {job.job_title}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    {filteredEmployees.length === 0 ? (
                        <div className="text-center py-16">
                            <div className="w-24 h-24 mx-auto mb-4 bg-blue-50 rounded-full flex items-center justify-center">
                                <svg
                                    className="w-12 h-12 text-blue-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                                    />
                                </svg>
                            </div>
                            <p className="text-gray-600 text-lg mb-4">
                                لا يوجد موظفين في هذا المنصب بعد!
                            </p>
                            <Link
                                href={route("admin.add_employee")}
                                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg"
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
                                        d="M12 4v16m8-8H4"
                                    />
                                </svg>
                                إضافة موظف جديد
                            </Link>
                        </div>
                    ) : (
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-200">
                                    <th className="py-4 px-6 text-right text-sm font-semibold text-gray-700">
                                        الموظف
                                    </th>
                                    <th className="py-4 px-6 text-right text-sm font-semibold text-gray-700">
                                        المعلومات الوظيفية
                                    </th>
                                    <th className="py-4 px-6 text-right text-sm font-semibold text-gray-700">
                                        الراتب
                                    </th>
                                    <th className="py-4 px-6 text-right text-sm font-semibold text-gray-700">
                                        الإجراءات
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {filteredEmployees.map((employee) => (
                                    <tr
                                        key={employee.id}
                                        className="hover:bg-blue-50 transition-all duration-200 group"
                                    >
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-4">
                                                <div className="relative">
                                                    <img
                                                        className="w-14 h-14 rounded-xl object-cover border-2 border-white shadow-sm group-hover:border-blue-200 transition-all duration-300"
                                                        src={`/storage/${employee.avatar}`}
                                                        alt={employee.name}
                                                    />
                                                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 border-2 border-white rounded-full"></div>
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                                                        {employee.name}
                                                    </h3>
                                                    <p className="text-gray-500 text-sm flex items-center gap-1">
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
                                                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                                            />
                                                        </svg>
                                                        {
                                                            employee.department
                                                                .title
                                                        }
                                                    </p>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="py-4 px-6">
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-2">
                                                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                                                        {
                                                            employee
                                                                .job_description
                                                                .job_title
                                                        }
                                                    </span>
                                                </div>
                                                <p className="text-gray-600 text-sm">
                                                    <span className="font-medium">
                                                        الاختصاص:
                                                    </span>{" "}
                                                    {employee.specialty.title}
                                                </p>
                                            </div>
                                        </td>

                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-2">
                                                <span className="text-lg font-bold text-green-600">
                                                    ${employee.salary}
                                                </span>
                                                <span className="text-gray-400 text-sm">
                                                    /شهرياً
                                                </span>
                                            </div>
                                        </td>

                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-2">
                                                <Link
                                                    href={route(
                                                        "admin.manage_employees.show",
                                                        employee.id
                                                    )}
                                                    className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md min-w-[80px] justify-center"
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
                                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                        />
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                        />
                                                    </svg>
                                                    عرض
                                                </Link>

                                                <Link
                                                    href={route(
                                                        "admin.manage_employees.edit_employee",
                                                        employee.id
                                                    )}
                                                    className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md min-w-[120px] justify-center"
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
                                                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                        />
                                                    </svg>
                                                    تعديل
                                                </Link>

                                                <DeleteEmploy
                                                    deluser={employee}
                                                    throute={
                                                        "admin.manage_employees.delete_employee"
                                                    }
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>

                {filteredEmployees.length > 0 && (
                    <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                            <p className="text-gray-600 text-sm">
                                عرض{" "}
                                <span className="font-semibold">
                                    {filteredEmployees.length}
                                </span>{" "}
                                موظف
                            </p>
                            <Link
                                href={route("admin.add_employee")}
                                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 shadow-sm hover:shadow-md"
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
                                        d="M12 4v16m8-8H4"
                                    />
                                </svg>
                                إضافة موظف جديد
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
}
