import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Loader from "@/Components/Loader";
import TextInput from "@/Components/TextInput";
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
            <div className="bg-white  border-4 rounded-lg shadow relative  h-[85vh] overflow-y-auto">
                <div className="flex items-start justify-between p-5 border-b rounded-t sticky top-0 bg-white z-20">
                    <h3 className="text-xl font-semibold">أضف موظف</h3>{" "}
                    <p
                        className={`text-center text-xl text-green-500 duration-150 transition-opacity  ${
                            succ ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        تمت الإضافة بنجاح
                    </p>
                </div>

                <div className="p-6 space-y-6">
                    {processing ? (
                        <Loader />
                    ) : (
                        <form onSubmit={add_employee}>
                            <h1 className="text-indigo-900 font-bold">
                                معلومات الحساب
                            </h1>
                            <div className=" my-2 pb-3 flex justify-between gap-4">
                                <div className="mt-4 w-1/2">
                                    <InputLabel
                                        htmlFor="email"
                                        value="البريد الإلكتروني"
                                    />

                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        className="mt-1 block w-full"
                                        autoComplete="username"
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.email}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mt-4 w-1/2">
                                    <InputLabel
                                        htmlFor="password"
                                        value="كلمة المرور"
                                    />

                                    <TextInput
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        className="mt-1 block w-full"
                                        autoComplete="new-password"
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.password}
                                        className="mt-2"
                                    />
                                </div>
                            </div>
                            <h1 className=" font-bold my-3 text-indigo-900 ">
                                معلومات إضافية
                            </h1>
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label
                                        htmlFor="name"
                                        className="text-sm font-medium text-gray-900 block mb-2"
                                    >
                                        الاسم
                                    </label>
                                    <TextInput
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        id="name"
                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5"
                                        placeholder="محمد احمد"
                                    />
                                    <InputError
                                        message={errors.name}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label
                                        htmlFor="department_id"
                                        className="text-sm font-medium text-gray-900 block mb-2"
                                    >
                                        الوظيفة
                                    </label>
                                    <select
                                        name="job_id"
                                        onChange={(e) => {
                                            setData("job_id", e.target.value);
                                            checktypes(e.target.value);
                                        }}
                                        className="text-right shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5"
                                        required=""
                                    >
                                        {jobs.map((el) => {
                                            return (
                                                <option
                                                    key={el.id}
                                                    value={el.job_id}
                                                >
                                                    {el.job_title}
                                                </option>
                                            );
                                        })}
                                    </select>
                                    <InputError
                                        message={errors.job_id}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label
                                        htmlFor="department_id"
                                        className="text-sm font-medium text-gray-900 block mb-2"
                                    >
                                        القسم
                                    </label>
                                    <select
                                        name="department_id"
                                        id="department_id"
                                        value={data.department_id}
                                        onChange={(e) =>
                                            setData(
                                                "department_id",
                                                e.target.value
                                            )
                                        }
                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5"
                                        required=""
                                    >
                                        {departments.map((el) => {
                                            return (
                                                <option
                                                    key={el.id}
                                                    value={el.id}
                                                >
                                                    {el.title}
                                                </option>
                                            );
                                        })}
                                    </select>
                                    <InputError
                                        message={errors.department_id}
                                        className="mt-2"
                                    />
                                </div>
                                {/*  */}

                                {/*  */}
                                <div className="col-span-6 sm:col-span-3">
                                    <label
                                        htmlFor="speciality"
                                        className="text-sm font-medium text-gray-900 block mb-2"
                                    >
                                        الإختصاص
                                    </label>
                                    <select
                                        onChange={(e) =>
                                            setData(
                                                "specialty_id",
                                                e.target.value
                                            )
                                        }
                                        name="specialty_id"
                                        value={data.specialty_id}
                                        id="specialty_id"
                                        className="text-right shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5"
                                        required=""
                                    >
                                        {newSpecialities.map((speci) => {
                                            return (
                                                <option
                                                    key={speci.id}
                                                    value={speci.id}
                                                >
                                                    {speci.id} - {speci.title}
                                                </option>
                                            );
                                        })}
                                    </select>
                                    <InputError
                                        message={errors.specialty_id}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label
                                        htmlFor="license"
                                        className="text-sm font-medium text-gray-900 block mb-2"
                                    >
                                        الشهادة
                                    </label>
                                    <TextInput
                                        name="license"
                                        id="license"
                                        value={data.license}
                                        onChange={(e) =>
                                            setData("license", e.target.value)
                                        }
                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5"
                                        placeholder="جامعة دمشق"
                                        required=""
                                    />
                                    <InputError
                                        message={errors.license}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label
                                        htmlFor="contact"
                                        className="text-sm font-medium text-gray-900 block mb-2"
                                    >
                                        معلومات الاتصال
                                    </label>
                                    <TextInput
                                        name="contact"
                                        id="contact"
                                        value={data.contact}
                                        onChange={(e) =>
                                            setData("contact", e.target.value)
                                        }
                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5"
                                        placeholder="+963********"
                                        required=""
                                    />
                                    <InputError
                                        message={errors.contact}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label
                                        htmlFor="address"
                                        className="text-sm font-medium text-gray-900 block mb-2"
                                    >
                                        العنوان
                                    </label>
                                    <TextInput
                                        name="address"
                                        id="address"
                                        value={data.address}
                                        onChange={(e) =>
                                            setData("address", e.target.value)
                                        }
                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5"
                                        placeholder="مدينة طرطوس"
                                        required=""
                                    />
                                    <InputError
                                        message={errors.address}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label
                                        htmlFor="sal"
                                        className="text-sm font-medium text-gray-900 block mb-2"
                                    >
                                        الراتب (بالدولار)
                                    </label>
                                    <TextInput
                                        name="salary"
                                        id="sal"
                                        type="number"
                                        value={data.salary}
                                        onChange={(e) =>
                                            setData("salary", e.target.value)
                                        }
                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5"
                                        placeholder="2000"
                                        required=""
                                    />
                                    <InputError
                                        message={errors.salary}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="col-span-full">
                                    <label
                                        htmlFor="bio"
                                        className="text-sm font-medium text-gray-900 block mb-2"
                                    >
                                        النبذة
                                    </label>
                                    <textarea
                                        id="bio"
                                        rows="6"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-4"
                                        placeholder="النبذة"
                                        value={data.bio}
                                        onChange={(e) =>
                                            setData("bio", e.target.value)
                                        }
                                    ></textarea>
                                </div>
                                {/*  */}
                                <div>
                                    <InputLabel className="">
                                        أرفق صورة
                                    </InputLabel>
                                    <div
                                        className="w-[930px] cursor-pointer relative border-2 border-gray-300 border-dashed rounded-lg p-6 my-2"
                                        id="dropzone"
                                    >
                                        <TextInput
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => {
                                                setData(
                                                    "imgfile",
                                                    e.target.files[0]
                                                );
                                                setNewImg(e.target.files[0]);
                                            }}
                                            className="absolute inset-0 w-full h-full opacity-0 z-50"
                                        />
                                        <div className="flex justify-center gap-4 items-center text-center w-full mx-auto ">
                                            <div>
                                                {" "}
                                                <div className="w-full flex justify-center items-center">
                                                    <LuImageUp
                                                        size={"3.5rem"}
                                                    />
                                                </div>{" "}
                                                <h3 className="mt-2 text-sm font-medium text-gray-900">
                                                    <label
                                                        htmlFor="file-upload"
                                                        className="relative cursor-pointer"
                                                    >
                                                        <span>
                                                            اسحب وأفلت هنا
                                                        </span>
                                                        <span className="text-indigo-600 cursor-pointer">
                                                            {" "}
                                                            أو تصفح الملفات
                                                        </span>
                                                        {newimg ? (
                                                            <span>
                                                                {" "}
                                                                لتغيير الصورة{" "}
                                                            </span>
                                                        ) : (
                                                            <span>
                                                                {" "}
                                                                لتحميل الصورة{" "}
                                                            </span>
                                                        )}
                                                    </label>
                                                </h3>{" "}
                                                <p className="mt-1 text-xs text-gray-500">
                                                    PNG, JPG, GIF up to 10MB
                                                </p>{" "}
                                            </div>

                                            {newimg ? (
                                                <img
                                                    src={URL.createObjectURL(
                                                        newimg
                                                    )}
                                                    className="object-cover w-40 h-40 rounded-lg "
                                                    alt=""
                                                />
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                    </div>
                                </div>
                                {/*  */}
                            </div>
                            <div className="pt-4 border-t border-gray-200 rounded-b">
                                <button
                                    className="block w-1/2 mx-auto text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                    type="submit"
                                >
                                    أضف
                                </button>
                            </div>{" "}
                        </form>
                    )}
                </div>
            </div>
        </AdminLayout>
    );
}
