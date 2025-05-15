import InputError from "@/Components/InputError";
import Loader from "@/Components/Loader";
import LabLayout from "@/Layouts/LabLayout";
import { useForm } from "@inertiajs/react";

export default function LabDashboard({ employee, lab_tests }) {
    console.log(lab_tests);
    const { post, setData, errors, processing } = useForm();
    const check_lab_test = (id) => {
        post(route("laboratory.check_lab_test", id));
    };
    return (
        <LabLayout employee={employee}>
            <div className="w-full h-[85vh] flex overflow-hidden">
                <div className=" w-1/2 mx-auto ">
                    {lab_tests.length == 0 ? (
                        <p className="font-bold text-center text-xl mt-6">
                            لا يوجد وصفات تحاليل بعد{" "}
                        </p>
                    ) : (
                        <div className="h-[85vh] overflow-y-auto">
                            <h1 className="text-center font-bold text-blue-900 my-5 sticky top-0 bg-white py-2">
                                {lab_tests.length} تحاليل طبية
                            </h1>
                            {processing ? (
                                <Loader />
                            ) : (
                                lab_tests.map((lab_test) => {
                                    return (
                                        <div
                                            key={lab_test.id}
                                            className="border m-1 border-blue-900 text-blue-900 p-2 rounded-xl mb-5"
                                        >
                                            <p className="text-center font-bold ">
                                                الطبيب{" "}
                                                {lab_test.doctor.employee.name}
                                            </p>
                                            <p className="flex justify-between">
                                                <span className="text-blue-800">
                                                    اسم المريض{" "}
                                                    <span className="font-bold text-black">
                                                        {lab_test.patient.name}
                                                    </span>
                                                </span>{" "}
                                                <span>
                                                    العمر{" "}
                                                    <span className="font-bold text-black">
                                                        {lab_test.patient.age}{" "}
                                                    </span>
                                                </span>
                                            </p>
                                            <p className="flex justify-between">
                                                <span className="text-blue-800">
                                                    الجنس{" "}
                                                    <span className="font-bold text-black">
                                                        {" "}
                                                        {
                                                            lab_test.patient
                                                                .gender
                                                        }
                                                    </span>
                                                </span>{" "}
                                                <span>
                                                    زمرة الدم{" "}
                                                    <span className="font-bold text-black">
                                                        {
                                                            lab_test.patient
                                                                .blood_type
                                                        }
                                                    </span>
                                                </span>
                                            </p>
                                            <p className="my-2 ">
                                                <span className="text-blue-800">
                                                    وصفة التحليل
                                                </span>{" "}
                                                <span className="font-bold text-red-900">
                                                    {
                                                        lab_test.lab_test_description
                                                    }
                                                </span>
                                            </p>
                                            <textarea
                                                placeholder="اكتب نتيجة التحليل هنا"
                                                onChange={(e) =>
                                                    setData(
                                                        "lab_test_result",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full my-3 rounded-xl"
                                                rows={3}
                                            ></textarea>
                                            <InputError
                                                message={errors.lab_test_result}
                                            />
                                            <input
                                                type="number"
                                                placeholder="سعر التحليل"
                                                onChange={(e) =>
                                                    setData(
                                                        "total_cost",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full my-1 rounded-xl"
                                                rows={3}
                                            />
                                            <InputError
                                                message={errors.total_cost}
                                            />

                                            <button
                                                onClick={() =>
                                                    check_lab_test(lab_test.id)
                                                }
                                                className="block px-3 p-2 rounded-xl w-1/3 mx-auto bg-blue-900 text-white my-2"
                                            >
                                                تم
                                            </button>
                                        </div>
                                    );
                                })
                            )}{" "}
                        </div>
                    )}
                </div>
                <div className="w-1/2">
                    <img
                        src="/images/laboratory.png"
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </LabLayout>
    );
}
