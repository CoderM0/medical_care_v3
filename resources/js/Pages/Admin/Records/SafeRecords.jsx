import AdminLayout from "@/Layouts/AdminLayout";

export default function SafeRecords({ safe_records }) {
    return (
        <AdminLayout>
            <div className="flex flex-col">
                <div className="overflow-x-auto pb-4">
                    <div className="min-w-full inline-block align-middle">
                        <div className="overflow-hidden border border-gray-200 rounded-2xl shadow-sm h-screen overflow-y-scroll bg-white">
                            <table className="min-w-full table-auto rounded-xl">
                                <thead className="sticky top-0 bg-gradient-to-r from-cyan-50 to-white shadow-sm">
                                    <tr>
                                        {[
                                            "العملية",
                                            "التاريخ",
                                            "المحاسب",
                                            "المبلغ",
                                            "التفاصيل",
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
                                    {safe_records.map((record) => (
                                        <tr
                                            key={record.id}
                                            className="bg-white hover:bg-cyan-50 transition-all duration-300"
                                        >
                                            <td className="p-5 whitespace-nowrap text-sm font-medium text-gray-900">
                                                <div
                                                    className={`py-1.5 px-3 ${
                                                        record.operation ===
                                                        "سحب"
                                                            ? "bg-red-50 text-red-600"
                                                            : "bg-emerald-50 text-emerald-600"
                                                    } rounded-full flex justify-center items-center gap-1 w-24 text-xs font-medium`}
                                                >
                                                    <span
                                                        className={`w-2 h-2 rounded-full ${
                                                            record.operation ===
                                                            "سحب"
                                                                ? "bg-red-600"
                                                                : "bg-emerald-600"
                                                        }`}
                                                    ></span>
                                                    {record.operation}
                                                </div>
                                            </td>

                                            <td className="p-5 text-sm text-gray-700">
                                                {new Date(
                                                    record.created_at
                                                ).toLocaleString()}
                                            </td>

                                            <td className="px-5 py-3">
                                                <div className="flex items-center gap-3 w-56">
                                                    <img
                                                        src={`/storage/${record.employee?.avatar}`}
                                                        alt="Avatar"
                                                        className="w-10 h-10 rounded-full border border-gray-200"
                                                    />
                                                    <div>
                                                        <p className="text-sm text-gray-800">
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

                                            <td className="p-5 text-sm font-semibold text-gray-700">
                                                {record.amount}$
                                            </td>

                                            <td className="p-5 text-sm text-gray-700">
                                                {record.purpose}
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
