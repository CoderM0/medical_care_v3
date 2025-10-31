import Loader from "@/Components/Loader";
import PatientLayout from "@/Layouts/PatientLayout";
import { useForm } from "@inertiajs/react";
import { useState } from "react";

export default function AddComplaint({ patient }) {
    const [suc, setSuc] = useState(false);
    const { data, setData, errors, post, processing } = useForm({
        nick_name: patient.name,
        complaint: "",
        patient_id: patient.id,
    });

    const add_complaint = (e) => {
        e.preventDefault();
        post(route("patient.save_complaint"), {
            onSuccess: () => setSuc(true),
        });
    };

    return (
        <PatientLayout patient={patient}>
            <div className="py-6">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-blue-800 mb-2">
                        تقديم شكوى
                    </h1>
                    <p className="text-gray-600 text-sm">
                        نحن هنا لسماعك وتحسين خدماتنا
                    </p>
                </div>

                {processing ? (
                    <div className="flex justify-center items-center py-20">
                        <Loader />
                    </div>
                ) : suc ? (
                    <div className="max-w-md mx-auto bg-white border border-green-200 rounded-xl p-8 shadow-lg text-center">
                        <div className="text-green-500 text-6xl mb-4">✓</div>
                        <h3 className="text-xl font-bold text-green-700 mb-2">
                            تم تقديم الشكوى بنجاح
                        </h3>
                        <p className="text-gray-600 mb-6">
                            شكراً لك على مساعدتنا في التحسين
                        </p>
                        <button
                            onClick={() => setSuc(false)}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-all duration-200"
                        >
                            تقديم شكوى أخرى
                        </button>
                    </div>
                ) : (
                    <div className="max-w-2xl mx-auto bg-white border border-blue-100 rounded-xl p-8 shadow-lg">
                        <div className="text-center mb-6">
                            <div className="text-blue-500 text-4xl mb-3">
                                💬
                            </div>
                            <h2 className="text-2xl font-bold text-blue-800">
                                شاركنا ملاحظاتك
                            </h2>
                            <p className="text-gray-600 mt-2">
                                رأيك مهم لنا لتحسين جودة الخدمات
                            </p>
                        </div>

                        <form onSubmit={add_complaint}>
                            <div className="mb-6">
                                <label className="block text-blue-700 font-medium mb-3">
                                    الاسم المعروض
                                    <span className="text-gray-500 text-sm font-normal mr-2">
                                        (اختياري للخصوصية)
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    value={data.nick_name}
                                    onChange={(e) =>
                                        setData("nick_name", e.target.value)
                                    }
                                    className="w-full p-4 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                                    placeholder="يمكنك استخدام اسم مستعار"
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-blue-700 font-medium mb-3">
                                    نص الشكوى أو المقترح
                                </label>
                                <textarea
                                    className="w-full p-4 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg min-h-[150px] resize-none"
                                    rows="6"
                                    onChange={(e) =>
                                        setData("complaint", e.target.value)
                                    }
                                    placeholder="اكتب هنا تفاصيل شكواك أو اقتراحك..."
                                    required
                                ></textarea>
                                {errors.complaint && (
                                    <p className="text-red-500 text-sm mt-2">
                                        {errors.complaint}
                                    </p>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 px-6 rounded-lg font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={!data.complaint.trim()}
                            >
                                إرسال الشكوى
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </PatientLayout>
    );
}
