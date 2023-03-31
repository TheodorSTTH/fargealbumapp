import Link from "next/link";

export default function Anchor({href="/", children, title="Follow Link"}) {
    return (
        <Link href={href} title={title}>
            {children}
        </Link>
    )
}