import PharmaLayout from "@/Layouts/PharmaLayout";
import { Link } from "@inertiajs/react";

export default function Inventroy({ inventory, employee }) {
    return (
        <PharmaLayout employee={employee}>
            <h1 className="p-2 font-bold">
                عدد العناصر الاجمالي : {inventory.length}
            </h1>
            <table className="min-w-full divide-y divide-gray-200 p-2 mt-2">
                <thead>
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
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {inventory.map((med) => {
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
                                <td className="px-6 py-4 whitespace-nowrap flex justify-center items-center">
                                    <Link
                                        type="button"
                                        href={route(
                                            "pharma.inventory.edit",
                                            med.id
                                        )}
                                        className="px-4 py-2 font-medium text-white bg-yellow-600 rounded-md hover:bg-yellow-500 focus:outline-none focus:shadow-outline-blue active:bg-yellow-600 transition duration-150 ease-in-out"
                                    >
                                        تعديل
                                    </Link>

                                    <Link
                                        href={route(
                                            "pharma.inventory.delete",
                                            med.id
                                        )}
                                        method={"DELETE"}
                                        className="mr-2 px-5 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out"
                                    >
                                        حذف
                                    </Link>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </PharmaLayout>
    );
}
