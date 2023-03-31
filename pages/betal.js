import Costs from "@/components/Costs";

import ProgressPurchase from "@/components/ProgressPurchase";
import XMargin from "@/components/XMargin";
import YMargin from "@/components/YMargin";
import ArrowRight from "@/components/ArrowRight";
import Anchor from "@/components/Anchor";
import { useRouter } from "next/router";
import { useState } from "react";
import CONSTANTS from "@/constants";
import { getBookCost, queryToUrlParams } from "@/functions/utils";
import H2 from "@/components/H2";

function betal() {
    const router = useRouter();
    const query = router.query;
    const books = CONSTANTS.books;
    return (<XMargin>
        <YMargin>
            <div className="max-md:flex max-md:justify-center w-full">
                <ProgressPurchase step={3}/>
            </div>
            <H2 className="w-full max-md:block hidden text-center pt-4">Betal 💵</H2>
            <div className="py-8 flex flex-col">
                <Costs 
                title={<p>Kostnader <i className="opacity-50">(Du betaler ved å sende pengene i posten)</i></p>}
                products={[
                    {
                        name: "bilde restaurering",
                        cost: 1000
                    },
                    {
                        name: query["book_name"],
                        cost: getBookCost(query.book_name)
                    }
                ]}/>
                <i className="opacity-50 pb-8">*Dersom noe ser feil ut, start bestillingsprossessen på nytt*</i>
                {/* <Anchor // TODO Man trenger en bedrift for å ta betalt gjennom vipps checkout, jeg lagde en konto for farge.album@gmail.com
                href="#"
                title="Vipps meg på forskudd"
                >
                    Vipps
                </Anchor> */}
                <Anchor
                href={"/sendalbum?" + queryToUrlParams(query)}
                title={"Neste side"}
                disabled={false}
                >
                    <button className="btn btn-primary text-white" disabled={false}>
                        Gå videre
                        <ArrowRight strokeWidth="4" style='w-4 h-4 ml-4' strokeColor={true ? "white": "rgb(177, 177, 183)"}/>
                    </button>
                </Anchor>
            </div>
        </YMargin>
    </XMargin>)
}
export default betal