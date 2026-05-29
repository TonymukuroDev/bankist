import { component$, useSignal } from "@builder.io/qwik";

import "./operationsSection.scss";
import { useScroller } from "~/context/scroller.context";
import { useElementReveal } from "~/hooks/elementReveal.hook";

const OperationsSection = component$(() => {
    const [ elementRef, isVisible ] = useElementReveal();
    const scroller = useScroller();
    const operation = useSignal<"transfers" | "loans" | "closing">("transfers");

    return (
        <section ref={(el) => {
            scroller.list.value.set('section--2', el);
            elementRef.value = el;
            }} class={["section", isVisible.value ? '' : 'section--hidden']}>
            <div class="section__title">
                <h2 class="section__description">Operations</h2>
                <h3 class="section__header">
                    Everything as simple as possible, but no simpler.
                </h3>
            </div>

            <div class="operations">
                <div class="operations__tab-container">
                    <button onClick$={() => operation.value = "transfers"} class={`btn operations__tab operations__tab--1 ${ operation.value === "transfers" ? "operations__tab--active" : "" }`}>
                        <span>01</span>Instant Transfers
                    </button>
                    <button onClick$={() => operation.value = "loans"} class={`btn operations__tab operations__tab--2 ${ operation.value === "loans" ? "operations__tab--active" : "" }`}>
                        <span>02</span>Instant Loans
                    </button>
                    <button onClick$={() => operation.value = "closing"} class={`btn operations__tab operations__tab--3 ${ operation.value === "closing" ? "operations__tab--active" : "" }`}>
                        <span>03</span>Instant Closing
                    </button>
                </div>
                <div class={`operations__content ${ operation.value === "transfers" ? "operations__content--active" : "" }`}>
                    <div class="operations__icon operations__icon--1">
                        <svg>
                            <use xlink:href="icons.svg#icon-upload"></use>
                        </svg>
                    </div>
                    <h5 class="operations__header">
                        Transfer money to anyone, instantly! No fees, no BS.
                    </h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                    </p>
                </div>
                <div class={`operations__content ${ operation.value === "loans" ? "operations__content--active" : "" }`}>
                    <div class="operations__icon operations__icon--2">
                        <svg>
                            <use xlink:href="icons.svg#icon-home"></use>
                        </svg>
                    </div>
                    <h5 class="operations__header">
                        Buy a home or make our dreams come true, with instant loans.
                    </h5>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                </div>

                <div class={`operations__content ${ operation.value === "closing" ? "operations__content--active" : "" }`}>
                    <div class="operations__icon operations__icon--3">
                        <svg>
                            <use xlink:href="icons.svg#icon-user-x"></use>
                        </svg>
                    </div>
                    <h5 class="operations__header">
                        No longer need your account? No problem! Close it instantly.
                    </h5>
                    <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                    </p>
                </div>
            </div>
        </section>
    )
});

export default OperationsSection;