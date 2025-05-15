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
            {" "}
            {processing ? (
                <Loader />
            ) : (
                <div className="my-5 p-2 border-2 rounded-lg w-[45%]">
                    <div
                        key={med_desc.id}
                        ref={contentRef}
                        className=""
                        dir="rtl"
                    >
                        <div className="font-bold my-2 flex justify-between">
                            <p>اسم المريض- {patient.name} </p>
                            <p>كود المريض - {patient.id} </p>
                        </div>
                        <div className="font-bold my-2 flex justify-between">
                            <p>اسم الطبيب- {med_desc.doctor_name} </p>
                            <p className="bg-green-100 font-bold text-green-600 px-2 rounded-xl">
                                {new Date(med_desc.created_at).toDateString()}{" "}
                            </p>{" "}
                        </div>
                        <p>تشخيص المرض : {med_desc.disease}</p>
                        <ul>
                            <h1 className="text-center font-bold mt-5">
                                الادوية
                            </h1>
                            {med_desc.medcines.map((med) => {
                                return (
                                    <div
                                        key={med.medcine_name}
                                        className="flex items-center justify-between px-2 border-b py-2 dark:border-gray-600"
                                    >
                                        <p>
                                            {" "}
                                            اسم الدواء : #
                                            <span className="font-bold">
                                                {med.medcine_name}{" "}
                                            </span>
                                        </p>

                                        <p> الكمية {med.quantity} </p>
                                    </div>
                                );
                            })}
                        </ul>
                    </div>

                    <div className="my-5  flex items-center justify-between">
                        <button
                            onClick={() => check_med_desc(med_desc.id)}
                            className="block px-3 p-2 rounded-xl w-1/3 mx-auto bg-green-500 text-white my-2"
                        >
                            تم الشراء
                        </button>

                        <button
                            onClick={reactToPrintFn}
                            className="block px-3 p-2 rounded-xl w-1/3 mx-auto bg-yellow-500 text-white my-2"
                        >
                            طباعة
                        </button>
                    </div>
                </div>
            )}{" "}
        </>
    );
}
