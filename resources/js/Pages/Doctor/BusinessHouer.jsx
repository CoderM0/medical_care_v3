import Loader from "@/Components/Loader";
import TextInput from "@/Components/TextInput";
import DoctorLayout from "@/Layouts/DoctorLayout";
import { useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function BusinessHouer({ businesshoures, employee }) {
    const { data, setData, post, processing } = useForm({});

    const [fin, setFinish] = useState(false);
    useEffect(() => {
        businesshoures.forEach((bhour) => {
            setData(`data[${bhour.day}]['day']`, bhour.day);
            setData(`data[${bhour.day}]['from']`, bhour.from);
            setData(`data[${bhour.day}]['to']`, bhour.to);
            setData(`data[${bhour.day}]['off']`, bhour.off);
            setData(`data[${bhour.day}]['doctor_id']`, employee.doctor.id);
        });
        setFinish(true);
    }, []);

    const update_table = (e) => {
        e.preventDefault();
        post(route("doctor.businesstable.update"));
    };
    console.log(Object.keys(data).length);
    return (
        <DoctorLayout employee={employee}>
            {processing ? (
                <Loader />
            ) : (
                <div className="flex-1 p-2">
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 h-full">
                        <div className="p-6">
                            <form onSubmit={update_table} className="space-y-6">
                                {Object.keys(data).length == 0 ? (
                                    <div className="text-center py-8">
                                        <p className="text-gray-600">
                                            جاري تحميل البيانات...
                                        </p>
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {businesshoures.map((businesshoure) => {
                                            const dayNames = {
                                                Saturday: "السبت",
                                                Sunday: "الأحد",
                                                Monday: "الإثنين",
                                                Tuesday: "الثلاثاء",
                                                Wednesday: "الأربعاء",
                                                Thursday: "الخميس",
                                                Friday: "الجمعة",
                                            };

                                            const arabicDay =
                                                dayNames[businesshoure.day] ||
                                                businesshoure.day;
                                            const isOff =
                                                data.data[businesshoure.day][
                                                    "off"
                                                ];

                                            return (
                                                <div
                                                    key={businesshoure.id}
                                                    className={`border-2 rounded-2xl p-4 transition-all duration-300 ${
                                                        isOff
                                                            ? "border-red-200 bg-red-50"
                                                            : "border-blue-200 bg-blue-50 hover:bg-blue-100"
                                                    }`}
                                                >
                                                    <div className="text-center mb-4">
                                                        <h3
                                                            className={`text-lg font-bold ${
                                                                isOff
                                                                    ? "text-red-700"
                                                                    : "text-blue-700"
                                                            }`}
                                                        >
                                                            {arabicDay}
                                                        </h3>
                                                        {!!isOff && (
                                                            <span className="text-red-600 text-sm font-medium bg-red-100 px-2 py-1 rounded-full">
                                                                إجازة
                                                            </span>
                                                        )}
                                                    </div>

                                                    <div className="space-y-3">
                                                        <div className="flex items-center justify-between">
                                                            <span className="text-sm font-medium text-gray-600">
                                                                من
                                                            </span>
                                                            <TextInput
                                                                type="time"
                                                                value={
                                                                    data.data[
                                                                        businesshoure
                                                                            .day
                                                                    ]["from"]
                                                                }
                                                                onChange={(e) =>
                                                                    setData(
                                                                        `data[${businesshoure.day}]['from']`,
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                                disabled={isOff}
                                                                className={`w-24 border-gray-300 rounded-lg py-2 text-center text-sm ${
                                                                    isOff
                                                                        ? "bg-gray-100 text-gray-400"
                                                                        : "focus:ring-1 focus:ring-blue-500"
                                                                }`}
                                                            />
                                                        </div>

                                                        <div className="flex items-center justify-between">
                                                            <span className="text-sm font-medium text-gray-600">
                                                                إلى
                                                            </span>
                                                            <TextInput
                                                                type="time"
                                                                value={
                                                                    data.data[
                                                                        businesshoure
                                                                            .day
                                                                    ]["to"]
                                                                }
                                                                onChange={(e) =>
                                                                    setData(
                                                                        `data[${businesshoure.day}]['to']`,
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                                disabled={isOff}
                                                                className={`w-24 border-gray-300 rounded-lg py-2 text-center text-sm ${
                                                                    isOff
                                                                        ? "bg-gray-100 text-gray-400"
                                                                        : "focus:ring-1 focus:ring-blue-500"
                                                                }`}
                                                            />
                                                        </div>

                                                        <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                                                            <span className="text-sm font-medium text-gray-600">
                                                                تعطيل
                                                            </span>
                                                            <div className="relative">
                                                                <input
                                                                    type="checkbox"
                                                                    className="w-6 h-6 appearance-none border-2 border-gray-300 rounded checked:bg-red-500 checked:border-red-500 focus:ring-1 focus:ring-red-300 transition-all duration-300 cursor-pointer"
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        setData(
                                                                            `data[${businesshoure.day}]['off']`,
                                                                            e
                                                                                .target
                                                                                .checked
                                                                        )
                                                                    }
                                                                    checked={
                                                                        isOff
                                                                    }
                                                                />
                                                                {!!isOff && (
                                                                    <svg
                                                                        className="w-4 h-4 text-white absolute top-1 left-1 pointer-events-none"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        viewBox="0 0 24 24"
                                                                    >
                                                                        <path
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            strokeWidth={
                                                                                3
                                                                            }
                                                                            d="M5 13l4 4L19 7"
                                                                        />
                                                                    </svg>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}

                                <div className="pt-6 border-t border-gray-200 text-center">
                                    <button
                                        type="submit"
                                        className="bg-blue-500 hover:bg-blue-600 text-white px-12 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-lg text-base"
                                    >
                                        حفظ جدول العمل
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </DoctorLayout>
    );
}
