import { $, component$, useOnDocument } from "@builder.io/qwik";
import { useForm } from "@modular-forms/qwik"
import { ModalFormType } from "./types/modal";
import "./modal.scss";
import { useModalForm } from "./context/modal.context";

const Modal = component$(() => {

    const [modalForm, { Form, Field }] = useForm<ModalFormType>({
        loader: {
            value: {
                firstName: '',
                lastName: '',
                email: ''
            }
        }
    });

    const {store} = useModalForm();

    useOnDocument('keydown', $((e) => {
        if(e.key === 'Escape' && store.isOpen) {
            store.onClose()
        }
    }));

    return (
        <div class={`overlay ${store.isOpen ? "" : "hidden"}`}>
            <div class={`modal ${store.isOpen ? "" : "hidden"}`}>
                <button onClick$={() => store.onClose()} class="btn--close-modal">&times;</button>
                <h2 class="modal__header">
                    Open your bank account <br/>
                    in just <span class="highlight">5 minutes</span>
                </h2>
                <Form class="modal__form">
                    <Field name="firstName">
                        {
                            (field, props) => (
                                <>
                                    <label for={field.name}>First Name</label>
                                    <input {...props} type="text" />
                                </>
                            )
                        }
                    </Field>
                    <Field name="lastName">
                        {
                            (field, props) => (
                                <>
                                    <label for={field.name}>Last Name</label>
                                    <input {...props} type="text" />
                                </>
                            )
                        }
                    </Field>
                    <Field name="email">
                        {
                            (field, props) => (
                                <>
                                    <label for={field.name}>Email Address</label>
                                    <input {...props} type="email" />
                                </>
                            )
                        }
                    </Field>
                    <button class="btn" type="submit">Next step &rarr;</button>
                </Form>
            </div>
        </div>
    )
});

export default Modal;