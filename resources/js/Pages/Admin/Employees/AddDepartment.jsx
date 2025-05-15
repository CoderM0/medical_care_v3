import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AdminLayout from "@/Layouts/AdminLayout";
import { Link, useForm } from "@inertiajs/react";
import { useState } from "react";
import { BiSolidCameraPlus } from "react-icons/bi";

export default function AddDepartment({ departments, specialities, jobs }) {
    const [newimg, setNewImg] = useState(null);
    const {
        data: depData,
        setData: setDepData,
        post,
        errors,
        reset,
    } = useForm({
        title: "",
        description: "",
        department_img: "",
    });
    const {
        data: specData,
        setData: setspecData,
        post: add_spec,
        errors: errorspec,
        reset: resetspec,
    } = useForm({
        title: "",
        type: "الجميع",
    });
    const add_dep = (e) => {
        e.preventDefault();
        post(route("admin.store_dep"), {
            onSuccess: () => reset(),
        });
    };
    const add_speciality = (e) => {
        e.preventDefault();
        add_spec(route("admin.store_specialty"), {
            onSuccess: () => resetspec(),
        });
    };
    return (
        <AdminLayout>
            <div className="h-[85vh] overflow-y-auto">
                <div className="flex gap-5 justify-center ">
                    <div className="w-[45%]  bg-white shadow-lg rounded-lg overflow-hidden mt-5 border">
                        <div className="px-4 py-2">
                            <h1 className="text-gray-800 font-bold text-2xl uppercase">
                                أضف قسم
                            </h1>
                        </div>
                        <form
                            className="w-full  px-4 mx-auto py-2 mb-2"
                            onSubmit={add_dep}
                        >
                            <div className=" border-b-2 border-indigo-500 py-2 space-y-3">
                                <InputLabel>اسم القسم</InputLabel>
                                <TextInput
                                    value={depData.title}
                                    onChange={(e) =>
                                        setDepData("title", e.target.value)
                                    }
                                    className=" my-2 w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                                    type="text"
                                    placeholder="اسم القسم"
                                />
                                <InputError
                                    message={errors.title}
                                    className="mt-2"
                                />
                                <InputLabel>وصف القسم</InputLabel>
                                <textarea
                                    name=""
                                    id=""
                                    value={depData.description}
                                    className="w-full rounded-xl"
                                    placeholder="أضف وصفا لما يقوم به القسم"
                                    onChange={(e) =>
                                        setDepData(
                                            "description",
                                            e.target.value
                                        )
                                    }
                                ></textarea>
                                <InputError
                                    message={errors.description}
                                    className="mt-2"
                                />
                                <InputLabel>أضف صورة معبرة عن القسم</InputLabel>
                                <div>
                                    <TextInput
                                        type="file"
                                        className="hidden"
                                        id="depimg"
                                        onChange={(e) => {
                                            setDepData(
                                                "department_img",
                                                e.target.files[0]
                                            );
                                            setNewImg(e.target.files[0]);
                                        }}
                                    />
                                    {newimg && (
                                        <img
                                            src={URL.createObjectURL(newimg)}
                                            className="object-cover w-40 h-40 rounded-lg mx-auto "
                                        />
                                    )}
                                    <label
                                        htmlFor="depimg"
                                        className="cursor-pointer"
                                    >
                                        {" "}
                                        <BiSolidCameraPlus
                                            color="indigo"
                                            size={"1.5rem"}
                                        />
                                    </label>
                                </div>

                                <InputError
                                    message={errors.department_img}
                                    className="mt-2"
                                />
                                <button
                                    className="flex-shrink-0 block mx-auto w-1/2 mt-7 bg-indigo-500 hover:bg-indigo-700 border-indigo-500 hover:border-indigo-700 text-sm border-4 text-white py-1 px-2 rounded"
                                    type="submit"
                                >
                                    أضف
                                </button>
                            </div>
                        </form>

                        <ul className="divide-y divide-gray-200 px-2 border">
                            {departments &&
                                departments.map((dep) => {
                                    return (
                                        <li className="py-4" key={dep.id}>
                                            <div className="flex justify-between">
                                                <div className="flex items-center">
                                                    <label
                                                        for="todo1"
                                                        className="ml-3 block text-gray-900"
                                                    >
                                                        <span className="text-lg font-medium">
                                                            {dep.title}
                                                        </span>
                                                        <span className="text-sm mx-3 font-light text-gray-500">
                                                            {new Date(
                                                                dep.created_at
                                                            ).toLocaleDateString()}
                                                        </span>
                                                    </label>
                                                </div>
                                                <Link
                                                    method="DELETE"
                                                    href={route(
                                                        "admin.delete_department",
                                                        dep.id
                                                    )}
                                                    className={` bg-red-500 text-white px-3 rounded-md py-1 ${
                                                        dep.title == "عام"
                                                            ? "hidden"
                                                            : ""
                                                    }`}
                                                >
                                                    حذف القسم
                                                </Link>
                                            </div>
                                        </li>
                                    );
                                })}
                        </ul>
                    </div>
                    {/*  */}
                    <div className="w-[45%]  bg-white shadow-lg rounded-lg overflow-hidden mt-5 border">
                        <div className="px-4 py-2">
                            <h1 className="text-gray-800 font-bold text-2xl uppercase">
                                أضف اختصاص
                            </h1>
                        </div>

                        <form
                            className="w-full px-4 mx-auto py-2 mb-2"
                            onSubmit={add_speciality}
                        >
                            <div className="flex items-center border-b-2 border-indigo-500 py-2">
                                <select
                                    name="types"
                                    value={specData.type}
                                    onChange={(e) =>
                                        setspecData("type", e.target.value)
                                    }
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block p-1 px-4 w-[40%]"
                                >
                                    <option value="الجميع">الجميع</option>
                                    {jobs &&
                                        jobs.map((el) => {
                                            return (
                                                <option
                                                    key={el.id}
                                                    value={el.job_title}
                                                >
                                                    {el.job_title}
                                                </option>
                                            );
                                        })}
                                </select>
                                <TextInput
                                    value={specData.title}
                                    onChange={(e) =>
                                        setspecData("title", e.target.value)
                                    }
                                    className=" bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none rounded-none "
                                    type="text"
                                    placeholder="ضع هنا اسم الاختصاص "
                                />

                                <InputError
                                    message={errorspec.title}
                                    className="mt-2"
                                />
                                <button
                                    className="flex-shrink-0 bg-indigo-500 hover:bg-indigo-700 border-indigo-500 hover:border-indigo-700 text-sm border-4 text-white py-1 px-2 rounded"
                                    type="submit"
                                >
                                    أضف
                                </button>
                            </div>
                        </form>

                        <ul className="divide-y divide-gray-200 px-4 border">
                            <h1 className="text-center font-bold my-2">
                                الاختصاصات المتاحة
                            </h1>
                            {specialities &&
                                specialities.map((special) => {
                                    return (
                                        <li className="py-4" key={special.id}>
                                            <div className="flex items-center justify-between">
                                                <label
                                                    for="specialty"
                                                    className="ml-3 block text-gray-900"
                                                >
                                                    <span className="text-lg font-medium">
                                                        {special.title} -{" "}
                                                        {special.type}
                                                    </span>
                                                    <span className="text-sm mx-3 font-light text-gray-500">
                                                        {new Date(
                                                            special.created_at
                                                        ).toLocaleDateString()}
                                                    </span>
                                                </label>
                                                <Link
                                                    method="DELETE"
                                                    href={route(
                                                        "admin.delete_specialty",
                                                        special.id
                                                    )}
                                                    className={` bg-red-500 text-white px-3 rounded-md py-1 ${
                                                        special.title ==
                                                            "عام" &&
                                                        special.type == "الجميع"
                                                            ? "hidden"
                                                            : ""
                                                    }`}
                                                >
                                                    حذف الاختصاص
                                                </Link>
                                            </div>
                                        </li>
                                    );
                                })}
                        </ul>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
