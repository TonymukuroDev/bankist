import { component$, Signal } from "@builder.io/qwik";
import { SlideDataType } from "../testimonialsSection";

interface SlidePropsInterface {
    slide: SlideDataType;
    slideIndex: number;
    currentSlide: Signal<number>
}

const Slide = component$<SlidePropsInterface>(({
    slide,
    slideIndex,
    currentSlide
}) => {
    const { header, text, author } = slide
    return (
        <div class="slide" style={{
            transform: `translateX(${100 * (slideIndex - currentSlide.value)}%)`,
            transition: 'transform 0.5s ease',
            position: slideIndex === 0 ? 'relative' : 'absolute',
            top: 0,
            width: '100%'
        }}>
            <div class="testimonial">
                <h5 class="testimonial__header">{header}</h5>
                <blockquote class="testimonial__text">{text}</blockquote>
                <address class="testimonial__author">
                    <img src={author.photo} alt="" class="testimonial__photo" />
                    <h6 class="testimonial__name">{author.name}</h6>
                    <p class="testimonial__location">{author.location}</p>
                </address>
            </div>
        </div>
    )
});

export default Slide;