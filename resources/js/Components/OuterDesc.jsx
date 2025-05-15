import { useForm } from "@inertiajs/react";
import { useRef, useState } from "react";

import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";

export default function OuterDesc({ patient }) {
    const { data, setData, post, errors } = useForm({});
    const MedRef = useRef();
    console.log(MedRef);
    const [tmpData, setTmpData] = useState({
        medcine_name: "",
        quantity: 1,
    });

    const [finalData, setFinalData] = useState([]);

    const add_data = () => {
        setFinalData((prev) => [...prev, tmpData]);
        MedRef.current.value = "";
    };

    const sendData = () => {
        post(route("patient.save_outerdescription", patient.id));
    };
    return (
        <div className="w-full px-4 py-2 ">
            <h1 className="text-center font-bold">اضف وصفة طبية خارجية</h1>
            <div className="p-5 border-2 rounded-xl mt-8">
                <div className="p-2 ">
                    {" "}
                    <InputLabel className="px-2"> تاريخ الوصفة</InputLabel>
                    <input
                        type="date"
                        className="my-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                        onChange={(e) => setData("desc_date", e.target.value)}
                    />
                </div>
                <div className="p-2">
                    {" "}
                    <InputLabel className="px-2"> اسم الطبيب</InputLabel>
                    <input
                        type="text"
                        className="my-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                        onChange={(e) => setData("doctor_name", e.target.value)}
                    />
                </div>
                <InputLabel className="px-2">التشخيص والملاحظات</InputLabel>
                <div className="flex gap-4 items-center  p-2 rounded-xl w-full">
                    <textarea
                        name=""
                        id=""
                        onChange={(e) => setData("disease", e.target.value)}
                        cols="30"
                        rows={4}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    ></textarea>
                    <InputError message={errors.description_title} />
                </div>

                <div className="flex items-center gap-4 mt-10">
                    <div className="w-full">
                        <InputLabel> اسم الدواء</InputLabel>
                        <input
                            ref={MedRef}
                            name=""
                            id=""
                            onChange={(e) => {
                                setTmpData((prev) => {
                                    return {
                                        ...prev,
                                        medcine_name: e.target.value,
                                    };
                                });
                            }}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                        />
                    </div>

                    <div className=" w-1/2">
                        <InputLabel>الكمية</InputLabel>
                        <input
                            type="number"
                            defaultValue={1}
                            min={1}
                            onChange={(e) =>
                                setTmpData((prev) => {
                                    return {
                                        ...prev,
                                        quantity: e.target.value,
                                    };
                                })
                            }
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                        />
                    </div>

                    <PrimaryButton
                        onClick={() => add_data()}
                        className="mt-5 "
                        disabled={MedRef.current?.value == ""}
                    >
                        أضف
                    </PrimaryButton>
                </div>

                <div className="w-full rounded-xl p-2 mx-auto bg-gray-100 mt-4">
                    <p className="text-center my-4">
                        :اسم المريض {patient.name}{" "}
                    </p>
                    {finalData.map((el) => {
                        return (
                            <div
                                className="flex justify-between items-center my-2 bg-white rounded-xl p-2"
                                key={el.medcine_name}
                            >
                                <span className="text-blue-500 font-bold">
                                    {" "}
                                    اسم الدواء{" "}
                                </span>{" "}
                                {el.medcine_name} |
                                <span className="text-blue-500 font-bold">
                                    {" "}
                                    العدد{" "}
                                </span>{" "}
                                {el.quantity}
                            </div>
                        );
                    })}
                    {Object.keys(data).length < 4 ? (
                        <button
                            disabled={finalData.length == 0}
                            className="disabled:cursor-not-allowed disabled:opacity-50 border block w-1/3 mx-auto mt-10 border-yellow-500 bg-yellow-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-yellow-600 focus:outline-none focus:shadow-outline"
                            onClick={() => {
                                setData("medcines", finalData);
                            }}
                        >
                            حفظ
                        </button>
                    ) : (
                        <button
                            className="disabled:cursor-not-allowed border block w-1/3 mx-auto mt-10 border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
                            onClick={sendData}
                        >
                            ارسال
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
