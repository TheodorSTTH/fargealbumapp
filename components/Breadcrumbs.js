import { useRouter } from 'next/router'
import Anchor from './Anchor'
export default function Breadcrumbs({style}) {
    const router = useRouter()
    console.log(router)
    return (
    <div className={"text-sm breadcrumbs " + style}>
        <ul>
            <Anchor
            href='/'
            title="Hjem"
            >
                <p className='text-blue-500 hover:underline'>Hjem</p>
            </Anchor>
            {
                router.route.split("/").map((route, i) => {
                    return <li key={i}>
                        <Anchor
                        href={router.route.split("/").slice(0, i + 1)}
                        title={router.route.split("/")[i]}
                        >
                            {route}
                        </Anchor>
                    </li>
                })
            }
        </ul>
    </div>)
}