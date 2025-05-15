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
    return (
        <AdminLayout>
            <div className="bg-white shadow-md rounded-md overflow-hidden w-full mx-auto  h-[85vh] overflow-y-auto">
                <div className="bg-gray-100 py-2 px-4 flex gap-3 items-center sticky top-0">
                    <h2 className="text-xl font-semibold text-gray-800">
                        الموظفين
                    </h2>
                    <select
                        name="job_id"
                        onChange={(e) => {
                            filterItems(e.target.value);
                        }}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    >
                        <option value={"all"}>جميع الموظفين</option>
                        {jobs.map((job) => {
                            return (
                                <option key={job.id} value={job.job_title}>
                                    {job.job_title}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <ul className="divide-y divide-gray-200">
                    {filteredEmployees.length == 0 ? (
                        <p className="p-4 text-center my-5">
                            لا يوجد موظفين في هذا المنصب بعد !{" "}
                            <Link
                                href={route("admin.add_employee")}
                                className="text-green-500 underline"
                            >
                                أضف موظف جديد
                            </Link>{" "}
                        </p>
                    ) : (
                        filteredEmployees.map((employee) => {
                            return (
                                <li
                                    key={employee.id}
                                    className="flex items-center py-4 px-6"
                                >
                                    <img
                                        className="w-12 h-12 rounded-full object-cover mr-4"
                                        src={`/storage/${employee.avatar}`}
                                        alt="User avatar"
                                    />
                                    <div className="flex-1">
                                        <h3 className="text-lg font-medium text-gray-800 mx-2">
                                            {employee.name}
                                        </h3>
                                        <p className="text-gray-600 text-base mx-2">
                                            <span className="text-green-700 font-bold uppercase">
                                                {
                                                    employee.job_description
                                                        .job_title
                                                }{" "}
                                            </span>
                                            {" اختصاص"}-{" "}
                                            {employee.specialty.title} -
                                            {" قسم "}
                                            {employee.department.title}{" "}
                                            {"| الراتب"}{" "}
                                            <span className="text-green-500">
                                                {" "}
                                                ${employee.salary}
                                            </span>
                                        </p>
                                    </div>

                                    <div className="w-[40%] flex justify-around items-center">
                                        <Link
                                            href={route(
                                                "admin.manage_employees.show",
                                                employee.id
                                            )}
                                            className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
                                        >
                                            عرض
                                        </Link>
                                        <Link
                                            href={route(
                                                "admin.manage_employees.edit_employee",
                                                employee.id
                                            )}
                                            className="border border-yellow-500 bg-yellow-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-yellow-600 focus:outline-none focus:shadow-outline"
                                        >
                                            تعديل المعلومات
                                        </Link>

                                        <DeleteEmploy
                                            deluser={employee}
                                            throute={
                                                "admin.manage_employees.delete_employee"
                                            }
                                        />
                                    </div>
                                </li>
                            );
                        })
                    )}
                </ul>
                {/*  */}
            </div>
        </AdminLayout>
    );
}
