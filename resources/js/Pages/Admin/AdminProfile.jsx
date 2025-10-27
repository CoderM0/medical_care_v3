import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AdminLayout from "@/Layouts/AdminLayout";
import { Transition } from "@headlessui/react";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import DeleteUserForm from "../Profile/Partials/DeleteUserForm";
import UpdatePasswordForm from "../Profile/Partials/UpdatePasswordForm";

export default function AdminProfile({ mustVerifyEmail, status }) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
        });

    const submit = (e) => {
        e.preventDefault();

        patch(route("profile.update"));
    };

    return (
        <AdminLayout>
            {" "}
            <Head title="الحساب" />
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-8">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden lg:col-span-2">
                            <div className="bg-gradient-to-l from-blue-500 to-blue-600 p-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                                        <svg
                                            className="w-8 h-8 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-white">
                                            معلومات الحساب
                                        </h2>
                                        <p className="text-blue-100 mt-1">
                                            تحديث معلومات الحساب الشخصية
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <form onSubmit={submit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <InputLabel
                                                htmlFor="name"
                                                value="الاسم الكامل"
                                                className="text-sm font-semibold text-gray-700 mb-2"
                                            />
                                            <TextInput
                                                id="name"
                                                className="w-full border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 py-3"
                                                value={data.name}
                                                onChange={(e) =>
                                                    setData(
                                                        "name",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                                isFocused
                                                autoComplete="name"
                                                placeholder="أدخل اسمك الكامل"
                                            />
                                            <InputError
                                                className="mt-2"
                                                message={errors.name}
                                            />
                                        </div>

                                        <div>
                                            <InputLabel
                                                htmlFor="email"
                                                value="البريد الإلكتروني"
                                                className="text-sm font-semibold text-gray-700 mb-2"
                                            />
                                            <TextInput
                                                id="email"
                                                type="email"
                                                className="w-full border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 py-3"
                                                value={data.email}
                                                onChange={(e) =>
                                                    setData(
                                                        "email",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                                autoComplete="username"
                                                placeholder="example@email.com"
                                            />
                                            <InputError
                                                className="mt-2"
                                                message={errors.email}
                                            />
                                        </div>
                                    </div>

                                    {mustVerifyEmail &&
                                        user.email_verified_at === null && (
                                            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                                                <div className="flex items-center gap-3">
                                                    <svg
                                                        className="w-5 h-5 text-yellow-600"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                                                        />
                                                    </svg>
                                                    <div>
                                                        <p className="text-sm text-yellow-800 font-medium">
                                                            بريدك الإلكتروني غير
                                                            موثق بعد
                                                        </p>
                                                        <p className="text-sm text-yellow-700 mt-1">
                                                            <Link
                                                                href={route(
                                                                    "verification.send"
                                                                )}
                                                                method="post"
                                                                as="button"
                                                                className="underline hover:text-yellow-900 font-medium"
                                                            >
                                                                اضغط لارسال كود
                                                                التحقق مرة أخرى
                                                            </Link>
                                                        </p>
                                                    </div>
                                                </div>
                                                {status ===
                                                    "verification-link-sent" && (
                                                    <div className="mt-3 text-sm font-medium text-green-600 bg-green-50 px-3 py-2 rounded-lg">
                                                        تم إرسال رابط التحقق إلى
                                                        بريدك الإلكتروني
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                    <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                                        <button
                                            type="submit"
                                            disabled={processing}
                                            className="bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.02] disabled:scale-100"
                                        >
                                            حفظ التغييرات
                                        </button>

                                        <Transition
                                            show={recentlySuccessful}
                                            enter="transition ease-in-out"
                                            enterFrom="opacity-0"
                                            leave="transition ease-in-out"
                                            leaveTo="opacity-0"
                                        >
                                            <div className="flex items-center gap-2 text-green-600 bg-green-50 px-4 py-2 rounded-lg">
                                                <svg
                                                    className="w-4 h-4"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                                <span className="text-sm font-medium">
                                                    تم الحفظ بنجاح
                                                </span>
                                            </div>
                                        </Transition>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                            <div className="bg-gradient-to-l from-green-500 to-green-600 p-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                                        <svg
                                            className="w-8 h-8 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold text-white">
                                            كلمة المرور
                                        </h2>
                                        <p className="text-green-100 mt-1">
                                            تحديث كلمة المرور
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <UpdatePasswordForm />
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                            <div className="bg-gradient-to-l from-red-500 to-red-600 p-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                                        <svg
                                            className="w-8 h-8 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold text-white">
                                            حذف الحساب
                                        </h2>
                                        <p className="text-red-100 mt-1">
                                            حذف نهائي للحساب
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <DeleteUserForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
