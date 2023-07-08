import Image from 'next/image'
import IconGitHub from './icons/Github'
import IconAppStore from './icons/appstore'
import IconLinkedin from './icons/linkedin'
import IconInstagram from './icons/instagram'


export default function Home() {
  return (
    <main className="bg-navy h-screen flex">
      <div className='text-white pt-32 md:pl-32 pl-20 md:pr-0 pr-28'>
          <div className='space-y-3'>
             <p className="text-lightestslate font-extrabold text-5xl">Marco Mascorro</p>

             <p className='text-lightestslate font-light'>iOS Software Developer </p>

              <p className='font-light text-sm text-lightslate'>Crafting seamless and unforgettable experiences, one exceptional iOS app at a time.</p>

          </div>

          <div className='h-6 text-white flex space-x-7 md:mt-96 mt-16'>
            <IconAppStore />
            <IconGitHub />
            <IconLinkedin/>
            <IconInstagram />
          </div>

      </div>

      <div className='ml-32'>
       <h1 className='text-white'>hello</h1>
      </div>
    </main>
  )
}
