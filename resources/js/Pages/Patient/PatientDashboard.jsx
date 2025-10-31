import PatientLayout from "@/Layouts/PatientLayout";
import { Link } from "@inertiajs/react";

export default function PatientDashboard({ departments, patient }) {
    console.log(patient);
    return (
        <PatientLayout patient={patient}>
            <div className="py-6">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-blue-800 mb-2">
                        أقسام المستشفى
                    </h1>
                    <p className="text-gray-600 text-sm">
                        اختر القسم المناسب لحاجتك الطبية
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                    {departments.map((dep) => {
                        return (
                            <div
                                className="bg-white rounded-2xl border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] overflow-hidden"
                                key={dep.id}
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={`/storage/${dep.department_img}`}
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-3">
                                        <h3 className="font-bold text-lg text-blue-900">
                                            {dep.title}
                                        </h3>
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                                    </div>

                                    <p className="text-gray-600 text-sm leading-relaxed mb-4 h-12 overflow-hidden">
                                        {dep.description.slice(0, 80) + "..."}
                                    </p>

                                    <Link
                                        href={route("patient.viewDep", dep.id)}
                                        className="w-full bg-blue-500 hover:bg-blue-600 text-white text-center font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
                                    >
                                        <span>عرض القسم</span>
                                        <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {departments.length === 0 && (
                    <div className="text-center py-12">
                        <div className="text-gray-400 text-6xl mb-4">🏥</div>
                        <p className="text-gray-500 text-lg">
                            لا توجد أقسام متاحة حالياً
                        </p>
                    </div>
                )}
            </div>
        </PatientLayout>
    );
}
