import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { ModalStoreType } from "../types/modal";


const initialState: ModalStoreType = {
    isOpen: false
}

export const ModalStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withMethods((store) => ({
        onOpen(): void {
                patchState(store,{ isOpen: true });
            },
        onClose(): void {
            patchState(store,{ isOpen: false });
        }
    }))
)