import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { useRef, useState } from "react";

export default function DeleteUserForm({ className = "" }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
        clearErrors,
    } = useForm({
        password: "",
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route("profile.destroy"), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        clearErrors();
        reset();
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                        <svg
                            className="w-6 h-6 text-red-600"
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
                        <h2 className="text-xl font-semibold text-gray-800">
                            حذف الحساب
                        </h2>
                        <p className="text-sm text-gray-600 mt-1">
                            هذا الإجراء نهائي ولا يمكن التراجع عنه
                        </p>
                    </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                        <svg
                            className="w-5 h-5 text-red-600 mt-0.5"
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
                            <p className="text-red-800 font-medium text-sm">
                                تحذير مهم
                            </p>
                            <p className="text-red-700 text-sm mt-1">
                                عند حذف حسابك، سيتم مسح جميع بياناتك ومعلوماتك
                                بشكل نهائي ولا يمكن استرجاعها. ننصحك بحفظ أي
                                بيانات مهمة قبل المتابعة.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <button
                onClick={confirmUserDeletion}
                className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.02]"
            >
                حذف الحساب نهائياً
            </button>

            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                            <svg
                                className="w-6 h-6 text-red-600"
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
                        </div>
                        <h2 className="text-xl font-semibold text-gray-800">
                            تأكيد حذف الحساب
                        </h2>
                    </div>

                    <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
                        <p className="text-red-800 text-sm leading-relaxed">
                            أنت على وشك حذف حسابك بشكل نهائي. هذا الإجراء لا
                            يمكن التراجع عنه وسيتم حذف جميع بياناتك ومعلوماتك
                            الشخصية بشكل كامل من النظام.
                        </p>
                    </div>

                    <p className="text-gray-700 mb-4 text-sm">
                        لأسباب أمنية، يرجى إدخال كلمة المرور الخاصة بك لتأكيد
                        عملية الحذف:
                    </p>

                    <form onSubmit={deleteUser} className="space-y-4">
                        <div>
                            <InputLabel
                                htmlFor="password"
                                value="كلمة المرور"
                                className="text-sm font-semibold text-gray-700 mb-2"
                            />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                ref={passwordInput}
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                className="w-full border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 py-3"
                                isFocused
                                placeholder="أدخل كلمة المرور للتأكيد"
                            />
                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>

                        <div className="flex gap-3 pt-4">
                            <button
                                type="button"
                                onClick={closeModal}
                                className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-3 rounded-xl font-semibold transition-all duration-300"
                            >
                                إلغاء
                            </button>
                            <button
                                type="submit"
                                disabled={processing}
                                className="flex-1 bg-red-500 hover:bg-red-600 disabled:bg-red-300 text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-md"
                            >
                                نعم، احذف الحساب
                            </button>
                        </div>
                    </form>
                </div>
            </Modal>
        </section>
    );
}
