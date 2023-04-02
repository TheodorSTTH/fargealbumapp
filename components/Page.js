import Head from "next/head"

export default function Page({children, date, description, image, title, keywords, }) {
    return <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        {description && <meta content={description} name="description" />}
        {keywords && <meta content={keywords} name="keywords" />}
        <meta content="follow, index" name="robots"/>
        <link rel="icon" href="/favicon.ico" />
    </Head>
}