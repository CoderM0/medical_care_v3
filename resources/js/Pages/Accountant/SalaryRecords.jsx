import AccountantLayout from "@/Layouts/AccountantLayout";

export default function SalaryRecords({ salary_records }) {
    console.log(salary_records);
    return (
        <AccountantLayout>
            <div class="flex flex-col">
                <div class=" overflow-x-auto pb-4">
                    <div class="min-w-full inline-block align-middle">
                        <div class="overflow-hidden  border rounded-lg border-gray-300">
                            <table class="table-auto min-w-full rounded-xl">
                                <thead>
                                    <tr class="bg-gray-50">
                                        <th
                                            scope="col"
                                            class="p-5 text-right whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"
                                        >
                                            {" "}
                                            {" الموظف"}
                                        </th>
                                        <th
                                            scope="col"
                                            class="p-5 text-right whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"
                                        >
                                            {" الراتب المدفوع"}
                                        </th>

                                        <th
                                            scope="col"
                                            class="p-5 text-right whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"
                                        >
                                            {" "}
                                            {"  تاريخ الدفع"}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-300 ">
                                    {salary_records.map((record) => {
                                        return (
                                            <tr
                                                key={record.id}
                                                class="bg-white transition-all duration-500 hover:bg-gray-50"
                                            >
                                                {/* موظف */}
                                                <td class=" px-5 py-3">
                                                    <div class="w-48 flex items-center gap-3">
                                                        <img
                                                            src={`/storage/${record.employee?.avatar}`}
                                                            alt="employee image"
                                                            className="w-10 h-10 rounded-full"
                                                        />
                                                        <div class="data">
                                                            <p class="font-normal text-sm text-gray-900">
                                                                {record.employee
                                                                    ? record
                                                                          .employee
                                                                          .name
                                                                    : "حساب محذوف"}
                                                            </p>
                                                            <p class="font-normal text-xs leading-5 text-gray-400">
                                                                {" "}
                                                                {record.employee
                                                                    ? record
                                                                          .employee
                                                                          .user
                                                                          .email
                                                                    : ""}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                {/* مبلغ */}
                                                <td class="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                                                    {record.amount_paid}$
                                                </td>
                                                {/* تاريخ */}
                                                <td class="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                                                    {" "}
                                                    {record.payment_date}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AccountantLayout>
    );
}
