import AccountantLayout from "@/Layouts/AccountantLayout";
import { useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa6";
import { MdDoneOutline } from "react-icons/md";
import { TbXboxXFilled } from "react-icons/tb";

export default function AccountantDashboard({ employees_to_pay, jobs }) {
    const { post, processing } = useForm();
    const [succ, setSucc] = useState();
    const [fail, setFail] = useState();
    const [filteredEmployees, setFilteredEmployees] = useState([
        ...employees_to_pay,
    ]);

    const filterItems = (item) => {
        if (item == "all") {
            setFilteredEmployees(employees_to_pay);
        } else {
            const tmp = employees_to_pay.filter(
                (emp) => emp.job_description.job_title == item
            );

            setFilteredEmployees(tmp);
        }
    };
    useEffect(() => {
        setFilteredEmployees(employees_to_pay);
    }, [employees_to_pay]);
    const pay_salary = (emp_id) => {
        post(route("accountant.payments.pay", emp_id), {
            onSuccess: () => {
                setSucc(true);
                setTimeout(() => {
                    setSucc(false);
                }, 1000);
            },
            onError: () => {
                setFail(true);
                setTimeout(() => {
                    setFail(false);
                }, 3000);
            },
        });
    };
    return (
        <AccountantLayout>
            {processing || succ || fail ? (
                <div className="absolute top-0 right-0 z-20 w-screen h-screen bg-black/30">
                    <div className="w-1/2 mt-40 h-60 flex flex-col gap-5 justify-center items-center mx-auto p-2 rounded-xl bg-white">
                        {fail && <TbXboxXFilled size={"2rem"} color="red" />}
                        {fail && (
                            <p className="text-red-500">
                                {" "}
                                فشلت العملية تحقق من الكمية الموجودة في الخزنة{" "}
                            </p>
                        )}

                        {succ ? (
                            <MdDoneOutline
                                size={"2rem"}
                                color="green"
                                className="animate-bounce"
                            />
                        ) : (
                            !fail && (
                                <FaSpinner
                                    size={"2rem"}
                                    color="yellow"
                                    className="animate-spin"
                                />
                            )
                        )}
                        {succ ? (
                            <p className="text-green-500"> تم الدفع بنجاح </p>
                        ) : (
                            !fail && (
                                <p className="text-yellow-500">جار الدفع... </p>
                            )
                        )}
                        {/*  */}
                    </div>
                </div>
            ) : (
                <div className="bg-white shadow-md rounded-md overflow-hidden w-11/12 mx-auto  h-screen overflow-y-auto">
                    <div className="bg-gray-100 py-2 px-4 flex gap-3 items-center sticky top-0">
                        <h2 className="text-xl font-semibold text-gray-800 ">
                            الموظفين
                        </h2>
                        <select
                            name="job_id"
                            onChange={(e) => {
                                filterItems(e.target.value);
                            }}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                        >
                            <option value={"all"}>جميع الموظفين</option>
                            {jobs.map((job) => {
                                return (
                                    <option key={job.id} value={job.job_title}>
                                        {job.job_title}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <ul className="divide-y divide-gray-200">
                        {filteredEmployees.length == 0 ? (
                            <p className="p-4 text-center my-5">
                                لا يوجد موظفين في هذا المنصب !{" "}
                            </p>
                        ) : (
                            filteredEmployees.map((employee) => {
                                return (
                                    <li
                                        key={employee.id}
                                        className="flex items-center py-4 px-6"
                                    >
                                        <img
                                            className="w-12 h-12 rounded-full object-cover mr-4"
                                            src={`/storage/${employee.avatar}`}
                                            alt="User avatar"
                                        />
                                        <div className="flex-1">
                                            <h3 className="text-lg font-medium text-gray-800 mx-2">
                                                {employee.name}
                                            </h3>
                                            <p className="text-gray-600 text-base mx-2">
                                                <span className="text-green-700 font-bold uppercase">
                                                    {
                                                        employee.job_description
                                                            .job_title
                                                    }{" "}
                                                </span>
                                                {" اختصاص"}-{" "}
                                                {employee.specialty.title} -
                                                {" قسم "}
                                                {employee.department.title}{" "}
                                            </p>
                                        </div>

                                        <div className="w-[40%] flex justify-end items-center">
                                            <button
                                                onClick={() =>
                                                    pay_salary(employee.id)
                                                }
                                                className="border border-green-500 bg-green-500 text-white rounded-md px-4 flex gap-2 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
                                            >
                                                دفع الراتب (
                                                <p>${employee.salary}</p>)
                                            </button>
                                        </div>
                                    </li>
                                );
                            })
                        )}
                    </ul>
                    {/*  */}
                </div>
            )}
        </AccountantLayout>
    );
}
