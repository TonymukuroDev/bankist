import { $, QRL, Signal, useContext, useSignal, useStore } from "@builder.io/qwik";
import { AppContext } from "~/context/app.context";


export type ScrollerStoreType = {
    list: Signal<Map<string, HTMLElement>>;
    onScrollTo: QRL<(target: string) => void>
}

interface ScrollerContextProviderInterface {
    scrollerStore: ScrollerStoreType
}

export function scrollerContextProvider(): ScrollerContextProviderInterface {
    const elementList = useSignal<Map<string, HTMLElement>>(new Map());
    const onScrollTo = $((target: string) => {
        const targetEl = elementList.value.get(target);
        console.log(targetEl);
        if(!targetEl) return;
        targetEl.scrollIntoView({ behavior: 'smooth' });        
    })
    return {
        scrollerStore: {
            list: elementList,
            onScrollTo
        }
    }
}

export const useScroller = () => {
    const appContext = useContext(AppContext);

    if(appContext === undefined) {
        throw new Error("appContext must be used inside a provider ");
    }

    return appContext.scroller;
}