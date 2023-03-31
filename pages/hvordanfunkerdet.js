import H1 from "@/components/H1";
import XMargin from "@/components/XMargin";
import YMargin from "@/components/YMargin";
import Anchor from "@/components/Anchor";
import ArrowRight from "@/components/ArrowRight";

export default function hvordanfunkerdet() {
    return (<XMargin>
        <YMargin breadcrumbs={true}>
            <H1>Hvordan funker Farge Album?</H1>
            <p>Farge Album er en tjeneste som gir farger, fikser rifter i bilder og øker kvaliteten deres. For å bruke tjenesten må du først velge hva slags album du har lyst på tilbake (hardt omslag, pocket, blad) i tillegg til det orginale. Deretter må du gi oss litt personopplysninger sånn at vi vet hvor vi skal sende albumet tilbake til og hvor vi kan kontakte deg dersom vi trenger å kommunisere med deg. Etter dette må du betale oss med kontanter i pakken (eller vipps). Til slutt sender du pakken til våre kontorer ved denne addressen (ADDRESSE) og mottar det fargete albumet etter opptil 2 uker. </p>
            <ul className="steps steps-vertical">
                <li className="step step-primary">
                    <div className="text-left">
                        <b className="text-xl">Velg bok omslag 🏞️</b>
                        <p>Farge Album tilbyr flere løsninger for å restaurere gamle album.</p>
                    </div>
                </li>
                <li className="step step-primary">
                    <div className="text-left">
                        <b className="text-xl">Registrer deg 👤</b>
                        <p>Vi trenger informasjonen din for å håndtere albumet ditt.</p>
                    </div>
                </li>
                <li className="step step-primary">
                    <div className="text-left">
                        <b className="text-xl">Betal 💵</b>
                        <p>Vi tilbyr Vipps og kontakt for betaling.</p>
                    </div>
                </li>
                <li className="step step-primary">
                    <div className="text-left">
                        <b className="text-xl">Send albumet ditt i posten 🚛 📦</b>
                        <p>Send albumet ditt til oss sånn at vi kan restaurere det, og returnere det gamle albumet.</p>
                    </div>
                </li>
                <li className="step step-primary">
                    <div className="text-left">
                        <b className="text-xl">Motta ditt reparerte album og orginale album 🥳</b>
                    </div>
                </li>
            </ul>
            <Anchor
            href='/velgpakke'
            title="Bestill"
            >
                <button className="btn btn-primary text-white">
                    Prøv det 
                    <ArrowRight strokeWidth="4" style='w-4 h-4 ml-4'/>
                </button>
            </Anchor>
        </YMargin>
    </XMargin>)
}