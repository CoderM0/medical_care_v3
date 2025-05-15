import AdminLayout from "@/Layouts/AdminLayout";

export default function Index({ inv }) {
    return (
        <AdminLayout>
            <div className="h-[85vh] overflow-y-auto">
                {" "}
                <h1 className="p-2 font-bold">
                    عدد العناصر الاجمالي : {inv.length}
                </h1>
                <table className="min-w-full divide-y divide-gray-200 p-2 mt-2">
                    <thead className="sticky top-0 bg-white">
                        <tr>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                اسم الدواء
                            </th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                الشركة المنتجة
                            </th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                الكمية
                            </th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                سعر الواحدة
                            </th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                تاريخ الإنتاج
                            </th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                تاريخ الإنتهاء
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {inv.map((med) => {
                            return (
                                <tr key={med.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {med.title}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {med.company}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {" "}
                                        {med.quantity}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {" "}
                                        {med.unite_price}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {" "}
                                        {med.pro_date}
                                    </td>
                                    <td
                                        className={`px-6 py-4 whitespace-nowrap  ${
                                            new Date(med.exp_date) > new Date()
                                                ? "text-green-500"
                                                : "text-red-500"
                                        } `}
                                    >
                                        {med.exp_date}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    );
}
