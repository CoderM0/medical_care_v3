export default function EmpProfile({ employee }) {
    return (
        <div className="w-full ">
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden border border-blue-100 transition-all duration-300 hover:shadow-xl">
                <div className="bg-gradient-to-r from-blue-600 to-blue-300 p-6 flex flex-col md:flex-row items-center gap-6">
                    <img
                        src={`/storage/${employee.avatar}`}
                        alt="Profile"
                        className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-md transition-transform duration-300 hover:scale-105"
                    />
                    <div className="text-center md:text-right text-white">
                        <h1 className="text-3xl font-bold">{employee.name}</h1>
                        <p className="text-blue-100 text-lg mt-1">
                            {employee.specialty.title}
                        </p>
                        <p className="text-blue-50 mt-2">
                            {employee.job_description.job_title} في{" "}
                            <span className="font-semibold">
                                {employee.department.title}
                            </span>
                        </p>
                    </div>
                </div>

                <div className="p-8 md:p-10 bg-gradient-to-b from-white to-blue-50">
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold text-blue-700 mb-3">
                            نبذة
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            {employee.bio}
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-semibold text-blue-700 mb-3">
                            معلومات إضافية
                        </h2>
                        <div className="flex flex-wrap gap-6 text-gray-700">
                            <p>
                                <span className="font-semibold text-blue-700">
                                    القسم:
                                </span>{" "}
                                {employee.department.title}
                            </p>
                            <p>
                                <span className="font-semibold text-blue-700">
                                    الشهادة:
                                </span>{" "}
                                {employee.license}
                            </p>
                            <p>
                                <span className="font-semibold text-blue-700">
                                    الراتب:
                                </span>{" "}
                                <span className="text-green-600 font-semibold">
                                    ${employee.salary}
                                </span>
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-blue-700 mb-3">
                            معلومات الاتصال
                        </h2>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-center gap-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-blue-600"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                {employee.user.email}
                            </li>
                            <li className="flex items-center gap-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-blue-600"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                {employee.contact}
                            </li>
                            <li className="flex items-center gap-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-blue-600"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                {employee.address}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
