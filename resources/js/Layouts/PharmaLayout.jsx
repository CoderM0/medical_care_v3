import ApplicationLogo from "@/Components/ApplicationLogo";
import BlackNav from "@/Components/BlackNav";
import { Link } from "@inertiajs/react";
import { useState } from "react";

export default function PharmaLayout({ employee, children }) {
    const [opened, setOpened] = useState(false);
    return (
        <div>
            <nav className="bg-gray-900 text-white shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <Link href={route("pharma.dashboard")}>
                            <ApplicationLogo className="w-16 h-16" />
                        </Link>
                        <div className="hidden w-2/3 justify-around md:ml-6 md:flex md:space-x-8">
                            <BlackNav
                                href={route("pharma.dashboard")}
                                active={route().current("pharma.dashboard")}
                                className={`text-gray-400 hover:text-white border-b-2  px-1 pt-1 inline-flex items-center text-sm font-medium `}
                            >
                                الصفحة الرئيسية
                            </BlackNav>
                            <BlackNav
                                href={route("pharma.inventory")}
                                active={route().current("pharma.inventory")}
                                className="text-gray-400 hover:text-white border-b-2 border-transparent hover:border-gray-300 px-1 pt-1 inline-flex items-center text-sm font-medium"
                            >
                                الصيدلية
                            </BlackNav>
                            <BlackNav
                                href={route("pharma.inventory.add")}
                                active={route().current("pharma.inventory.add")}
                                className="text-gray-400 hover:text-white border-b-2 border-transparent hover:border-gray-300 px-1 pt-1 inline-flex items-center text-sm font-medium"
                            >
                                اضافة ادوية
                            </BlackNav>
                        </div>

                        <div className="flex items-center">
                            {/* <!-- Search --> */}
                            {/* <div className="hidden md:flex md:ml-4">
                                <div className="relative">
                                    <input
                                        type="text"
                                        className="bg-gray-800 text-white rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-64"
                                        placeholder="Search..."
                                    />
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <svg
                                            className="h-5 w-5 text-gray-400"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div> */}

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

                            {/* <!-- Mobile menu button --> */}
                            <div className="flex items-center md:hidden ml-4">
                                <button
                                    type="button"
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                    aria-expanded="false"
                                    id="mobile-menu-button"
                                >
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile menu, show/hide based on menu state  */}
                <div className="md:hidden hidden" id="mobile-menu">
                    {/* Mobile search  */}
                    <div className="px-2 pt-2 pb-3">
                        <div className="relative">
                            <input
                                type="text"
                                className="bg-gray-800 text-white w-full rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="Search..."
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg
                                    className="h-5 w-5 text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 pb-3 border-t border-gray-700">
                        <div className="flex items-center px-5">
                            <div className="flex-shrink-0">
                                <img
                                    className="h-10 w-10 rounded-full"
                                    src={`/storage/${employee.avatar}`}
                                    alt=""
                                />
                            </div>
                            <div className="ml-3">
                                {/* <div className="text-base font-medium text-white">
                                    Tom Cook
                                </div>
                                <div className="text-sm font-medium text-gray-400">
                                    tom@example.com
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <main>{children}</main>
        </div>
    );
}
