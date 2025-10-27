import AdminLayout from "@/Layouts/AdminLayout";
import { Link } from "@inertiajs/react";

export default function ViewComplaints({ complaints }) {
    console.log(complaints);
    return (
        <AdminLayout>
            <div className="my-6">
                {complaints.length === 0 ? (
                    <div className="text-center py-12 bg-white rounded-2xl border border-gray-200">
                        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg
                                className="w-8 h-8 text-blue-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                                />
                            </svg>
                        </div>
                        <p className="text-xl font-semibold text-gray-600 mb-2">
                            لا توجد شكاوي حالياً
                        </p>
                        <p className="text-gray-400">
                            سيظهر هنا الشكاوي عند تقديمها من قبل المستخدمين
                        </p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        <div className="bg-white rounded-2xl border border-gray-200 p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                                    <span className="w-2 h-6 bg-blue-500 rounded-full"></span>
                                    الشكاوي المقدمة
                                </h3>
                                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                                    {complaints.length} شكوى
                                </span>
                            </div>

                            <div className="grid gap-4">
                                {complaints.map((el) => (
                                    <div
                                        key={el.id}
                                        className="bg-gray-50 rounded-xl border border-gray-200 p-5 hover:shadow-md transition-all duration-300"
                                    >
                                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
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
                                                <div>
                                                    <p className="font-semibold text-gray-800">
                                                        {el.nick_name}
                                                    </p>
                                                    <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                                                        <svg
                                                            className="w-4 h-4"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                            />
                                                        </svg>
                                                        {new Date(
                                                            el.created_at
                                                        ).toLocaleDateString(
                                                            "ar-SA"
                                                        )}
                                                    </p>
                                                </div>
                                            </div>

                                            <Link
                                                href={route(
                                                    "admin.complaint.delete",
                                                    el.id
                                                )}
                                                method="DELETE"
                                                className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all duration-200 hover:shadow-sm min-w-[100px] justify-center"
                                            >
                                                <svg
                                                    className="w-4 h-4"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                    />
                                                </svg>
                                                حذف
                                            </Link>
                                        </div>

                                        <div className="bg-white rounded-lg border border-gray-200 p-4">
                                            <div className="flex items-center gap-2 mb-3">
                                                <svg
                                                    className="w-5 h-5 text-orange-500"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                                                    />
                                                </svg>
                                                <span className="text-sm font-medium text-gray-700">
                                                    نص الشكوى
                                                </span>
                                            </div>
                                            <p className="text-gray-700 leading-relaxed text-right">
                                                {el.complaint}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
}
