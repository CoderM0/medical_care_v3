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
        <div className="p-5 ">
            <h1 className="text-center font-bold">اضف تحليل طبي خارجي</h1>
            {processing ? (
                <Loader />
            ) : (
                <form
                    className=" mx-auto p-5 border-2 rounded-xl mt-5"
                    onSubmit={add_lab_test}
                >
                    <div className="my-2">
                        <div className="my-2">
                            <InputLabel> تاريخ الوصفة</InputLabel>
                            <TextInput
                                type="date"
                                value={data.lab_date}
                                className="my-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                onChange={(e) =>
                                    setData("lab_date", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.doctor_name}
                                className="mt-2"
                            ></InputError>
                        </div>
                        <div className="my-2 flex flex-col ">
                            <InputLabel> اسم الطبيب</InputLabel>
                            <TextInput
                                type="text"
                                className="my-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                value={data.doctor_name}
                                onChange={(e) =>
                                    setData("doctor_name", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.doctor_name}
                                className="mt-2"
                            ></InputError>
                        </div>
                        <div className="my-2 flex flex-col ">
                            <InputLabel>وصفة التحليل</InputLabel>
                            <textarea
                                name=""
                                id=""
                                className="my-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                value={data.lab_test_description}
                                onChange={(e) =>
                                    setData(
                                        "lab_test_description",
                                        e.target.value
                                    )
                                }
                                placeholder="وصفة التحليل"
                                rows={4}
                            ></textarea>
                            <InputError
                                message={errors.lab_test_description}
                                className="mt-2"
                            ></InputError>
                        </div>
                        <div className="my-2 flex flex-col ">
                            <InputLabel>نتيجة التحليل</InputLabel>
                            <textarea
                                name=""
                                id=""
                                value={data.lab_test_result}
                                onChange={(e) =>
                                    setData("lab_test_result", e.target.value)
                                }
                                placeholder="نتيجة التحليل"
                                rows={4}
                                className="my-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                            ></textarea>
                            <InputError
                                message={errors.lab_test_result}
                                className="mt-2"
                            ></InputError>
                        </div>
                    </div>

                    <button className="block rounded-xl w-1/3 mx-auto bg-green-500 p-3 text-white">
                        إضافة
                    </button>
                </form>
            )}
        </div>
    );
}
