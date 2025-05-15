import Loader from "@/Components/Loader";
import PharmaLayout from "@/Layouts/PharmaLayout";
import { useForm } from "@inertiajs/react";

export default function PharmaDashboard({ employee, medical_descs }) {
    const { post, processing } = useForm();

    const check_med_desc = (id) => {
        post(route("pharma.check_medcical_desc", id));
    };
    return (
        <PharmaLayout employee={employee}>
            <div className="py-12">
                {processing ? (
                    <Loader />
                ) : (
                    <form
                        className="flex justify-around flex-wrap"
                        onSubmit={check_med_desc}
                    >
                        {medical_descs.length == 0 ? (
                            <p className="font-bold text-center text-xl">
                                لا يوجد وصفات بعد{" "}
                            </p>
                        ) : (
                            medical_descs.map((med_desc) => {
                                return (
                                    <div
                                        key={med_desc.id}
                                        className="my-5 p-2 border-2 rounded-lg w-[45%] "
                                    >
                                        <div className="font-bold my-2 flex justify-between">
                                            <p>
                                                اسم المريض-{" "}
                                                {med_desc.patient.name}{" "}
                                            </p>
                                            <p>
                                                كود المريض -{" "}
                                                {med_desc.patient.id}{" "}
                                            </p>
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
                                                                {
                                                                    med.medcine_name
                                                                }{" "}
                                                            </span>
                                                        </p>
                                                        <p>
                                                            {"  "}
                                                            سعر الواحدة
                                                            <span className="font-bold mx-2">
                                                                $
                                                                {
                                                                    med.medcine_price
                                                                }{" "}
                                                            </span>
                                                        </p>
                                                        <p>
                                                            {" "}
                                                            الكمية{" "}
                                                            {med.quantity}{" "}
                                                        </p>
                                                    </div>
                                                );
                                            })}
                                        </ul>
                                        <div className="flex gap-2 items-center mt-3">
                                            {" "}
                                            <p>السعر الاجمالي </p>
                                            <p className="text-green-500">
                                                {med_desc.total_price}$
                                            </p>
                                        </div>
                                        <div className="my-5  ">
                                            <button
                                                onClick={() =>
                                                    check_med_desc(med_desc.id)
                                                }
                                                className="block px-3 p-2 rounded-xl w-1/3 mx-auto bg-green-500 text-white my-2"
                                            >
                                                صرف الوصفة
                                            </button>
                                        </div>
                                    </div>
                                );
                            })
                        )}
                    </form>
                )}
            </div>
        </PharmaLayout>
    );
}
