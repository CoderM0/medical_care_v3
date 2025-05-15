import AccountantLayout from "@/Layouts/AccountantLayout";

export default function SafeRecords({ records }) {
    console.log(records);
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
                                            {" العملية"}
                                        </th>
                                        <th
                                            scope="col"
                                            class="p-5 text-right whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"
                                        >
                                            {" "}
                                            {" التاريخ"}
                                        </th>
                                        <th
                                            scope="col"
                                            class="p-5 text-right whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize min-w-[150px]"
                                        >
                                            {" "}
                                            {" المحاسب"}
                                        </th>
                                        <th
                                            scope="col"
                                            class="p-5 text-right whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"
                                        >
                                            {" "}
                                            {" المبلغ"}
                                        </th>
                                        <th
                                            scope="col"
                                            class="p-5 text-right whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize"
                                        >
                                            {" "}
                                            {" التفاصيل"}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-300 ">
                                    {records.map((record) => {
                                        return (
                                            <tr
                                                key={record.id}
                                                class="bg-white transition-all duration-500 hover:bg-gray-50"
                                            >
                                                <td class="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 ">
                                                    {" "}
                                                    <div
                                                        class={`py-1.5 px-2.5 ${
                                                            record.operation ==
                                                            "سحب"
                                                                ? "bg-red-50"
                                                                : "bg-emerald-50"
                                                        }  rounded-full flex justify-center w-20 items-center gap-1`}
                                                    >
                                                        <svg
                                                            width="5"
                                                            height="6"
                                                            viewBox="0 0 5 6"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <circle
                                                                cx="2.5"
                                                                cy="3"
                                                                r="2.5"
                                                                fill={
                                                                    record.operation ==
                                                                    "سحب"
                                                                        ? "#960505"
                                                                        : "#059669"
                                                                }
                                                            ></circle>
                                                        </svg>
                                                        <span
                                                            class={`font-medium text-xs ${
                                                                record.operation ==
                                                                "سحب"
                                                                    ? "text-red-600"
                                                                    : "text-emerald-600 "
                                                            } `}
                                                        >
                                                            {record.operation}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td class="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                                                    {" "}
                                                    {new Date(
                                                        record.created_at
                                                    ).toLocaleString()}
                                                </td>
                                                <td class=" px-5 py-3">
                                                    <div class="w-48 flex items-center gap-3">
                                                        <img
                                                            src={`/storage/${record.employee?.avatar}`}
                                                            alt="Floyd image"
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
                                                <td class="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                                                    {record.amount}$
                                                </td>
                                                <td class="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                                                    {record.purpose}
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
