import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Loader from "@/Components/Loader";
import AdminLayout from "@/Layouts/AdminLayout";
import { useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { LuImageUp } from "react-icons/lu";

export default function AddDoctor({ auth, departments, specialities, jobs }) {
    const [succ, setSucc] = useState(false);

    const [newSpecialities, setNewSpecialities] = useState([...specialities]);
    useEffect(() => {
        checktypes(jobs[0]["job_id"]);
    }, []);
    const { data, setData, post, errors, reset, processing } = useForm({
        email: "",
        password: "",
        name: "",
        job_id: jobs[0]["job_id"],
        department_id: departments[0]["id"],
        specialty_id: newSpecialities[0]["id"],
        license: "",
        contact: "",
        address: "",
        salary: "",
        bio: "",
        imgfile: "",
    });
    const checktypes = (t) => {
        const tmp2 = jobs.find((item) => item.job_id == t);
        const tmp = specialities.filter(
            (item) => item.type == tmp2["job_title"] || item.type == "الجميع"
        );
        setData("specialty_id", tmp[0]["id"]);
        setNewSpecialities(tmp);
    };
    const [newimg, setNewImg] = useState(null);
    const add_employee = (e) => {
        e.preventDefault();

        post(route("admin.store_employee"), {
            onSuccess: () => {
                setSucc(true);
                setTimeout(() => {
                    setSucc(false);
                }, 1000);

                reset();
            },
        });
    };
    return (
        <AdminLayout auth={auth}>
            <div className="bg-white border rounded-2xl shadow-sm overflow-hidden">
                {/* العنوان */}
                <div className="flex items-center justify-between px-6 py-4 border-b bg-gradient-to-l from-primary/5 to-white sticky top-0 z-20">
                    <h3 className="text-xl font-semibold text-primary flex items-center gap-2">
                        <span className="w-2 h-6 bg-primary rounded-full"></span>
                        إضافة موظف جديد
                    </h3>
                    <p
                        className={`text-green-600 text-sm transition-all duration-300 ${
                            succ ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        ✅ تمت الإضافة بنجاح
                    </p>
                </div>

                <div className="p-6">
                    {processing ? (
                        <div className="flex justify-center items-center py-12">
                            <Loader />
                        </div>
                    ) : (
                        <form onSubmit={add_employee} className="space-y-6">
                            <div className="flex flex-col lg:flex-row gap-6 items-start">
                                <div className="lg:w-1/3">
                                    <div className="sticky top-24 space-y-4">
                                        <div className="bg-blue-50 rounded-2xl p-5 border-2 border-dashed border-gray-300 hover:border-primary/50 transition-all duration-300">
                                            <InputLabel
                                                value="صورة الموظف"
                                                className="mb-3 text-gray-700"
                                            />
                                            <div className="relative text-center">
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={(e) => {
                                                        setData(
                                                            "imgfile",
                                                            e.target.files[0]
                                                        );
                                                        setNewImg(
                                                            e.target.files[0]
                                                        );
                                                    }}
                                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                                />

                                                {newimg ? (
                                                    <div className="relative group">
                                                        <img
                                                            src={URL.createObjectURL(
                                                                newimg
                                                            )}
                                                            alt="preview"
                                                            className="w-32 h-32 rounded-xl object-cover border-2 border-primary/30 mx-auto shadow-md"
                                                        />
                                                        <div className="absolute inset-0 bg-black/40 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                            <LuImageUp
                                                                size="2rem"
                                                                className="text-white"
                                                            />
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="py-4">
                                                        <LuImageUp
                                                            size="3rem"
                                                            className="mx-auto text-gray-400 mb-3"
                                                        />
                                                        <p className="text-sm text-gray-600 mb-1">
                                                            انقر لرفع الصورة
                                                        </p>
                                                        <p className="text-xs text-gray-400">
                                                            PNG, JPG حتى 10MB
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="bg-blue-50 rounded-2xl p-5 border border-gray-200">
                                            <h4 className="text-sm font-semibold text-gray-800 mb-4 flex items-center">
                                                <span className="w-1.5 h-4 bg-primary rounded-full ml-2"></span>
                                                بيانات الدخول
                                            </h4>
                                            <div className="space-y-3">
                                                <div>
                                                    <InputLabel
                                                        htmlFor="email"
                                                        value="البريد الإلكتروني"
                                                        className="text-xs"
                                                    />
                                                    <input
                                                        id="email"
                                                        type="email"
                                                        value={data.email}
                                                        onChange={(e) =>
                                                            setData(
                                                                "email",
                                                                e.target.value
                                                            )
                                                        }
                                                        required
                                                        className="w-full h-10 px-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                                                        placeholder="employee@company.com"
                                                    />
                                                    <InputError
                                                        message={errors.email}
                                                        className="mt-1 text-xs"
                                                    />
                                                </div>

                                                <div>
                                                    <InputLabel
                                                        htmlFor="password"
                                                        value="كلمة المرور"
                                                        className="text-xs"
                                                    />
                                                    <input
                                                        id="password"
                                                        type="password"
                                                        value={data.password}
                                                        onChange={(e) =>
                                                            setData(
                                                                "password",
                                                                e.target.value
                                                            )
                                                        }
                                                        required
                                                        className="w-full h-10 px-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                                                        placeholder="••••••••"
                                                    />
                                                    <InputError
                                                        message={
                                                            errors.password
                                                        }
                                                        className="mt-1 text-xs"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:w-2/3 space-y-6">
                                    <div className="bg-blue-50 rounded-2xl p-5 border border-gray-200">
                                        <h4 className="text-sm font-semibold text-gray-800 mb-4 flex items-center">
                                            <span className="w-1.5 h-4 bg-primary rounded-full ml-2"></span>
                                            المعلومات الأساسية
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <InputLabel
                                                    htmlFor="name"
                                                    value="الاسم الكامل"
                                                    className="text-xs"
                                                />
                                                <input
                                                    id="name"
                                                    type="text"
                                                    value={data.name}
                                                    onChange={(e) =>
                                                        setData(
                                                            "name",
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="محمد أحمد"
                                                    className="w-full h-10 px-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                                                />
                                                <InputError
                                                    message={errors.name}
                                                    className="mt-1 text-xs"
                                                />
                                            </div>

                                            <div>
                                                <InputLabel
                                                    htmlFor="job_id"
                                                    value="الوظيفة"
                                                    className="text-xs"
                                                />
                                                <select
                                                    id="job_id"
                                                    value={data.job_id}
                                                    onChange={(e) => {
                                                        setData(
                                                            "job_id",
                                                            e.target.value
                                                        );
                                                        checktypes(
                                                            e.target.value
                                                        );
                                                    }}
                                                    className="w-full h-10 px-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                                                >
                                                    {jobs.map((el) => (
                                                        <option
                                                            key={el.id}
                                                            value={el.job_id}
                                                        >
                                                            {el.job_title}
                                                        </option>
                                                    ))}
                                                </select>
                                                <InputError
                                                    message={errors.job_id}
                                                    className="mt-1 text-xs"
                                                />
                                            </div>

                                            <div>
                                                <InputLabel
                                                    htmlFor="department_id"
                                                    value="القسم"
                                                    className="text-xs"
                                                />
                                                <select
                                                    id="department_id"
                                                    value={data.department_id}
                                                    onChange={(e) =>
                                                        setData(
                                                            "department_id",
                                                            e.target.value
                                                        )
                                                    }
                                                    className="w-full h-10 px-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                                                >
                                                    {departments.map((el) => (
                                                        <option
                                                            key={el.id}
                                                            value={el.id}
                                                        >
                                                            {el.title}
                                                        </option>
                                                    ))}
                                                </select>
                                                <InputError
                                                    message={
                                                        errors.department_id
                                                    }
                                                    className="mt-1 text-xs"
                                                />
                                            </div>

                                            <div>
                                                <InputLabel
                                                    htmlFor="salary"
                                                    value="الراتب ($)"
                                                    className="text-xs"
                                                />
                                                <input
                                                    id="salary"
                                                    type="number"
                                                    value={data.salary}
                                                    onChange={(e) =>
                                                        setData(
                                                            "salary",
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="2000"
                                                    className="w-full h-10 px-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                                                />
                                                <InputError
                                                    message={errors.salary}
                                                    className="mt-1 text-xs"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-blue-50 rounded-2xl p-5 border border-gray-200">
                                        <h4 className="text-sm font-semibold text-gray-800 mb-4 flex items-center">
                                            <span className="w-1.5 h-4 bg-primary rounded-full ml-2"></span>
                                            معلومات إضافية
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <InputLabel
                                                    htmlFor="specialty_id"
                                                    value="الإختصاص"
                                                    className="text-xs"
                                                />
                                                <select
                                                    id="specialty_id"
                                                    value={data.specialty_id}
                                                    onChange={(e) =>
                                                        setData(
                                                            "specialty_id",
                                                            e.target.value
                                                        )
                                                    }
                                                    className="w-full h-10 px-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                                                >
                                                    {newSpecialities.map(
                                                        (speci) => (
                                                            <option
                                                                key={speci.id}
                                                                value={speci.id}
                                                            >
                                                                {speci.title}
                                                            </option>
                                                        )
                                                    )}
                                                </select>
                                                <InputError
                                                    message={
                                                        errors.specialty_id
                                                    }
                                                    className="mt-1 text-xs"
                                                />
                                            </div>

                                            {/* الشهادة */}
                                            <div>
                                                <InputLabel
                                                    htmlFor="license"
                                                    value="الشهادة"
                                                    className="text-xs"
                                                />
                                                <input
                                                    id="license"
                                                    type="text"
                                                    value={data.license}
                                                    onChange={(e) =>
                                                        setData(
                                                            "license",
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="جامعة دمشق"
                                                    className="w-full h-10 px-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                                                />
                                                <InputError
                                                    message={errors.license}
                                                    className="mt-1 text-xs"
                                                />
                                            </div>

                                            {/* الاتصال */}
                                            <div>
                                                <InputLabel
                                                    htmlFor="contact"
                                                    value="معلومات الاتصال"
                                                    className="text-xs"
                                                />
                                                <input
                                                    id="contact"
                                                    type="text"
                                                    value={data.contact}
                                                    onChange={(e) =>
                                                        setData(
                                                            "contact",
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="+963********"
                                                    className="w-full h-10 px-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                                                />
                                                <InputError
                                                    message={errors.contact}
                                                    className="mt-1 text-xs"
                                                />
                                            </div>

                                            {/* العنوان */}
                                            <div>
                                                <InputLabel
                                                    htmlFor="address"
                                                    value="العنوان"
                                                    className="text-xs"
                                                />
                                                <input
                                                    id="address"
                                                    type="text"
                                                    value={data.address}
                                                    onChange={(e) =>
                                                        setData(
                                                            "address",
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="مدينة دمشق"
                                                    className="w-full h-10 px-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                                                />
                                                <InputError
                                                    message={errors.address}
                                                    className="mt-1 text-xs"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* النبذة */}
                                    <div className="bg-blue-50 rounded-2xl p-5 border border-gray-200">
                                        <h4 className="text-sm font-semibold text-gray-800 mb-4 flex items-center">
                                            <span className="w-1.5 h-4 bg-primary rounded-full ml-2"></span>
                                            النبذة الشخصية
                                        </h4>
                                        <textarea
                                            id="bio"
                                            rows="3"
                                            value={data.bio}
                                            onChange={(e) =>
                                                setData("bio", e.target.value)
                                            }
                                            placeholder="اكتب نبذة قصيرة عن الموظف، المهارات، والخبرات..."
                                            className="w-full min-h-[80px] px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-vertical"
                                        />
                                        <InputError
                                            message={errors.bio}
                                            className="mt-1 text-xs"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* زر الإرسال */}
                            <div className="pt-6 border-t text-center">
                                <button
                                    type="submit"
                                    className="w-full sm:w-1/2 lg:w-1/3 mx-auto bg-primary text-white font-medium rounded-xl py-3 hover:bg-primary/90 focus:ring-4 focus:ring-primary/30 transition-all transform hover:scale-[1.02] shadow-md"
                                >
                                    إضافة الموظف
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </AdminLayout>
    );
}
