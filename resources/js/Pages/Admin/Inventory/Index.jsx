import AdminLayout from "@/Layouts/AdminLayout";

export default function Index({ inv }) {
    return (
        <AdminLayout>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 p-6">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                        <div className="bg-gradient-to-l from-blue-500 to-blue-600 px-6 py-4">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                                        <svg
                                            className="w-6 h-6 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h1 className="text-xl font-bold text-white">
                                            المستودع الطبي
                                        </h1>
                                        <p className="text-blue-100 text-sm">
                                            إدارة الأدوية والمستلزمات الطبية
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-white/20 px-4 py-2 rounded-xl">
                                    <span className="text-white font-semibold text-sm">
                                        عدد العناصر: {inv.length}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="p-6">
                            <div className="grid gap-4">
                                {inv.map((med) => {
                                    const isExpired =
                                        new Date(med.exp_date) <= new Date();
                                    const isLowStock = med.quantity < 10;

                                    return (
                                        <div
                                            key={med.id}
                                            className="bg-gradient-to-l from-white to-gray-50 border border-gray-200 rounded-2xl p-5 hover:shadow-lg transition-all duration-300 hover:border-blue-200 group"
                                        >
                                            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                                                <div className="flex items-center gap-4 flex-1">
                                                    <div className="relative">
                                                        <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-lg shadow-sm group-hover:scale-110 transition-transform duration-300">
                                                            {med.title?.[0] ||
                                                                "?"}
                                                        </div>
                                                        {isLowStock && (
                                                            <div className="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 rounded-full border-2 border-white flex items-center justify-center">
                                                                <svg
                                                                    className="w-3 h-3 text-white"
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
                                                                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="flex-1">
                                                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                                                            {med.title}
                                                        </h3>
                                                        <div className="flex items-center gap-3 text-sm text-gray-600">
                                                            <span className="flex items-center gap-1">
                                                                <svg
                                                                    className="w-4 h-4"
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
                                                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                                                    />
                                                                </svg>
                                                                {med.company}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 flex-1">
                                                    <div className="text-center min-w-[80px]">
                                                        <div className="text-2xl font-bold text-blue-600">
                                                            {med.quantity}
                                                        </div>
                                                        <div className="text-xs text-gray-500 mt-1 whitespace-nowrap">
                                                            الكمية
                                                        </div>
                                                    </div>
                                                    <div className="text-center min-w-[80px]">
                                                        <div className="text-xl font-bold text-green-600">
                                                            {med.unite_price}$
                                                        </div>
                                                        <div className="text-xs text-gray-500 mt-1 whitespace-nowrap">
                                                            سعر الواحدة
                                                        </div>
                                                    </div>
                                                    <div className="text-center min-w-[80px]">
                                                        <div className="text-sm font-medium text-gray-700">
                                                            {med.pro_date}
                                                        </div>
                                                        <div className="text-xs text-gray-500 mt-1 whitespace-nowrap">
                                                            الإنتاج
                                                        </div>
                                                    </div>
                                                    <div className="text-center min-w-[80px]">
                                                        <div
                                                            className={`text-sm font-medium ${
                                                                isExpired
                                                                    ? "text-red-600"
                                                                    : "text-gray-700"
                                                            }`}
                                                        >
                                                            {med.exp_date}
                                                        </div>
                                                        <div className="text-xs text-gray-500 mt-1 whitespace-nowrap">
                                                            الانتهاء
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex flex-col items-center gap-2 min-w-[140px]">
                                                    <div
                                                        className={`px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 ${
                                                            isExpired
                                                                ? "bg-red-100 text-red-700 border border-red-200"
                                                                : "bg-green-100 text-green-700 border border-green-200"
                                                        }`}
                                                    >
                                                        {isExpired ? (
                                                            <>
                                                                <svg
                                                                    className="w-4 h-4"
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
                                                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                                    />
                                                                </svg>
                                                                منتهي الصلاحية
                                                            </>
                                                        ) : (
                                                            <>
                                                                <svg
                                                                    className="w-4 h-4"
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
                                                                        d="M5 13l4 4L19 7"
                                                                    />
                                                                </svg>
                                                                صالح للاستخدام
                                                            </>
                                                        )}
                                                    </div>
                                                    {isLowStock && (
                                                        <div className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium border border-orange-200 flex items-center gap-1">
                                                            <svg
                                                                className="w-3 h-3"
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
                                                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                                                                />
                                                            </svg>
                                                            كمية منخفضة
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {inv.length === 0 && (
                                <div className="text-center py-12">
                                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg
                                            className="w-10 h-10 text-gray-400"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-gray-600 text-lg font-medium">
                                        لا توجد أدوية في المستودع
                                    </p>
                                    <p className="text-gray-400 text-sm mt-1">
                                        سيظهر هنا قائمة الأدوية عند إضافتها
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
