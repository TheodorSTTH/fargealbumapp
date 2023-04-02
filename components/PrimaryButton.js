export default function PrimaryButton({children, className=""}) {
    return <button className={"btn btn-primary bg-green-800 text-white " + className}>{children}</button>
}