import Costs from "@/components/Costs";
import H1 from "@/components/H1";
import XMargin from "@/components/XMargin";
import YMargin from "@/components/YMargin";
import { getBookCost } from "@/functions/utils";
import { useRouter } from "next/router";

export default function kvittering() {
    const router = useRouter();
    const query = router.query;
    return <XMargin>
        <YMargin breadcrumbs={true}>
            <H1>Kvittering</H1>
            {query.book_name ? <><p><b>Ordrekode:</b> {query.code}</p>
            <Costs
            products={[
                {
                    name: "Bilde restaurering",
                    cost: 1000
                },
                {
                    name: query.book_name,
                    cost: getBookCost(query.book_name)
                }
            ]}
            /></> : <b>Det er ingen kvittering her. Dersom du forventet en kvittering kan den være sendt til deg på Epost. Dersom den ikke er der, start bestillingsprosessen på nytt <a href="/velgpakke" className="text-blue-500 hover:underline">her</a></b>
            }
        </YMargin>
    </XMargin>
}