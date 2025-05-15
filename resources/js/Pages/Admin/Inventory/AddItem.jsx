import InputError from "@/Components/InputError";
import OnGoing from "@/Components/OnGoing";
import TextInput from "@/Components/TextInput";
import AdminLayout from "@/Layouts/AdminLayout";
import { useForm } from "@inertiajs/react";
import { useState } from "react";

export default function AddItem() {
    const [succ, setSucc] = useState();
    const [fail, setFail] = useState();
    const { data, setData, errors, post, reset, processing } = useForm({
        title: "",
        company: "",
        quantity: 1,
        unite_price: 0,
        pro_date: "",
        exp_date: "",
    });
    const add_med = (e) => {
        e.preventDefault();

        post(route("admin.inventory.store"), {
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
        <AdminLayout>
            {processing || succ || fail ? (
                <OnGoing
                    succ={succ}
                    fail={fail}
                    loading_text={"جار المعالجة "}
                    fail_text={"فشلت العملية تحقق من رصيد الخزنة"}
                    succ_text={"تمت الاضافة بنجاح"}
                />
            ) : (
                <form onSubmit={add_med} className="w-full">
                    <table className="w-full table-fixed divide-y divide-gray-200 p-2 mt-2">
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
                                    سعر الواحدة
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
                                        onChange={(e) => {
                                            setData("exp_date", e.target.value);
                                        }}
                                    />
                                    <InputError message={errors.exp_date} />
                                </td>
                                <td className="px-2 py-4 whitespace-nowrap flex justify-center">
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="px-4 py-2 font-medium disabled:bg-indigo-300 text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:shadow-outline-blue active:bg-indigo-600 transition duration-150 ease-in-out"
                                    >
                                        أضافة
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            )}
        </AdminLayout>
    );
}
