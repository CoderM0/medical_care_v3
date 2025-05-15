import PatientLayout from "@/Layouts/PatientLayout";
import { Link } from "@inertiajs/react";

export default function ViewPatientProfile({ patient }) {
    console.log(patient);

    return (
        <PatientLayout patient={patient}>
            <div className="container mx-auto my-5 p-5 font-amirirg ">
                <div className="md:flex no-wrap md:-mx-2 ">
                    {/* <!-- Left Side --> */}
                    <div className="w-full md:w-3/12 md:mx-2">
                        {/* <!-- Profile Card --> */}
                        <div className="bg-white p-3 border-t-4 border-green-400">
                            <div className="image overflow-hidden">
                                <img
                                    className="h-auto w-full mx-auto"
                                    src={`/storage/${patient.avatar}`}
                                    alt=""
                                />
                            </div>
                            <h1 className="text-gray-900 font-bold text-xl text-center my-1">
                                {patient.name}
                            </h1>

                            <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                                <li className="flex items-center py-3">
                                    <span>الحالة</span>
                                    <span className="ml-auto mx-2">
                                        <span className="bg-green-500 py-1 px-2 rounded text-white ">
                                            {patient.active ? "نشط" : "غير نشط"}
                                        </span>
                                    </span>
                                </li>
                                <li className="flex items-center py-3">
                                    <span>انضم بتاريخ</span>
                                    <span className="ml-auto mx-2">
                                        {new Date(
                                            patient.created_at
                                        ).toLocaleDateString()}
                                    </span>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- End of profile card --> */}
                        <div className="my-4"></div>
                    </div>
                    {/* <!-- Right Side --> */}
                    <div className="w-full md:w-9/12 mx-2 h-64">
                        {/* <!-- Profile tab --> */}
                        {/* <!-- About Section --> */}
                        <div className="bg-white p-3 shadow-sm rounded-sm">
                            <div className="flex items-center space-x-2 font-bold text-gray-900 leading-8">
                                <span clas="text-green-500">
                                    <svg
                                        className="h-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        />
                                    </svg>
                                </span>
                                <span className="tracking-wide">حول</span>
                            </div>
                            <div className="text-gray-700">
                                <div className="grid md:grid-cols-2 text">
                                    <div className="grid grid-cols-2 border-t">
                                        <div className="px-4 py-2 font-semibold">
                                            الاسم
                                        </div>
                                        <div className="px-4 py-2">
                                            {patient.name}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-t"></div>
                                    <div className="grid grid-cols-2 border-t">
                                        <div className="px-4 py-2 font-semibold">
                                            الجنس
                                        </div>
                                        <div className="px-4 py-2">
                                            {patient.gender}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-t">
                                        <div className="px-4 py-2 font-semibold">
                                            زمرة الدم
                                        </div>
                                        <div className="px-4 py-2">
                                            {patient.blood_type}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-t">
                                        <div className="px-2 py-2 font-semibold">
                                            حساسية او ملاحظات مرضية سابقة
                                        </div>
                                        <div className="px-4 py-2">
                                            {patient.additional_case}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-t">
                                        {/* <div className="px-4 py-2 font-semibold">
                                            حساسية او ملاحظات مرضية سابقة
                                        </div>
                                        <div className="px-4 py-2">
                                            {patient.additional_case}
                                        </div> */}
                                    </div>
                                    <div className="grid grid-cols-2  border-t">
                                        <div className="px-4 py-2 font-semibold">
                                            البريد الالكتروني
                                        </div>
                                        <div className="px-4 py-2">
                                            <a
                                                className="text-blue-800"
                                                href="mailto:jane@example.com"
                                            >
                                                {patient.user.email}
                                            </a>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 border-t">
                                        <div className="px-4 py-2 font-semibold">
                                            العمر
                                        </div>
                                        <div className="px-4 py-2">
                                            {patient.age}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-5 mt-5">
                                <Link
                                    href={route("patient.profile.edit")}
                                    className="flex justify-center items-center w-full text-blue-800  font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
                                >
                                    تعديل معلومات المريض
                                </Link>
                                <Link
                                    href={route("profile.edit")}
                                    className="flex justify-center items-center w-full text-blue-800  font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
                                >
                                    تعديل معلومات الحساب
                                </Link>
                            </div>
                        </div>
                        {/* <!-- End of about section --> */}

                        <div className="my-4"></div>

                        {/* <!-- Experience and education --> */}

                        {/* <!-- End of profile tab --> */}
                    </div>
                </div>
            </div>
        </PatientLayout>
    );
}
