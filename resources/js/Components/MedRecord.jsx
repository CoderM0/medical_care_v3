export default function MedRecord({ med_record }) {
    return (
        <div className="font-amirirg">
            {med_record ? (
                <div className="border-2 rounded-xl p-2 ">
                    <div className="flex justify-between px-10">
                        <h1 className=" font-bold my-5">
                            {" اسم المريض :"}
                            <span className="text-green-700">
                                {med_record.patient.name}{" "}
                            </span>
                        </h1>
                        <h1 className=" font-bold my-5">
                            {"العمر : "}
                            <span className="text-green-700">
                                {med_record.patient.age}
                            </span>
                        </h1>
                        <h1 className=" font-bold my-5">
                            زمرة الدم :
                            <span className="text-green-700">
                                {med_record.patient.blood_type}
                            </span>
                        </h1>
                        <h1 className=" font-bold my-5">
                            الجنس :
                            <span className="text-green-700">
                                {med_record.patient.gender}
                            </span>
                        </h1>
                    </div>
                    <div className="px-10">
                        {" "}
                        <h1 className=" font-bold mt-1 mb-2">
                            {" حساسية او حالات مرضية سابقة: "}
                            <span className="text-green-700">
                                {med_record.patient.additional_case}
                            </span>
                        </h1>{" "}
                    </div>
                    <div className="border-2 rounded-xl p-2 flex">
                        <div className="w-1/2 p-2 px-3">
                            <div className="flex ">
                                <p className=" font-bold w-1/2 text-left">
                                    الوصفات الطبية
                                </p>
                                <div className="w-1/2 flex justify-end items-center gap-2">
                                    {/* <Link
                                     href={route("")}
                                        className="text-left font-bold bg-green-500 text-white px-3 py-1 rounded-md"
                                    >
                                        {" "}
                                        اضف وصفة
                                    </Link> */}
                                </div>
                            </div>

                            {med_record.descriptions.map((desc, index) => {
                                return (
                                    <div
                                        key={desc.id}
                                        className="border p-2 rounded-xl my-2 table w-full"
                                    >
                                        <div className="flex justify-between">
                                            {" "}
                                            <p className="bg-green-100 font-bold text-green-600 px-2 rounded-xl text-center w-1/3">
                                                {new Date(
                                                    desc.date
                                                ).toDateString()}{" "}
                                            </p>{" "}
                                            <p className="font-bold text-right w-1/3">
                                                {" "}
                                                د. {desc.doctor_name}{" "}
                                            </p>{" "}
                                            <p className="font-bold">
                                                {" "}
                                                {desc.out_hospital ? (
                                                    <p className="text-red-500 text-left w-1/3">
                                                        خارجي
                                                    </p>
                                                ) : (
                                                    <p className="text-green-500 text-left w-1/3">
                                                        داخلي
                                                    </p>
                                                )}
                                            </p>
                                        </div>
                                        <div className="mt-2">
                                            <p className="font-bold">التشخيص</p>
                                            <p className="bg-gray-100  text-blue-500 p-2 rounded-lg">
                                                {desc.disease}{" "}
                                            </p>
                                            <div className="my-3">
                                                <p className="text-center">
                                                    الادوية
                                                </p>
                                                {desc.medcines.map((med) => {
                                                    return (
                                                        <p className=" border-r-8 border-red-700 bg-gray-200 rounded-xl p-2 font-bold my-2 text-red-700">
                                                            {med.medcine_name} -{" "}
                                                            {med.quantity}
                                                        </p>
                                                    );
                                                })}
                                            </div>
                                        </div>{" "}
                                    </div>
                                );
                            })}
                        </div>
                        <div className=" w-1/2 p-2 px-3">
                            <p className="text-center font-bold">
                                التحاليل المخبرية
                            </p>
                            {med_record.lab_tests.map((ltst) => {
                                return (
                                    <div
                                        key={ltst.id}
                                        className="border p-2 rounded-xl my-2"
                                    >
                                        <div className="flex justify-between">
                                            {" "}
                                            <p className="bg-green-100 font-bold text-green-600 px-2 rounded-xl">
                                                {new Date(
                                                    ltst.date
                                                ).toDateString()}{" "}
                                            </p>{" "}
                                            <p className="font-bold">
                                                {" "}
                                                د. {ltst.doctor_name}{" "}
                                            </p>{" "}
                                            <p className="font-bold">
                                                {" "}
                                                {ltst.out_hospital ? (
                                                    <p className="text-red-500 text-left w-1/3">
                                                        خارجي
                                                    </p>
                                                ) : (
                                                    <p className="text-green-500 text-left w-1/3">
                                                        داخلي
                                                    </p>
                                                )}
                                            </p>
                                        </div>
                                        <div className="bg-gray-100  rounded-xl p-2 my-3">
                                            <p className="my-1">
                                                <span className="font-bold text-blue-600">
                                                    {" "}
                                                    وصفة التحليل
                                                </span>{" "}
                                                {ltst.lab_test_description}
                                            </p>
                                            <p className="my-1">
                                                <span className="font-bold text-blue-600 ">
                                                    {" "}
                                                    نتيجة التحليل:{" "}
                                                </span>{" "}
                                                {ltst.lab_test_result}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            ) : (
                <p className="text-3xl text-center my-5 font-bold text-red-500">
                    لا يوجد سجل طبي بعد
                </p>
            )}
        </div>
    );
}
