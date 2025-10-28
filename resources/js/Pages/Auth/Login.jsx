import ApplicationLogo from "@/Components/ApplicationLogo";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Link, useForm } from "@inertiajs/react";
import { FaShieldAlt, FaSignInAlt, FaUserMd } from "react-icons/fa";
import {
    FaClock,
    FaEnvelope,
    FaHandHoldingHeart,
    FaHandHoldingMedical,
    FaHeart,
    FaLock,
    FaSpinner,
    FaStethoscope,
} from "react-icons/fa6";
import { MdOutlineSmartphone } from "react-icons/md";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <GuestLayout>
            <div className="min-h-screen font-tajawal bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
                <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
                    <div className="bg-gradient-to-br from-blue-800 to-blue-600 text-white p-8 md:p-12 md:w-2/5 relative overflow-hidden">
                        <div className="z-10 relative">
                            <Link href="/" className="inline-block">
                                <ApplicationLogo className="h-16 w-16 fill-current text-white hover:scale-110 transition-transform duration-300" />
                            </Link>

                            <div className="mt-12 md:mt-20">
                                <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                                    مرحباً بك في نظام
                                </h1>
                                <h2 className="text-2xl md:text-3xl font-semibold mb-6 flex gap-3 items-center">
                                    <span className="bg-white/20 px-4 py-2 rounded-full">
                                        Med Care
                                    </span>
                                    <FaHandHoldingHeart className="text-blue-200" />
                                </h2>
                                <p className="max-w-md opacity-90 leading-relaxed text-blue-100">
                                    نظام طبي متكامل يقدم أفضل الخدمات الصحية
                                    والرعاية الطبية باستخدام أحدث التقنيات
                                    لتوفير تجربة رعاية استثنائية.
                                </p>
                            </div>

                            <div className="mt-12 space-y-4">
                                {[
                                    {
                                        icon: <FaHandHoldingMedical />,
                                        text: "رعاية طبية شاملة",
                                    },
                                    {
                                        icon: <FaLock />,
                                        text: "بيانات آمنة ومشفرة",
                                    },
                                    {
                                        icon: <MdOutlineSmartphone />,
                                        text: "واجهة سهلة الاستخدام",
                                    },
                                ].map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-3 text-blue-100"
                                    >
                                        <span className="text-xl">
                                            {feature.icon}
                                        </span>
                                        <span>{feature.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="absolute -right-20 -bottom-20 w-80 h-80 opacity-10">
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

                        <div className="absolute top-1/4 left-10 opacity-20 animate-float">
                            <FaHeart className="w-8 h-8" />
                        </div>
                        <div
                            className="absolute bottom-1/3 right-20 opacity-20 animate-float"
                            style={{ animationDelay: "1s" }}
                        >
                            <FaStethoscope className="w-10 h-10" />
                        </div>
                        <div
                            className="absolute top-1/2 right-10 opacity-20 animate-float"
                            style={{ animationDelay: "2s" }}
                        >
                            <FaUserMd className="w-12 h-12" />
                        </div>
                    </div>

                    <div className="p-8 md:p-12 md:w-3/5 flex items-center justify-center bg-white">
                        <div className="w-full max-w-md">
                            <div className="text-center mb-8">
                                <div className="flex items-center justify-center gap-3 mb-4">
                                    <div className="p-3 bg-blue-100 rounded-full">
                                        <FaSignInAlt className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <h1 className="text-3xl font-bold text-gray-800">
                                        تسجيل الدخول
                                    </h1>
                                </div>
                                <p className="text-gray-600 mb-6">
                                    أدخل بياناتك للوصول إلى حسابك
                                </p>
                            </div>

                            <div className="text-center mb-8 p-4 bg-blue-50 rounded-lg">
                                <span className="text-gray-600">
                                    لا تملك حساب؟{" "}
                                </span>
                                <Link
                                    href={route("register")}
                                    className="text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-200"
                                >
                                    انشئ حساب الآن
                                </Link>
                            </div>

                            <form onSubmit={submit} className="space-y-6">
                                <div className="space-y-2">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-semibold text-gray-700 text-right"
                                    >
                                        البريد الإلكتروني
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <FaEnvelope className="text-gray-400" />
                                        </div>
                                        <TextInput
                                            id="email"
                                            type="email"
                                            placeholder="example@domain.com"
                                            value={data.email}
                                            autoComplete="username"
                                            isFocused={true}
                                            onChange={(e) =>
                                                setData("email", e.target.value)
                                            }
                                            className="w-full h-12 pr-3 pl-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                        />
                                    </div>
                                    <InputError
                                        message={errors.email}
                                        className="mt-2 text-right"
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
                                            <FaLock className="text-gray-400" />
                                        </div>
                                        <TextInput
                                            id="password"
                                            type="password"
                                            placeholder="أدخل كلمة المرور"
                                            value={data.password}
                                            autoComplete="current-password"
                                            onChange={(e) =>
                                                setData(
                                                    "password",
                                                    e.target.value
                                                )
                                            }
                                            className="w-full h-12 pr-3 pl-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                        />
                                    </div>
                                    <InputError
                                        message={errors.password}
                                        className="mt-2 text-right"
                                    />

                                    {canResetPassword && (
                                        <div className="text-left mt-2">
                                            <Link
                                                href={route("password.request")}
                                                className="text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200"
                                            >
                                                نسيت كلمة المرور؟
                                            </Link>
                                        </div>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full h-12 disabled:bg-blue-300 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 disabled:hover:scale-100 shadow-lg disabled:shadow-none flex items-center justify-center gap-2"
                                >
                                    {processing ? (
                                        <>
                                            <FaSpinner className="animate-spin" />
                                            جاري الدخول...
                                        </>
                                    ) : (
                                        <>
                                            <FaSignInAlt />
                                            دخول إلى النظام
                                        </>
                                    )}
                                </button>
                            </form>

                            {/* معلومات إضافية */}
                            <div className="mt-8 text-center">
                                <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                                    <div className="flex items-center gap-1">
                                        <FaShieldAlt className="text-green-500" />
                                        <span>آمن</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <FaClock className="text-blue-500" />
                                        <span>على مدار الساعة</span>
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
