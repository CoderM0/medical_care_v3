import BackBtn from "@/Components/BackBtn";
import EmpProfile from "@/Components/EmpProfile";
import PatientLayout from "@/Layouts/PatientLayout";

export default function ViewDocProfile({ employee, patient }) {
    const dat = new Date(employee.created_at);

    return (
        <PatientLayout patient={patient}>
            <div className="flex justify-end my-2">
                <BackBtn />
            </div>
            <EmpProfile employee={employee} />
        </PatientLayout>
    );
}
