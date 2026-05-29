import { component$ } from "@builder.io/qwik";
import "./signUpSection.scss";
import { useModalForm } from "~/components/modal/context/modal.context";
import { useElementReveal } from "~/hooks/elementReveal.hook";

const SignUpSection = component$(() => {
    const [ elementRef, isVisible ] = useElementReveal();
    const modalForm = useModalForm(); 
    return (
        <section
            ref={(el) => elementRef.value = el}
         class={[
            "section",
            "section--sign-up",
            isVisible.value ? '' : 'section--hidden'
            ]}>
            <div class="section__title">
                <h3 class="section__header">
                    The best day to join Bankist was one. The second best is today!
                </h3>
            </div>
            <button onClick$={() => modalForm.store.onOpen()} class="btn btn--show-modal">Open your free account today!</button>
        </section>
    )
});

export default SignUpSection;