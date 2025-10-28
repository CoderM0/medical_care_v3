import InputError from "@/Components/InputError";
import Loader from "@/Components/Loader";
import DoctorLayout from "@/Layouts/DoctorLayout";
import { useForm } from "@inertiajs/react";
import { useEffect } from "react";

export default function AddTask({ employees, employee, tasks }) {
    console.log("t", tasks);
    const { data, setData, errors, post, reset, processing } = useForm({
        employee_id: employees[0]["id"],
        task_description: "",
    });
    useEffect(() => {
        setData("commander_id", employee.id);
    }, []);
    const add_task = () => {
        post(route("doctor.save_task"));
    };
    return (
        <DoctorLayout employee={employee}>
            {processing ? (
                <Loader />
            ) : (
                <div className="flex-1 p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-blue-100 rounded-2xl flex items-center justify-center">
                                    <svg
                                        className="w-6 h-6 text-blue-600"
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
                                </div>
                                <h2 className="text-xl font-bold text-gray-800">
                                    إضافة مهمة جديدة
                                </h2>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200">
                                    <div className="flex flex-col md:flex-row gap-4">
                                        <div className="flex-1">
                                            <label className="text-sm font-semibold text-gray-700 mb-2 block">
                                                اختر الممرض
                                            </label>
                                            <select
                                                name="emps"
                                                value={data.employee_id}
                                                onChange={(e) =>
                                                    setData(
                                                        "employee_id",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white"
                                            >
                                                {employees.map((el) => (
                                                    <option
                                                        key={el.id}
                                                        value={el.id}
                                                    >
                                                        {el.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200">
                                    <label className="text-sm font-semibold text-gray-700 mb-2 block">
                                        وصف المهمة
                                    </label>
                                    <textarea
                                        className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 min-h-[120px] resize-vertical"
                                        value={data.task_description}
                                        placeholder="أدخل وصف المهمة المطلوبة من الممرض..."
                                        onChange={(e) =>
                                            setData(
                                                "task_description",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <InputError
                                        message={errors.task_description}
                                        className="mt-2"
                                    />
                                </div>

                                <button
                                    onClick={add_task}
                                    className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                                >
                                    إضافة المهمة
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-orange-100 rounded-2xl flex items-center justify-center">
                                    <svg
                                        className="w-6 h-6 text-orange-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-gray-800">
                                        المهام غير المنجزة
                                    </h2>
                                    <p className="text-gray-500 text-sm">
                                        قائمة المهام المعلقة
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4 max-h-[500px] overflow-y-auto">
                                {tasks.length === 0 ? (
                                    <div className="text-center py-12">
                                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <svg
                                                className="w-8 h-8 text-gray-400"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={1.5}
                                                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                                />
                                            </svg>
                                        </div>
                                        <p className="text-gray-600 font-semibold mb-2">
                                            لا توجد مهام معلقة
                                        </p>
                                        <p className="text-gray-400 text-sm">
                                            جميع المهام مكتملة
                                        </p>
                                    </div>
                                ) : (
                                    tasks.map((task) => (
                                        <div
                                            key={task.id}
                                            className="bg-gradient-to-l from-white to-gray-50 border border-gray-200 rounded-2xl p-5 hover:shadow-md transition-all duration-300"
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                                    <svg
                                                        className="w-5 h-5 text-blue-600"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                                        />
                                                    </svg>
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-3 mb-3">
                                                        <span className="text-sm text-gray-500">
                                                            الممرض:
                                                        </span>
                                                        <span className="font-semibold text-gray-800">
                                                            {task.employee.name}
                                                        </span>
                                                    </div>
                                                    <div className="bg-white rounded-xl border border-gray-200 p-4">
                                                        <div className="flex items-center gap-2 mb-2">
                                                            <svg
                                                                className="w-4 h-4 text-green-500"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={
                                                                        2
                                                                    }
                                                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                                                />
                                                            </svg>
                                                            <span className="font-semibold text-gray-700 text-sm">
                                                                وصف المهمة
                                                            </span>
                                                        </div>
                                                        <p className="text-gray-600 text-sm leading-relaxed">
                                                            {
                                                                task.task_description
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </DoctorLayout>
    );
}
