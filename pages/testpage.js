import XMargin from "@/components/XMargin";
import YMargin from "@/components/YMargin";
import H1 from "@/components/H1";
import { sendEmail } from "@/functions/utils";

export default function testpage() {
    const buttonStyle = "btn btn-primary text-white"
    async function sendupdata() {
        const res = await sendEmail();
        console.log("YO", res)
    }
    return (<XMargin>
        <YMargin breadcrumbs={true}>
            <H1>Developer Test Page <i className="opacity-50">(Leave if you arent a developer)</i></H1>
            <button className={buttonStyle} onClick={sendupdata}>Send email</button>
        </YMargin>
    </XMargin>)
}