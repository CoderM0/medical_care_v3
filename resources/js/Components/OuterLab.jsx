import InputError from "@/Components/InputError";
import Loader from "@/Components/Loader";
import { useForm } from "@inertiajs/react";
import InputLabel from "./InputLabel";
import TextInput from "./TextInput";

export default function OuterLab({ patient }) {
    const { setData, errors, post, processing, data } = useForm({
        doctor_name: "",
        lab_test_description: "",
        lab_date: "",
        lab_test_result: "",
    });

    const add_lab_test = (e) => {
        e.preventDefault();
        post(route("patient.save_outer_lab_test", patient.id));
    };

    return (
        <div className="w-full px-4 py-2">
            <div className="text-center mb-6">
                <h1 className="text-xl font-bold text-blue-800">
                    إضافة تحليل طبي خارجي
                </h1>
                <p className="text-gray-600 text-sm mt-1">
                    سجل نتائج التحاليل من خارج العيادة
                </p>
            </div>

            {processing ? (
                <div className="flex justify-center items-center py-12">
                    <Loader />
                </div>
            ) : (
                <form
                    className="bg-white border border-blue-100 rounded-xl p-6 shadow-lg"
                    onSubmit={add_lab_test}
                >
                    <div className="grid gap-4">
                        <div>
                            <InputLabel className="text-blue-700 font-medium mb-2">
                                تاريخ التحليل
                            </InputLabel>
                            <TextInput
                                type="date"
                                value={data.lab_date}
                                className="w-full p-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                onChange={(e) =>
                                    setData("lab_date", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.lab_date}
                                className="mt-2"
                            />
                        </div>

                        <div>
                            <InputLabel className="text-blue-700 font-medium mb-2">
                                اسم الطبيب
                            </InputLabel>
                            <TextInput
                                type="text"
                                className="w-full p-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                value={data.doctor_name}
                                onChange={(e) =>
                                    setData("doctor_name", e.target.value)
                                }
                                placeholder="أدخل اسم الطبيب"
                            />
                            <InputError
                                message={errors.doctor_name}
                                className="mt-2"
                            />
                        </div>

                        <div>
                            <InputLabel className="text-blue-700 font-medium mb-2">
                                وصفة التحليل
                            </InputLabel>
                            <textarea
                                className="w-full p-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                value={data.lab_test_description}
                                onChange={(e) =>
                                    setData(
                                        "lab_test_description",
                                        e.target.value
                                    )
                                }
                                placeholder="أدخل وصفة التحليل المطلوبة"
                                rows={4}
                            ></textarea>
                            <InputError
                                message={errors.lab_test_description}
                                className="mt-2"
                            />
                        </div>

                        <div>
                            <InputLabel className="text-blue-700 font-medium mb-2">
                                نتيجة التحليل
                            </InputLabel>
                            <textarea
                                value={data.lab_test_result}
                                onChange={(e) =>
                                    setData("lab_test_result", e.target.value)
                                }
                                placeholder="أدخل نتائج التحليل"
                                rows={4}
                                className="w-full p-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            ></textarea>
                            <InputError
                                message={errors.lab_test_result}
                                className="mt-2"
                            />
                        </div>
                    </div>

                    <div className="text-center mt-6">
                        <button
                            className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-bold transition-all duration-200 shadow-lg w-full md:w-auto"
                            type="submit"
                        >
                            إضافة التحليل
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
}
