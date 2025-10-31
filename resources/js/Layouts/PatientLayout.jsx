import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import UpNav from "@/Components/UpNav";
import { Link } from "@inertiajs/react";
import { useState } from "react";

export default function PatientLayout({ children, patient }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white font-tajawal">
            <header className="bg-white shadow-lg border-b-4 border-blue-500">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between py-4">
                        <Link href={"/"} className="flex items-center">
                            <ApplicationLogo className="text-blue-600 h-10 w-10" />
                            <div className="mr-3 text-right">
                                <div className="text-lg font-bold text-blue-800">
                                    العيادة الطبية
                                </div>
                                <div className="text-xs text-blue-600 font-medium">
                                    MedCare
                                </div>
                            </div>
                        </Link>

                        <nav className="hidden lg:flex items-center gap-1">
                            <UpNav
                                active={route().current("patient.dashboard")}
                                href={route("patient.dashboard")}
                                className="px-3 py-2 rounded-lg transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 text-sm font-normal flex items-center gap-2"
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
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                    />
                                </svg>
                                الصفحة الرئيسية
                            </UpNav>
                            <UpNav
                                href={route(
                                    "patient.view_appointments",
                                    patient.id
                                )}
                                active={route().current(
                                    "patient.view_appointments"
                                )}
                                className="px-3 py-2 rounded-lg transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 text-sm font-normal flex items-center gap-2"
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
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                </svg>
                                مواعيدي
                            </UpNav>
                            <UpNav
                                href={route(
                                    "patient.view_medical_record",
                                    patient.id
                                )}
                                active={route().current(
                                    "patient.view_medical_record"
                                )}
                                className="px-3 py-2 rounded-lg transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 text-sm font-normal flex items-center gap-2"
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
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    />
                                </svg>
                                سجلي الطبي
                            </UpNav>
                            <UpNav
                                href={route("patient.add_to_medical_record")}
                                active={route().current(
                                    "patient.add_to_medical_record"
                                )}
                                className="px-3 py-2 rounded-lg transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 text-sm font-normal flex items-center gap-2"
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
                                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                    />
                                </svg>
                                تعديل سجلي الطبي
                            </UpNav>
                            <UpNav
                                href={route("patient.view_outer_medcins")}
                                active={route().current(
                                    "patient.view_outer_medcins"
                                )}
                                className="px-3 py-2 rounded-lg transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 text-sm font-normal flex items-center gap-2"
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
                                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                                    />
                                </svg>
                                الوصفات الخارجية
                            </UpNav>
                            <UpNav
                                href={route("patient.add_complaint")}
                                active={route().current(
                                    "patient.add_complaint"
                                )}
                                className="px-3 py-2 rounded-lg transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 text-sm font-normal flex items-center gap-2"
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
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                تقديم شكوى
                            </UpNav>
                        </nav>

                        <div className="flex items-center gap-4">
                            <div className="hidden sm:ms-6 sm:flex sm:items-center">
                                <div className="relative ms-3">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center gap-2 rounded-lg text-gray-700 px-2 py-1 text-sm font-medium transition-all duration-200 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
                                                >
                                                    {patient.profile_image ? (
                                                        <img
                                                            src={
                                                                patient.profile_image
                                                            }
                                                            alt={patient.name}
                                                            className="w-8 h-8 rounded-full object-cover"
                                                        />
                                                    ) : (
                                                        <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm">
                                                            {patient.name.charAt(
                                                                0
                                                            )}
                                                        </div>
                                                    )}
                                                    <svg
                                                        className="h-4 w-4 text-gray-500"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                            </span>
                                        </Dropdown.Trigger>

                                        <Dropdown.Content>
                                            <Dropdown.Link
                                                href={route(
                                                    "patient.profile.view"
                                                )}
                                                className="text-blue-600 hover:bg-blue-50 flex items-center gap-2 text-sm"
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
                                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                                    />
                                                </svg>
                                                الملف الشخصي
                                            </Dropdown.Link>
                                            <Dropdown.Link
                                                href={route("logout")}
                                                method="post"
                                                as="button"
                                                className="text-red-600 hover:bg-red-50 flex items-center gap-2 text-sm"
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
                                                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                                    />
                                                </svg>
                                                تسجيل الخروج
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                            </div>

                            <div className="lg:hidden">
                                <button
                                    onClick={() =>
                                        setShowingNavigationDropdown(
                                            (previousState) => !previousState
                                        )
                                    }
                                    className="inline-flex items-center justify-center rounded-lg p-2 text-blue-600 transition duration-150 ease-in-out hover:bg-blue-50 hover:text-blue-700 focus:bg-blue-50 focus:text-blue-700 focus:outline-none"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            className={
                                                !showingNavigationDropdown
                                                    ? "inline-flex"
                                                    : "hidden"
                                            }
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                        <path
                                            className={
                                                showingNavigationDropdown
                                                    ? "inline-flex"
                                                    : "hidden"
                                            }
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {showingNavigationDropdown && (
                        <div className="lg:hidden py-3 border-t border-blue-100 bg-white rounded-lg shadow-inner">
                            <div className="flex flex-col space-y-1">
                                <UpNav
                                    active={route().current(
                                        "patient.dashboard"
                                    )}
                                    href={route("patient.dashboard")}
                                    className="px-3 py-2 rounded-lg transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 text-sm font-normal flex items-center gap-2"
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
                                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                        />
                                    </svg>
                                    الصفحة الرئيسية
                                </UpNav>
                                <UpNav
                                    href={route(
                                        "patient.view_appointments",
                                        patient.id
                                    )}
                                    active={route().current(
                                        "patient.view_appointments"
                                    )}
                                    className="px-3 py-2 rounded-lg transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 text-sm font-normal flex items-center gap-2"
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
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                    </svg>
                                    مواعيدي
                                </UpNav>
                                <UpNav
                                    href={route(
                                        "patient.view_medical_record",
                                        patient.id
                                    )}
                                    active={route().current(
                                        "patient.view_medical_record"
                                    )}
                                    className="px-3 py-2 rounded-lg transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 text-sm font-normal flex items-center gap-2"
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
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        />
                                    </svg>
                                    سجلي الطبي
                                </UpNav>
                                <UpNav
                                    href={route(
                                        "patient.add_to_medical_record"
                                    )}
                                    active={route().current(
                                        "patient.add_to_medical_record"
                                    )}
                                    className="px-3 py-2 rounded-lg transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 text-sm font-normal flex items-center gap-2"
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
                                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                        />
                                    </svg>
                                    تعديل سجلي الطبي
                                </UpNav>
                                <UpNav
                                    href={route("patient.view_outer_medcins")}
                                    active={route().current(
                                        "patient.view_outer_medcins"
                                    )}
                                    className="px-3 py-2 rounded-lg transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 text-sm font-normal flex items-center gap-2"
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
                                            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                                        />
                                    </svg>
                                    الوصفات الخارجية
                                </UpNav>
                                <UpNav
                                    href={route("patient.add_complaint")}
                                    active={route().current(
                                        "patient.add_complaint"
                                    )}
                                    className="px-3 py-2 rounded-lg transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 text-sm font-normal flex items-center gap-2"
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
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    تقديم شكوى
                                </UpNav>
                            </div>
                        </div>
                    )}
                </div>
            </header>

            <main className="container mx-auto px-4 py-6">
                <div className="bg-white rounded-xl shadow-lg border border-blue-100 p-5">
                    {children}
                </div>
            </main>
        </div>
    );
}
