import ApplicationLogo from "@/Components/ApplicationLogo";
import NavLink from "@/Components/NavLink";
import { Link } from "@inertiajs/react";
import { BsSafe } from "react-icons/bs";
import { FaFileAlt } from "react-icons/fa";
import { FaFileShield } from "react-icons/fa6";

export default function AccountantLayout({ children }) {
    return (
        <div className="flex items-start  overflow-x-hidden h-auto gap-5  space-x-6 ">
            <div className="flex flex-col items-center w-72 h-screen overflow-hidden text-gray-700 bg-gray-100 rounded">
                <a className="flex items-center w-full px-3 mt-3" href="#">
                    <ApplicationLogo />
                    <span className="ml-2 text-sm font-bold">Med Care</span>
                </a>
                <div className="w-full px-2">
                    <div className="flex flex-col items-center w-full mt-3 border-t border-gray-300">
                        <NavLink
                            className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300"
                            href={route("accountant.dashboard")}
                            active={route().current("accountant.dashboard")}
                        >
                            <svg
                                className="w-6 h-6 stroke-current"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                />
                            </svg>
                            <span className="mx-2 text-sm font-medium">
                                الصفحة الرئيسية
                            </span>
                        </NavLink>

                        <NavLink
                            className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300"
                            href={route("accountant.safe.index")}
                            active={route().current("accountant.safe.index")}
                        >
                            <BsSafe size={"1.5rem"} />

                            <span className="mx-2 text-sm font-medium">
                                الخزنة
                            </span>
                        </NavLink>
                        <NavLink
                            className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300"
                            href={route("accountant.safe.records")}
                            active={route().current("accountant.safe.records")}
                        >
                            <FaFileShield size={"1.5rem"} />

                            <span className="mx-2 text-sm font-medium">
                                سجلات الخزنة
                            </span>
                        </NavLink>
                        <NavLink
                            className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300"
                            href={route("accountant.salary.records")}
                            active={route().current(
                                "accountant.salary.records"
                            )}
                        >
                            <FaFileAlt size={"1.5rem"} />

                            <span className="mx-2 text-sm font-medium">
                                سجلات الرواتب
                            </span>
                        </NavLink>
                    </div>
                </div>
                <div className="flex items-center justify-between w-full">
                    <Link
                        href={route("employee.profile.view")}
                        className="flex items-center justify-center w-full h-16 mt-auto bg-gray-200 hover:bg-gray-300"
                    >
                        <svg
                            className="w-6 h-6 stroke-current"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span className="ml-2 text-sm font-medium">حسابي</span>
                    </Link>
                    <Link
                        method="POST"
                        className="flex items-center justify-center w-full h-16 mt-auto bg-gray-200 hover:bg-gray-300"
                        href={route("logout")}
                    >
                        <span className="ml-2 text-sm font-medium">
                            تسجيل الخروج
                        </span>
                    </Link>
                </div>
            </div>
            {/* <!-- Component End  --> */}

            {/* <!-- Social Links  --> */}

            <main className="w-full ">{children}</main>
        </div>
    );
}
