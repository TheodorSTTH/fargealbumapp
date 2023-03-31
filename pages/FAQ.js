import XMargin from "@/components/XMargin";
import YMargin from "@/components/YMargin";
import H1 from "@/components/H1";
import Collapse from "@/components/Collapse";
import ContactEmail from "@/components/ContactEmail";

export default function FAQ() {
    return <XMargin>
        <YMargin breadcrumbs={true}>
            <H1>FAQ <i className="opacity-50">(Ofte Stilte Spørsmål)</i></H1>
            <Collapse 
            title="Hva slags retusjeringstjenester tilbyr Farge Album?"
            body="Farge Album tilbyr retusjering og fargelegging av gamle familiebilder og album. Våre tjenester inkluderer reparasjon av rifter og flekker, gjenoppretting av falmede bilder og tilføyelse av farger til svart-hvitt eller sepia bilder."
            />
            <Collapse 
            title="Hvor lang tid tar det å få bildene retusjert og ferdigstilt?"
            body="Leveringstiden for våre tjenester varierer avhengig av kompleksiteten i retusjeringen og mengden av bilder du sender inn. Vi vil gi et estimat for leveringstiden når vi mottar albumet ditt. Vi streber alltid etter å levere kvalitetsarbeid innen rimelig tid."
            />
            <Collapse 
            title="Hvor mye koster retusjeringstjenestene?"
            body="Prisene for våre tjenester finnes på vår nettside, www.fargealbum.com. Prisene varierer avhengig av tjenestene du velger og omfanget av arbeidet som kreves. Vi forbeholder oss retten til å endre prisene når som helst og uten varsel."
            />
            <Collapse 
            title="Hvordan kan jeg sende inn bildene mine for retusjering?"
            body="Du kan sende fysiske bilder til vår postadresse. Vennligst merk at du er ansvarlig for å gi oss nøyaktige og fullstendige bilder og informasjon som er nødvendig for å utføre tjenestene."
            />
            <Collapse 
            title="Hvordan ivaretar Farge Album personvernet og sikkerheten til bildene mine?"
            body="Vi tar personvern og datasikkerhet på alvor. Vi behandler dine personopplysninger i henhold til vår Personvernerklæring og tar nødvendige tekniske og organisatoriske sikkerhetstiltak for å beskytte bildene og informasjonen du gir oss. Vi bruker kun bildene dine for å utføre tjenestene og vil ikke dele dem med tredjeparter uten ditt samtykke."
            />
            <p>
                Dersom du har noen flere spørsmål kontakt oss på <ContactEmail />
            </p>
        </YMargin>
    </XMargin>
}