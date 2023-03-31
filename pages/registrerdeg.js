import XMargin from "@/components/XMargin";
import YMargin from "@/components/YMargin";
import ProgressPurchase from "@/components/ProgressPurchase";
import ArrowRight from "@/components/ArrowRight";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { queryToUrlParams } from "@/functions/utils";
import H2 from "@/components/H2";

function registrerdeg() {
    const router = useRouter()
    const [originalQuery, setOriginalQuery] = useState(queryToUrlParams(router.query))
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        streetAddress: "",
        postalCode: "",
        region: ""
    })
    function updateFormData(e) {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    useEffect(() => {
        const { name, phone, email, streetAddress, postalCode, region } = formData
        router.push(`?${originalQuery}user_name=${name}&user_phone=${phone}&user_email=${email}&user_streetAddress=${streetAddress}&user_postalCode=${postalCode}&user_region=${region}`, undefined, { shallow: true })
    }, [formData])
    function handleSubmit(e) {
        e.preventDefault();
        const query = router.query
        let urlParams = queryToUrlParams(query)
        router.push('/betal' + "?" + urlParams)
    }
    return (<XMargin>
        <YMargin>
            <div className="max-md:flex max-md:justify-center w-full">
                <ProgressPurchase step={2}/>
            </div>
            <H2 className="w-full max-md:block hidden text-center pt-4">Registrer deg 👤</H2>
            <form className="pt-8 flex flex-col gap-4" onSubmit={handleSubmit}>
                <p>Farge Album trenger denne informasjonen for å sende det fargete albumet og det orginale albumet ditt tilbake. Vi samler epost adresse og telfonnummer for å sikre at vi kan kontakte deg, dersom det er noe.</p>
                <div className="form-control w-full max-w-xs">
                    <label className="label" for="username">
                        <span className="label-text">Hva er ditt fulle navn*</span>
                    </label>
                    <input required id="username" type="text" placeholder="Ola Nordmann" 
                    className="input input-bordered w-full max-w-xs" name="name"
                    onChange={updateFormData}
                    value={formData.name}
                    />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label" for="usertel">
                        <span className="label-text">Hva er telefon nummeret ditt*</span>
                    </label>
                    <input required id="usertel" type="tel" placeholder="+47 123 45 678" 
                    className="input input-bordered w-full max-w-xs" name="phone"
                    onChange={updateFormData}
                    value={formData.phone}/>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label" for="useremail">
                        <span className="label-text">Hva er epost adressen din*</span>
                    </label>
                    <input required id="useremail" type="email" placeholder="ola.nordmann@email.no" 
                    className="input input-bordered w-full max-w-xs" name="email"
                    onChange={updateFormData}
                    value={formData.email}/>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label" for="gateadresse">
                        <span className="label-text">Gateadresse*</span>
                    </label>
                    <input required id="gateadresse" type="text" placeholder="Slottsplassen 1" 
                    className="input input-bordered w-full max-w-xs" name="streetAddress"
                    onChange={updateFormData}
                    value={formData.streetAddress}/>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label" for="postnummer">
                        <span className="label-text">Postnummer*</span>
                    </label>
                    <input required id="postnummer" inputMode="numeric" type="text" placeholder="0001" 
                    maxLength="4" className="input input-bordered w-full max-w-xs" name="postalCode"
                    onChange={updateFormData}
                    value={formData.postalCode}/>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label" for="poststed">
                        <span className="label-text">Poststed*</span>
                    </label>
                    <input required id="poststed" type="text" placeholder="Oslo" 
                    className="input input-bordered w-full max-w-xs" name="region"
                    onChange={updateFormData}
                    value={formData.region}/>
                </div>
                <button className="btn btn-primary text-white w-max" disabled={false} title="Gå videre">
                    Gå videre 
                    <ArrowRight strokeWidth="4" style='w-4 h-4 ml-4' strokeColor={true ? "white": "rgb(177, 177, 183)"}/>
                </button>
            </form>
        </YMargin>
    </XMargin>)
}
export default registrerdeg