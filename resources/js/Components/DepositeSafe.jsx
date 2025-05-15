import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import OnGoing from "@/Components/OnGoing";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { useState } from "react";
export default function DepositeSafe() {
    const { setData, data, post, processing, errors } = useForm();
    const [succ, setSucc] = useState();
    const [fail, setFail] = useState();

    const deposite = (e) => {
        e.preventDefault();
        console.log(data);
        post(route("accountant.safe.deposite"), {
            onSuccess: () => {
                setSucc(true);
                setTimeout(() => {
                    setSucc(false);
                }, 1000);
            },
            onError: () => {
                setFail(true);
                setTimeout(() => {
                    setFail(false);
                }, 3000);
            },
        });
    };
    return (
        <div>
            {processing || succ || fail ? (
                <OnGoing
                    fail={fail}
                    succ={succ}
                    loading_text={"جار الايداع"}
                    fail_text={"فشلت عملية الايداع"}
                    succ_text={"تم الايداع بنجاح"}
                />
            ) : (
                <form className="my-2 w-1/2" onSubmit={deposite}>
                    <h1 className="text-xl font-bold">ايداع</h1>
                    <InputLabel className="my-2">
                        أودع مبلغ في الخزنة
                    </InputLabel>
                    <TextInput
                        type="number"
                        className="w-3/4"
                        onChange={(e) =>
                            setData("deposite_amount", e.target.value)
                        }
                    />
                    <InputError message={errors.deposite_amount} />
                    <InputLabel className="my-2">
                        تفاصيل الايداع (السبب)
                    </InputLabel>
                    <TextInput
                        type="text"
                        className="w-3/4"
                        onChange={(e) => setData("purpose", e.target.value)}
                    />
                    <InputError message={errors.purpose} />

                    <div className="my-3">
                        <PrimaryButton>أودع</PrimaryButton>
                    </div>
                </form>
            )}
        </div>
    );
}
