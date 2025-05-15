import Card from "@/Components/Card";
import AdminLayout from "@/Layouts/AdminLayout";

export default function AdminDashboard({ nums }) {
    return (
        <AdminLayout>
            <div className="flex flex-wrap gap-2 h-[85vh] overflow-y-auto">
                <Card title={"أطباء"} num={nums.docs} src={"doctor1.png"} />
                <Card title={"ممرضين"} num={nums.nurse} src={"nurse.png"} />
                <Card title={"مرضى"} num={nums.ptients} src={"patient.png"} />
                <Card
                    title={"مخبريين"}
                    num={nums.labs}
                    src={"laboratory.png"}
                />
                <Card
                    title={"صيدلانيين"}
                    num={nums.pharmas}
                    src={"pharma.png"}
                />
                <Card title={"غرف"} num={6} src={"rooms.png"} />
            </div>
        </AdminLayout>
    );
}
