import EmpProfile from "@/Components/EmpProfile";
import AdminLayout from "@/Layouts/AdminLayout";

export default function ViewEmployee({ employee }) {
    const dat = new Date(employee.created_at);
    return (
        <AdminLayout>
            <EmpProfile employee={employee} />
        </AdminLayout>
    );
}
