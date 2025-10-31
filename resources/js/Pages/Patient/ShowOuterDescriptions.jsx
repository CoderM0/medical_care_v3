import OuterDescCard from "@/Components/OuterDescCard";
import PatientLayout from "@/Layouts/PatientLayout";
import { useRef } from "react";
export default function ShowOuterDescriptions({ patient }) {
    console.log(patient);
    const forprintcomp = useRef();

    return (
        <PatientLayout patient={patient}>
            <div className="py-6">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-blue-800 mb-2">
                        الوصفات الطبية الخارجية
                    </h1>
                    <p className="text-gray-600 text-sm">
                        عرض جميع الوصفات الطبية المسجلة من خارج العيادة
                    </p>
                </div>

                {patient.outer_descs.length == 0 ? (
                    <div className="text-center py-12">
                        <div className="text-gray-400 text-6xl mb-4">💊</div>
                        <p className="text-gray-500 text-xl font-bold mb-2">
                            لا يوجد وصفات خارجية
                        </p>
                        <p className="text-gray-400 text-sm">
                            يمكنك إضافة وصفات جديدة من خلال قسم الوصفات الخارجية
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4">
                        {patient.outer_descs.map((med_desc) => {
                            return (
                                <OuterDescCard
                                    key={med_desc.id}
                                    med_desc={med_desc}
                                    patient={patient}
                                />
                            );
                        })}
                    </div>
                )}
            </div>
        </PatientLayout>
    );
}
