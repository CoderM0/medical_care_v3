import Loader from "@/Components/Loader";
import PatientLayout from "@/Layouts/PatientLayout";
import { useForm } from "@inertiajs/react";
import { useState } from "react";

export default function AddComplaint({ patient }) {
    const [suc, setSuc] = useState(false);
    const { data, setData, errors, post, processing } = useForm({
        nick_name: patient.name,
        complaint: "",
        patient_id: patient.id,
    });
    const add_complaint = (e) => {
        e.preventDefault();
        post(route("patient.save_complaint"), {
            onSuccess: () => setSuc(true),
        });
    };
    return (
        <PatientLayout patient={patient}>
            <form
                class="flex min-h-[85vh] items-center justify-center bg-black/30 p-4"
                onSubmit={add_complaint}
            >
                {processing ? (
                    <Loader />
                ) : suc ? (
                    <div class="w-full max-w-md rounded-2xl bg-white p-6 shadow">
                        <div className="relative ">
                            <button
                                onClick={() => setSuc(false)}
                                class="absolute right-1 top-1 text-gray-400 hover:text-gray-600"
                            >
                                <svg
                                    class="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                </svg>
                            </button>
                            <p className="mx-auto w-32 text-center text-green-500">
                                تم تقديم الشكوى بنجاح
                            </p>
                        </div>
                    </div>
                ) : (
                    <div class="w-full max-w-md">
                        <div class="relative rounded-2xl bg-white p-6 shadow">
                            <div class="mb-4 flex items-center justify-between">
                                <h2 class="text-xl font-semibold text-gray-900">
                                    اكتب الشكوى الخاصة بك
                                </h2>
                            </div>
                            <p class="mb-4 text-center text-sm">
                                نهتم بسماع شكاوى المرضى لتحسين خدماتنا
                            </p>
                            <label htmlFor="">
                                {" "}
                                يمكنك استعمال اسم مستعار للخصوصية
                            </label>
                            <input
                                type="text"
                                value={data.nick_name}
                                onChange={(e) =>
                                    setData("nick_name", e.target.value)
                                }
                                class="my-3 w-full rounded-lg border border-gray-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <textarea
                                class="mb-3 w-full rounded-lg border border-gray-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                rows="4"
                                onChange={(e) =>
                                    setData("complaint", e.target.value)
                                }
                                placeholder="نص الشكوى..."
                            ></textarea>
                            {/* <div class="mb-4 flex justify-start gap-2">
                            <button class="text-md rounded-lg border border-gray-200 px-2.5 py-1.5 hover:bg-gray-50">
                                😞
                            </button>
                            <button class="text-md rounded-lg border border-gray-200 px-2.5 py-1.5 hover:bg-gray-50">
                                😐
                            </button>
                            <button class="text-md rounded-lg border border-gray-200 px-2.5 py-1.5 hover:bg-gray-50">
                                😊
                            </button>
                        </div> */}
                            <button class="w-full rounded-lg bg-gray-900 py-2.5 text-sm font-medium text-white transition duration-300 hover:bg-gray-800">
                                تقديم
                            </button>
                        </div>
                    </div>
                )}
            </form>
        </PatientLayout>
    );
}
