'use client'
import { useRef } from "react"
import Socials from "./Socials"
import Gallery from "./Gallery"
import Image from "next/image"
import homeImage from '../../images/homeImage1.jpg'

const Home = ({imageWrapper, originalPosition, currentPosition, serviceSnap, homePage, onGallery, homeSwipeLeft, homeSwipeRight}) => {
  let snapTime = useRef(true)
  const swipeStart = (e) => {
    originalPosition.current = [e.touches[0].clientX, e.touches[0].clientY]
    currentPosition.current = [e.touches[0].clientX, e.touches[0].clientY]
    snapTime.current = true
    setTimeout(() => {
      snapTime.current = false
    }, 200)
  }
  const swipeEnd = () => {
    if(currentPosition.current[0] === originalPosition.current[0] && currentPosition.current[1] === originalPosition.current[1])return
    if(snapTime.current != true)return
    let lengthX = Math.abs(currentPosition.current[0] - originalPosition.current[0])
    let lengthY = Math.abs(currentPosition.current[1] - originalPosition.current[1])
    let theta = Math.atan(lengthY/lengthX) * (180/Math.PI)
    // Angle 30 favours y, Angle 45 neutral, Angle 60 favours x.
    if(theta < 30){
      ((currentPosition.current[0] - originalPosition.current[0]) > 0) ? homeSwipeLeft() : homeSwipeRight()
    }else if(currentPosition.current[1] - originalPosition.current[1] < 0 && onGallery.current == false){
      serviceSnap.current.scrollIntoView({behavior: 'smooth'})
      // serviceSnap.current.scrollIntoView()
    }
  }
  return (
    <div className="flex overflow-x-hidden" ref={homePage} onTouchStart={(e) => swipeStart(e)} onTouchEnd={() => swipeEnd()}>
      <div className="svh pt-[6vh] overflow-x-hidden relative lg:w-[40vw] w-[100vw] flex-shrink-0  border-b border-black">
        <h3 className='text-7xl whitespace-nowrap ml-2 font-[PlayfairDisplay] font-medium crab leading-[3rem]'>Hair & Beauty</h3>
        <div ref={imageWrapper} className="absolute top-[calc(6vh+2.25rem)] duration-500 left-[50%] translate-x-[-50%] w-[80%] h-[60%]">
          <Image src={homeImage} className="h-full w-full object-cover shadow-2xl bcrab" alt='brb'/>
          <h2 className={`absolute top-0 right-0 px-4 mt-8 pl-8 py-1 text-lg tracking-wider font-[200] text-white bg-black`} onTouchStart={() => homeSwipeRight()}>See Gallery</h2>
          <div className='absolute right-[calc(100%)] bottom-0 text-xl tracking-wide flex flex-col h-full bcrab'>
            <div className='bg-black w-[1px] ml-auto mr-4 flex-grow mb-4 mt-8'></div>
            <h6 className='vertical rotate-180 mb-8 font-solitreo'>Appointment only</h6>
          </div>
          <h3 className={`text-3xl font-[300] mt-4 leading-6 whitespace-nowrap crab`}>New . Luxurious . Personal</h3>
          <div className='h-[2px] w-[100%] bg-black my-2'></div>
          <p className='text-sm text-zinc-900 font-[Montserrat] font-semibold text-center'>
              Pretty Little Salon is a new, luxurious hair salon in the Stoke area of Coventry. Our team have over 30 years of experience in the hair and beauty industry and are here to offer you the best treatments available.
          </p>
        </div>
        <Socials navSocials={false}/>
      </div>
      <Gallery homeSwipeLeft={homeSwipeLeft}/>
    </div>
  )
}

export default Home