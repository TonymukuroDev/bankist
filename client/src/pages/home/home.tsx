import { component$ } from "@builder.io/qwik";
import Header from "~/components/header/header";
import FeaturesSection from "./components/featuresSection/featuresSection";
import OperationsSection from "./components/operationsSection/operationsSection";
import TestimonialsSection from "./components/testimonialsSection/testimonialsSection";
import SignUpSection from "./components/signUpSection/signUpSection";
import "./home.scss";


const Home = component$(() => {
    return (
        <div class="home">
            <Header/>
            <FeaturesSection/>
            <OperationsSection/>
            <TestimonialsSection/>
            <SignUpSection/>
        </div>
    )
});

export default Home;