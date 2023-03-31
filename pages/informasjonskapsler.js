import ContactInfo from "@/components/ContactInfo";
import H1 from "@/components/H1";
import XMargin from "@/components/XMargin";
import YMargin from "@/components/YMargin";

export default function informasjonskapsler() {
    return (
    <XMargin>
        <YMargin breadcrumbs={true}>
            <H1>Informasjonskapsler (Cookies) Avtale for Farge Album</H1>
            <ol className="list-decimal">
                <li>
                    <b>Innledning</b>
                    <p>Denne Informasjonskapsler (Cookies) Avtalen ("Avtalen") beskriver hvordan Farge Album ("Selskapet", "vi", "oss" og "vår") bruker informasjonskapsler og lignende teknologier på vår nettside, www.fargealbum.no ("Nettsiden"). Ved å bruke Nettsiden samtykker du i vår bruk av informasjonskapsler i henhold til denne Avtalen.</p>
                </li>
                <li>
                    <b>Hva er informasjonskapsler?</b>
                    <p>Informasjonskapsler er små tekstfiler som lagres på din datamaskin eller mobilenhet når du besøker en nettside. Informasjonskapsler brukes for å forbedre brukeropplevelsen, forstå hvordan besøkende bruker Nettsiden og for å tilpasse innhold og reklame.</p>
                </li>
                <li>
                    <b>Hvilke informasjonskapsler bruker vi?</b>
                    <p>Vi bruker både førsteparts informasjonskapsler (satt av oss) og tredjeparts informasjonskapsler (satt av andre nettsteder eller tjenester) på vår Nettside. Følgende typer informasjonskapsler kan bli brukt:</p>
                    <ol className="list-disc">
                        <li>
                            <b>Nødvendige informasjonskapsler:</b>
                            <p>Disse informasjonskapslene er essensielle for at Nettsiden skal fungere og kan ikke deaktiveres. De bidrar til grunnleggende funksjoner som navigasjon og tilgang til sikre områder av Nettsiden.</p>
                        </li>
                        <li>
                            <b>Funksjonelle informasjonskapsler:</b>
                            <p>Disse informasjonskapslene lar oss forbedre funksjonene på Nettsiden ved å huske dine preferanser og innstillinger, slik som språk eller geografisk plassering.</p>
                        </li>
                        <li>
                            <b>Analytiske informasjonskapsler:</b>
                            <p>Disse informasjonskapslene hjelper oss med å forstå hvordan besøkende bruker Nettsiden, hvilke sider som er mest populære og eventuelle feil som måtte oppstå. Dette gjør at vi kan forbedre Nettsiden og tilby en bedre brukeropplevelse.</p>
                        </li>
                        <li>
                            <b>Markedsførings informasjonskapsler:</b>
                            <p>Disse informasjonskapslene brukes til å vise deg relevante annonser og tilbud som er tilpasset dine interesser. De kan også begrense hvor ofte du ser en annonse og hjelpe oss med å måle effektiviteten av våre markedsføringskampanjer.</p>
                        </li>
                    </ol>
                </li>
                <li>
                    <b>Tredjeparts informasjonskapsler</b>
                    <p>Noen informasjonskapsler på vår Nettside er satt av tredjeparter, som for eksempel Google Analytics for å analysere trafikk og adferd på Nettsiden, eller sosiale medier som Facebook og Twitter for å tilby delingsalternativer og annen funksjonalitet. Vi har ingen kontroll over disse tredjeparts informasjonskapslene, og de er underlagt tredjepartens egen personvernpolicy og retningslinjer for informasjonskapsler.</p>
                </li>
                <li>
                    <b>Administrere og slette informasjonskapsler</b>
                    <p>Du kan administrere dine informasjonskapselinnstillinger og slette informasjonskapsler i nettleseren eller enheten du bruker. Vær oppmerksom på at hvis du velger å deaktivere informasjonskapsler, kan det påvirke funksjonalitet og ytelse på Nettsiden, og noen tjenester kan bli utilgjengelige.</p>
                </li>
                <li>
                    <b>Endringer i denne Avtalen</b>
                    <p>Vi forbeholder oss retten til å endre denne Avtalen når som helst og uten varsel. Eventuelle endringer vil tre i kraft når de publiseres på Nettsiden. Din fortsatte bruk av Nettsiden etter endringer i Avtalen innebærer at du aksepterer de reviderte vilkårene.</p>
                </li>
                <li>
                    <b>Kontaktinformasjon</b>
                    <p>Hvis du har spørsmål eller bekymringer angående vår bruk av informasjonskapsler eller denne Avtalen, kan du kontakte oss på:</p>
                </li>
            </ol>
            <ContactInfo />
        </YMargin>
    </XMargin>)
}