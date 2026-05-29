import { $, component$, useOnDocument, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { assets } from "~/assets/assets";
import "./testimonialsSection.scss";
import { useScroller } from "~/context/scroller.context";
import { useElementReveal } from "~/hooks/elementReveal.hook";
import Slide from "./slide/slide";


export type SlideDataType= {
    header: string;
    text: string;
    author: {
        name: string;
        location: string;
        photo: string;
    };
}

const TestimonialsSection = component$(() => {
    const [ elementRef, isVisible ] = useElementReveal();
    const scroller = useScroller();
    const currentSlide = useSignal(0);
    const slidesData: SlideDataType[] = [
        {
            "header": "Best financial decision ever!",
            "text": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quas quisquam non? Quas voluptate nulla minima deleniti optio ullam nesciunt, numquam corporis et asperiores laboriosam sunt, praesentium suscipit blanditiis. Necessitatibus id alias reiciendis, perferendis facere pariatur dolore veniam autem esse non voluptatem saepe provident nihil molestiae.",
            "author": {
                "name": "Aarav Lynn",
                "location": "San Francisco, USA",
                "photo": assets.user1Img
            }
        },
        {
            "header": "The last step to becoming a complete minimalist",
            "text": "Quisquam itaque deserunt ullam, quia ea repellendus provident, ducimus neque ipsam modi voluptatibus doloremque, corrupti laborum. Incidunt numquam perferendis veritatis neque repellendus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo deserunt exercitationem deleniti.",
            "author": {
                "name": "Miyah Miles",
                "location": "London, UK",
                "photo": assets.user2Img
            }
        },
        {
            "header": "Finally free from old-school banks",
            "text": "Debitis, nihil sit minus suscipit magni aperiam vel tenetur incidunt commodi architecto numquam omnis nulla autem, necessitatibus blanditiis modi similique quidem. Odio aliquam culpa dicta beatae quod maiores ipsa minus consequatur error sunt, deleniti saepe aliquid quos inventore sequi. Necessitatibus id alias reiciendis, perferendis facere.",
            "author": {
                "name": "Francisco Gomes",
                "location": "Lisbon, Portugal",
                "photo": assets.user3Img
            }
        }
    ];
    const maxSlides = slidesData.length;

    const nextSlide = $(() => {
        currentSlide.value = currentSlide.value === maxSlides - 1 ? 0 : currentSlide.value + 1; 
    });

    const prevSlide = $(() => {
        currentSlide.value = currentSlide.value === 0 ? maxSlides - 1 : currentSlide.value - 1;
    });

    const goToSlide = $((slideIndex: number) => {
        currentSlide.value = slideIndex;
    });

    useOnDocument('keydown', $((e) => {
        if(e.key === 'ArrowLeft') prevSlide();
        if(e.key === 'ArrowRight') nextSlide();
    }))

    
    return (
        <section 
            class={["section", isVisible.value ? '' : 'section--hidden']} 
            ref={(el) => {
                scroller.list.value.set('section--3', el);
                elementRef.value = el;
            }}
        >
            <div class="section__title">
                <h2 class="section__description">Not sure yet?</h2>
                <h3 class="section__header">
                    Millions of Bankists are already making their lifes simpler.
                </h3>
            </div>

            <div class="slider">
                {
                    slidesData.map((slide, i) => (
                    <Slide 
                        key={i}
                        slide={slide}
                        slideIndex={i}
                        currentSlide={currentSlide}
                    />
                    ))
                }
                <button onClick$={prevSlide} class="slider__btn slider__btn--left">&larr;</button>
                <button onClick$={nextSlide} class="slider__btn slider__btn--right">&rarr;</button>
                <div class="dots">
                    {
                        slidesData.map((_, i) => {
                            return (
                                <button type="button" onClick$={() => goToSlide(i)} key={i} class={["dots__dot", currentSlide.value === i ? 'dots__dot--active' : '' ]}></button>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
});

export default TestimonialsSection;