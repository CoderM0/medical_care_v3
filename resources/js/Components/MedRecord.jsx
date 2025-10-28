export default function MedRecord({ med_record }) {
    return (
        <div className="flex-1 p-2">
            {med_record ? (
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                    <div className="p-6">
                        <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200 mb-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="text-center">
                                    <p className="text-sm text-gray-600 mb-1">
                                        اسم المريض
                                    </p>
                                    <p className="text-lg font-semibold text-blue-700">
                                        {med_record.patient.name}
                                    </p>
                                </div>
                                <div className="text-center">
                                    <p className="text-sm text-gray-600 mb-1">
                                        العمر
                                    </p>
                                    <p className="text-lg font-semibold text-blue-700">
                                        {med_record.patient.age}
                                    </p>
                                </div>
                                <div className="text-center">
                                    <p className="text-sm text-gray-600 mb-1">
                                        زمرة الدم
                                    </p>
                                    <p className="text-lg font-semibold text-blue-700">
                                        {med_record.patient.blood_type}
                                    </p>
                                </div>
                                <div className="text-center">
                                    <p className="text-sm text-gray-600 mb-1">
                                        الجنس
                                    </p>
                                    <p className="text-lg font-semibold text-blue-700">
                                        {med_record.patient.gender}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-4 bg-white rounded-xl p-4 border border-gray-200">
                                <div className="flex items-center gap-2 mb-2">
                                    <svg
                                        className="w-5 h-5 text-orange-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                                        />
                                    </svg>
                                    <span className="font-semibold text-gray-700">
                                        الحساسية والحالات المرضية السابقة
                                    </span>
                                </div>
                                <p className="text-gray-600">
                                    {med_record.patient.additional_case ||
                                        "لا توجد حالات مرضية مسجلة"}
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                                        <svg
                                            className="w-5 h-5 text-green-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                            />
                                        </svg>
                                        الوصفات الطبية
                                    </h3>
                                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                                        {med_record.descriptions.length} وصفة
                                    </span>
                                </div>

                                <div className="space-y-4 max-h-[600px] overflow-y-auto">
                                    {med_record.descriptions.map((desc) => (
                                        <div
                                            key={desc.id}
                                            className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-all duration-300"
                                        >
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                                                    {new Date(
                                                        desc.date
                                                    ).toLocaleDateString(
                                                        "en-us"
                                                    )}
                                                </span>
                                                <span className="text-sm font-medium text-gray-700">
                                                    د. {desc.doctor_name}
                                                </span>
                                                <span
                                                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                                                        desc.out_hospital
                                                            ? "bg-red-100 text-red-700"
                                                            : "bg-green-100 text-green-700"
                                                    }`}
                                                >
                                                    {desc.out_hospital
                                                        ? "خارجي"
                                                        : "داخلي"}
                                                </span>
                                            </div>

                                            <div className="mb-4">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <svg
                                                        className="w-4 h-4 text-blue-600"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                                        />
                                                    </svg>
                                                    <span className="font-semibold text-gray-700">
                                                        التشخيص
                                                    </span>
                                                </div>
                                                <p className="text-gray-600 bg-blue-50 p-3 rounded-lg text-sm">
                                                    {desc.disease}
                                                </p>
                                            </div>

                                            <div>
                                                <div className="flex items-center gap-2 mb-3">
                                                    <svg
                                                        className="w-4 h-4 text-red-600"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                                                        />
                                                    </svg>
                                                    <span className="font-semibold text-gray-700">
                                                        الأدوية
                                                    </span>
                                                </div>
                                                <div className="space-y-2">
                                                    {desc.medcines.map(
                                                        (med, index) => (
                                                            <div
                                                                key={index}
                                                                className="flex items-center justify-between bg-red-50 border-r-4 border-red-500 rounded-lg p-3"
                                                            >
                                                                <span className="font-medium text-red-700">
                                                                    {
                                                                        med.medcine_name
                                                                    }
                                                                </span>
                                                                <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm font-medium">
                                                                    {
                                                                        med.quantity
                                                                    }
                                                                </span>
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                                        <svg
                                            className="w-5 h-5 text-purple-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                                            />
                                        </svg>
                                        التحاليل المخبرية
                                    </h3>
                                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                                        {med_record.lab_tests.length} تحليل
                                    </span>
                                </div>

                                <div className="space-y-4 max-h-[600px] overflow-y-auto">
                                    {med_record.lab_tests.map((ltst) => (
                                        <div
                                            key={ltst.id}
                                            className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-all duration-300"
                                        >
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                                                    {new Date(
                                                        ltst.date
                                                    ).toLocaleDateString(
                                                        "en-us"
                                                    )}
                                                </span>
                                                <span className="text-sm font-medium text-gray-700">
                                                    د. {ltst.doctor_name}
                                                </span>
                                                <span
                                                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                                                        ltst.out_hospital
                                                            ? "bg-red-100 text-red-700"
                                                            : "bg-green-100 text-green-700"
                                                    }`}
                                                >
                                                    {ltst.out_hospital
                                                        ? "خارجي"
                                                        : "داخلي"}
                                                </span>
                                            </div>

                                            <div className="bg-purple-50 rounded-lg p-4 space-y-3">
                                                <div>
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <svg
                                                            className="w-4 h-4 text-purple-600"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                            />
                                                        </svg>
                                                        <span className="font-semibold text-purple-700 text-sm">
                                                            وصف التحليل
                                                        </span>
                                                    </div>
                                                    <p className="text-gray-700 text-sm">
                                                        {
                                                            ltst.lab_test_description
                                                        }
                                                    </p>
                                                </div>

                                                <div>
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <svg
                                                            className="w-4 h-4 text-green-600"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                            />
                                                        </svg>
                                                        <span className="font-semibold text-green-700 text-sm">
                                                            نتيجة التحليل
                                                        </span>
                                                    </div>
                                                    <p className="text-gray-700 text-sm">
                                                        {ltst.lab_test_result ||
                                                            "لم تدخل النتيجة بعد"}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="text-center py-12">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                            className="w-10 h-10 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                        </svg>
                    </div>
                    <p className="text-xl font-semibold text-gray-600 mb-2">
                        لا يوجد سجل طبي بعد
                    </p>
                    <p className="text-gray-400">
                        سيظهر هنا السجل الطبي عند إضافة البيانات
                    </p>
                </div>
            )}
        </div>
    );
}
