import Breadcrumbs from "@/components/breadcrumbs";
import ContactInfo from "@/components/ContactInfo";
import H1 from "@/components/H1";
import XMargin from "@/components/XMargin";
import YMargin from "@/components/YMargin";

export default function personvernerklaering() {
    return (
    <XMargin>
        <YMargin breadcrumbs={true}>
            <H1>Personvernerklæring for Farge Album</H1>
            <ol className="list-decimal">
                <li>
                    <b>Innledning</b>
                    <p>Denne Personvernerklæringen ("Erklæringen") forklarer hvordan Farge Album ("Selskapet", "vi", "oss" og "vår") samler inn, bruker, lagrer, deler og beskytter dine personopplysninger når du bruker vår nettside www.fargealbum.no ("Nettsiden") og våre tjenester. Ved å bruke Nettsiden og våre tjenester samtykker du i vår behandling av dine personopplysninger i henhold til denne Erklæringen.</p>
                </li>
                <li>
                    <b>Informasjon vi samler inn</b>
                    <p>Vi kan samle inn og behandle følgende personopplysninger om deg:</p>
                    <ol className="list-disc">
                        <li>Identifikasjonsdata, som navn, e-postadresse, telefonnummer og adresse.</li>
                        <li>Teknisk informasjon, inkludert IP-adresse, nettlesertype og -versjon, tidssoneinnstilling, operativsystem og plattform.</li>
                        <li>Informasjon om din bruk av Nettsiden, som besøkte sider, trafikkdata, sted og annen kommunikasjonsdata.</li>
                    </ol>
                </li>
                <li>
                    <b>Hvordan vi bruker personopplysningene</b>
                    <p>Vi kan bruke dine personopplysninger for følgende formål:</p>
                    <ol className="list-disc">
                        <li>Å levere våre tjenester og oppfylle våre kontraktlige forpliktelser overfor deg.</li>
                        <li>Å forbedre og tilpasse Nettsiden og våre tjenester basert på dine preferanser og interesser.</li>
                        <li>Å kommunisere med deg, inkludert å svare på henvendelser og informere om endringer i våre tjenester.</li>
                        <li>Å markedsføre våre produkter og tjenester, samt å sende deg nyhetsbrev og andre kommunikasjoner, dersom du har gitt oss samtykke til det.</li>
                        <li>Å beskytte våre rettigheter, eiendom og sikkerhet, samt å forhindre, oppdage og etterforske ulovlige aktiviteter, svindel eller brudd på våre vilkår og betingelser.</li>
                    </ol>
                </li>
                <li>
                    <b>Deling av personopplysninger</b>
                    <p>Vi kan dele dine personopplysninger med:</p>
                    <ol className="list-disc">
                        <li>Våre ansatte, agenter og underleverandører som er involvert i å levere våre tjenester og drifte Nettsiden.</li>
                        <li>Tredjeparter som leverer tjenester på våre vegne, som for eksempel betalingsprosessorer, markedsføringspartnere og analysetjenester.</li>
                        <li>Offentlige myndigheter eller rettshåndhevende organer hvis vi er pålagt å gjøre det i henhold til lov eller i forbindelse med en juridisk prosess.</li>
                    </ol>
                    <p>Vi vil ikke selge, leie ut eller på annen måte dele dine personopplysninger med tredjeparter for markedsføringsformål uten ditt samtykke.</p>
                </li>
                <li>
                    <b>Sikkerhet og lagring av personopplysninger</b>
                    <p>Vi tar nødvendige tekniske og organisatoriske sikkerhetstiltak for å beskytte dine personopplysninger mot uautorisert tilgang, endring, tap eller ødeleggelse. Vi lagrer dine personopplysninger så lenge det er nødvendig for å oppfylle formålene beskrevet i denne Erklæringen, eller som lovpålagt.</p>
                </li>
                <li>
                    <b>Dine rettigheter</b>
                    <p>Du har rett til å be om tilgang til, retting eller sletting av dine personopplysninger. Du kan også protestere mot vår behandling av dine personopplysninger eller be om begrensning av behandlingen. Dersom behandlingen av dine personopplysninger er basert på samtykke, har du rett til å tilbakekalle ditt samtykke når som helst.</p>
                    <p>For å utøve dine rettigheter eller stille spørsmål om denne Erklæringen, kan du kontakte oss ved hjelp av kontaktinformasjonen angitt nedenfor.</p>
                </li>
                <li>
                    <b>Endringer i denne Erklæringen</b>
                    <p>Vi forbeholder oss retten til å endre denne Erklæringen når som helst og uten varsel. Eventuelle endringer vil tre i kraft når de publiseres på Nettsiden. Din fortsatte bruk av Nettsiden etter endringer i Erklæringen innebærer at du aksepterer de reviderte vilkårene.</p>
                </li>
                <li>
                    <b>Kontaktinformasjon</b>
                    <p>Hvis du har spørsmål eller bekymringer angående vår behandling av dine personopplysninger eller denne Erklæringen, kan du kontakte oss på:</p>
                    <ContactInfo />
                </li>
                Dato for siste oppdatering: 31 mar 2023
            </ol>
        </YMargin>
    </XMargin>)
}