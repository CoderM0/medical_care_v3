import AdminLayout from "@/Layouts/AdminLayout";

export default function AdminDashboard({ nums }) {
    const sections = [
        {
            title: "الأطباء",
            count: nums.docs,
            color: "from-blue-500 to-blue-400",
        },
        {
            title: "الممرضين",
            count: nums.nurse,
            color: "from-cyan-500 to-cyan-400",
        },
        {
            title: "المرضى",
            count: nums.ptients,
            color: "from-emerald-500 to-emerald-400",
        },
        {
            title: "الصيادلة",
            count: nums.pharmas,
            color: "from-indigo-500 to-indigo-400",
        },
        {
            title: "المخبريين",
            count: nums.labs,
            color: "from-sky-500 to-sky-400",
        },
        { title: "الغرف", count: 18, color: "from-violet-500 to-violet-400" },
    ];
    return (
        <AdminLayout>
            <div className="min-h-screen bg-gray-50 p-6">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">
                        الصفحة الرئيسية
                    </h1>

                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="ابحث هنا..."
                                className="w-64 pl-10 pr-3 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mb-10">
                    {sections.map((item, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl p-5 bg-gradient-to-br ${item.color} text-white shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer`}
                        >
                            <p className="text-sm opacity-90">{item.title}</p>
                            <p className="text-3xl font-bold mt-2">
                                {item.count}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="bg-white rounded-2xl shadow-sm p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                        تفاصيل الأقسام
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {sections.map((item, index) => (
                            <div
                                key={index}
                                className="bg-gray-100 rounded-xl p-5 hover:bg-gray-200 transition-all duration-300 flex flex-col justify-between"
                            >
                                <div>
                                    <p className="text-lg font-semibold text-gray-700 mb-2">
                                        {item.title}
                                    </p>
                                    <p className="text-gray-500 text-sm">
                                        عدد المسجلين:{" "}
                                        <span className="font-medium text-gray-700">
                                            {item.count}
                                        </span>
                                    </p>
                                </div>

                                <button className="mt-4 w-full py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition">
                                    عرض التفاصيل
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
