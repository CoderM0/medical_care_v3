import InputError from "@/Components/InputError";
import Loader from "@/Components/Loader";
import DoctorLayout from "@/Layouts/DoctorLayout";
import { useForm } from "@inertiajs/react";

export default function AddLabTest({ employee, patient }) {
    const { setData, errors, post, processing } = useForm({});
    const add_lab_test = (e) => {
        e.preventDefault();
        post(route("doctor.save_lab_test", patient.id));
    };
    return (
        <DoctorLayout employee={employee}>
            {processing ? (
                <Loader />
            ) : (
                <form
                    className="w-1/2 mx-auto p-5 border-2 rounded-xl mt-5"
                    onSubmit={add_lab_test}
                >
                    <div className="my-2">
                        <div className="flex justify-between">
                            <p>اسم المريض {patient.name}</p>
                            <p>اسم الطبيب {employee.name}</p>
                        </div>
                        <textarea
                            name=""
                            id=""
                            onChange={(e) =>
                                setData("lab_test_description", e.target.value)
                            }
                            placeholder="وصفة التحليل"
                            rows={6}
                            className="w-full my-2 rounded-xl"
                        ></textarea>
                        <InputError
                            message={errors.lab_test_description}
                            className="mt-2"
                        ></InputError>
                    </div>
                    <button className="block rounded-xl w-1/3 mx-auto bg-green-500 p-3 text-white">
                        إضافة
                    </button>
                </form>
            )}
        </DoctorLayout>
    );
}
