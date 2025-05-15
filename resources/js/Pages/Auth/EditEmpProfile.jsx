import InputError from "@/Components/InputError";
import Loader from "@/Components/Loader";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { useState } from "react";
import { BiSolidCameraPlus } from "react-icons/bi";

export default function EditEmpProfile({ employee, departments }) {
    const [succ, setSucc] = useState(false);
    const [newImg, setNewImg] = useState(false);
    const { data, setData, processing, errors, post } = useForm({
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
        post(route("employee.profile.update"), {
            onSuccess: () => {
                setSucc(true);
                setTimeout(() => {
                    setSucc(false);
                }, 2000);
            },
        });
    };
    return (
        <div className="bg-white  border-4 rounded-lg shadow relative  ">
            <div className="py-5 bg-indigo-800 px-5">
                <button className="text-white" onClick={() => history.back()}>
                    رجوع
                </button>
            </div>
            <div className="flex items-start justify-between p-5 border-b rounded-t bg-white z-20">
                <h3 className="text-xl font-semibold ">
                    تعديل معلوماتك الشخصية
                </h3>{" "}
                <p
                    className={`text-center text-xl text-green-500 duration-150 transition-opacity  ${
                        succ ? "opacity-100" : "opacity-0"
                    }`}
                >
                    تم التحديث بنجاح
                </p>
            </div>
            {processing ? (
                <Loader />
            ) : (
                <div className="p-6 space-y-6">
                    <form onSubmit={update_employee}>
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 flex justify-center">
                                <span class="relative inline-block">
                                    <img
                                        src={
                                            newImg
                                                ? URL.createObjectURL(newImg)
                                                : `/storage/${employee.avatar}`
                                        }
                                        className="object-cover w-40 h-40 rounded-full "
                                    />
                                    <label
                                        htmlFor="newimgfile"
                                        className="cursor-pointer absolute bottom-0 right-0 w-10 h-10 bg-white border-2 border-gray-200 rounded-full flex justify-center items-center"
                                    >
                                        <BiSolidCameraPlus
                                            color="green"
                                            size={"1.5rem"}
                                        />
                                    </label>
                                </span>
                            </div>
                            <TextInput
                                type="file"
                                onChange={(e) => {
                                    setData("imgfile", e.target.files[0]);
                                    setNewImg(e.target.files[0]);
                                }}
                                id="newimgfile"
                                className="hidden"
                            />
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
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                    placeholder="احمد محمد"
                                />
                                <InputError
                                    message={errors.name}
                                    className="mt-2"
                                />
                            </div>

                            {/* <div className="col-span-6 sm:col-span-3">
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
                                        setData("department_id", e.target.value)
                                    }
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                    required=""
                                >
                                    {departments.map((el) => {
                                        return (
                                            <option
                                                key={el.id}
                                                value={el.id}
                                                selected={
                                                    el.id == data.department_id
                                                }
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
                            </div> */}
                            {/*  */}

                            {/*  */}

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
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                    placeholder="جامعة طرطوس"
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
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
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
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                    placeholder="مدينة طرطوس"
                                    required=""
                                />
                                <InputError
                                    message={errors.address}
                                    className="mt-2"
                                />
                            </div>
                            {/* <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="salary"
                                    className="text-sm font-medium text-gray-900 block mb-2"
                                >
                                    الراتب
                                </label>
                                <TextInput
                                    name="salary"
                                    id="salary"
                                    value={data.salary}
                                    onChange={(e) =>
                                        setData("salary", e.target.value)
                                    }
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                    placeholder="الراتب بالدولار "
                                    required=""
                                />
                                <InputError
                                    message={errors.salary}
                                    className="mt-2"
                                />
                            </div> */}

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
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                                    placeholder="النبذة"
                                    value={data.bio}
                                    onChange={(e) =>
                                        setData("bio", e.target.value)
                                    }
                                ></textarea>
                            </div>
                            {/*  */}

                            {/*  */}
                        </div>
                        <div className="pt-4 border-t border-gray-200 rounded-b">
                            <button
                                className="block w-1/2 mx-auto text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                type="submit"
                            >
                                تحديث
                            </button>
                        </div>{" "}
                    </form>
                </div>
            )}
        </div>
    );
}
