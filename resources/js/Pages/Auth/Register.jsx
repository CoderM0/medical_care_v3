import ApplicationLogo from "@/Components/ApplicationLogo";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Link, useForm } from "@inertiajs/react";
import { useState } from "react";
import { FaHandHoldingHeart, FaUpload } from "react-icons/fa6";

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
            <div className="flex flex-col md:flex-row min-h-screen">
                <div className="bg-blue-900 text-white p-8 md:p-12 md:w-1/2 relative overflow-hidden">
                    <div className="z-10 relative">
                        <Link href="/">
                            <ApplicationLogo className="h-20 w-20 fill-current text-white" />
                        </Link>

                        <div className="mt-20 md:mt-32">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                انشئ حساب جديد
                            </h1>
                            <h2 className="text-2xl md:text-3xl font-semibold mb-6 flex gap-2 items-center">
                                Med Care <FaHandHoldingHeart />
                            </h2>
                            <p className="max-w-md opacity-90">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s.
                            </p>
                        </div>
                    </div>

                    <div className="absolute left-0 top-1/3 transform translate-x-1/4">
                        <div className="relative w-64 h-64">
                            <svg
                                className="text-white/20 absolute top-10 left-10 w-16 h-16"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokelinejoin="round"
                                viewBox="0 0 24 24"
                            >
                                <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                            </svg>

                            <svg
                                className="text-white/20 absolute bottom-10 right-10 w-20 h-20"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokelinejoin="round"
                                viewBox="0 0 24 24"
                            >
                                <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                            </svg>

                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <div className="relative w-40 h-40">
                                    <svg
                                        className="text-orange-400 w-40 h-40 transform rotate-45"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokelinejoin="round"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                                        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                                        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                                        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <svg
                        className="text-white/20 absolute bottom-10 left-10 w-24 h-24"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokelinejoin="round"
                        viewBox="0 0 24 24"
                    >
                        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                    </svg>
                </div>

                {/* <!-- Right Section --> */}
                <div className="p-8 md:p-12 md:w-1/2 flex items-center justify-center">
                    <div className="w-full bg-white rounded-3xl shadow-lg p-8">
                        <div className="flex justify-between">
                            <div className="w-1/2">
                                <div className="text-right mb-4">
                                    <span className="text-gray-500">
                                        لديك حساب ؟
                                    </span>
                                    <Link
                                        href={route("login")}
                                        className="text-blue-500 font-medium"
                                    >
                                        سجل دخول
                                    </Link>
                                </div>

                                <div className="mb-8">
                                    <p className="text-gray-600 mb-1">
                                        Welcome to{" "}
                                        <span className="text-blue-500 font-bold flex items-center gap-2">
                                            Med Care <FaHandHoldingHeart />
                                        </span>
                                    </p>
                                    <h1 className="text-4xl font-bold">
                                        انشئ حساب
                                    </h1>
                                </div>
                            </div>
                            <div className="w-1/2   h-40 flex flex-col justify-center items-center">
                                <input
                                    type="file"
                                    name=""
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
                                            : "/images/imgplacholder.jpg"
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
                                            تحميل صورة شخصية <FaUpload />{" "}
                                        </>
                                    )}
                                </label>
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
                                                setData(
                                                    "gender",
                                                    e.target.value
                                                )
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
                                <div className="space-y-2">
                                    <label
                                        for="email"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        البريد الالكتروني
                                    </label>
                                    <TextInput
                                        id="email"
                                        type="text"
                                        placeholder="البريد الالكتروني"
                                        value={data.email}
                                        autoComplete="username"
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        className="w-full h-12 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                    <InputError
                                        message={errors.email}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label
                                        for="password"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        كلمة المرور
                                    </label>
                                    <TextInput
                                        id="password"
                                        type="password"
                                        placeholder="كلمة المرور"
                                        value={data.password}
                                        autoComplete="current-password"
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                        className="w-full h-12 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                    <InputError
                                        message={errors.password}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label
                                        for="password"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        تأكيد كلمة المرور
                                    </label>
                                    <TextInput
                                        id="password_confirmation"
                                        type="password"
                                        name="password_confirmation"
                                        value={data.password_confirmation}
                                        autoComplete="new-password"
                                        onChange={(e) =>
                                            setData(
                                                "password_confirmation",
                                                e.target.value
                                            )
                                        }
                                        className="w-full h-12 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                    <InputError
                                        message={errors.password_confirmation}
                                        className="mt-2"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full h-12 disabled:bg-blue-200 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md transition duration-200"
                                >
                                    انشئ حساب
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
