import { useForm } from "@inertiajs/react";
import { useState } from "react";
import DangerButton from "./DangerButton";
import Modal from "./Modal";
import SecondaryButton from "./SecondaryButton";
export default function DeleteForm({ deluser, throute }) {
    console.log(deluser);
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };
    const closeModal = () => {
        setConfirmingUserDeletion(false);

        clearErrors();
        reset();
    };

    const { delete: destroy, reset, clearErrors, processing } = useForm();
    const deleteUser = (e, id) => {
        e.preventDefault();
        destroy(route(throute, [id, deluser.user.role]), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onFinish: () => reset(),
        });
    };
    return (
        <>
            <button
                onClick={confirmUserDeletion}
                className="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
            >
                Delete Account
            </button>
            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <form
                    onSubmit={(e) => deleteUser(e, deluser.id)}
                    className="p-6"
                >
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                        Are you sure you want to delete
                        <span className="font-bold px-1">
                            {"("}
                            {deluser.name}
                            {")"}
                        </span>{" "}
                        account?
                    </h2>

                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        Once this account is deleted, all of its resources and
                        data will be permanently deleted. Please confirm you
                        would like to permanently delete this account.
                    </p>
                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>
                            Cancel
                        </SecondaryButton>

                        <DangerButton className="ms-3" disabled={processing}>
                            Delete Account
                        </DangerButton>
                    </div>
                </form>
            </Modal>
        </>
    );
}
