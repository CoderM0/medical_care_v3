import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { useState } from "react";
import {
    FaCheckCircle,
    FaFileAlt,
    FaMapMarkerAlt,
    FaSave,
    FaTimes,
    FaUserEdit,
} from "react-icons/fa";
import {
    FaArrowRight,
    FaCamera,
    FaGraduationCap,
    FaPhone,
    FaUser,
} from "react-icons/fa6";

export default function EditEmpProfile({ employee, departments }) {
    const [succ, setSucc] = useState(false);
    const [newImg, setNewImg] = useState(false);
    const { data, setData, processing, errors, post } = useForm({
        name: employee.name,
        department_id: employee.department_id,
        license: employee.license,
        contact: employee.contact,
        address: employee.address,
        salary: employee.salary,
        bio: employee.bio,
        imgfile: null,
    });
    const update_employee = (e) => {
        e.preventDefault();
        post(route("employee.profile.update"), {
            onSuccess: () => {
                setSucc(true);
                setTimeout(() => {
                    setSucc(false);
                }, 2000);
            },
        });
    };
    return (
        <div className="bg-white font-tajawal rounded-2xl shadow-lg border border-blue-100 overflow-hidden">
            {processing ? (
                <div className="flex justify-center items-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                </div>
            ) : (
                <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/3 bg-gradient-to-b from-blue-50 to-white p-8 border-b lg:border-b-0 lg:border-r border-blue-100">
                        <div className="flex flex-col items-center text-center">
                            <div className="relative mb-6">
                                <div className="relative group">
                                    <img
                                        src={
                                            newImg
                                                ? URL.createObjectURL(newImg)
                                                : `/storage/${employee.avatar}`
                                        }
                                        className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg group-hover:border-blue-200 transition-all duration-300"
                                    />
                                    <label
                                        htmlFor="newimgfile"
                                        className="absolute bottom-4 right-4 w-12 h-12 bg-blue-600 border-2 border-white rounded-full flex justify-center items-center cursor-pointer shadow-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-110"
                                    >
                                        <FaCamera className="text-white w-5 h-5" />
                                    </label>
                                </div>
                            </div>

                            <TextInput
                                type="file"
                                onChange={(e) => {
                                    setData("imgfile", e.target.files[0]);
                                    setNewImg(e.target.files[0]);
                                }}
                                id="newimgfile"
                                className="hidden"
                            />

                            <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                {data.name || "الاسم الكامل"}
                            </h2>
                            <p className="text-blue-600 mb-4 flex items-center gap-2">
                                <FaGraduationCap className="w-4 h-4" />
                                {data.license || "الشهادة العلمية"}
                            </p>

                            <div className="w-full space-y-3 mt-6">
                                <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-blue-100">
                                    <div className="p-2 bg-blue-100 rounded-lg">
                                        <FaPhone className="w-4 h-4 text-blue-600" />
                                    </div>
                                    <div className="text-right flex-1">
                                        <p className="text-sm text-gray-500">
                                            الاتصال
                                        </p>
                                        <p className="text-gray-800 font-medium">
                                            {data.contact || "رقم الهاتف"}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-blue-100">
                                    <div className="p-2 bg-blue-100 rounded-lg">
                                        <FaMapMarkerAlt className="w-4 h-4 text-blue-600" />
                                    </div>
                                    <div className="text-right flex-1">
                                        <p className="text-sm text-gray-500">
                                            العنوان
                                        </p>
                                        <p className="text-gray-800 font-medium">
                                            {data.address || "العنوان"}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className={`mt-6 flex items-center gap-2 p-3 rounded-lg bg-green-50 border border-green-200 transition-all duration-300 ${
                                    succ ? "opacity-100" : "opacity-0"
                                }`}
                            >
                                <FaCheckCircle className="w-5 h-5 text-green-600" />
                                <span className="text-green-700 font-medium">
                                    تم التحديث بنجاح
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-2/3 p-8">
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-blue-100 rounded-xl">
                                    <FaUserEdit className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold text-gray-800">
                                        تعديل الملف الشخصي
                                    </h1>
                                    <p className="text-gray-600">
                                        قم بتحديث معلوماتك الشخصية والمهنية
                                    </p>
                                </div>
                            </div>

                            <button
                                onClick={() => history.back()}
                                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 p-3 hover:bg-blue-50 rounded-lg"
                            >
                                <FaArrowRight className="w-4 h-4" />
                                <span>رجوع</span>
                            </button>
                        </div>

                        <form onSubmit={update_employee}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="name"
                                            className=" text-sm font-semibold text-gray-700 flex items-center gap-2"
                                        >
                                            <FaUser className="w-4 h-4 text-blue-500" />
                                            الاسم الكامل
                                        </label>
                                        <TextInput
                                            type="text"
                                            name="name"
                                            value={data.name}
                                            onChange={(e) =>
                                                setData("name", e.target.value)
                                            }
                                            id="name"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                            placeholder="أدخل الاسم الكامل"
                                        />
                                        <InputError
                                            message={errors.name}
                                            className="mt-1"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label
                                            htmlFor="license"
                                            className="  text-sm font-semibold text-gray-700 flex items-center gap-2"
                                        >
                                            <FaGraduationCap className="w-4 h-4 text-blue-500" />
                                            الشهادة العلمية
                                        </label>
                                        <TextInput
                                            name="license"
                                            id="license"
                                            value={data.license}
                                            onChange={(e) =>
                                                setData(
                                                    "license",
                                                    e.target.value
                                                )
                                            }
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                            placeholder="المؤهل العلمي"
                                        />
                                        <InputError
                                            message={errors.license}
                                            className="mt-1"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label
                                            htmlFor="contact"
                                            className="  text-sm font-semibold text-gray-700 flex items-center gap-2"
                                        >
                                            <FaPhone className="w-4 h-4 text-blue-500" />
                                            معلومات الاتصال
                                        </label>
                                        <TextInput
                                            name="contact"
                                            id="contact"
                                            value={data.contact}
                                            onChange={(e) =>
                                                setData(
                                                    "contact",
                                                    e.target.value
                                                )
                                            }
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                            placeholder="رقم الهاتف"
                                        />
                                        <InputError
                                            message={errors.contact}
                                            className="mt-1"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="address"
                                            className="  text-sm font-semibold text-gray-700 flex items-center gap-2"
                                        >
                                            <FaMapMarkerAlt className="w-4 h-4 text-blue-500" />
                                            العنوان
                                        </label>
                                        <TextInput
                                            name="address"
                                            id="address"
                                            value={data.address}
                                            onChange={(e) =>
                                                setData(
                                                    "address",
                                                    e.target.value
                                                )
                                            }
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                            placeholder="العنوان التفصيلي"
                                        />
                                        <InputError
                                            message={errors.address}
                                            className="mt-1"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label
                                            htmlFor="bio"
                                            className="  text-sm font-semibold text-gray-700 flex items-center gap-2"
                                        >
                                            <FaFileAlt className="w-4 h-4 text-blue-500" />
                                            النبذة الشخصية
                                        </label>
                                        <textarea
                                            id="bio"
                                            rows="4"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                                            placeholder="اكتب نبذة مختصرة عن خبراتك وتخصصك..."
                                            value={data.bio}
                                            onChange={(e) =>
                                                setData("bio", e.target.value)
                                            }
                                        ></textarea>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-blue-50">
                                <div className="flex gap-4">
                                    <button
                                        type="button"
                                        onClick={() => history.back()}
                                        className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
                                    >
                                        <FaTimes className="w-4 h-4" />
                                        إلغاء
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                                    >
                                        <FaSave className="w-4 h-4" />
                                        حفظ التعديلات
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
