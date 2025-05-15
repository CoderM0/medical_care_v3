import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import { useRef, useState } from "react";

export default function AddOuterMedcine({ setOuterfinalData }) {
    // const { data, setData, post, errors } = useForm({});
    const MedRef = useRef();
    // console.log(MedRef);
    const [tmpData, setTmpData] = useState({
        medcine_name: "",
        quantity: 1,
    });

    const add_data = () => {
        setOuterfinalData((prev) => [...prev, tmpData]);
        MedRef.current.value = "";
    };
    // useEffect(() => {
    //     setData("disease", disease);
    //     setData("doctor_name", doctor_name);
    // }, [disease]);
    // const sendData = () => {
    //     post(route("patient.save_outerdescription", patient_id));
    //     console.log(data);
    // };
    return (
        <div>
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
            {/* {finalData.map((el) => {
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
                        <span className="text-blue-500 font-bold"> العدد </span>{" "}
                        {el.quantity}
                    </div>
                );
            })} */}
        </div>
    );
}
