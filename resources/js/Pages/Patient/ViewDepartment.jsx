import PatientLayout from "@/Layouts/PatientLayout";
import { Link } from "@inertiajs/react";

export default function ViewDepartment({ department_doctors, patient }) {
    console.log(department_doctors);
    return (
        <PatientLayout patient={patient}>
            {/* <button className="" onClick={() => window.history.back()}>
                <IoArrowBackCircle size={"2.5rem"} />
            </button> */}

            {department_doctors.length > 0 ? (
                <>
                    {" "}
                    <div class="bg-gray-100 py-2 px-4 m-4 ">
                        <h2 class="text-xl font-semibold text-gray-800">
                            اطباء قسم {department_doctors[0].department.title}
                        </h2>
                    </div>
                    <ul class="divide-y divide-gray-200">
                        {department_doctors.map((emp) => {
                            return (
                                <li
                                    class="flex items-center py-4 px-6 gap-3 border mx-1 rounded-md"
                                    key={emp.id}
                                >
                                    <span class="text-gray-700 text-lg font-medium mr-4">
                                        1.
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
                                            className="p-2 px-4 mx-2 rounded-xl bg-green-500 text-white"
                                        >
                                            عرض
                                        </Link>

                                        <Link
                                            className="p-2 px-4 mx-2 rounded-xl bg-green-500 text-white"
                                            href={route(
                                                "patient.appointment.index",
                                                emp.doctor.id
                                            )}
                                        >
                                            حجز موعد
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
