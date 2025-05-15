import DepositeSafe from "@/Components/DepositeSafe";
import WithdrawSafe from "@/Components/WithdrawSafe";
import AccountantLayout from "@/Layouts/AccountantLayout";

export default function ViewSafe({ safe, employee }) {
    return (
        <AccountantLayout>
            <div className="bg-safe h-screen bg-no-repeat overflow-hidden">
                <p className="text-4xl my-4 mx-4">
                    المبلغ الحالي{" "}
                    <span className="text-green-500">
                        {" "}
                        {safe.current_amount}
                        {"$ "}
                    </span>
                </p>
                <DepositeSafe />
                <p className="w-1/2 border-t my-2"></p>
                <WithdrawSafe />
            </div>
        </AccountantLayout>
    );
}
