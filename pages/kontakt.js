import H1 from "@/components/H1";
import XMargin from "@/components/XMargin";
import YMargin from "@/components/YMargin";

export default function kontakt(){
    return <XMargin>
        <YMargin breadcrumbs={true}>
            <H1>Kontakt</H1>
            <p>Før du kontakter oss kan det hende at spørsmålene dine allerede er besvart i <a href="/FAQ" className="hover:underline text-blue-500" title="Frequently Asked Questions">FAQ</a></p>
            <p>Du kan kontakte oss via emailen <a href="mailto:farge.album@gmail.com" className="hover:underline text-blue-500" title="Kontakt oss når som helst">farge.album@gmail.com</a></p>
            <p>Du kan også ringe <a href="tel:40644339" className="hover:underline text-blue-500" title="Kontakt oss mellom klokka 16 og 22">406 44 339</a> (kl. 16-22)</p>
        </YMargin>
    </XMargin>
}