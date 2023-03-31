export default function XMargin({children}) {
    return (<div className="hero bg-base-100">
        <div className="hero-content w-full h-full flex flex-col items-start px-12 bg-red-500+">
            {children}
        </div>
    </div>)
}