import InputError from "@/Components/InputError";
import OnGoing from "@/Components/OnGoing";
import TextInput from "@/Components/TextInput";
import PharmaLayout from "@/Layouts/PharmaLayout";
import { useForm } from "@inertiajs/react";
import { useState } from "react";
export default function EditItem({ employee, inv }) {
    const [succ, setSucc] = useState();
    const [fail, setFail] = useState();
    const { data, setData, errors, put, processing } = useForm({
        title: inv.title,
        company: inv.company,
        quantity: inv.quantity,
        unite_price: inv.unite_price,
        pro_date: inv.pro_date,
        exp_date: inv.exp_date,
    });
    const add_med = (e) => {
        e.preventDefault();

        put(route("pharma.inventory.update", inv.id), {
            onSuccess: () => {
                setSucc(true);
                setTimeout(() => {
                    setSucc(false);
                }, 1000);
            },
            onError: () => {
                setFail(true);
                setTimeout(() => {
                    setFail(false);
                }, 3000);
            },
        });
    };
    return (
        <PharmaLayout employee={employee}>
            {processing || succ | fail ? (
                <OnGoing
                    succ={succ}
                    fail={fail}
                    loading_text={"جار المعالجة "}
                    fail_text={"فشلت العملية تحقق من رصيد الخزنة"}
                    succ_text={"تم التحديث بنجاح"}
                />
            ) : (
                <form onSubmit={add_med} className="w-full">
                    <table className="max-w-full table-fixed divide-y divide-gray-200 p-2 mt-2">
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
                                    السعر
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
                                        className="w-full"
                                        onChange={(e) => {
                                            setData("title", e.target.value);
                                        }}
                                    />
                                    <InputError message={errors.title} />
                                </td>
                                <td className="px-2 py-4 whitespace-nowrap">
                                    <TextInput
                                        type="text"
                                        className="w-full"
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
                                        className="w-full"
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
                                        type="number"
                                        className="w-full"
                                        value={data.unite_price}
                                        min={0}
                                        onChange={(e) => {
                                            setData(
                                                "unite_price",
                                                e.target.value
                                            );
                                        }}
                                    />
                                    <InputError message={errors.unite_price} />
                                </td>
                                <td className="px-2 py-4 whitespace-nowrap">
                                    <TextInput
                                        type="date"
                                        className="w-full"
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
                                        className="w-full"
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
            )}
        </PharmaLayout>
    );
}
