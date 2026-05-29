import { QRL } from "@builder.io/qwik";
import * as v from "valibot";

export const ModalFormSchema = v.object({
    firstName: v.pipe(
        v.string(),
        v.nonEmpty()
    ),
    lastName: v.pipe(
        v.string(),
        v.nonEmpty()
    ),
    email: v.pipe(
        v.string(),
        v.trim(),
        v.email()
    )
});

export type ModalFormType = v.InferInput<typeof ModalFormSchema>;

export type ModalFormStoreType = {
    isOpen: boolean;
    onOpen: QRL<(this: ModalFormStoreType) => void>;
    onClose: QRL<(this: ModalFormStoreType) => void>;
}