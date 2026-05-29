import { component$ } from "@builder.io/qwik";
import { assets } from "~/assets/assets";

import "./header.scss";
import { useScroller } from "~/context/scroller.context";
const Header = component$(() => {
    const scroller = useScroller();

    return (
        <header class="header">
            <div class="header__title">
                <h1>
                    When
                    {/*-- Green Highlight Effect --*/}
                    <span class="highlight">bankist</span>
                    meets<br/>
                    <span class="highlight">minimalist</span>
                </h1>
                <h4>A simpler banking experience for a simpler life.</h4>
                <button class="btn--text" onClick$={() => scroller.onScrollTo('section--1')}>Learn more {"\u2193"}</button>
                <img src={assets.heroImg} alt="Minimalist bank items" class="header__img" />
            </div>
        </header>
    )
});

export default Header;