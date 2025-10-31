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
            <div className="py-6">
                <div className="max-w-2xl mx-auto px-4">
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-bold text-blue-800 mb-2">
                            تعديل الملف الشخصي
                        </h1>
                        <p className="text-gray-600 text-sm">
                            قم بتحديث معلوماتك الشخصية والطبية
                        </p>
                    </div>

                    <div className="bg-white border border-blue-100 rounded-xl p-6 shadow-lg">
                        <div className="text-center mb-8">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => {
                                    setData("avatar", e.target.files[0]);
                                    setNwImg(e.target.files[0]);
                                }}
                                id="addimg"
                                className="hidden"
                            />
                            <div className="relative inline-block">
                                <img
                                    src={
                                        newImg
                                            ? URL.createObjectURL(newImg)
                                            : `/storage/${patient.avatar}`
                                    }
                                    className="w-32 h-32 rounded-full object-cover border-4 border-blue-200 mx-auto"
                                    alt="صورة الملف الشخصي"
                                />
                                <label
                                    htmlFor="addimg"
                                    className="absolute bottom-2 right-2 bg-blue-500 text-white p-2 rounded-full cursor-pointer hover:bg-blue-600 transition-all duration-200"
                                >
                                    <FaUpload size={16} />
                                </label>
                            </div>
                            <label
                                htmlFor="addimg"
                                className="block text-blue-600 hover:text-blue-800 cursor-pointer mt-3 font-medium"
                            >
                                {newImg
                                    ? "تم تحميل الصورة - انقر لتغييرها"
                                    : "تغيير الصورة"}
                            </label>
                        </div>

                        <form onSubmit={submit}>
                            <div className="grid grid-cols-1 gap-6">
                                <div>
                                    <label className="block text-blue-700 font-medium mb-2">
                                        الاسم الكامل
                                    </label>
                                    <TextInput
                                        type="text"
                                        placeholder="أدخل الاسم الكامل"
                                        value={data.name}
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        className="w-full p-4 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                    <InputError
                                        message={errors.name}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-blue-700 font-medium mb-2">
                                            تاريخ الميلاد
                                        </label>
                                        <TextInput
                                            type="date"
                                            value={data.birth}
                                            onChange={(e) =>
                                                setData("birth", e.target.value)
                                            }
                                            className="w-full p-4 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                        <InputError
                                            message={errors.birth}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-blue-700 font-medium mb-2">
                                            الجنس
                                        </label>
                                        <select
                                            value={data.gender}
                                            onChange={(e) =>
                                                setData(
                                                    "gender",
                                                    e.target.value
                                                )
                                            }
                                            className="w-full p-4 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        >
                                            <option value="ذكر">ذكر</option>
                                            <option value="انثى">أنثى</option>
                                        </select>
                                        <InputError
                                            message={errors.gender}
                                            className="mt-2"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-blue-700 font-medium mb-2">
                                        زمرة الدم
                                    </label>
                                    <div className="grid grid-cols-2 gap-3">
                                        <select
                                            value={data.blood_type}
                                            onChange={(e) =>
                                                setData(
                                                    "blood_type",
                                                    e.target.value
                                                )
                                            }
                                            className="p-4 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        >
                                            <option value="O">O</option>
                                            <option value="A">A</option>
                                            <option value="B">B</option>
                                            <option value="AB">AB</option>
                                        </select>
                                        <select
                                            value={data.blood_resos}
                                            onChange={(e) =>
                                                setData(
                                                    "blood_resos",
                                                    e.target.value
                                                )
                                            }
                                            className="p-4 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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

                                <div>
                                    <label className="block text-blue-700 font-medium mb-2">
                                        الحساسية أو الأمراض المزمنة
                                    </label>
                                    <TextInput
                                        type="text"
                                        placeholder="إذا كنت لا تعاني منها اكتب: لا يوجد"
                                        value={data.additional_case}
                                        onChange={(e) =>
                                            setData(
                                                "additional_case",
                                                e.target.value
                                            )
                                        }
                                        className="w-full p-4 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                    <InputError
                                        message={errors.additional_case}
                                        className="mt-2"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 px-6 rounded-lg font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {processing
                                        ? "جاري التحديث..."
                                        : "تحديث المعلومات"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </PatientLayout>
    );
}
