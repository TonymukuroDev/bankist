import { component$ } from "@builder.io/qwik";
import "./footer.scss";

const Footer = component$(() => {
    return (
        <footer class="footer">
            <ul class="footer__nav">
                <li class="footer__item">
                    <a href="" class="footer__link">About</a>
                </li>
                <li class="footer__item">
                    <a href="" class="footer__link">Pricing</a>
                </li>
                <li class="footer__item">
                    <a href="" class="footer__link">Terms of Use</a>
                </li>
                <li class="footer__item">
                    <a href="" class="footer__link">Privacy Policy</a>
                </li>
                <li class="footer__item">
                    <a href="" class="footer__link">Careers</a>
                </li>
                <li class="footer__item">
                    <a href="" class="footer__link">Blog</a>
                </li>
                <li class="footer__item">
                    <a href="" class="footer__link">Contact Us</a>
                </li>
            </ul>
            <img src="icon.png" alt="Logo" class="footer__logo" />
            <p class="footer__copyright">
                &copy; Copyright by
                <a href="" class="footer__link twitter__link">Jonas Schmedtmann</a>.Use for learning or your portfolio. Don't use to teach. Don't claim as your own product.
            </p>
        </footer>
    )
});

export default Footer;