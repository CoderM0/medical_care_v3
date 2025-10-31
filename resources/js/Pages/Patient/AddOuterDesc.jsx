import OuterDesc from "@/Components/OuterDesc";
import OuterLab from "@/Components/OuterLab";
import PatientLayout from "@/Layouts/PatientLayout";

export default function AddOuterDesc({ patient }) {
    return (
        <PatientLayout patient={patient}>
            <div className="py-6">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-blue-800 mb-2">
                        السجلات الطبية الخارجية
                    </h1>
                    <p className="text-gray-600 text-sm">
                        إضافة الوصفات والتحاليل من خارج العيادة
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4">
                    <OuterDesc patient={patient} />
                    <OuterLab patient={patient} />
                </div>
            </div>
        </PatientLayout>
    );
}
