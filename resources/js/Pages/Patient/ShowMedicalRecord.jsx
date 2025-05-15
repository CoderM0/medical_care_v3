import MedRecord from "@/Components/MedRecord";
import PatientLayout from "@/Layouts/PatientLayout";

export default function ShowMedicalRecord({ med_rec, patient }) {
    return (
        <PatientLayout patient={patient}>
            <MedRecord med_record={med_rec} />
        </PatientLayout>
    );
}
