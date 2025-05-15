import ApplicationLogo from "@/Components/ApplicationLogo";
import NavLink from "@/Components/NavLink";
import { Link } from "@inertiajs/react";
import { useState } from "react";

export default function LabLayout({ employee, children }) {
    const [opened, setOpened] = useState(false);
    return (
        <div>
            <nav className="bg-gray-900 text-white shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <Link href={route("laboratory.dashboard")}>
                                <ApplicationLogo className="w-16 h-16" />
                            </Link>
                            <div className="hidden md:ml-6 md:flex md:space-x-8">
                                <NavLink
                                    href={route("pharma.dashboard")}
                                    upactive={route().current(
                                        "laboratory.dashboard"
                                    )}
                                    className={`text-gray-400 hover:text-white border-b-2  px-1 pt-1 inline-flex items-center text-sm font-medium `}
                                >
                                    الصفحة الرئيسية
                                </NavLink>
                            </div>
                        </div>
                        <div className="flex items-center">
                            {/* <!-- Profile dropdown --> */}
                            <div className="ml-3 relative hidden md:block">
                                <div>
                                    <button
                                        onClick={() => setOpened(!opened)}
                                        type="button"
                                        className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                        id="user-menu-button"
                                        aria-expanded="false"
                                        aria-haspopup="true"
                                    >
                                        <span className="sr-only">
                                            Open user menu
                                        </span>
                                        <img
                                            className="h-8 w-8 rounded-full"
                                            src={`/storage/${employee.avatar}`}
                                            alt=""
                                        />
                                    </button>
                                </div>

                                {/* <!-- Dropdown menu, show/hide based on menu state --> */}
                                <div
                                    className={` ${
                                        opened
                                            ? "absolute origin-top-left left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                            : "hidden"
                                    }`}
                                    id="user-menu"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="user-menu-button"
                                    tabIndex="-1"
                                >
                                    <Link
                                        href={route("employee.profile.view")}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        role="menuitem"
                                        tabIndex="-1"
                                    >
                                        الملف الشخصي
                                    </Link>
                                    {/* <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        role="menuitem"
                                        tabIndex="-1"
                                    >
                                        Settings
                                    </a> */}
                                    <Link
                                        href={route("logout")}
                                        method="post"
                                        className="block text-start w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        tabIndex="-1"
                                    >
                                        تسجيل الخروج
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <main>{children}</main>
        </div>
    );
}
