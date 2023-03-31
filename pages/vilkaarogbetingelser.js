import Breadcrumbs from "@/components/breadcrumbs";
import ContactInfo from "@/components/ContactInfo";
import H1 from "@/components/H1";
import XMargin from "@/components/XMargin";
import YMargin from "@/components/YMargin";

export default function vilkaarogbetingelser() {
    return (
    <XMargin>
        <YMargin breadcrumbs={true}>
                <H1>Vilkår og betingelser for Farge Album</H1>
                <ol className="list-decimal">
                    <li>
                        <b>Innledning</b>
                        <p>Disse vilkårene og betingelsene ("Vilkårene") gjelder for bruk av nettsiden www.fargealbum.no ("Nettsiden") og tjenestene som tilbys av Farge Album ("Selskapet", "vi", "oss" og "vår"). Ved å bruke Nettsiden og våre tjenester, aksepterer du disse Vilkårene. Hvis du ikke aksepterer Vilkårene, må du ikke bruke Nettsiden eller våre tjenester.</p>
                    </li>
                    <li>
                        <b>Tjenester</b>
                        <p>Farge Album tilbyr tjenester for retusjering og fargelegging av gamle familiebilder og album, inkludert reparasjon av rifter og flekker, og tilføyelse av farger. Vi forbeholder oss retten til å endre, legge til eller fjerne tjenester når som helst og uten varsel.</p>
                    </li>
                    <li>
                        <b>Priser og betaling</b>
                        <p>Prisene for våre tjenester er angitt på Nettsiden. Vi forbeholder oss retten til å endre prisene når som helst og uten varsel. Betaling for tjenestene skal skje på forhånd, med mindre annet er avtalt skriftlig mellom deg og oss. Vi aksepterer betaling via kredittkort, debetkort og andre betalingsmetoder som angitt på Nettsiden.</p>
                    </li>
                    <li>
                        <b>Levering</b>
                        <p>Vi vil utføre tjenestene innen rimelig tid etter mottak av betaling og nødvendig informasjon og materiale fra deg. Du er ansvarlig for å gi oss nøyaktig og fullstendig informasjon og materiale som er nødvendig for å utføre tjenestene. Vi er ikke ansvarlige for forsinkelser eller manglende levering som skyldes manglende eller feilaktig informasjon eller materiale fra deg.</p>
                    </li>
                    <li>
                        <b>Kvalitet og reklamasjon</b>
                        <p>Vi vil utføre tjenestene med rimelig faglig dyktighet og omsorg. Hvis du mener at vi ikke har levert tjenestene i samsvar med Vilkårene, må du varsle oss skriftlig innen 14 dager etter levering av tjenestene. Vi vil undersøke saken og, etter eget skjønn, korrigere eventuelle mangler eller refundere betalingen.</p>
                    </li>
                    <li>
                        <b>Opphavsrett og bruksrett</b>
                        <p>Du garanterer at du har opphavsrett eller nødvendige rettigheter til bildene og materialene du gir oss for å utføre tjenestene. Du gir oss en begrenset bruksrett til å bruke bildene og materialene utelukkende for å utføre tjenestene. Vi garanterer at vi ikke vil bruke bildene eller materialene til andre formål uten ditt samtykke.</p>
                    </li>
                    <li>
                        <b>Personvern</b>
                        <p>Vi behandler dine personopplysninger i henhold til vår Personvernerklæring, som er tilgjengelig på Nettsiden.</p>
                    </li>
                    <li>
                        <b>Ansvarsbegrensning</b>
                        <p>Vårt ansvar for tap og skade som følge av vår kontraktsbrudd, uaktsomhet eller brudd på lovbestemte plikter er begrenset til det beløpet du har betalt for tjenestene. Vi er ikke ansvarlige for indirekte tap, tap av fortjeneste, tap av goodwill eller tapsføring.</p>
                    </li>
                    <li>
                        <b>Force majeure</b>
                        <p>Vi er ikke ansvarlige for manglende oppfyllelse av våre forpliktelser under Vilkårene hvis slik manglende oppfyllelse skyldes omstendigheter utenfor vår kontroll, inkludert, men ikke begrenset til, naturkatastrofer, krig, streik, flom, brann eller tekniske problemer.</p>
                    </li>
                    <li>
                        <b>Endringer i Vilkårene</b>
                        <p>Vi forbeholder oss retten til å endre Vilkårene når som helst og uten varsel. Eventuelle endringer vil tre i kraft når de publiseres på Nettsiden. Din fortsatte bruk av Nettsiden og våre tjenester etter endringer i Vilkårene innebærer at du aksepterer de reviderte vilkårene.</p>
                    </li>
                    <li>
                        <b>Lovvalg og tvisteløsning</b>
                        <p>Disse Vilkårene er underlagt lovene i Norge. Eventuelle tvister som oppstår i forbindelse med Vilkårene skal først forsøkes løst gjennom forhandlinger. Hvis tvisten ikke kan løses gjennom forhandling, skal den avgjøres av de ordinære domstolene i Norge, med mindre annet er påkrevd i henhold til gjeldende lovgivning.</p>
                    </li>
                    <li>
                        <b>Kontaktinformasjon</b>
                        <p>Hvis du har spørsmål eller bekymringer angående Vilkårene, kan du kontakte oss på:</p>
                        <ContactInfo />
                        Dato for siste oppdatering: 31 mar 2023
                    </li>
                </ol>
        </YMargin>
    </XMargin>)
}