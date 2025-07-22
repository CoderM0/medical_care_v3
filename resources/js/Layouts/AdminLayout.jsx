import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import LegendBox from "@/Components/LegendBox";
import ListItem from "@/Components/ListItem";
import { usePage } from "@inertiajs/react";
// import { IoIosCloseCircleOutline } from "react-icons/io";
import { HiMiniDocumentCurrencyDollar } from "react-icons/hi2";

import { CgProfile } from "react-icons/cg";
import { FaFileAlt } from "react-icons/fa";
import { FaBoxArchive, FaUserPlus } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import {
    MdDashboard,
    MdDomainAdd,
    MdOutlineInventory,
    MdPayment,
} from "react-icons/md";

export default function AdminLayout({ children }) {
    const user = usePage().props.auth.user;

    return (
        <div className="h-screen overflow-hidden">
            <div className="flex px-5 justify-between py-2 bg-gradient-to-tr from-indigo-900 to-indigo-600">
                <div>
                    <ApplicationLogo className="text-white" />
                </div>
                <div className="flex justify-end w-1/3">
                    {/*  */}
                    <div className="hidden sm:ms-6 sm:flex sm:items-center">
                        <div className="relative ms-3">
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <span className="inline-flex rounded-md">
                                        <button
                                            type="button"
                                            className="inline-flex items-center rounded-md border border-transparent  px-3 py-2 text-sm font-medium leading-4 text-gray-50 transition duration-150 ease-in-out hover:text-white focus:outline-none "
                                        >
                                            {"حسابي "}
                                            <CgProfile size={"2rem"} />
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
                                    <Dropdown.Link href={route("profile.edit")}>
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
                    {/*  */}
                </div>
            </div>
            <div className="flex">
                <section className={`w-1/4 bg-white border-l-2 py-2 pl-5 pr-2`}>
                    <ListItem
                        href={route("admin.dashboard")}
                        active={route().current("admin.dashboard")}
                    >
                        <MdDashboard />
                        <span className="text-center text-xl">
                            {" "}
                            الصفحة الرئيسية
                        </span>
                    </ListItem>

                    <LegendBox title={"الموظفين"}>
                        <ListItem
                            href={route("admin.add_employee")}
                            active={route().current("admin.add_employee")}
                        >
                            <FaUserPlus />
                            <span>إضافة موظف</span>
                        </ListItem>{" "}
                        <ListItem
                            href={route("admin.manage_employees")}
                            active={route().current("admin.manage_employees")}
                        >
                            <IoSettings />
                            <span>إدارة الموظفين</span>
                        </ListItem>{" "}
                        <ListItem
                            href={route("admin.add_department")}
                            active={route().current("admin.add_department")}
                        >
                            <MdDomainAdd />
                            <span>الأقسام والإختصاصات</span>
                        </ListItem>{" "}
                    </LegendBox>
                    {/* <h1 className="font-bold">Doctors</h1> */}

                    <LegendBox title={"السجلات"}>
                        <ListItem
                            href={route("admin.manage_patients")}
                            active={route().current("admin.manage_patients")}
                        >
                            <FaFileAlt />

                            <span>المرضى</span>
                        </ListItem>{" "}
                        <ListItem
                            href={route("admin.inventory.index")}
                            active={route().current("admin.inventory.index")}
                        >
                            <MdOutlineInventory />

                            <span> المستودع</span>
                        </ListItem>
                        <ListItem
                            href={route("admin.safe.index")}
                            active={route().current("admin.safe.index")}
                        >
                            <HiMiniDocumentCurrencyDollar />

                            <span> المالية</span>
                        </ListItem>
                        <ListItem
                            href={route("admin.salary.index")}
                            active={route().current("admin.salary.index")}
                        >
                            <MdPayment />

                            <span> الرواتب</span>
                        </ListItem>
                    </LegendBox>

                    {/*
                    // <ListItem
                    //     href={route("admin.dashboard")}
                    //     active={route().current("nurse.dashboard")}
                    // >
                    //     Analytics
                    // </ListItem> */}
                    <ListItem
                        href={route("admin.complaints")}
                        active={route().current("admin.complaints")}
                    >
                        <FaBoxArchive />

                        <span className="text-center "> صندوق الشكاوي</span>
                    </ListItem>
                </section>
                <main className="p-1 w-full h-full">{children}</main>
            </div>
        </div>
    );
}
