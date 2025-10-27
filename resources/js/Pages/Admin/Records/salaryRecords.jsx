import AdminLayout from "@/Layouts/AdminLayout";

export default function SalaryRecords({ salary_records }) {
    return (
        <AdminLayout>
            <div className="flex flex-col">
                <div className="overflow-x-auto pb-4">
                    <div className="min-w-full inline-block align-middle">
                        <div className="overflow-hidden border border-gray-200 rounded-2xl shadow-sm h-[85vh] overflow-y-auto bg-white">
                            <table className="min-w-full table-auto rounded-xl">
                                <thead className="sticky top-0 bg-gradient-to-r from-cyan-50 to-white shadow-sm">
                                    <tr>
                                        {[
                                            "الموظف",
                                            "الراتب المدفوع",
                                            "تاريخ الدفع",
                                        ].map((head) => (
                                            <th
                                                key={head}
                                                scope="col"
                                                className="p-4 text-right whitespace-nowrap text-sm font-semibold text-gray-700 border-b border-gray-200"
                                            >
                                                {head}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-gray-100">
                                    {salary_records.map((record) => (
                                        <tr
                                            key={record.id}
                                            className="bg-white hover:bg-cyan-50 transition-all duration-300"
                                        >
                                            <td className="px-5 py-3">
                                                <div className="flex items-center gap-3 w-56">
                                                    <img
                                                        src={`/storage/${record.employee?.avatar}`}
                                                        alt="emp image"
                                                        className="w-10 h-10 rounded-full border border-gray-200"
                                                    />
                                                    <div>
                                                        <p className="text-sm text-gray-800 font-medium">
                                                            {record.employee
                                                                ?.name ||
                                                                "حساب محذوف"}
                                                        </p>
                                                        <p className="text-xs text-gray-400">
                                                            {record.employee
                                                                ?.user?.email ||
                                                                ""}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="p-5 whitespace-nowrap text-sm font-semibold text-gray-700">
                                                {record.amount_paid}$
                                            </td>

                                            <td className="p-5 whitespace-nowrap text-sm text-gray-700">
                                                {record.payment_date}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
