import Breadcrumbs from "./Breadcrumbs";

export default function YMargin({children, breadcrumbs=false}) {
    return (<div className="pt-0 md:pt-12">
        <div className="hero px-0 bg-base-100 pb-12 pt-0 flex">
            <div className="hero-content px-0 bg-blue-500+ w-full h-full flex flex-col items-start">
                {breadcrumbs ? <Breadcrumbs style="hidden md:block"/> : <div className="h-8 w-96 hidden md:block"></div>}
                {children}
            </div>
        </div>
    </div>)
}