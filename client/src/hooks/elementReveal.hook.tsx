import { useSignal, useVisibleTask$ } from "@builder.io/qwik";

export function useElementReveal() {
    const isVisible = useSignal(false);
    const elementRef = useSignal<HTMLElement>();

    useVisibleTask$(({ cleanup }) => {
        const currentElement = elementRef.value;
        if(!currentElement) return;
        console.log("activé");
        console.log(isVisible.value);
        
        
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                isVisible.value = true;
                observer.unobserve(currentElement);
            }
        }, {
            root: null,
            threshold: 0.15
        });
        console.log(observer);
        
        observer.observe(currentElement);

        cleanup(() => observer.disconnect());

    });

    return [elementRef, isVisible];
}