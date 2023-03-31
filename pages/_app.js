import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import SellYourSoul from '@/components/SellYourSoul'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <div data-theme="lemonade">
    <Navbar />
    <SellYourSoul />
    <Component {...pageProps} />
    <Footer />
  </div>
}