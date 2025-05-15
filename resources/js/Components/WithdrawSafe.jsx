import { useForm } from "@inertiajs/react";
import { useState } from "react";
import InputError from "./InputError";
import InputLabel from "./InputLabel";
import OnGoing from "./OnGoing";
import PrimaryButton from "./PrimaryButton";
import TextInput from "./TextInput";
export default function WithdrawSafe() {
    const { setData, data, post, processing, errors } = useForm();
    const [succ, setSucc] = useState();
    const [fail, setFail] = useState();

    const withdraw = (e) => {
        e.preventDefault();
        console.log(data);
        post(route("accountant.safe.withdraw"), {
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
                    loading_text={"جار السحب"}
                    fail_text={"فشلت عملية السحب لعدم توفر رصيد"}
                    succ_text={"تم السحب بنجاح"}
                />
            ) : (
                <form className="my-2 w-1/2" onSubmit={withdraw}>
                    <h1 className="text-xl font-bold">سحب</h1>
                    <InputLabel className="my-2">
                        اسحب مبلغ من الخزنة
                    </InputLabel>
                    <TextInput
                        type="number"
                        className="w-3/4"
                        onChange={(e) =>
                            setData("withdraw_amount", e.target.value)
                        }
                    />
                    <InputError message={errors.deposite_amount} />
                    <InputLabel className="my-2">
                        تفاصيل السحب (السبب)
                    </InputLabel>
                    <TextInput
                        type="text"
                        className="w-3/4"
                        onChange={(e) => setData("purpose", e.target.value)}
                    />
                    <InputError message={errors.purpose} />

                    <div className="my-3">
                        <PrimaryButton>أسحب</PrimaryButton>
                    </div>
                </form>
            )}
        </div>
    );
}
