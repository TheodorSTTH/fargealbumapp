import XMargin from "@/components/XMargin";
import YMargin from "@/components/YMargin";
import H1 from "@/components/H1";

export default function credits() {
    return <XMargin>
        <YMargin breadcrumbs={true}>
            <H1>Credits:</H1>
            <p>En varm takk til <a href="https://feathericons.com/" className="text-blue-500 hover:underline">Feathericons</a></p>
            <p>En varm takk til <a href="https://daisyui.com/" className="text-blue-500 hover:underline">DaisyUI</a></p>
        </YMargin>
    </XMargin>
}