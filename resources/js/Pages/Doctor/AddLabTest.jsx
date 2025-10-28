import InputError from "@/Components/InputError";
import Loader from "@/Components/Loader";
import DoctorLayout from "@/Layouts/DoctorLayout";
import { useForm } from "@inertiajs/react";

export default function AddLabTest({ employee, patient }) {
    const { setData, errors, post, processing } = useForm({});
    const add_lab_test = (e) => {
        e.preventDefault();
        post(route("doctor.save_lab_test", patient.id));
    };
    return (
        <DoctorLayout employee={employee}>
            {processing ? (
                <Loader />
            ) : (
                <div className="flex-1 p-2">
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 max-w-2xl mx-auto">
                        <form onSubmit={add_lab_test} className="p-6">
                            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200 mb-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="text-center">
                                        <p className="text-sm text-gray-600 mb-2">
                                            المريض
                                        </p>
                                        <div className="flex items-center justify-center gap-3">
                                            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                                                <svg
                                                    className="w-5 h-5 text-blue-600"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                                    />
                                                </svg>
                                            </div>
                                            <span className="font-semibold text-blue-700">
                                                {patient.name}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-sm text-gray-600 mb-2">
                                            الطبيب
                                        </p>
                                        <div className="flex items-center justify-center gap-3">
                                            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
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
                                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                                    />
                                                </svg>
                                            </div>
                                            <span className="font-semibold text-green-700">
                                                د. {employee.name}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-6">
                                <label className="text-sm font-semibold text-gray-700 mb-3  flex items-center gap-2">
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
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        />
                                    </svg>
                                    وصف التحليل المطلوب
                                </label>
                                <textarea
                                    onChange={(e) =>
                                        setData(
                                            "lab_test_description",
                                            e.target.value
                                        )
                                    }
                                    placeholder="أدخل وصف التحليل المطلوب والمؤشرات المراد فحصها..."
                                    rows={6}
                                    className="w-full border border-gray-300 rounded-2xl p-4 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 resize-vertical"
                                />
                                <InputError
                                    message={errors.lab_test_description}
                                    className="mt-2"
                                />
                            </div>

                            <div className="text-center">
                                <button className="bg-green-500 hover:bg-green-600 text-white px-12 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] text-lg">
                                    إضافة التحليل
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </DoctorLayout>
    );
}
