import DoctorLayout from "@/Layouts/DoctorLayout";
import ViewEmpProfile from "../Auth/ViewEmpProfile";

export default function DocProfile({ employee }) {
    return (
        <DoctorLayout employee={employee}>
            <ViewEmpProfile employee={employee} />
        </DoctorLayout>
    );
}
