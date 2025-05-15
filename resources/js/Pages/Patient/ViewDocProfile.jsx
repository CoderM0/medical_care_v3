import EmpProfile from "@/Components/EmpProfile";
import PatientLayout from "@/Layouts/PatientLayout";

export default function ViewDocProfile({ employee, patient }) {
    const dat = new Date(employee.created_at);

    return (
        <PatientLayout patient={patient}>
            <EmpProfile employee={employee} />
        </PatientLayout>
    );
}
