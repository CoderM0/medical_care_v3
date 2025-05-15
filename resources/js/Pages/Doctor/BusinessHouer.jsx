import InputLabel from "@/Components/InputLabel";
import Loader from "@/Components/Loader";
import TextInput from "@/Components/TextInput";
import DoctorLayout from "@/Layouts/DoctorLayout";
import { useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function BusinessHouer({ businesshoures, employee }) {
    const { data, setData, post, processing } = useForm({});

    const [fin, setFinish] = useState(false);
    useEffect(() => {
        businesshoures.forEach((bhour) => {
            setData(`data[${bhour.day}]['day']`, bhour.day);
            setData(`data[${bhour.day}]['from']`, bhour.from);
            setData(`data[${bhour.day}]['to']`, bhour.to);
            setData(`data[${bhour.day}]['off']`, bhour.off);
            setData(`data[${bhour.day}]['doctor_id']`, employee.doctor.id);
        });
        setFinish(true);
    }, []);

    const update_table = (e) => {
        e.preventDefault();
        post(route("doctor.businesstable.update"));
    };
    console.log(Object.keys(data).length);
    return (
        <DoctorLayout employee={employee}>
            {processing ? (
                <Loader />
            ) : (
                <form onSubmit={update_table} className="mt-10">
                    {Object.keys(data).length == 0 ? (
                        <p>getting the data</p>
                    ) : (
                        businesshoures.map((businesshoure) => {
                            return (
                                <div
                                    key={businesshoure.id}
                                    className="flex justify-between items-center w-10/12 mx-auto "
                                >
                                    <p className="w-1/4 flex items-center justify-center font-bold">
                                        {businesshoure.day}
                                    </p>
                                    <div className="flex gap-3 items-center w-1/4 justify-center">
                                        <InputLabel>من</InputLabel>
                                        <TextInput
                                            type="time"
                                            value={
                                                data.data[businesshoure.day][
                                                    "from"
                                                ]
                                            }
                                            onChange={(e) => {
                                                setData(
                                                    `data[${businesshoure.day}]['from']`,
                                                    e.target.value
                                                );
                                            }}
                                        />
                                    </div>
                                    <div className="flex gap-3 items-center w-1/4 justify-center">
                                        <InputLabel>الى</InputLabel>
                                        <TextInput
                                            type="time"
                                            value={
                                                data.data[businesshoure.day][
                                                    "to"
                                                ]
                                            }
                                            onChange={(e) =>
                                                setData(
                                                    `data[${businesshoure.day}]['to']`,
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>

                                    <div className="flex gap-3 items-center w-1/4 justify-center">
                                        <InputLabel className="">
                                            عطلة
                                        </InputLabel>
                                        <TextInput
                                            type="checkbox"
                                            className="accent-red-600 checked:bg-red-500"
                                            onChange={(e) =>
                                                setData(
                                                    `data[${businesshoure.day}]['off']`,
                                                    e.target.checked
                                                )
                                            }
                                            checked={
                                                data.data[businesshoure.day][
                                                    "off"
                                                ]
                                            }
                                        />
                                    </div>
                                </div>
                            );
                        })
                    )}
                    <div>
                        <button className="w-1/2 mt-10 mx-auto py-2 px-4 max-w-md  flex justify-center items-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
                            تحديث
                        </button>
                    </div>
                </form>
            )}
        </DoctorLayout>
    );
}
