import AdminLayout from "@/Layouts/AdminLayout";
import { Link } from "@inertiajs/react";

export default function ViewComplaints({ complaints }) {
    console.log(complaints);
    return (
        <AdminLayout>
            <div className="my-4 h-[85vh] overflow-y-auto">
                {complaints.length == 0 ? (
                    <p className="text-center  my-2 text-xl ">
                        لا يوجد شكاوي حاليا{" "}
                    </p>
                ) : (
                    <div>
                        {complaints.map((el) => {
                            return (
                                <div className="p-2 rounded-md bg-gary-50 border my-2">
                                    <div className="flex justify-between items-center">
                                        <p>اسم صاحب الشكوى : {el.nick_name}</p>
                                        <Link
                                            href={route(
                                                "admin.complaint.delete",
                                                el.id
                                            )}
                                            method="DELETE"
                                            className="px-4 py-2 rounded-md bg-red-500 text-white"
                                        >
                                            حذف
                                        </Link>
                                    </div>
                                    <p>الشكوى : {el.complaint}</p>
                                    <p>
                                        الشكوى بتاريخ :{" "}
                                        {new Date(
                                            el.created_at
                                        ).toLocaleDateString()}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </AdminLayout>
    );
}
