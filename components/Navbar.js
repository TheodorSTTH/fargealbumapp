import Anchor from "./Anchor"
import Aperture from "./aperture"
import ArrowRight from "./ArrowRight"

function Navbar() {
    return (
        <>
            <div className="navbar bg-base-100 shadow-md fixed z-50 flex">
                <div className="w-full flex">
                    <Anchor
                    title="Hjem"
                    href="/"
                    >
                        <div className="btn btn-ghost normal-case text-xl">
                            <Aperture 
                            style="w-6 h-6 mr-4"
                            strokeColor="black"
                            />
                            <div>
                            Farge Album

                            </div>
                        </div>
                    </Anchor>
                    <div className="dropdown max-md:block hidden">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 border border-lightgrey shadow bg-base-100 rounded-box w-52">
                        <li>
                                    <Anchor
                                    href="/hvordanfunkerdet"
                                    title="Lær mer"
                                    >
                                        Lær mer
                                    </Anchor>
                                </li>
                                <li>
                                    <Anchor
                                    href="/FAQ"
                                    title="Ofte stilte spørsmål"
                                    >
                                        Ofte stilte spørsmål
                                    </Anchor>
                                </li>
                                <li>
                                    <Anchor
                                    href="/omoss"
                                    title="Item 1"
                                    >
                                        Om oss
                                    </Anchor>
                                </li>
                                <li>
                                    <Anchor
                                    href="/privacypolicy"
                                    title="Privacy Policy"
                                    >
                                        Privacy Policy
                                    </Anchor>
                                </li>
                                <li>
                                    <Anchor
                                    href="/cookiepolicy"
                                    title="Cookie Policy"
                                    >
                                        Cookie Policy
                                    </Anchor>
                                </li>
                                <li>
                                    <Anchor
                                    href="/termsandconditions"
                                    title="Terms and Conditions"
                                    >
                                        Terms and Conditions
                                    </Anchor>
                                </li>
                        </ul>
                    </div>
                    <div className="navbar-start">
                    {/* <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 border border-lightgrey shadow bg-base-100 rounded-box w-52">
                        <li><a>Homepage</a></li>
                        <li><a>Portfolio</a></li>
                        <li><a>About</a></li>
                    </ul>
                    </div> */}
                </div>
                </div>
                <div className="navbar-end max-md:hidden">
                    <ul className="menu menu-horizontal px-1">
                        {/* <li>
                            <Anchor
                            href="#"
                            title="Item 1"
                            >
                                Noe
                            </Anchor>
                        </li> */}
                        <li tabIndex={0} className="ml-4">
                            <a>
                            Selskap
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                            </a>
                            <ul className="p-2 bg-base-100 shadow-md">
                                <li>
                                    <Anchor
                                    href="/hvordanfunkerdet"
                                    title="Lær mer"
                                    >
                                        Lær mer
                                    </Anchor>
                                </li>
                                <li>
                                    <Anchor
                                    href="/FAQ"
                                    title="Ofte stilte spørsmål"
                                    >
                                        Ofte stilte spørsmål
                                    </Anchor>
                                </li>
                                <li>
                                    <Anchor
                                    href="/omoss"
                                    title="Item 1"
                                    >
                                        Om oss
                                    </Anchor>
                                </li>
                                <li>
                                    <Anchor
                                    href="/privacypolicy"
                                    title="Privacy Policy"
                                    >
                                        Privacy Policy
                                    </Anchor>
                                </li>
                                <li>
                                    <Anchor
                                    href="/cookiepolicy"
                                    title="Cookie Policy"
                                    >
                                        Cookie Policy
                                    </Anchor>
                                </li>
                                <li>
                                    <Anchor
                                    href="/termsandconditions"
                                    title="Terms and Conditions"
                                    >
                                        Terms and Conditions
                                    </Anchor>
                                </li>
                            </ul>
                        </li>
                        <Anchor
                        href='/velgpakke'
                        title="Bestill"
                        >
                            <button className="btn btn-primary text-white">
                                Bestill 
                                <ArrowRight strokeWidth="4" style='w-4 h-4 ml-4'/>
                            </button>
                        </Anchor>
                    </ul>
                </div>
                
                {/* <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 border border-lightgrey shadow bg-base-100 rounded-box w-52">
                        <li><a>Homepage</a></li>
                        <li><a>Portfolio</a></li>
                        <li><a>About</a></li>
                    </ul>
                    </div>
                </div> */}
            </div>
            <div className="h-16 py-1 max-md:block hidden"></div>
        </>
    )
}
export default Navbar