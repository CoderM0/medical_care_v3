export default function EmpProfile({ employee }) {
    console.log(employee);
    return (
        <div>
            <div className="  my-5 ">
                <div class="border-2 bg-white dark:bg-gray-800 rounded-xl  w-full p-8 transition-all duration-300 animate-fade-in">
                    <div class="flex flex-col md:flex-row ">
                        <div class="md:w-1/3 text-center mb-8 md:mb-0">
                            <img
                                src={`/storage/${employee.avatar}`}
                                alt="Profile Picture"
                                class="rounded-full w-48 h-48 mx-auto mb-4 border-4 border-indigo-800 dark:border-blue-900 transition-transform duration-300 hover:scale-105"
                            />
                            <h1 class="text-2xl font-bold text-indigo-800 dark:text-white mb-2">
                                {employee.name}
                            </h1>
                            <p class="text-gray-600 dark:text-gray-300">
                                {employee.specialty.title}
                            </p>
                        </div>
                        <div class="md:w-2/3 md:pl-8 pr-2 border-r-2">
                            <h2 class="text-xl font-semibold text-indigo-800 dark:text-white mb-4">
                                ال{employee.job_description.job_title}{" "}
                                {employee.name}
                            </h2>
                            <p class="text-gray-700 dark:text-gray-300 mb-6">
                                {employee.bio}
                            </p>
                            <h2 class="text-xl font-semibold text-indigo-800 dark:text-white mb-4">
                                معلومات اضافية
                            </h2>
                            <div class="flex flex-wrap gap-2 mb-6">
                                <h1>
                                    <span className="text-indigo-800 font-bold">
                                        {" "}
                                        قسم :{" "}
                                    </span>
                                    {employee.department.title}
                                </h1>
                                <h1>
                                    |{" "}
                                    <span className="text-indigo-800 font-bold">
                                        {" "}
                                        الشهادة :{" "}
                                    </span>
                                    {employee.license}
                                </h1>
                            </div>
                            <h2 class="text-xl font-semibold text-indigo-800 dark:text-white mb-4">
                                معلومات الاتصال
                            </h2>
                            <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                                <li class="flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-5 w-5 mr-2 text-indigo-800 dark:text-blue-900"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                    {employee.user.email}
                                </li>
                                <li class="flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-5 w-5 mr-2 text-indigo-800 dark:text-blue-900"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    {employee.contact}
                                </li>
                                <li class="flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-5 w-5 mr-2 text-indigo-800 dark:text-blue-900"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                    {employee.address}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
