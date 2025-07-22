import InputError from "@/Components/InputError";
import Loader from "@/Components/Loader";
import TextInput from "@/Components/TextInput";
import DoctorLayout from "@/Layouts/DoctorLayout";
import { useForm } from "@inertiajs/react";
import { useEffect } from "react";

export default function AddTask({ employees, employee, tasks }) {
    console.log("t", tasks);
    const { data, setData, errors, post, reset, processing } = useForm({
        employee_id: employees[0]["id"],
        task_description: "",
    });
    useEffect(() => {
        setData("commander_id", employee.id);
    }, []);
    const add_task = () => {
        post(route("doctor.save_task"));
    };
    return (
        <DoctorLayout employee={employee}>
            {processing ? (
                <Loader />
            ) : (
                <div className="flex ">
                    <div className="w-1/2">
                        <div className=" p-2 rounded-auto border mt-10">
                            <div className="flex gap-2">
                                <select
                                    name="emps"
                                    value={data.employee_id}
                                    onChange={(e) =>
                                        setData("employee_id", e.target.value)
                                    }
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block p-1 px-4 w-[40%]"
                                >
                                    {employees.map((el) => {
                                        return (
                                            <option key={el.id} value={el.id}>
                                                {el.name}
                                            </option>
                                        );
                                    })}
                                </select>{" "}
                                <div className="w-full">
                                    <TextInput
                                        className="w-full"
                                        value={data.task_description}
                                        placeholder="وصف المهمة"
                                        onChange={(e) =>
                                            setData(
                                                "task_description",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <InputError
                                        message={errors.task_description}
                                    />
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={add_task}
                            className="block w-1/5 mx-auto p-2 px-3 rounded-xl my-4 bg-green-500 text-white"
                        >
                            اضف
                        </button>
                    </div>
                    <div className="w-1/2 px-3">
                        <h1 className="text-center my-2">المهام غير المنجزة</h1>
                        {tasks.length == 0 ? (
                            <p>No UnDone Tasks Yet</p>
                        ) : (
                            tasks.map((task) => {
                                return (
                                    <div
                                        key={task.id}
                                        className="w-full p-2 rounded-xl bg-white text-blue-500 my-2 border-2"
                                    >
                                        {" "}
                                        <p>
                                            {"  الممرض  "}
                                            <span className="text-black font-bold">
                                                {" "}
                                                {task.employee.name}{" "}
                                            </span>
                                        </p>
                                        <p className="font-bold text-green-500 mt-3">
                                            وصف المهمة
                                        </p>
                                        <p className="my-1 p-2">
                                            {task.task_description}
                                        </p>
                                    </div>
                                );
                            })
                        )}
                    </div>
                </div>
            )}
        </DoctorLayout>
    );
}
