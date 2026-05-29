import { component$, createContextId, QRL, Signal, Slot, useContextProvider } from "@builder.io/qwik";
import { modalFormContextProvider } from "~/components/modal/context/modal.context";
import { scrollerContextProvider, ScrollerStoreType } from "~/context/scroller.context";
import { ModalFormStoreType } from "~/components/modal/types/modal";


interface AppContextInterface {
    modalForm: {
        store: ModalFormStoreType
    }

    scroller: ScrollerStoreType
}

export const AppContext = createContextId<AppContextInterface>('app-context');

export const AppContextProvider = component$(() => {
    const { modalFormStore } = modalFormContextProvider();

    const { scrollerStore } = scrollerContextProvider();
    useContextProvider(AppContext, {
        modalForm: {
            store: modalFormStore
        },
        scroller: scrollerStore
    })
    return (
        <Slot/>
    )
})