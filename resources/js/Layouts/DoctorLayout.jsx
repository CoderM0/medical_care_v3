import ApplicationLogo from "@/Components/ApplicationLogo";
import BlackNav from "@/Components/BlackNav";
import { Link } from "@inertiajs/react";

export default function DoctorLayout({ children, employee }) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex font-tajawal">
            <div className="w-80 bg-white shadow-xl border-r border-gray-200 flex flex-col">
                <div className="p-6 border-b border-gray-100">
                    <Link
                        href={route("doctor.dashboard")}
                        className="flex items-center gap-4"
                    >
                        <ApplicationLogo className="w-12 h-12" />
                        <div>
                            <h1 className="text-xl font-bold text-gray-800">
                                نظام الأطباء
                            </h1>
                            <p className="text-gray-500 text-sm">
                                المنصة الطبية المتكاملة
                            </p>
                        </div>
                    </Link>
                </div>

                <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center gap-4">
                        <img
                            className="w-16 h-16 rounded-2xl border-2 border-blue-200 shadow-sm"
                            src={`/storage/${employee.avatar}`}
                            alt={employee.name}
                        />
                        <div className="flex-1">
                            <h3 className="font-semibold text-gray-800">
                                {employee.name}
                            </h3>
                            <p className="text-blue-600 text-sm bg-blue-50 px-3 py-1 rounded-full mt-1">
                                طبيب
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex-1 p-4 space-y-2">
                    <BlackNav
                        href={route("doctor.dashboard")}
                        active={route().current("doctor.dashboard")}
                        className={`flex items-center gap-4 px-4 py-4 rounded-2xl text-sm font-medium transition-all duration-300 group ${
                            route().current("doctor.dashboard")
                                ? "bg-blue-500 text-white shadow-lg"
                                : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                        }`}
                    >
                        <div
                            className={`p-2 rounded-xl ${
                                route().current("doctor.dashboard")
                                    ? "bg-white/20"
                                    : "bg-gray-100 group-hover:bg-blue-100"
                            }`}
                        >
                            <svg
                                className="w-5 h-5"
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
                        </div>
                        المواعيد
                    </BlackNav>

                    <BlackNav
                        href={route("doctor.add_task")}
                        active={route().current("doctor.add_task")}
                        className={`flex items-center gap-4 px-4 py-4 rounded-2xl text-sm font-medium transition-all duration-300 group ${
                            route().current("doctor.add_task")
                                ? "bg-blue-500 text-white shadow-lg"
                                : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                        }`}
                    >
                        <div
                            className={`p-2 rounded-xl ${
                                route().current("doctor.add_task")
                                    ? "bg-white/20"
                                    : "bg-gray-100 group-hover:bg-blue-100"
                            }`}
                        >
                            <svg
                                className="w-5 h-5"
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
                        أضف مهمة
                    </BlackNav>

                    <BlackNav
                        href={route(
                            "doctor.business.index",
                            employee.doctor.id
                        )}
                        active={route().current("doctor.business.index")}
                        className={`flex items-center gap-4 px-4 py-4 rounded-2xl text-sm font-medium transition-all duration-300 group ${
                            route().current("doctor.business.index")
                                ? "bg-blue-500 text-white shadow-lg"
                                : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                        }`}
                    >
                        <div
                            className={`p-2 rounded-xl ${
                                route().current("doctor.business.index")
                                    ? "bg-white/20"
                                    : "bg-gray-100 group-hover:bg-blue-100"
                            }`}
                        >
                            <svg
                                className="w-5 h-5"
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
                        جدول العمل
                    </BlackNav>

                    <BlackNav
                        href={route("doctor.ended_appointments")}
                        active={route().current("doctor.ended_appointments")}
                        className={`flex items-center gap-4 px-4 py-4 rounded-2xl text-sm font-medium transition-all duration-300 group ${
                            route().current("doctor.ended_appointments")
                                ? "bg-blue-500 text-white shadow-lg"
                                : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                        }`}
                    >
                        <div
                            className={`p-2 rounded-xl ${
                                route().current("doctor.ended_appointments")
                                    ? "bg-white/20"
                                    : "bg-gray-100 group-hover:bg-blue-100"
                            }`}
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                        المواعيد المنتهية
                    </BlackNav>
                </div>

                <div className="p-4 border-t border-gray-100 space-y-2">
                    <Link
                        href={route("doctor.view_profile")}
                        className={`flex items-center gap-4 px-4 py-3 rounded-2xl text-sm font-medium text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300    ${
                            route().current("doctor.view_profile")
                                ? "bg-blue-500 text-white shadow-lg"
                                : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                        } group `}
                    >
                        <div
                            className={`p-2 rounded-xl bg-gray-100 group-hover:bg-blue-100  ${
                                route().current("doctor.view_profile")
                                    ? "bg-white/20"
                                    : "bg-gray-100 group-hover:bg-blue-100"
                            }`}
                        >
                            <svg
                                className="w-5 h-5"
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
                        الملف الشخصي
                    </Link>
                    <Link
                        href={route("logout")}
                        method="post"
                        className="flex items-center gap-4 px-4 py-3 rounded-2xl text-sm font-medium text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all duration-300 group w-full"
                    >
                        <div className="p-2 rounded-xl bg-gray-100 group-hover:bg-red-100">
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                />
                            </svg>
                        </div>
                        تسجيل الخروج
                    </Link>
                </div>
            </div>

            <div className="flex-1 flex flex-col">
                <header className="bg-white shadow-sm border-b border-gray-200">
                    <div className="flex items-center justify-between px-8 py-6">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                                <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
                                {route().current("doctor.dashboard") &&
                                    "لوحة المواعيد"}
                                {route().current("doctor.add_task") &&
                                    "إضافة مهمة جديدة"}
                                {route().current("doctor.business.index") &&
                                    "جدول العمل"}
                                {route().current("doctor.ended_appointments") &&
                                    "المواعيد المنتهية"}
                                {route().current(
                                    "doctor.show_medical_record"
                                ) && "السجل الطبي "}
                                {route().current("doctor.add_lab_test") &&
                                    " طلب تحليل مخبري"}
                                {route().current("doctor.add_description") &&
                                    "  اضافة وصفة طبية"}
                                {route().current("doctor.view_profile") &&
                                    "    عرض الملف الشخصي"}
                            </h1>
                            <p className="text-gray-600 text-sm mt-2">
                                {route().current("doctor.dashboard") &&
                                    "إدارة مواعيد المرضى والحالات اليومية"}
                                {route().current("doctor.add_task") &&
                                    " إضافة مهام الى الموظفين ومتابعتها "}
                                {route().current("doctor.business.index") &&
                                    "تنظيم أوقات العمل الاسبوعية المتاحة للحجز"}
                                {route().current("doctor.ended_appointments") &&
                                    "سجل المواعيد المكتملة والتقارير"}
                                {route().current(
                                    "doctor.show_medical_record"
                                ) && " التاريخ المرضي والادوية والتحاليل "}
                                {route().current("doctor.add_lab_test") &&
                                    " اضافة تحليل جديد للمريض"}
                                {route().current("doctor.add_description") &&
                                    "    تشخيص المرض ووصف الدواء (خارجي - داخلي)"}
                                {route().current("doctor.view_profile") &&
                                    "     معلوماتك على المنصة "}
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="bg-blue-50 border border-blue-200 rounded-2xl px-6 py-3">
                                <p className="text-blue-700 font-semibold text-sm">
                                    مرحباً دكتور {employee.name}
                                </p>
                                <p className="text-blue-500 text-xs mt-1">
                                    آخر دخول:{" "}
                                    {new Date().toLocaleDateString("en-us")}
                                </p>
                            </div>
                        </div>
                    </div>
                </header>

                <main className="flex-1  overflow-auto">{children}</main>
            </div>
        </div>
    );
}
