import H2 from "@/components/H2";
import ProgressPurchase from  "@/components/ProgressPurchase";
import XMargin from "@/components/XMargin";
import YMargin from "@/components/YMargin";
import { queryToUrlParams, sendEmail } from "@/functions/utils";
import { useRouter } from "next/router";
import { useState } from "react";

function sendalbum(){
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    // * prefetch kvittering
    async function fullfør() {
        if (loading) return;
        setLoading(true);
        const res = await sendEmail(router.query);
        const code = res.data;
        const params = queryToUrlParams(router.query);
        console.log("CODE", code)
        router.push("/kvittering?code=" + code + "&" + params);
    }
    return (<XMargin>
        <YMargin>
            <ProgressPurchase step={4} />
            <div className="w-full flex flex-col items-center justify-center">
                <H2 className="w-full text-center">Hvordan sender du albumet på riktig måte:</H2>
                <div className="my-4">
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <i className="text-gray-600">Dersom du ikke vil se videoen er det en offisiell guide <a className="text-blue-500 hover:underline" href="/" target="_blank">her</a></i>
                </div>
                <button className="btn btn-primary text-white" title="Fullfør kjøp" onClick={fullfør} disabled={loading}>
                    Fullfør kjøp
                </button>
            </div>
        </YMargin>
    </XMargin>)
}
export default sendalbum