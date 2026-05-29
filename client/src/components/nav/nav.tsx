import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { assets } from "~/assets/assets";
import "./nav.scss";
import { useModalForm } from "../modal/context/modal.context";
import { useScroller } from "../../context/scroller.context";

const Nav = component$(() => {
    
    const navRef = useSignal<HTMLElement>();
    const isSticky = useSignal(false); 
    const modalForm = useModalForm();
    const scroller = useScroller();

    useVisibleTask$(({ cleanup }) => {

        const handleScroll = () => {
            isSticky.value = window.scrollY > navRef.value!.getBoundingClientRect().height;
        }

        window.addEventListener('scroll', handleScroll);
        cleanup(() => window.removeEventListener('scroll', handleScroll));
    })

    return (
        <nav ref={navRef} class={`nav ${isSticky.value ? "sticky" : "" }`}>
            <img class="nav__logo" src={assets.logoImg} alt="Bankist logo" />
            <ul class="nav__links">
                <li onClick$={() => scroller.onScrollTo('section--1')} class="nav__link">
                    Features
                </li>
                <li onClick$={() => scroller.onScrollTo('section--2')} class="nav__link">
                    Operations
                </li>
                <li onClick$={() => scroller.onScrollTo('section--3')} class="nav__link">
                    Testimonials
                </li>
                <li class="nav__link">
                    <button onClick$={() => modalForm.store.onOpen()} class="btn--show-modal">Open account</button>
                </li>
            </ul>
        </nav>
    )
});

export default Nav;