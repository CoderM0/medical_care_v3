import OuterDescCard from "@/Components/OuterDescCard";
import PatientLayout from "@/Layouts/PatientLayout";
import { useRef } from "react";
export default function ShowOuterDescriptions({ patient }) {
    console.log(patient);
    const forprintcomp = useRef();

    return (
        <PatientLayout patient={patient}>
            <div className="flex flex-wrap gap-3">
                {patient.outer_descs.length == 0 ? (
                    <p className="text-center w-full my-5 font-bold ">
                        لا يوجد وصفات خارجية
                    </p>
                ) : (
                    patient.outer_descs.map((med_desc) => {
                        return (
                            <OuterDescCard
                                med_desc={med_desc}
                                patient={patient}
                            />
                        );
                    })
                )}
            </div>
        </PatientLayout>
    );
}
