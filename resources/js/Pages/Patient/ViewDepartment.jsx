import BackBtn from "@/Components/BackBtn";
import PatientLayout from "@/Layouts/PatientLayout";
import { Link } from "@inertiajs/react";
import { FaCircleInfo, FaRegAddressBook, FaUserDoctor } from "react-icons/fa6";

export default function ViewDepartment({
    department_doctors,
    patient,
    depdesc,
}) {
    console.log(department_doctors);
    return (
        <PatientLayout patient={patient}>
            {/* <button className="" onClick={() => window.history.back()}>
                <IoArrowBackCircle size={"2.5rem"} />
            </button> */}
            <div className="m-2">
                <div className="flex justify-between items-center">
                    <div className="flex gap-1 items-center">
                        <FaCircleInfo size={"1.2rem"} color="blue" />
                        <p className="p-1 text-xl">حول القسم</p>
                    </div>
                    <div className="flex">
                        <BackBtn />
                    </div>
                </div>

                <p className="p-1  rounded-xl">{depdesc}</p>
            </div>
            {department_doctors.length > 0 ? (
                <>
                    {" "}
                    <div class="bg-gray-100 py-2 px-4 m-2 ">
                        <h2 class="text-xl font-semibold text-gray-800">
                            اطباء قسم {department_doctors[0].department.title}
                        </h2>
                    </div>
                    <ul class="divide-y divide-gray-200">
                        {department_doctors.map((emp, index) => {
                            return (
                                <li
                                    class="flex items-center py-4 px-6 gap-3 border mx-1 rounded-md"
                                    key={emp.id}
                                >
                                    <span class="text-gray-700 text-lg font-medium mr-4">
                                        {index + 1 + "."}
                                    </span>
                                    <img
                                        class="w-12 h-12 rounded-full object-cover mr-4"
                                        src={`/storage/${emp.avatar}`}
                                        alt="User avatar"
                                    />
                                    <div class="flex-1">
                                        <h3 class="text-lg font-medium text-gray-800">
                                            {emp.name}
                                        </h3>
                                        <p class="text-gray-600 text-base">
                                            {emp.specialty.title}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2 ">
                                        <Link
                                            href={route(
                                                "patient.view_doc",
                                                emp.id
                                            )}
                                            className="p-2 flex items-center gap-1 px-4 mx-2 rounded-lg bg-green-500 text-white"
                                        >
                                            عرض
                                            <FaUserDoctor />
                                        </Link>

                                        <Link
                                            className="p-2 px-4 mx-2  flex items-center gap-1 rounded-lg bg-green-500 text-white"
                                            href={route(
                                                "patient.appointment.index",
                                                emp.doctor.id
                                            )}
                                        >
                                            حجز موعد
                                            <FaRegAddressBook />
                                        </Link>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>{" "}
                </>
            ) : (
                <p className="my-5 text-center text-2xl text-green-500 font-bold">
                    لا يوجد اطباء في هذا القسم بعد
                </p>
            )}
        </PatientLayout>
    );
}
