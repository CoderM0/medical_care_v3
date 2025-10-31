import BackBtn from "@/Components/BackBtn";
import PatientLayout from "@/Layouts/PatientLayout";
import { useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa6";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { MdDeveloperBoardOff } from "react-icons/md";

export default function BookanAppointment({
    availbaleSlotes,
    doctor,
    patient,
}) {
    const [openModal, setOpenModal] = useState(false);
    const { data, setData, post, processing } = useForm();
    useEffect(() => {
        setData("price", 20);
        setData("employee_id", doctor.employee.id);
    }, []);
    const add_reservation = () => {
        if (Object.keys(data).length == 5) {
            post(route("patient.appointment.reserve"));
        }
    };

    return (
        <PatientLayout patient={patient}>
            <div className="py-6">
                {openModal ? (
                    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-2xl shadow-xl w-full max-w-md">
                            <div className="flex justify-between items-center p-6 border-b border-blue-100">
                                <h2 className="text-xl font-bold text-blue-800">
                                    معلومات الحجز
                                </h2>
                                <button
                                    onClick={() => {
                                        setOpenModal(false);
                                        setData("reservation", "");
                                    }}
                                    className="text-red-500 hover:text-red-600 transition-colors"
                                >
                                    <IoMdCloseCircleOutline size={24} />
                                </button>
                            </div>

                            <div className="p-6">
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            الأعراض الأولية
                                        </label>
                                        <input
                                            type="text"
                                            name="details"
                                            onChange={(e) =>
                                                setData(
                                                    "details",
                                                    e.target.value
                                                )
                                            }
                                            placeholder="مثل: حرارة، صداع..."
                                            className="w-full py-3 px-4 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>

                                    <div className="border-t border-blue-100 pt-4">
                                        <p className="font-bold text-blue-800 text-center mb-4">
                                            معلومات الدفع
                                        </p>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                رقم الحساب
                                            </label>
                                            <input
                                                type="number"
                                                name="card-number"
                                                onChange={(e) =>
                                                    setData(
                                                        "card_num",
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="0000 0000 0000 0000"
                                                className="w-full py-3 px-4 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            />
                                        </div>

                                        <div className="mt-3">
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                مبلغ الدفع
                                            </label>
                                            <div className="w-full py-3 px-4 border border-blue-200 bg-blue-50 rounded-lg text-blue-700 font-bold">
                                                20$
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <button
                                        onClick={add_reservation}
                                        disabled={processing}
                                        className="w-full flex justify-center items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-200 disabled:opacity-50"
                                    >
                                        {processing ? (
                                            <>
                                                <FaSpinner className="animate-spin" />
                                                <span>جاري المعالجة...</span>
                                            </>
                                        ) : (
                                            <span>دفع</span>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <h1 className="text-2xl font-bold text-blue-800">
                                    المواعيد المتاحة لدى الطبيب{" "}
                                    {doctor.employee.name}
                                </h1>
                                <p className="text-gray-600 mt-1">
                                    اختر الوقت المناسب لحجز موعدك
                                </p>
                            </div>
                            <BackBtn />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {availbaleSlotes.map((slot) => {
                                return (
                                    <div
                                        key={slot.id}
                                        className="bg-white border border-blue-100 rounded-xl p-6 shadow-lg"
                                    >
                                        <div className="text-center mb-4">
                                            <p className="text-lg font-bold text-blue-800">
                                                {slot.date}
                                            </p>
                                            <p className="text-blue-600 font-medium">
                                                {slot.day_name}
                                            </p>
                                        </div>

                                        {!slot.off ? (
                                            <div className="grid grid-cols-2 gap-2">
                                                {Object.values(
                                                    slot.available_hourse
                                                ).map((houre) => {
                                                    const isSelected =
                                                        data.reservation
                                                            ?.date ===
                                                            slot.full_date &&
                                                        data.reservation
                                                            ?.time === houre;
                                                    return (
                                                        <button
                                                            key={houre}
                                                            onClick={() =>
                                                                setData(
                                                                    "reservation",
                                                                    {
                                                                        date: slot.full_date,
                                                                        time: houre,
                                                                        doctor_id:
                                                                            doctor.id,
                                                                    }
                                                                )
                                                            }
                                                            className={`py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                                                                isSelected
                                                                    ? "bg-blue-500 text-white"
                                                                    : "bg-blue-50 text-blue-700 hover:bg-blue-100"
                                                            }`}
                                                        >
                                                            {houre}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        ) : (
                                            <div className="text-center py-4">
                                                <MdDeveloperBoardOff className="mx-auto text-red-400 text-3xl mb-2" />
                                                <p className="text-red-500 font-bold">
                                                    عطلة
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        <div className="text-center mt-8">
                            <button
                                onClick={() =>
                                    data.reservation && setOpenModal(true)
                                }
                                disabled={!data.reservation}
                                className={`px-8 py-3 rounded-lg font-bold text-white transition-all duration-200 ${
                                    data.reservation
                                        ? "bg-green-500 hover:bg-green-600 shadow-lg"
                                        : "bg-gray-400 cursor-not-allowed"
                                }`}
                            >
                                تأكيد الحجز
                            </button>
                        </div>
                    </>
                )}
            </div>
        </PatientLayout>
    );
}
