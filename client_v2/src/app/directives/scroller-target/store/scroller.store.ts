import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { ScrollerStoreType } from "../types/scroller";


const initialState: ScrollerStoreType = {
    elementList: new Map<string, HTMLElement>()
}

export const ScrollerStore = signalStore(
    { providedIn: 'root'},
    withState(initialState),
    withMethods((store) => ({
        register(id: string, element: HTMLElement): void {
            patchState(store, (state) => ({
                elementList: state.elementList.set(id, element)
            })) 
        },

        unregister(id: string): void {
            const elementList = store.elementList();
            elementList.delete(id);
            patchState(store, {
                elementList
            })
        },

        selectTarget(key: string): HTMLElement | undefined {
            const elementList = store.elementList();
            const target = elementList.get(key);
            return target
        }
    }))
)