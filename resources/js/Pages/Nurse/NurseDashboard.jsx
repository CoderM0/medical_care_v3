import ApplicationLogo from "@/Components/ApplicationLogo";
import Loader from "@/Components/Loader";
import { Link, useForm } from "@inertiajs/react";
import { useState } from "react";
import { MdOutlineDoneOutline } from "react-icons/md";

export default function PharmaDashboard({ tasks, employee }) {
    const [opened, setOpened] = useState(false);
    const { post, processing } = useForm();
    const do_task = (id) => {
        post(route("nurse.do_task", id));
    };
    return (
        <div>
            <nav className="bg-gray-900 text-white shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <Link href={route("doctor.dashboard")}>
                                <ApplicationLogo className="w-16 h-16" />
                            </Link>
                        </div>
                        <div className="flex items-center">
                            {/* <!-- Search --> */}
                            <div className="hidden md:flex md:ml-4">
                                <h1>{employee.name}</h1>
                            </div>

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

            {/*  */}

            <div className="py-12 w-1/2 mx-auto ">
                {tasks.length == 0 ? (
                    <p className="text-green-500 text-center">
                        لا مهمات لديك في الوقت الحالي
                    </p>
                ) : processing ? (
                    <Loader />
                ) : (
                    tasks.map((task) => {
                        return (
                            <div
                                key={task.id}
                                className="w-full p-2 rounded-xl bg-white text-blue-500 my-2 border-2"
                            >
                                <div className="flex justify-between px-2">
                                    <p className="font-bold text-green-500">
                                        وصف المهمة
                                    </p>
                                    <button
                                        onClick={() => do_task(task.id)}
                                        className=" flex items-center gap-3 p-2 px-3 rounded-xl bg-green-500 text-white"
                                    >
                                        تم <MdOutlineDoneOutline />
                                    </button>
                                </div>
                                <p className="my-2 p-2">
                                    {task.task_description}
                                </p>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
}
