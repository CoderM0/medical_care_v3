import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm } from "@inertiajs/react";
import { useRef, useState } from "react";

export default function OuterDesc({ patient }) {
    const { data, setData, post, errors } = useForm({});
    const MedRef = useRef();
    const [tmpData, setTmpData] = useState({
        medcine_name: "",
        quantity: 1,
    });

    const [finalData, setFinalData] = useState([]);

    const add_data = () => {
        setFinalData((prev) => [...prev, tmpData]);
        MedRef.current.value = "";
        setTmpData({ medcine_name: "", quantity: 1 });
    };

    const sendData = () => {
        post(route("patient.save_outerdescription", patient.id));
    };

    return (
        <div className="w-full px-4 py-2">
            <div className="text-center mb-6">
                <h1 className="text-xl font-bold text-blue-800">
                    إضافة وصفة طبية خارجية
                </h1>
                <p className="text-gray-600 text-sm mt-1">
                    أضف الوصفات الطبية من خارج العيادة
                </p>
            </div>

            <div className="bg-white border border-blue-100 rounded-xl p-6 shadow-lg">
                <div className="grid gap-4">
                    <div>
                        <InputLabel className="text-blue-700 font-medium mb-2">
                            تاريخ الوصفة
                        </InputLabel>
                        <input
                            type="date"
                            className="w-full p-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            onChange={(e) =>
                                setData("desc_date", e.target.value)
                            }
                        />
                    </div>

                    <div>
                        <InputLabel className="text-blue-700 font-medium mb-2">
                            اسم الطبيب
                        </InputLabel>
                        <input
                            type="text"
                            className="w-full p-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            onChange={(e) =>
                                setData("doctor_name", e.target.value)
                            }
                            placeholder="أدخل اسم الطبيب"
                        />
                    </div>

                    <div>
                        <InputLabel className="text-blue-700 font-medium mb-2">
                            التشخيص والملاحظات
                        </InputLabel>
                        <textarea
                            onChange={(e) => setData("disease", e.target.value)}
                            rows={4}
                            className="w-full p-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="أدخل التشخيص والملاحظات الطبية"
                        ></textarea>
                        <InputError message={errors.description_title} />
                    </div>
                </div>

                <div className="border-t border-blue-100 my-6 pt-6">
                    <h3 className="text-lg font-bold text-blue-800 mb-4">
                        إضافة الأدوية
                    </h3>
                    <div className="flex items-end gap-3">
                        <div className="flex-1">
                            <InputLabel className="text-blue-700 font-medium mb-2">
                                اسم الدواء
                            </InputLabel>
                            <input
                                ref={MedRef}
                                onChange={(e) => {
                                    setTmpData((prev) => ({
                                        ...prev,
                                        medcine_name: e.target.value,
                                    }));
                                }}
                                className="w-full p-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="أدخل اسم الدواء"
                            />
                        </div>

                        <div className="w-32">
                            <InputLabel className="text-blue-700 font-medium mb-2">
                                الكمية
                            </InputLabel>
                            <input
                                type="number"
                                defaultValue={1}
                                min={1}
                                onChange={(e) =>
                                    setTmpData((prev) => ({
                                        ...prev,
                                        quantity: e.target.value,
                                    }))
                                }
                                className="w-full p-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <PrimaryButton
                            onClick={add_data}
                            className="mb-2 bg-blue-500 hover:bg-blue-600"
                            disabled={!tmpData.medcine_name}
                        >
                            إضافة
                        </PrimaryButton>
                    </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-4">
                    <div className="text-center mb-4">
                        <p className="text-blue-800 font-bold">
                            المريض: {patient.name}
                        </p>
                    </div>

                    {finalData.map((el, index) => {
                        return (
                            <div
                                className="flex justify-between items-center bg-white rounded-lg p-3 mb-2 shadow-sm"
                                key={index}
                            >
                                <div className="flex items-center gap-4">
                                    <span className="text-blue-600 font-medium">
                                        اسم الدواء:
                                    </span>
                                    <span className="text-gray-700">
                                        {el.medcine_name}
                                    </span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-blue-600 font-medium">
                                        العدد:
                                    </span>
                                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-sm font-medium">
                                        {el.quantity}
                                    </span>
                                </div>
                            </div>
                        );
                    })}

                    {finalData.length === 0 && (
                        <div className="text-center py-4">
                            <p className="text-gray-500">
                                لم يتم إضافة أي أدوية بعد
                            </p>
                        </div>
                    )}

                    <div className="text-center mt-6">
                        {Object.keys(data).length < 4 ? (
                            <button
                                disabled={finalData.length === 0}
                                className={`px-6 py-3 rounded-lg font-bold transition-all duration-200 ${
                                    finalData.length === 0
                                        ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                                        : "bg-yellow-500 hover:bg-yellow-600 text-white shadow-lg"
                                }`}
                                onClick={() => {
                                    setData("medcines", finalData);
                                }}
                            >
                                حفظ الوصفة
                            </button>
                        ) : (
                            <button
                                className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-bold transition-all duration-200 shadow-lg"
                                onClick={sendData}
                            >
                                إرسال الوصفة
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
