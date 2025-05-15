import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import AdminLayout from "@/Layouts/AdminLayout";
import { useForm } from "@inertiajs/react";
export default function EditItem({ inv }) {
    const { data, setData, errors, put, reset } = useForm({
        title: inv.title,
        company: inv.company,
        quantity: inv.quantity,
        pro_date: inv.pro_date,
        exp_date: inv.exp_date,
    });
    const add_med = (e) => {
        e.preventDefault();

        put(route("admin.inventory.update", inv.id), {
            onSuccess: () => reset(),
        });
    };
    return (
        <AdminLayout>
            <form onSubmit={add_med} className="w-full">
                <table className="max-w-full table-auto divide-y divide-gray-200 p-2 mt-2">
                    <thead>
                        <tr>
                            <th className="px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                اسم الدواء
                            </th>
                            <th className="px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                الشركة المنتجة
                            </th>
                            <th className="px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                الكمية
                            </th>
                            <th className="px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                تاريخ الإنتاج
                            </th>
                            <th className="px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                تاريخ الإنتهاء
                            </th>
                            <th className="px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td className="px-2 py-4 whitespace-nowrap">
                                <TextInput
                                    type="text"
                                    value={data.title}
                                    onChange={(e) => {
                                        setData("title", e.target.value);
                                    }}
                                />
                                <InputError message={errors.title} />
                            </td>
                            <td className="px-2 py-4 whitespace-nowrap">
                                <TextInput
                                    type="text"
                                    value={data.company}
                                    onChange={(e) => {
                                        setData("company", e.target.value);
                                    }}
                                />
                                <InputError message={errors.company} />
                            </td>
                            <td className="px-2 py-4 whitespace-nowrap">
                                <TextInput
                                    type="number"
                                    value={data.quantity}
                                    min={1}
                                    onChange={(e) => {
                                        setData("quantity", e.target.value);
                                    }}
                                />
                                <InputError message={errors.quantity} />
                            </td>
                            <td className="px-2 py-4 whitespace-nowrap">
                                <TextInput
                                    type="date"
                                    value={data.pro_date}
                                    onChange={(e) => {
                                        setData("pro_date", e.target.value);
                                    }}
                                />
                                <InputError message={errors.pro_date} />
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap">
                                <TextInput
                                    type="date"
                                    value={data.exp_date}
                                    onChange={(e) => {
                                        setData("exp_date", e.target.value);
                                    }}
                                />
                                <InputError message={errors.exp_date} />
                            </td>
                            <td className="px-2 py-4 whitespace-nowrap">
                                <button
                                    type="submit"
                                    className="px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:shadow-outline-blue active:bg-indigo-600 transition duration-150 ease-in-out"
                                >
                                    تحديث
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </AdminLayout>
    );
}
