import { useForm } from "@inertiajs/react";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Loader from "./Loader";

export default function OuterDescCard({ patient, med_desc }) {
    const { processing, post } = useForm();
    const contentRef = useRef(null);
    const reactToPrintFn = useReactToPrint({ contentRef });

    const check_med_desc = (id) => {
        post(route("patient.save_outer_medcins", id));
    };

    return (
        <>
            {processing ? (
                <div className="flex justify-center items-center p-8">
                    <Loader />
                </div>
            ) : (
                <div className="bg-white border border-blue-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 w-full">
                    <div
                        key={med_desc.id}
                        ref={contentRef}
                        className="mb-4"
                        dir="rtl"
                    >
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4 pb-4 border-b border-blue-100">
                            <div className="text-center sm:text-right">
                                <p className="text-blue-800 font-bold text-lg">
                                    {patient.name}
                                </p>
                                <p className="text-gray-600 text-sm">
                                    كود المريض: {patient.id}
                                </p>
                            </div>
                            <div className="text-center sm:text-left">
                                <p className="text-blue-700 font-medium">
                                    {med_desc.doctor_name}
                                </p>
                                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                                    {new Date(
                                        med_desc.created_at
                                    ).toLocaleDateString("ar-EG")}
                                </span>
                            </div>
                        </div>

                        <div className="mb-4">
                            <h3 className="text-blue-700 font-bold mb-2">
                                تشخيص المرض:
                            </h3>
                            <p className="text-gray-700 bg-blue-50 rounded-lg p-3 text-sm leading-relaxed">
                                {med_desc.disease}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-center text-blue-800 font-bold text-lg mb-3 border-b border-blue-100 pb-2">
                                الأدوية
                            </h3>
                            <div className="space-y-2">
                                {med_desc.medcines.map((med, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-blue-50 rounded-lg p-3 gap-2"
                                        >
                                            <div className="flex items-center gap-2 justify-center sm:justify-start">
                                                <span className="text-blue-600 font-medium">
                                                    اسم الدواء:
                                                </span>
                                                <span className="text-gray-800 font-bold">
                                                    {med.medcine_name}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2 justify-center sm:justify-start">
                                                <span className="text-blue-600 font-medium">
                                                    الكمية:
                                                </span>
                                                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-sm font-bold">
                                                    {med.quantity}
                                                </span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 pt-4 border-t border-blue-100">
                        <button
                            onClick={() => check_med_desc(med_desc.id)}
                            className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-medium transition-all duration-200 text-center"
                        >
                            تم الشراء
                        </button>

                        <button
                            onClick={reactToPrintFn}
                            className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-4 rounded-lg font-medium transition-all duration-200 text-center"
                        >
                            طباعة
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
