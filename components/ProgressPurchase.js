export default function ProgressPurchase({step=0}) {
    return (<ul className="steps py-0 max-md">
        <li className={" step " + (step >= 1 ? "step-primary" : "")}>
            <b className={"max-md:hidden " + (step == 1 ? "text-2xl" : "text-xl opacity-50")}>Velg bok omslag 🏞️</b>
        </li>
        <li className={" step " + (step >= 2 ? "step-primary" : "")}>
            <b className={"max-md:hidden " + (step == 2 ? "text-2xl" : "text-xl opacity-50")}>Registrer deg 👤</b>
        </li>
        <li className={" step " + (step >= 3 ? "step-primary" : "")}>
            <b className={"max-md:hidden " + (step == 3 ? "text-2xl" : "text-xl opacity-50")}>Betal 💵</b>
        </li>
        <li className={" step " + (step >= 4 ? "step-primary" : "")}>
            <b className={"max-md:hidden " + (step == 4 ? "text-2xl" : "text-xl opacity-50")}>Send albumet ditt i posten 🚛 📦</b>
        </li>
    </ul>)
}