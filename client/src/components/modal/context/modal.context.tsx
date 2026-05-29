import { $, useContext, useStore } from "@builder.io/qwik";
import { ModalFormStoreType } from "../types/modal";
import { AppContext } from "~/context/app.context";


interface ModalFormContextProviderInterface {
    modalFormStore: ModalFormStoreType
}

export function modalFormContextProvider(): ModalFormContextProviderInterface  {
    const modalFormStore = useStore<ModalFormStoreType>({
        isOpen: false,
        onOpen: $(function(this: ModalFormStoreType) {
            this.isOpen = true
        }),
        onClose: $(function(this: ModalFormStoreType) {
            this.isOpen = false
        })
    });

    return {
        modalFormStore
    }
}

export const useModalForm = () => {
    const appContext = useContext(AppContext);

    if(appContext === undefined) {
        throw new Error("appContext must be used inside a provider ");
    }

    return appContext.modalForm;
}