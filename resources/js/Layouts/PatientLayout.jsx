import ApplicationLogo from "@/Components/ApplicationLogo";
import BlackNav from "@/Components/BlackNav";
import Dropdown from "@/Components/Dropdown";
import { Link } from "@inertiajs/react";
import { useState } from "react";

export default function PatientLayout({ children, patient }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    return (
        <div>
            <nav class="font-amirirg bg-gray-900 text-white py-3 px-4 flex items-center justify-between">
                <Link href={"/"}>
                    <ApplicationLogo className="text-white" />
                </Link>
                <div class="flex items-center gap-5">
                    <BlackNav
                        active={route().current("patient.dashboard")}
                        // class="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"
                        href={route("patient.dashboard")}
                    >
                        الصفحة الرئيسية
                    </BlackNav>
                    <BlackNav
                        // className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"
                        href={route("patient.view_appointments", patient.id)}
                        active={route().current("patient.view_appointments")}
                    >
                        مواعيدي
                    </BlackNav>
                    <BlackNav
                        href={route("patient.view_medical_record", patient.id)}
                        active={route().current("patient.view_medical_record")}

                        // className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"
                    >
                        سجلي الطبي
                    </BlackNav>
                    <BlackNav
                        href={route("patient.add_to_medical_record")}
                        active={route().current(
                            "patient.add_to_medical_record"
                        )}

                        // className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"
                    >
                        تعديل سحلي الطبي
                    </BlackNav>
                    <BlackNav
                        href={route("patient.view_outer_medcins")}
                        active={route().current("patient.view_outer_medcins")}
                    >
                        الوصفات الخارجية
                    </BlackNav>
                    <BlackNav
                        href={route("patient.add_complaint")}
                        active={route().current("patient.add_complaint")}

                        // className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"
                    >
                        تقديم شكوى
                    </BlackNav>
                </div>
                <div>
                    <div className="hidden sm:ms-6 sm:flex sm:items-center">
                        <div className="relative ms-3">
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <span className="inline-flex rounded-md">
                                        <button
                                            type="button"
                                            className="inline-flex items-center rounded-md border border-transparent text-white px-3 py-2 text-sm font-medium leading-4  transition duration-150 ease-in-out  focus:outline-none "
                                        >
                                            {patient.name}

                                            <svg
                                                className="-me-0.5 ms-2 h-4 w-4"
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
                                        href={route("patient.profile.view")}
                                    >
                                        الملف الشخصي
                                    </Dropdown.Link>
                                    <Dropdown.Link
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                    >
                                        تسجيل الخروج
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                        </div>
                    </div>

                    <div className="-me-2 flex items-center sm:hidden">
                        <button
                            onClick={() =>
                                setShowingNavigationDropdown(
                                    (previousState) => !previousState
                                )
                            }
                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none dark:text-gray-500 dark:hover:bg-gray-900 dark:hover:text-gray-400 dark:focus:bg-gray-900 dark:focus:text-gray-400"
                        >
                            <svg
                                className="h-6 w-6"
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
            </nav>

            <main>{children}</main>
        </div>
    );
}
