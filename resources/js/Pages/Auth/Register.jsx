import ApplicationLogo from "@/Components/ApplicationLogo";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Link, useForm } from "@inertiajs/react";
import { useState } from "react";
import { FaCalendarAlt, FaShieldAlt, FaTint, FaUserMd } from "react-icons/fa";
import {
    FaEnvelope,
    FaHandHoldingHeart,
    FaHandHoldingMedical,
    FaHeart,
    FaLock,
    FaNotesMedical,
    FaRegBell,
    FaSpinner,
    FaStethoscope,
    FaUpload,
    FaUser,
    FaUserPlus,
    FaVenusMars,
} from "react-icons/fa6";
export default function Register() {
    const [newImg, setNwImg] = useState(null);
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        birth: "",
        gender: "ذكر",
        blood_type: "O",
        blood_resos: "+",
        avatar: "",
        additional_case: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <GuestLayout>
            <div className="min-h-screen bg-gradient-to-br font-tajawal from-blue-50 to-white flex items-center justify-center p-4">
                <div className="w-full  bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
                    <div className="bg-gradient-to-br from-blue-800 to-blue-600 text-white p-6 md:p-8 md:w-2/5 relative overflow-hidden">
                        <div className="z-10 relative">
                            <Link href="/" className="inline-block">
                                <ApplicationLogo className="h-12 w-12 fill-current text-white hover:scale-110 transition-transform duration-300" />
                            </Link>

                            <div className="mt-8 md:mt-12">
                                <h1 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                                    انضم إلى عائلتنا الطبية
                                </h1>
                                <h2 className="text-xl md:text-2xl font-semibold mb-4 flex gap-2 items-center">
                                    <span className="bg-white/20 px-3 py-1 rounded-full">
                                        Med Care
                                    </span>
                                    <FaHandHoldingHeart className="text-blue-200" />
                                </h2>
                                <p className="max-w-md opacity-90 leading-relaxed text-blue-100 text-sm">
                                    أنشئ حسابك اليوم واحصل على رعاية طبية شاملة
                                    مع فريقنا المتخصص. نظام آمن وسهل الاستخدام
                                    لتجربة رعاية صحية استثنائية.
                                </p>
                            </div>

                            <div className="mt-8 space-y-3">
                                {[
                                    {
                                        icon: <FaLock />,
                                        text: "سجلك الطبي الآمن",
                                    },
                                    {
                                        icon: <FaHandHoldingMedical />,
                                        text: "متابعة صحية دقيقة",
                                    },
                                    {
                                        icon: <FaRegBell />,
                                        text: "تذكير بالمواعيد",
                                    },
                                ].map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-2 text-blue-100 text-sm"
                                    >
                                        <span className="text-lg">
                                            {feature.icon}
                                        </span>
                                        <span>{feature.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="absolute -right-16 -bottom-16 w-60 h-60 opacity-10">
                            <svg
                                viewBox="0 0 200 200"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill="currentColor"
                                    d="M45,-70.8C58.1,-63.8,68.7,-51.5,75.3,-37.2C81.9,-22.9,84.5,-6.6,82.6,9.1C80.7,24.8,74.3,40,63.5,51.6C52.7,63.2,37.5,71.2,21.7,75.7C5.9,80.2,-10.5,81.2,-25.3,77.1C-40.1,73,-53.2,63.8,-63.1,51.6C-73,39.4,-79.6,24.2,-81.2,8.1C-82.8,-8,-79.4,-24.9,-71.5,-38.8C-63.6,-52.7,-51.2,-63.5,-37.1,-70.2C-23,-76.8,-7.2,-79.2,7.1,-79.4C21.4,-79.6,31.9,-77.7,45,-70.8Z"
                                    transform="translate(100 100)"
                                />
                            </svg>
                        </div>

                        <div className="absolute top-1/4 left-8 opacity-20 animate-float">
                            <FaHeart className="w-6 h-6" />
                        </div>
                        <div
                            className="absolute bottom-1/3 right-16 opacity-20 animate-float"
                            style={{ animationDelay: "1s" }}
                        >
                            <FaStethoscope className="w-8 h-8" />
                        </div>
                        <div
                            className="absolute top-1/2 right-8 opacity-20 animate-float"
                            style={{ animationDelay: "2s" }}
                        >
                            <FaUserMd className="w-10 h-10" />
                        </div>
                    </div>

                    <div className="p-6 md:p-8 md:w-3/5 flex items-center justify-center bg-white">
                        <div className="w-full max-w-4xl">
                            <div className="flex gap-6 mb-6">
                                <div className="w-3/5">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="p-2 bg-blue-100 rounded-full">
                                            <FaUserPlus className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <h1 className="text-2xl font-bold text-gray-800">
                                            إنشاء حساب جديد
                                        </h1>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-4">
                                        املأ البيانات التالية لإنشاء حسابك
                                    </p>

                                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                                        <span className="text-gray-600 text-sm">
                                            لديك حساب بالفعل؟{" "}
                                        </span>
                                        <Link
                                            href={route("login")}
                                            className="text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-200 text-sm"
                                        >
                                            سجل دخول من هنا
                                        </Link>
                                    </div>
                                </div>
                                <div className="w-2/5 flex flex-col items-center">
                                    <input
                                        type="file"
                                        onChange={(e) => {
                                            setData(
                                                "avatar",
                                                e.target.files[0]
                                            );
                                            setNwImg(e.target.files[0]);
                                        }}
                                        id="addimg"
                                        className="hidden"
                                    />
                                    <img
                                        src={
                                            newImg
                                                ? URL.createObjectURL(newImg)
                                                : "/images/imgplacholder.jpg"
                                        }
                                        className="object-cover h-28 w-32 rounded-lg border-2 border-gray-300 hover:border-blue-500 transition-colors duration-200"
                                        alt="الصورة الشخصية"
                                    />
                                    <label
                                        htmlFor="addimg"
                                        className="cursor-pointer text-blue-500 flex items-center p-2 gap-1 text-xs hover:text-blue-700 transition-colors duration-200"
                                    >
                                        {newImg ? (
                                            "تم التحميل - انقر للتغيير"
                                        ) : (
                                            <>
                                                تحميل صورة <FaUpload />
                                            </>
                                        )}
                                    </label>
                                </div>
                            </div>

                            <form onSubmit={submit}>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-semibold text-gray-700 text-right"
                                        >
                                            الاسم الكامل
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <FaUser className="text-gray-400 text-sm" />
                                            </div>
                                            <TextInput
                                                id="name"
                                                type="text"
                                                placeholder="الاسم الكامل"
                                                value={data.name}
                                                autoComplete="name"
                                                isFocused={true}
                                                onChange={(e) =>
                                                    setData(
                                                        "name",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full h-10 pr-3 pl-9 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
                                            />
                                        </div>
                                        <InputError
                                            message={errors.name}
                                            className="mt-1 text-right text-xs"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-semibold text-gray-700 text-right"
                                        >
                                            البريد الإلكتروني
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <FaEnvelope className="text-gray-400 text-sm" />
                                            </div>
                                            <TextInput
                                                id="email"
                                                type="email"
                                                placeholder="example@domain.com"
                                                value={data.email}
                                                autoComplete="email"
                                                onChange={(e) =>
                                                    setData(
                                                        "email",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full h-10 pr-3 pl-9 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
                                            />
                                        </div>
                                        <InputError
                                            message={errors.email}
                                            className="mt-1 text-right text-xs"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label
                                            htmlFor="birth"
                                            className="block text-sm font-semibold text-gray-700 text-right"
                                        >
                                            تاريخ الميلاد
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <FaCalendarAlt className="text-gray-400 text-sm" />
                                            </div>
                                            <TextInput
                                                id="birth"
                                                type="date"
                                                value={data.birth}
                                                onChange={(e) =>
                                                    setData(
                                                        "birth",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full h-10 pr-3 pl-9 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
                                            />
                                        </div>
                                        <InputError
                                            message={errors.birth}
                                            className="mt-1 text-right text-xs"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label
                                            htmlFor="gender"
                                            className="block text-sm font-semibold text-gray-700 text-right"
                                        >
                                            الجنس
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <FaVenusMars className="text-gray-400 text-sm" />
                                            </div>
                                            <select
                                                name="gender"
                                                id="gender"
                                                className="w-full h-10 pr-3 pl-9 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
                                                onChange={(e) =>
                                                    setData(
                                                        "gender",
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                <option value="ذكر">ذكر</option>
                                                <option value="انثى">
                                                    أنثى
                                                </option>
                                            </select>
                                        </div>
                                        <InputError
                                            message={errors.gender}
                                            className="mt-1 text-right text-xs"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label
                                            htmlFor="blood_type"
                                            className="block text-sm font-semibold text-gray-700 text-right"
                                        >
                                            زمرة الدم
                                        </label>
                                        <div className="flex items-center gap-2">
                                            <div className="relative w-3/4">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <FaTint className="text-gray-400 text-sm" />
                                                </div>
                                                <select
                                                    name="blood_type"
                                                    value={data.blood_type}
                                                    onChange={(e) =>
                                                        setData(
                                                            "blood_type",
                                                            e.target.value
                                                        )
                                                    }
                                                    className="w-full h-10 pr-3 pl-9 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
                                                >
                                                    <option value="O">O</option>
                                                    <option value="A">A</option>
                                                    <option value="B">B</option>
                                                    <option value="AB">
                                                        AB
                                                    </option>
                                                </select>
                                            </div>
                                            <select
                                                name="blood_resos"
                                                value={data.blood_resos}
                                                onChange={(e) =>
                                                    setData(
                                                        "blood_resos",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-1/4 h-10 px-2 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
                                            >
                                                <option value="+">+</option>
                                                <option value="-">-</option>
                                            </select>
                                        </div>
                                        <InputError
                                            message={errors.blood_resos}
                                            className="mt-1 text-right text-xs"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label
                                            htmlFor="additional_case"
                                            className="block text-sm font-semibold text-gray-700 text-right"
                                        >
                                            حساسية أو أمراض مزمنة
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <FaNotesMedical className="text-gray-400 text-sm" />
                                            </div>
                                            <TextInput
                                                id="additional_case"
                                                type="text"
                                                placeholder="اكتب: لا يوجد (إن لم تكن)"
                                                value={data.additional_case}
                                                onChange={(e) =>
                                                    setData(
                                                        "additional_case",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full h-10 pr-3 pl-9 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
                                            />
                                        </div>
                                        <InputError
                                            message={errors.additional_case}
                                            className="mt-1 text-right text-xs"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label
                                            htmlFor="password"
                                            className="block text-sm font-semibold text-gray-700 text-right"
                                        >
                                            كلمة المرور
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <FaLock className="text-gray-400 text-sm" />
                                            </div>
                                            <TextInput
                                                id="password"
                                                type="password"
                                                placeholder="كلمة المرور"
                                                value={data.password}
                                                autoComplete="new-password"
                                                onChange={(e) =>
                                                    setData(
                                                        "password",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full h-10 pr-3 pl-9 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
                                            />
                                        </div>
                                        <InputError
                                            message={errors.password}
                                            className="mt-1 text-right text-xs"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label
                                            htmlFor="password_confirmation"
                                            className="block text-sm font-semibold text-gray-700 text-right"
                                        >
                                            تأكيد كلمة المرور
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <FaLock className="text-gray-400 text-sm" />
                                            </div>
                                            <TextInput
                                                id="password_confirmation"
                                                type="password"
                                                name="password_confirmation"
                                                placeholder="تأكيد كلمة المرور"
                                                value={
                                                    data.password_confirmation
                                                }
                                                autoComplete="new-password"
                                                onChange={(e) =>
                                                    setData(
                                                        "password_confirmation",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full h-10 pr-3 pl-9 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
                                            />
                                        </div>
                                        <InputError
                                            message={
                                                errors.password_confirmation
                                            }
                                            className="mt-1 text-right text-xs"
                                        />
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="w-full h-11 disabled:bg-blue-300 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 disabled:hover:scale-100 shadow-lg disabled:shadow-none flex items-center justify-center gap-2 text-sm"
                                    >
                                        {processing ? (
                                            <>
                                                <FaSpinner className="animate-spin" />
                                                جاري إنشاء الحساب...
                                            </>
                                        ) : (
                                            <>
                                                <FaUserPlus />
                                                إنشاء حساب جديد
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>

                            <div className="mt-4 text-center">
                                <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
                                    <div className="flex items-center gap-1">
                                        <FaShieldAlt className="text-green-500" />
                                        <span>بياناتك محمية</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <FaHeart className="text-red-500" />
                                        <span>رعاية متميزة</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
