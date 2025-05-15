import MedRecord from "@/Components/MedRecord";
import DoctorLayout from "@/Layouts/DoctorLayout";

export default function ShowPatientMediclRecord({ employee, med_record }) {
    return (
        <DoctorLayout employee={employee}>
            <MedRecord med_record={med_record} />
        </DoctorLayout>
    );
}
