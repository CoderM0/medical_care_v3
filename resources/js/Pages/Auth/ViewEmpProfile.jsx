import { Link } from "@inertiajs/react";

export default function ViewEmpProfile({ employee }) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 font-tajawal">
            <div className=" mx-auto p-2">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                    <div className="p-8">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-1">
                                <div className="text-center">
                                    <img
                                        src={`/storage/${employee.avatar}`}
                                        alt="Profile Picture"
                                        className="rounded-2xl w-48 h-48 mx-auto mb-6 border-4 border-blue-200 shadow-lg"
                                    />
                                    <h1 className="text-2xl font-bold text-gray-800 mb-2">
                                        {employee.name}
                                    </h1>
                                    <p className="text-blue-600 font-semibold bg-blue-50 px-4 py-2 rounded-full inline-block">
                                        {employee.specialty.title}
                                    </p>

                                    <div className="mt-6 space-y-3">
                                        <Link
                                            href={route("profile.edit")}
                                            className="block w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                                        >
                                            تعديل معلومات الحساب
                                        </Link>
                                        <Link
                                            href={route(
                                                "employee.profile.edit"
                                            )}
                                            className="block w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                                        >
                                            تعديل المعلومات الشخصية
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-2 space-y-8">
                                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                                    <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
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
                                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        النبذة الشخصية
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        {employee.bio ||
                                            "لم يتم إضافة نبذة شخصية بعد"}
                                    </p>
                                </div>

                                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                                    <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                                        <svg
                                            className="w-6 h-6 text-green-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
                                            />
                                        </svg>
                                        المعلومات المهنية
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-200">
                                            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
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
                                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                                    />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-600">
                                                    القسم
                                                </p>
                                                <p className="font-semibold text-gray-800">
                                                    {employee.department.title}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-200">
                                            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                                                <svg
                                                    className="w-5 h-5 text-green-600"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M12 14l9-5-9-5-9 5 9 5z"
                                                    />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-600">
                                                    الشهادة
                                                </p>
                                                <p className="font-semibold text-gray-800">
                                                    {employee.license}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                                    <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                                        <svg
                                            className="w-6 h-6 text-purple-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            />
                                        </svg>
                                        معلومات الاتصال
                                    </h2>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4 bg-white rounded-xl p-4 border border-gray-200">
                                            <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                                                <svg
                                                    className="w-5 h-5 text-purple-600"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                    />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-600">
                                                    البريد الإلكتروني
                                                </p>
                                                <p className="font-semibold text-gray-800">
                                                    {employee.user.email}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 bg-white rounded-xl p-4 border border-gray-200">
                                            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
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
                                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                    />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-600">
                                                    رقم الهاتف
                                                </p>
                                                <p className="font-semibold text-gray-800">
                                                    {employee.contact}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 bg-white rounded-xl p-4 border border-gray-200">
                                            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                                                <svg
                                                    className="w-5 h-5 text-green-600"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                    />
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                    />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-600">
                                                    العنوان
                                                </p>
                                                <p className="font-semibold text-gray-800">
                                                    {employee.address}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
