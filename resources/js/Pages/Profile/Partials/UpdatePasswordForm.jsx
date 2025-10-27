import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { Transition } from "@headlessui/react";
import { useForm } from "@inertiajs/react";
import { useRef } from "react";

export default function UpdatePasswordForm({ className = "" }) {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const {
        data,
        setData,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        current_password: "",
        password: "",
        password_confirmation: "",
    });

    const updatePassword = (e) => {
        e.preventDefault();

        put(route("password.update"), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset("password", "password_confirmation");
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset("current_password");
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

    return (
        <section className={className}>
            <form onSubmit={updatePassword} className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                    <div>
                        <InputLabel
                            htmlFor="current_password"
                            value="كلمة المرور الحالية"
                            className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2"
                        />
                        <TextInput
                            id="current_password"
                            ref={currentPasswordInput}
                            value={data.current_password}
                            onChange={(e) =>
                                setData("current_password", e.target.value)
                            }
                            type="password"
                            className="w-full border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 py-3"
                            autoComplete="current-password"
                            placeholder="أدخل كلمة المرور الحالية"
                        />
                        <InputError
                            message={errors.current_password}
                            className="mt-2"
                        />
                    </div>

                    <div>
                        <InputLabel
                            htmlFor="password"
                            value="كلمة المرور الجديدة"
                            className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2"
                        />
                        <TextInput
                            id="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            type="password"
                            className="w-full border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 py-3"
                            autoComplete="new-password"
                            placeholder="أدخل كلمة المرور الجديدة"
                        />
                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>

                    <div>
                        <InputLabel
                            htmlFor="password_confirmation"
                            value="تأكيد كلمة المرور"
                            className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2"
                        />
                        <TextInput
                            id="password_confirmation"
                            value={data.password_confirmation}
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                            type="password"
                            className="w-full border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 py-3"
                            autoComplete="new-password"
                            placeholder="أعد إدخال كلمة المرور الجديدة"
                        />
                        <InputError
                            message={errors.password_confirmation}
                            className="mt-2"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                    <button
                        type="submit"
                        disabled={processing}
                        className="bg-green-500 hover:bg-green-600 disabled:bg-green-300 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.02] disabled:scale-100"
                    >
                        تحديث كلمة المرور
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
                                تم تحديث كلمة المرور
                            </span>
                        </div>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
