import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import DoctorLayout from "@/Layouts/DoctorLayout";
import { useForm } from "@inertiajs/react";
import { useState } from "react";
import AddOuterMedcine from "./AddOuterMedcine";

export default function AddDescription({ employee, patient, medcine }) {
    const { data, setData, post, errors } = useForm({});
    const [outerfinalData, setOuterfinalData] = useState([]);

    const [quant, setQuant] = useState(medcine[0]?.quantity);
    const [tmpData, setTmpData] = useState({
        // pharma_id: pharma[0].id,
        medcine_name: medcine[0]?.title,
        medcine_price: medcine[0]?.unite_price,
        quantity: 1,
    });

    const [finalData, setFinalData] = useState([]);

    const checkmaxval = (val_id) => {
        medcine.map((el) => {
            if (el.id == val_id) {
                setQuant(el.quantity);
            }
        });
    };
    const add_data = () => {
        setFinalData((prev) => [...prev, tmpData]);
    };

    const sendData = () => {
        post(route("doctor.save_description", patient.id));
    };
    return (
        <DoctorLayout employee={employee}>
            <div className="flex-1 p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-blue-100 rounded-2xl flex items-center justify-center">
                                <svg
                                    className="w-6 h-6 text-blue-600"
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
                            </div>
                            <h2 className="text-xl font-bold text-gray-800">
                                التشخيص والوصفة الطبية
                            </h2>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <InputLabel className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                                    التشخيص والملاحظات
                                </InputLabel>
                                <textarea
                                    onChange={(e) =>
                                        setData(
                                            "description_title",
                                            e.target.value
                                        )
                                    }
                                    cols="30"
                                    rows={3}
                                    placeholder="أدخل التشخيص والملاحظات الطبية..."
                                    className="w-full border border-gray-300 rounded-2xl p-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-vertical"
                                />
                                <InputError
                                    message={errors.description_title}
                                    className="mt-2"
                                />
                            </div>

                            <div className="bg-blue-50 rounded-2xl p-4 border border-blue-200">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                                    <div>
                                        <InputLabel className="text-sm font-semibold text-gray-700 mb-2">
                                            الدواء
                                        </InputLabel>
                                        <select
                                            onChange={(e) => {
                                                setTmpData((prev) => {
                                                    return {
                                                        ...prev,
                                                        medcine_name:
                                                            e.target.value,
                                                        medcine_price:
                                                            medcine.find(
                                                                (md) =>
                                                                    md.title ==
                                                                    e.target
                                                                        .value
                                                            ).unite_price,
                                                    };
                                                });
                                                checkmaxval(e.target.value);
                                            }}
                                            className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white"
                                        >
                                            {medcine.map((md) => (
                                                <option
                                                    key={md.id}
                                                    value={md.title}
                                                >
                                                    {md.id}# {md.title}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <InputLabel className="text-sm font-semibold text-gray-700 mb-2">
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
                                            max={quant}
                                            className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white"
                                        />
                                    </div>

                                    <button
                                        onClick={() => add_data()}
                                        className="bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                                    >
                                        إضافة دواء
                                    </button>
                                </div>
                            </div>

                            <div className="border-t border-gray-200 pt-6">
                                <AddOuterMedcine
                                    doctor_name={employee.name}
                                    disease={data.description_title}
                                    patient_id={patient.id}
                                    setOuterfinalData={setOuterfinalData}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-green-100 rounded-2xl flex items-center justify-center">
                                <svg
                                    className="w-6 h-6 text-green-600"
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
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-800">
                                    الوصفة الطبية
                                </h2>
                                <p className="text-gray-600 text-sm">
                                    مراجعة الأدوية المضافة
                                </p>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                            <div className="text-center mb-6">
                                <div className="flex items-center justify-center gap-3 mb-2">
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
                                    <span className="font-semibold text-gray-800">
                                        المريض: {patient.name}
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-3 max-h-60 overflow-y-auto mb-6">
                                {finalData.map((el, index) => (
                                    <div
                                        key={el.medcine_name}
                                        className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-sm transition-all duration-300"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                                                    <span className="text-blue-600 font-bold text-sm">
                                                        {index + 1}
                                                    </span>
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-gray-800">
                                                        {el.medcine_name}
                                                    </p>
                                                    <p className="text-sm text-gray-600">
                                                        الكمية: {el.quantity}
                                                    </p>
                                                </div>
                                            </div>
                                            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                                                #{el.pharma_id}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {outerfinalData.length > 0 && (
                                <div className="mb-6">
                                    <div className="flex items-center gap-2 mb-4">
                                        <svg
                                            className="w-5 h-5 text-orange-600"
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
                                        <h3 className="font-semibold text-gray-800">
                                            أدوية خارجية
                                        </h3>
                                    </div>
                                    <div className="space-y-3">
                                        {outerfinalData.map((el, index) => (
                                            <div
                                                key={el.medcine_name}
                                                className="bg-orange-50 border border-orange-200 rounded-xl p-4"
                                            >
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                                                            <span className="text-orange-600 font-bold text-sm">
                                                                {index + 1}
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <p className="font-semibold text-gray-800">
                                                                {
                                                                    el.medcine_name
                                                                }
                                                            </p>
                                                            <p className="text-sm text-gray-600">
                                                                الكمية:{" "}
                                                                {el.quantity}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="border-t border-gray-200 pt-6 text-center">
                                {Object.keys(data).length < 2 ? (
                                    <button
                                        disabled={
                                            finalData.length == 0 &&
                                            outerfinalData.length == 0
                                        }
                                        onClick={() => {
                                            setData("description", finalData);
                                            setData(
                                                "outer_description",
                                                outerfinalData
                                            );
                                        }}
                                        className="bg-yellow-500 hover:bg-yellow-600 disabled:bg-yellow-300 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg disabled:cursor-not-allowed"
                                    >
                                        حفظ الوصفة
                                    </button>
                                ) : (
                                    <button
                                        onClick={sendData}
                                        className="bg-green-500 hover:bg-green-600 text-white px-12 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
                                    >
                                        إرسال الوصفة
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DoctorLayout>
    );
}
