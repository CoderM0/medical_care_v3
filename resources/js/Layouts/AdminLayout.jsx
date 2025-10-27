import { usePage } from "@inertiajs/react";
// import { IoIosCloseCircleOutline } from "react-icons/io";

import { FaBoxArchive } from "react-icons/fa6";
import {
    FiArchive,
    FiArrowUpRight,
    FiFileText,
    FiHome,
    FiLogOut,
    FiSettings,
    FiUser,
    FiUserPlus,
    FiUsers,
} from "react-icons/fi";
import { MdDomainAdd } from "react-icons/md";
import { TfiMoney } from "react-icons/tfi";

import Accordion from "@/Components/Accordion";
import ListNav from "@/Components/ListNav";

import { Link } from "@inertiajs/react";
import { BsPeople, BsSafe } from "react-icons/bs";
import { FaHouseMedicalFlag } from "react-icons/fa6";
export default function AdminLayout({ children }) {
    const user = usePage().props.auth.user;

    return (
        <div className="flex h-full min-h-screen bg-neutral-100 font-tajawal">
            <div className="w-72 bg-primary flex flex-col items-center py-6 space-y-6 text-white rounded-l-2xl">
                <i className="text-2xl">لوحة التحكم</i>
                <Link
                    href={route("admin.dashboard")}
                    className={`flex gap-2 cursor-pointer items-center w-full px-8 py-2  ${
                        route().current("admin.dashboard")
                            ? " bg-blue-700"
                            : " bg-blue-600"
                    }  hover:bg-blue-700 text-white hover:text-white font-medium"
                `}
                >
                    <FiHome />
                    {"الرئيسية "}
                </Link>

                <Accordion
                    title={"الموظفون"}
                    routes={[
                        "admin.add_employee",
                        "admin.manage_employees",
                        "admin.add_department",
                    ]}
                    icon={<FiUsers size={"1.2rem"} />}
                >
                    <ListNav
                        href={route("admin.add_employee")}
                        active={route().current("admin.add_employee")}
                    >
                        <FiUserPlus size={"1.2rem"} />
                        <p> إضافة موظف </p>
                    </ListNav>
                    <ListNav
                        href={route("admin.manage_employees")}
                        active={route().current("admin.manage_employees")}
                    >
                        <FiSettings size={"1.2rem"} />
                        <p> إدارة الموظفين </p>
                    </ListNav>
                    <ListNav
                        href={route("admin.add_department")}
                        active={route().current("admin.add_department")}
                    >
                        <MdDomainAdd size={"1.2rem"} />
                        <p> الاقسام والاختصاصات</p>
                    </ListNav>
                </Accordion>

                <Accordion
                    title={"السجلات"}
                    routes={[
                        "admin.manage_patients",
                        "admin.inventory.index",
                        "admin.safe.index",
                        "admin.salary.index",
                    ]}
                    icon={<FiFileText size={"1.2rem"} />}
                >
                    <ListNav
                        href={route("admin.manage_patients")}
                        active={route().current("admin.manage_patients")}
                    >
                        <BsPeople size={"1.2rem"} />
                        <p> المرضى</p>
                    </ListNav>
                    <ListNav
                        href={route("admin.inventory.index")}
                        active={route().current("admin.inventory.index")}
                    >
                        <FaHouseMedicalFlag size={"1.2rem"} />

                        <p> المستودع</p>
                    </ListNav>
                    <ListNav
                        href={route("admin.safe.index")}
                        active={route().current("admin.safe.index")}
                    >
                        <BsSafe size={"1.2rem"} />

                        <p> المالية</p>
                    </ListNav>
                    <ListNav
                        href={route("admin.salary.index")}
                        active={route().current("admin.salary.index")}
                    >
                        <TfiMoney size={"1.2rem"} />
                        <p> الرواتب</p>
                    </ListNav>
                </Accordion>

                <Accordion
                    title={"الشكاوي"}
                    routes={["admin.complaints"]}
                    icon={<FiArchive size={"1.2rem"} />}
                >
                    <ListNav
                        href={route("admin.complaints")}
                        active={route().current("admin.complaints")}
                    >
                        <FaBoxArchive size={"1.2rem"} />
                        <p> شكاوي المراجعين</p>
                    </ListNav>
                </Accordion>
                <Link
                    href={route("admin.profile")}
                    className={`flex cursor-pointer justify-between items-center w-full px-4 py-2 ${
                        route().current("admin.profile")
                            ? " bg-blue-700"
                            : " bg-blue-600"
                    } hover:bg-blue-700  text-white font-medium rounded-md transition-colors duration-300"
                    `}
                >
                    <div className="flex items-center px-2 gap-2 w-full">
                        <FiUser size={"1.2rem"} />
                        <p className="text-right">{"حسابي"}</p>
                    </div>{" "}
                    <FiArrowUpRight size={"1.2rem"} />
                </Link>
                <Link
                    href={route("logout")}
                    method="post"
                    className="flex cursor-pointer justify-between items-center w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-300"
                >
                    <div className="flex items-center px-2 gap-2 w-full">
                        <FiUser size={"1.2rem"} />
                        <p className="text-right">{"تسجيل الخروج"}</p>
                    </div>{" "}
                    <FiLogOut size={"1.2rem"} />
                </Link>
            </div>

            <main className="p-1 w-full h-full">{children}</main>
        </div>
    );
}
