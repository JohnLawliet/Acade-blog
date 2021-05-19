import Head from "next/head"
import ContactForm from "../components/contact/contact-form.component"

const ContactPage = () => {
    return (
        <div>
            <Head>
                <title>Contact page</title>
            </Head>
            <ContactForm />
        </div>
    )
}

export default ContactPage
