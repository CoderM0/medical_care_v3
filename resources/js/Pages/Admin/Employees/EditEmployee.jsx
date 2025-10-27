import InputError from "@/Components/InputError";
import Loader from "@/Components/Loader";
import TextInput from "@/Components/TextInput";
import AdminLayout from "@/Layouts/AdminLayout";
import { useForm } from "@inertiajs/react";
import { useState } from "react";
import { BiSolidCameraPlus } from "react-icons/bi";
export default function EditEmployee({ departments, employee }) {
    const [succ, setSucc] = useState(false);
    const [newImg, setNewImg] = useState(null);
    const { data, setData, post, errors, reset, processing } = useForm({
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
        post(route("admin.manage.update_employee", employee.id), {
            onSuccess: () => {
                setSucc(true);
                setTimeout(() => {
                    setSucc(false);
                }, 1000);
            },
        });
    };
    // const add_img = (e) => {
    //     setData("imgfile", e.target.files[0]);
    //     setNewImg(e.target.files[0]);
    // };
    return (
        <AdminLayout>
            <div className="bg-white rounded-2xl shadow-md border border-gray-200 transition-all duration-300">
                {/* الهيدر يبقى كما هو */}
                <div className="flex items-center justify-between p-4 border-b bg-gradient-to-l from-primary/10 to-white sticky top-0 z-20 rounded-t-2xl">
                    <h3 className="text-xl font-semibold text-primary">
                        تعديل معلومات {employee.job_description.job_title}{" "}
                        {employee.name}
                    </h3>
                    <p
                        className={`text-green-600 text-base transition-opacity duration-200 ${
                            succ ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        ✅ تم التحديث بنجاح
                    </p>
                </div>

                {processing ? (
                    <div className="flex justify-center items-center h-[60vh]">
                        <Loader />
                    </div>
                ) : (
                    <div className="p-6">
                        <form onSubmit={update_employee} className="space-y-6">
                            {/* قسم الصورة والمعلومات الأساسية */}
                            <div className="flex flex-col lg:flex-row gap-8">
                                {/* الصورة على اليمين مع معلومات سريعة */}
                                <div className="lg:w-1/3">
                                    <div className="sticky top-24 space-y-6">
                                        {/* الصورة */}
                                        <div className="relative group text-center bg-gray-50 rounded-2xl p-6 border border-gray-200">
                                            <img
                                                src={
                                                    newImg
                                                        ? URL.createObjectURL(
                                                              newImg
                                                          )
                                                        : `/storage/${employee.avatar}`
                                                }
                                                className="object-cover w-40 h-40 rounded-xl border-3 border-primary/30 shadow-md transition-all duration-300 group-hover:scale-105 mx-auto"
                                            />
                                            <label
                                                htmlFor="newimgfile"
                                                className="absolute bottom-6 right-6 w-12 h-12 bg-primary text-white rounded-full flex justify-center items-center shadow-lg cursor-pointer hover:bg-primary/90 transition-all hover:scale-110"
                                            >
                                                <BiSolidCameraPlus size="1.4rem" />
                                            </label>
                                        </div>

                                        {/* معلومات سريعة */}
                                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 space-y-4">
                                            <div className="text-center">
                                                <p className="text-lg font-semibold text-gray-800">
                                                    {employee.name}
                                                </p>
                                                <p className="text-primary font-medium mt-1">
                                                    {
                                                        employee.job_description
                                                            .job_title
                                                    }
                                                </p>
                                            </div>

                                            <div className="space-y-3 text-sm">
                                                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                                                    <span className="text-gray-600">
                                                        القسم:
                                                    </span>
                                                    <span className="font-medium text-gray-800">
                                                        {
                                                            departments.find(
                                                                (d) =>
                                                                    d.id ==
                                                                    data.department_id
                                                            )?.title
                                                        }
                                                    </span>
                                                </div>
                                                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                                                    <span className="text-gray-600">
                                                        الراتب:
                                                    </span>
                                                    <span className="font-medium text-green-600">
                                                        ${data.salary}
                                                    </span>
                                                </div>
                                                <div className="flex justify-between items-center py-2">
                                                    <span className="text-gray-600">
                                                        الحالة:
                                                    </span>
                                                    <span className="font-medium text-green-600">
                                                        نشط
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* الحقول على اليسار */}
                                <div className="lg:w-2/3">
                                    <div className="space-y-6">
                                        {/* الملف مخفي */}
                                        <TextInput
                                            type="file"
                                            id="newimgfile"
                                            onChange={(e) => {
                                                setData(
                                                    "imgfile",
                                                    e.target.files[0]
                                                );
                                                setNewImg(e.target.files[0]);
                                            }}
                                            className="hidden"
                                        />

                                        {/* المجموعة الأولى: المعلومات الشخصية */}
                                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                                            <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                                                <span className="w-2 h-6 bg-primary rounded-full ml-2"></span>
                                                المعلومات الشخصية
                                            </h4>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {/* الاسم */}
                                                <div className="md:col-span-2">
                                                    <label className="text-sm font-medium text-gray-700 block mb-2">
                                                        الاسم الكامل
                                                    </label>
                                                    <TextInput
                                                        value={data.name}
                                                        onChange={(e) =>
                                                            setData(
                                                                "name",
                                                                e.target.value
                                                            )
                                                        }
                                                        className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                                                        placeholder="أدخل الاسم الكامل"
                                                    />
                                                    <InputError
                                                        message={errors.name}
                                                        className="mt-2"
                                                    />
                                                </div>

                                                {/* معلومات الاتصال */}
                                                <div>
                                                    <label className="text-sm font-medium text-gray-700 block mb-2">
                                                        معلومات الاتصال
                                                    </label>
                                                    <TextInput
                                                        value={data.contact}
                                                        onChange={(e) =>
                                                            setData(
                                                                "contact",
                                                                e.target.value
                                                            )
                                                        }
                                                        className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                                                        placeholder="+963********"
                                                    />
                                                    <InputError
                                                        message={errors.contact}
                                                        className="mt-2"
                                                    />
                                                </div>

                                                {/* العنوان */}
                                                <div>
                                                    <label className="text-sm font-medium text-gray-700 block mb-2">
                                                        العنوان
                                                    </label>
                                                    <TextInput
                                                        value={data.address}
                                                        onChange={(e) =>
                                                            setData(
                                                                "address",
                                                                e.target.value
                                                            )
                                                        }
                                                        className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                                                        placeholder="مدينة دمشق"
                                                    />
                                                    <InputError
                                                        message={errors.address}
                                                        className="mt-2"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* المجموعة الثانية: المعلومات الوظيفية */}
                                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                                            <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                                                <span className="w-2 h-6 bg-primary rounded-full ml-2"></span>
                                                المعلومات الوظيفية
                                            </h4>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {/* القسم */}
                                                <div>
                                                    <label className="text-sm font-medium text-gray-700 block mb-2">
                                                        القسم
                                                    </label>
                                                    <select
                                                        value={
                                                            data.department_id
                                                        }
                                                        onChange={(e) =>
                                                            setData(
                                                                "department_id",
                                                                e.target.value
                                                            )
                                                        }
                                                        className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-primary focus:border-primary text-gray-900 transition-all"
                                                    >
                                                        {departments.map(
                                                            (el) => (
                                                                <option
                                                                    key={el.id}
                                                                    value={
                                                                        el.id
                                                                    }
                                                                >
                                                                    {el.title}
                                                                </option>
                                                            )
                                                        )}
                                                    </select>
                                                    <InputError
                                                        message={
                                                            errors.department_id
                                                        }
                                                        className="mt-2"
                                                    />
                                                </div>

                                                {/* الراتب */}
                                                <div>
                                                    <label className="text-sm font-medium text-gray-700 block mb-2">
                                                        الراتب (بالدولار)
                                                    </label>
                                                    <TextInput
                                                        type="number"
                                                        value={data.salary}
                                                        onChange={(e) =>
                                                            setData(
                                                                "salary",
                                                                e.target.value
                                                            )
                                                        }
                                                        className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                                                        placeholder="2000"
                                                    />
                                                    <InputError
                                                        message={errors.salary}
                                                        className="mt-2"
                                                    />
                                                </div>

                                                {/* الشهادة */}
                                                <div className="md:col-span-2">
                                                    <label className="text-sm font-medium text-gray-700 block mb-2">
                                                        الشهادة / المؤهل العلمي
                                                    </label>
                                                    <TextInput
                                                        value={data.license}
                                                        onChange={(e) =>
                                                            setData(
                                                                "license",
                                                                e.target.value
                                                            )
                                                        }
                                                        className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                                                        placeholder="جامعة دمشق - كلية الهندسة المعلوماتية"
                                                    />
                                                    <InputError
                                                        message={errors.license}
                                                        className="mt-2"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* المجموعة الثالثة: النبذة الشخصية */}
                                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                                            <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                                                <span className="w-2 h-6 bg-primary rounded-full ml-2"></span>
                                                النبذة الشخصية
                                            </h4>
                                            <textarea
                                                rows="4"
                                                className="w-full border border-gray-300 rounded-xl p-3.5 focus:ring-2 focus:ring-primary focus:border-primary text-gray-900 transition-all"
                                                placeholder="نبذة عن الموظف، المهارات، الخبرات، الإنجازات..."
                                                value={data.bio}
                                                onChange={(e) =>
                                                    setData(
                                                        "bio",
                                                        e.target.value
                                                    )
                                                }
                                            ></textarea>
                                            <InputError
                                                message={errors.bio}
                                                className="mt-2"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* زر التحديث */}
                            <div className="pt-6 border-t text-center">
                                <button
                                    type="submit"
                                    className="w-full sm:w-1/2 lg:w-1/3 mx-auto bg-primary text-white font-medium rounded-xl py-3.5 hover:bg-primary/90 focus:ring-4 focus:ring-primary/30 transition-all transform hover:scale-[1.02] shadow-md"
                                >
                                    تحديث البيانات
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
}
