import { component$, Slot } from "@builder.io/qwik";
import Footer from "~/components/footer/footer";
import Modal from "~/components/modal/modal";
import Nav from "~/components/nav/nav";
import { AppContextProvider } from "~/context/app.context";


export default component$(() => {
    return (
        <AppContextProvider>
            <Nav/>
            <Slot/>
            <Footer/>
            <Modal/>
        </AppContextProvider>
    )
})

