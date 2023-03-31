import { useEffect, useState } from "react"

export default function SellYourSoul() {
    const [hidden, setHidden] = useState(true)
    function accept() {
        localStorage.setItem("FargeAlbumAcceptedCookies", true)
        setHidden(true)
    }
    useEffect(() => {
        if (typeof window !== 'undefined') setHidden(localStorage.getItem("FargeAlbumAcceptedCookies"))
    }, [])
    return (hidden ? <></> : <div className="fixed bottom-0 z-50 p-4 w-full">
        <div className="alert alert-info shadow-xl">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="black" viewBox="0 0 24 24" className="flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>Ved å fortsette å bruke dette nettstedet godtar du våre <a href="/informasjonskapsler" className="text-blue-500 hover:underline" title="Les vår informasjonskapsel avtale her">Informasjonskapsler</a></span>
            </div>
            <div className="flex-none">
                <button className="btn btn-sm btn-primary" onClick={accept}>Aksepter</button>
            </div>
        </div>
    </div>);
}