import Anchor from "./Anchor";
import ContactAddress from "./ContactAddress";
import ContactEmail from "./ContactEmail";
import ContactPhone from "./ContactPhone";

export default function ContactInfo({className=""}) {
    return <div className={" " + className}>
        <p>Adresse: <ContactAddress /></p>
        <p>E-post: <ContactEmail /></p>
        <p>Telefon: <ContactPhone /></p>
    </div>
}