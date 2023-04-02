import Anchor from '@/components/Anchor'
import ArrowRight from "@/components/ArrowRight"
import Image from 'next/image'
import XMargin from '@/components/XMargin'
import YMargin from '@/components/YMargin'
import H1 from '@/components/H1'
import Page from '@/components/Page'
import PrimaryButton from '@/components/PrimaryButton'
export default function Home(props) {
  const greenTextShadow = {textShadow: 'rgba(49, 192, 49, 0.4) 1px 0 10px'}
  return (
    <XMargin>
      <YMargin breadcrumbs={false}>
        <Page
        title="Farge Album - Fargelegg gamle fotoalbum"
        description="Farge Album bruker ny teknologi for å gi dine gamle bilder nytt liv og farge igjen. Vi fikser rifter og bretter i gamle bilder og fargelegger sorthvitt bilder"
        keywords="farge, album, ai, svart, hvit, bilde, restaurering"
        ></Page>
        <div className="flex flex-col items-center lg:flex-row-reverse">
          <Image
            src="/images/heroimage1.png"
            alt="Fargealbum gir dine gamle fotoalbum farge"
            width={512}
            height={512}
            className="rounded-2xl z-0"
          />
          <div className='bg-green-300+'>
            <H1><i className='text-green-800' >Fargelegg</i> dine gamle fotoalbum!</H1>
            <p className="py-6">Farge Album bruker ny teknologi for å gi dine gamle bilder nytt liv og farge igjen. Vi fikser rifter og bretter i gamle bilder og fargelegger sorthvitt bilder</p>
            <Anchor
            href='/velgpakke'
            title="Bestill"
            >
              <PrimaryButton>
                Bestill 
                <ArrowRight strokeWidth="4" style='w-4 h-4 ml-4'/>
              </PrimaryButton>
            </Anchor>
            <Anchor
            href='/hvordanfunkerdet'
            title='Hvordan funker det?'>
              <button className="btn btn-ghost ml-4">Hvordan funker det?</button>
            </Anchor>
          </div>
        </div>
        <div className="hero bg-base-100 max-lg:pt-12">
          <div className="hero-content bg-red-500+ w-full h-full flex flex-col items-start">
            <div>
              <H1><i className='text-green-800' >Reparer</i> slitasje og rifter i gamle bilder</H1>
              <p className="py-6">Med ny teknologi kan vi fikse rifter, slitasje og uklarhet i gamle bilder</p>
            </div>
            <div className='flex flex-row max-lg:flex-col'>
              <Image
                src="/images/odelagt.png"
                alt="Ødelagt bilde"
                width={496}
                height={496}
                className="rounded-2xl"
              />
              <div className="divider divider-horizontal max-lg:hidden flex items-center"><p><ArrowRight strokeColor="black" style='w-6 h-6'/></p></div>
              <div className="divider divider-horizontal max-lg:flex justify-center hidden w-full py-2"><p><ArrowRight strokeColor="black" style='w-6 h-6 rotate-90'/></p></div>
              <Image
                src="/images/fargetoggjenopprettet.png"
                alt="gjenopprettet bilde"
                width={496}
                height={496}
                className="rounded-2xl"
              />
            </div>
            <div className='flex flex-row max-lg:flex-col'>
              <Image
                src="/images/odelagt2.jpeg"
                alt="Ødelagt bilde"
                width={496}
                height={496}
                className="rounded-2xl"
              />
              <div className="divider divider-horizontal max-lg:hidden flex items-center"><p><ArrowRight strokeColor="black" style='w-6 h-6'/></p></div>
              <div className="divider divider-horizontal max-lg:flex justify-center hidden w-full py-2"><p><ArrowRight strokeColor="black" style='w-6 h-6 rotate-90'/></p></div>
              <Image
                src="/images/gjenopprettet2.png"
                alt="Gjenopprettet bilde"
                width={496}
                height={496}
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>

      </YMargin>
    </XMargin>
  )
}

// export async function getStaticProps(context) {
//   return {
//     props: {},
//   }
// }