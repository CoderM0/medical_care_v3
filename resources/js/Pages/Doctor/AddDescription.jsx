import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
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
            <div className="flex gap-5 mt-10 px-5">
                <div className=" w-1/2 p-2">
                    <InputLabel>التشخيص والملاحظات</InputLabel>
                    <div className="flex gap-4 items-center  p-2 rounded-xl w-full">
                        <textarea
                            name=""
                            id=""
                            onChange={(e) =>
                                setData("description_title", e.target.value)
                            }
                            cols="30"
                            rows={3}
                            className="w-full rounded-xl "
                        ></textarea>
                        <InputError message={errors.description_title} />
                    </div>

                    <div className="flex items-center gap-4 mt-5">
                        <div className="w-full">
                            <InputLabel>الدواء</InputLabel>
                            <select
                                name=""
                                id=""
                                onChange={(e) => {
                                    setTmpData((prev) => {
                                        return {
                                            ...prev,
                                            medcine_name: e.target.value,
                                            medcine_price: medcine.find(
                                                (md) =>
                                                    md.title == e.target.value
                                            ).unite_price,
                                        };
                                    });
                                    checkmaxval(e.target.value);
                                }}
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                            >
                                {medcine.map((md) => {
                                    return (
                                        <option key={md.id} value={md.title}>
                                            {md.id}# {md.title}
                                        </option>
                                    );
                                })}
                            </select>
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
                                max={quant}
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                            />
                        </div>

                        <PrimaryButton
                            onClick={() => add_data()}
                            className="mt-5 "
                        >
                            أضف
                        </PrimaryButton>
                    </div>
                    <p className="border-t-2 my-2 mt-7"></p>
                    <AddOuterMedcine
                        doctor_name={employee.name}
                        disease={data.description_title}
                        patient_id={patient.id}
                        setOuterfinalData={setOuterfinalData}
                    />
                </div>

                <div className=" w-1/2 p-5 mt-4">
                    <div className="w-full rounded-xl p-2 mx-auto bg-gray-100 ">
                        <p className="text-center my-4">
                            :اسم المريض {patient.name}{" "}
                        </p>
                        {finalData.map((el) => {
                            return (
                                <div
                                    className="flex justify-between items-center my-2 bg-white rounded-xl p-2"
                                    key={el.medcine_name}
                                >
                                    {/* <span className="text-blue-500 font-bold ">
                                    {" "}
                                    {index + 1}- pharma-code :{" "}
                                </span>{" "}
                                {el.pharma_id} | */}
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
                        {outerfinalData.length > 0 && (
                            <div className="f">
                                <p className="text-center my-2">
                                    الدواء الخارجي
                                </p>
                                {outerfinalData.map((el) => {
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
                            </div>
                        )}
                        {Object.keys(data).length < 2 ? (
                            <button
                                disabled={
                                    finalData.length == 0 &&
                                    outerfinalData.length == 0
                                }
                                className="disabled:cursor-not-allowed border block w-1/3 mx-auto mt-10 border-yellow-500 bg-yellow-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-yellow-600 focus:outline-none focus:shadow-outline"
                                onClick={() => {
                                    setData("description", finalData);
                                    setData(
                                        "outer_description",
                                        outerfinalData
                                    );
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
        </DoctorLayout>
    );
}
