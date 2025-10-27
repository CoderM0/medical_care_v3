import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AdminLayout from "@/Layouts/AdminLayout";
import { Link, useForm } from "@inertiajs/react";
import { useState } from "react";
import { BiSolidCameraPlus } from "react-icons/bi";

export default function AddDepartment({ departments, specialities, jobs }) {
    const [newimg, setNewImg] = useState(null);
    const {
        data: depData,
        setData: setDepData,
        post,
        errors,
        reset,
    } = useForm({
        title: "",
        description: "",
        department_img: "",
    });
    const {
        data: specData,
        setData: setspecData,
        post: add_spec,
        errors: errorspec,
        reset: resetspec,
    } = useForm({
        title: "",
        type: "الجميع",
    });
    const add_dep = (e) => {
        e.preventDefault();
        post(route("admin.store_dep"), {
            onSuccess: () => reset(),
        });
    };
    const add_speciality = (e) => {
        e.preventDefault();
        add_spec(route("admin.store_specialty"), {
            onSuccess: () => resetspec(),
        });
    };
    return (
        <AdminLayout>
            <div className="min-h-screen p-6 bg-gradient-to-br from-blue-50 to-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-8 text-center">
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">
                            إدارة الأقسام والاختصاصات
                        </h1>
                        <p className="text-gray-600">
                            أضف وادخل الأقسام والاختصاصات في المنظومة
                        </p>
                    </div>

                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                        <div className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl border border-gray-200 overflow-hidden">
                            <div className="bg-gradient-to-l from-blue-500 to-blue-600 p-6">
                                <h2 className="text-xl font-bold text-white flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                                        <svg
                                            className="w-6 h-6 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                            />
                                        </svg>
                                    </div>
                                    إضافة قسم جديد
                                </h2>
                            </div>

                            <div className="p-6">
                                <form onSubmit={add_dep} className="space-y-6">
                                    <div>
                                        <InputLabel className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                                            اسم القسم
                                        </InputLabel>
                                        <TextInput
                                            type="text"
                                            placeholder="أدخل اسم القسم..."
                                            value={depData.title}
                                            onChange={(e) =>
                                                setDepData(
                                                    "title",
                                                    e.target.value
                                                )
                                            }
                                            className="w-full border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 py-3"
                                        />
                                        <InputError
                                            message={errors.title}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div>
                                        <InputLabel className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                                            وصف القسم
                                        </InputLabel>
                                        <textarea
                                            className="w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-vertical"
                                            rows={3}
                                            placeholder="أضف وصفًا مختصرًا لما يقوم به القسم..."
                                            value={depData.description}
                                            onChange={(e) =>
                                                setDepData(
                                                    "description",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.description}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div>
                                        <InputLabel className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                                            صورة القسم
                                        </InputLabel>
                                        <div className="flex flex-col items-center gap-4 p-4 border-2 border-dashed border-gray-300 rounded-xl hover:border-blue-400 transition-all duration-300 bg-gray-50">
                                            {newimg ? (
                                                <div className="text-center">
                                                    <img
                                                        src={URL.createObjectURL(
                                                            newimg
                                                        )}
                                                        alt="معاينة الصورة"
                                                        className="w-24 h-24 rounded-lg object-cover border border-gray-200 shadow-sm mx-auto mb-3"
                                                    />
                                                    <p className="text-sm text-gray-600">
                                                        تم اختيار الصورة
                                                    </p>
                                                </div>
                                            ) : (
                                                <div className="text-center py-4">
                                                    <BiSolidCameraPlus
                                                        size="2rem"
                                                        className="text-gray-400 mx-auto mb-2"
                                                    />
                                                    <p className="text-sm text-gray-600">
                                                        لم يتم اختيار صورة
                                                    </p>
                                                </div>
                                            )}
                                            <label
                                                htmlFor="depimg"
                                                className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors shadow-sm"
                                            >
                                                <BiSolidCameraPlus size="1.2rem" />
                                                {newimg
                                                    ? "تغيير الصورة"
                                                    : "اختر صورة"}
                                            </label>
                                            <TextInput
                                                type="file"
                                                id="depimg"
                                                className="hidden"
                                                onChange={(e) => {
                                                    setDepData(
                                                        "department_img",
                                                        e.target.files[0]
                                                    );
                                                    setNewImg(
                                                        e.target.files[0]
                                                    );
                                                }}
                                            />
                                        </div>
                                        <InputError
                                            message={errors.department_img}
                                            className="mt-2"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:scale-[1.02]"
                                    >
                                        إضافة القسم
                                    </button>
                                </form>

                                <div className="mt-8 pt-6 border-t border-gray-200">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                        الأقسام الحالية (
                                        {departments?.length || 0})
                                    </h3>
                                    <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
                                        {departments?.map((dep) => (
                                            <div
                                                key={dep.id}
                                                className="flex items-center justify-between bg-gray-50 px-4 py-3 rounded-xl border border-gray-200 hover:bg-blue-50 transition-colors group"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                                                    <span className="text-gray-800 font-medium">
                                                        {dep.title}
                                                    </span>
                                                </div>
                                                {dep.title !== "عام" && (
                                                    <Link
                                                        method="DELETE"
                                                        href={route(
                                                            "admin.delete_department",
                                                            dep.id
                                                        )}
                                                        className="text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                                                    >
                                                        حذف
                                                    </Link>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl border border-gray-200 overflow-hidden">
                            <div className="bg-gradient-to-l from-indigo-500 to-indigo-600 p-6">
                                <h2 className="text-xl font-bold text-white flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                                        <svg
                                            className="w-6 h-6 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                            />
                                        </svg>
                                    </div>
                                    إضافة اختصاص جديد
                                </h2>
                            </div>

                            <div className="p-6">
                                <form
                                    onSubmit={add_speciality}
                                    className="space-y-6"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                                        <div>
                                            <InputLabel className="text-sm font-semibold text-gray-700 mb-2">
                                                نوع الوظيفة
                                            </InputLabel>
                                            <select
                                                value={specData.type}
                                                onChange={(e) =>
                                                    setspecData(
                                                        "type",
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700 py-3 px-3 transition-all duration-300"
                                            >
                                                <option value="الجميع">
                                                    الجميع
                                                </option>
                                                {jobs?.map((el) => (
                                                    <option
                                                        key={el.id}
                                                        value={el.job_title}
                                                    >
                                                        {el.job_title}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="md:col-span-2">
                                            <InputLabel className="text-sm font-semibold text-gray-700 mb-2">
                                                اسم الاختصاص
                                            </InputLabel>
                                            <div className="flex gap-3">
                                                <TextInput
                                                    value={specData.title}
                                                    onChange={(e) =>
                                                        setspecData(
                                                            "title",
                                                            e.target.value
                                                        )
                                                    }
                                                    type="text"
                                                    placeholder="أدخل اسم الاختصاص..."
                                                    className="flex-1 border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 py-3"
                                                />
                                                <button
                                                    type="submit"
                                                    className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-xl transition-all duration-300 font-semibold shadow-md hover:shadow-lg whitespace-nowrap min-w-[100px]"
                                                >
                                                    إضافة
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <InputError
                                        message={errorspec.title}
                                        className="mt-2"
                                    />
                                </form>

                                <div className="mt-8 pt-6 border-t border-gray-200">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                        الاختصاصات المتاحة (
                                        {specialities?.length || 0})
                                    </h3>
                                    <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                                        {specialities?.map((special) => (
                                            <div
                                                key={special.id}
                                                className="flex items-center justify-between bg-gray-50 px-4 py-3 rounded-xl border border-gray-200 hover:bg-indigo-50 transition-colors group"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className="w-3 h-3 bg-indigo-400 rounded-full"></div>
                                                    <div>
                                                        <span className="text-gray-800 font-medium block">
                                                            {special.title}
                                                        </span>
                                                        <span className="text-gray-500 text-xs bg-gray-100 px-2 py-1 rounded-full">
                                                            {special.type}
                                                        </span>
                                                    </div>
                                                </div>
                                                {!(
                                                    special.title === "عام" &&
                                                    special.type === "الجميع"
                                                ) && (
                                                    <Link
                                                        method="DELETE"
                                                        href={route(
                                                            "admin.delete_specialty",
                                                            special.id
                                                        )}
                                                        className="text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                                                    >
                                                        حذف
                                                    </Link>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
