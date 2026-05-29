import { component$ } from "@builder.io/qwik";
import { assets } from "~/assets/assets";
import "./featuresSection.scss";
import { useScroller } from "~/context/scroller.context";
import { useElementReveal } from "~/hooks/elementReveal.hook";

const FeaturesSection = component$(() => {
    const [ elementRef, isVisible ] = useElementReveal();
    const scroller = useScroller();
    return (
        <section ref={(el) => {
            scroller.list.value.set('section--1', el);
            elementRef.value = el;
            }} class={["section", isVisible.value ? '' : 'section--hidden']}>
            <div class="section__title">
                <h2 class="section__description">Features</h2>
                <h3 class="section__header">
                    Everything you need in a modern bank and more.
                </h3>
            </div>
            <div class="features">
                <img 
                src={assets.digitalLazyImg} 
                alt="Computer"
                class="features__img lazy-img"
                />

                <div class="features__feature">
                    <div class="features__icon">
                        <svg>
                            <use xlink:href="icons.svg#icon-monitor"></use>
                        </svg>
                    </div>
                    <h5 class="features__header">100% digital bank</h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias
                        sint quos? Accusantium a fugiat porro reiciendis saepe quibusdam
                        debitis ducimus.
                    </p>
                </div>

                <div class="feature__feature">
                    <div class="features__icon">
                        <svg>
                            <use xlink:href="icons.svg#icon-trending-up"></use>
                        </svg>
                    </div>
                    <h5 class="features__header">Watch your money grow</h5>
                    <p>
                        Nesciunt quos autem dolorum voluptates cum dolores dicta fuga
                        inventore ab? Nulla incidunt eius numquam sequi iste pariatur
                        quibusdam!
                    </p>
                </div>

                <img 
                src={assets.growLazyImg} 
                alt="Plant" 
                class="features__img lazy-img" 
                />

                <img
                src={assets.cardLazyImg}
                alt="Credit card"
                class="features__img lazy-img" 
                />

                <div class="features__feature">
                    <div class="features__icon">
                        <svg>
                            <use xlink:href="icons.svg#icon-credit-card"></use>
                        </svg>
                    </div>
                    <h5 class="features__header">Free debit card included</h5>
                    <p>
                        Quasi, fugit in cumque cupiditate reprehenderit debitis animi enim
                        eveniet consequatur odit quam quos possimus assumenda dicta fuga
                        inventore ab.
                    </p>
                </div>
            </div>
        </section>
    )
});

export default FeaturesSection;