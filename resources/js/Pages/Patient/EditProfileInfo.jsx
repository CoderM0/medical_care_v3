import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import PatientLayout from "@/Layouts/PatientLayout";
import { useForm } from "@inertiajs/react";
import { useState } from "react";
import { FaUpload } from "react-icons/fa6";

export default function EditProfileInfo({ patient }) {
    const [newImg, setNwImg] = useState();

    const { data, setData, processing, errors, post } = useForm({
        name: patient.name,
        birth: patient.birth,
        blood_type: patient.blood_type.split(/([+-])/)[0],
        blood_resos: patient.blood_type.split(/([+-])/)[1],
        gender: patient.gender,
        additional_case: patient.additional_case,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("patient.profile.update"));
    };
    return (
        <PatientLayout patient={patient}>
            <div className="p-8 md:p-12 w-9/12 mx-auto flex items-center justify-center">
                <div className="w-full bg-white rounded-3xl shadow-lg p-8">
                    <div className="flex justify-center">
                        <div className="flex justify-between">
                            <div className=" flex flex-col justify-center items-center">
                                <input
                                    type="file"
                                    name=""
                                    accept="image/*"
                                    onChange={(e) => {
                                        setData("avatar", e.target.files[0]);
                                        setNwImg(e.target.files[0]);
                                    }}
                                    id="addimg"
                                    className="hidden"
                                />
                                <img
                                    src={
                                        newImg
                                            ? URL.createObjectURL(newImg)
                                            : `/storage/${patient.avatar}`
                                    }
                                    className="object-cover h-36 w-40 rounded-md"
                                    alt=""
                                />
                                <label
                                    htmlFor="addimg"
                                    className="cursor-pointer text-blue-500 flex items-center p-2 gap-2"
                                >
                                    {newImg ? (
                                        "تم تحميل الصورة . انقر لتغييرها"
                                    ) : (
                                        <>
                                            {" "}
                                            تعديل الصورة <FaUpload />{" "}
                                        </>
                                    )}
                                </label>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={submit}>
                        <div className="space-y-6">
                            {/*  */}
                            <div className="space-y-2">
                                <label
                                    for="name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    اسم المستخدم
                                </label>
                                <TextInput
                                    id="name"
                                    type="text"
                                    placeholder="الاسم"
                                    value={data.name}
                                    autoComplete="username"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    className="w-full h-12 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <InputError
                                    message={errors.name}
                                    className="mt-2"
                                />
                            </div>
                            {/*  */}
                            <div className="flex items-center gap-2 w-full">
                                <div className="space-y-2 w-1/2">
                                    <label
                                        for="birth"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        تاريخ الميلاد
                                    </label>
                                    <TextInput
                                        id="birth"
                                        type="date"
                                        value={data.birth}
                                        onChange={(e) =>
                                            setData("birth", e.target.value)
                                        }
                                        className="w-full h-12 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                    <InputError
                                        message={errors.birth}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="space-y-2 w-1/2">
                                    <label
                                        for="gender"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        الجنس
                                    </label>
                                    <select
                                        name="gender"
                                        id="gender"
                                        className="w-full h-12 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        onChange={(e) =>
                                            setData("gender", e.target.value)
                                        }
                                    >
                                        <option value="ذكر">ذكر</option>
                                        <option value="انثى">انثى</option>
                                    </select>

                                    <InputError
                                        message={errors.gender}
                                        className="mt-2"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label
                                    for="blood_type"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    زمرة الدم
                                </label>
                                <div className="flex items-center gap-1">
                                    <select
                                        name="blood_type"
                                        value={data.blood_type}
                                        onChange={(e) =>
                                            setData(
                                                "blood_type",
                                                e.target.value
                                            )
                                        }
                                        id="dd"
                                        className="w-full h-12 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        <option value="O">O</option>
                                        <option value="A">A</option>
                                        <option value="B">B</option>
                                        <option value="AB">AB</option>
                                    </select>
                                    <select
                                        name="blood_resos"
                                        value={data.blood_resos}
                                        onChange={(e) =>
                                            setData(
                                                "blood_resos",
                                                e.target.value
                                            )
                                        }
                                        id="ff"
                                        className="w-1/3 h-12 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        <option value="+">+</option>
                                        <option value="-">-</option>
                                    </select>
                                </div>
                                <InputError
                                    message={errors.blood_resos}
                                    className="mt-2"
                                />
                            </div>
                            <div className="space-y-2">
                                <label
                                    for="email"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    حساسية او امراض مزمنة
                                </label>
                                <TextInput
                                    id="additional_case"
                                    type="text"
                                    placeholder={
                                        "اذا كنت لا تعاني منها اكتب : لا يوجد"
                                    }
                                    value={data.additional_case}
                                    onChange={(e) =>
                                        setData(
                                            "additional_case",
                                            e.target.value
                                        )
                                    }
                                    className="w-full h-12 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <InputError
                                    message={errors.additional_case}
                                    className="mt-2"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full h-12 disabled:bg-blue-200 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md transition duration-200"
                            >
                                تحديث
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </PatientLayout>
    );
}
