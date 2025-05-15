import OuterDesc from "@/Components/OuterDesc";
import OuterLab from "@/Components/OuterLab";
import PatientLayout from "@/Layouts/PatientLayout";

export default function AddOuterDesc({ patient }) {
    return (
        <PatientLayout patient={patient}>
            <div className="flex justify-between">
                <div className="w-1/2">
                    <OuterDesc patient={patient} />
                </div>
                <div className="w-1/2">
                    <OuterLab patient={patient} />
                </div>
            </div>{" "}
        </PatientLayout>
    );
}
