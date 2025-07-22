import PatientLayout from "@/Layouts/PatientLayout";
import { Link } from "@inertiajs/react";

export default function PatientDashboard({ departments, patient }) {
    console.log(patient);
    return (
        <PatientLayout patient={patient}>
            <div className="">
                <p className="px-10 p-2 w-full border-t-2 text-indigo-950 underline text-center">
                    اقسام المشفى
                </p>
                <div
                    className={`flex  px-8 ${
                        departments.length < 3
                            ? "justify-start "
                            : "justify-around "
                    }  flex-wrap`}
                >
                    {departments.map((dep) => {
                        return (
                            <div className="p-2 rounded-xl " key={dep.id}>
                                <div className="p-2 max-w-lg w-[370px] h-[400px] border border-gray-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col ">
                                    <div class="aspect-w-3 aspect-h-1 rounded-2xl border shadow overflow-hidden bg-gray-100">
                                        <img
                                            src={`/storage/${dep.department_img}`}
                                            loading="lazy"
                                            className="object-center object-cover h-[200px] w-[490px]"
                                        />
                                    </div>

                                    <div className="mt-8">
                                        <h4 className="font-bold text-xl">
                                            {dep.title}
                                        </h4>
                                        <p className="mt-2 text-gray-600 h-[50px]">
                                            {dep.description.slice(0, 50) +
                                                "..."}
                                        </p>
                                        <div className="mt-5">
                                            <Link
                                                href={route(
                                                    "patient.viewDep",
                                                    dep.id
                                                )}
                                                className="block w-1/2 mx-auto text-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900"
                                            >
                                                عرض
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </PatientLayout>
    );
}
