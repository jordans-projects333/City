'use client'
import React, {useRef} from 'react'
import Image from 'next/image'
import gallery1 from '../../images/Gallery/1.jpg'
import gallery2 from '../../images/Gallery/2.jpg'
import gallery3 from '../../images/Gallery/3.jpg'
import gallery4 from '../../images/Gallery/4.jpg'
import gallery5 from '../../images/Gallery/5.jpg'
import gallery6 from '../../images/Gallery/6.jpg'
import gallery7 from '../../images/Gallery/7.jpg'
import gallery8 from '../../images/Gallery/8.jpg'
import gallery9 from '../../images/Gallery/9.jpg'
import gallery10 from '../../images/Gallery/10.jpg'
import gallery11 from '../../images/Gallery/11.jpg'
import gallery12 from '../../images/Gallery/12.jpg'

const Gallery = ({homeSwipeLeft}) => {
    let gallerySlide1 = useRef(null)
    let gallerySlide2 = useRef(null)
    let gallerySlide3 = useRef(null)
    let gallerySlide4 = useRef(null)
    let gallerySlide5 = useRef(null)
    let gallerySlide6 = useRef(null)
    let test = useRef(false)
    const homeIntro = () => {
        // if(!test.current){
        // requestAnimationFrame(() => {
        //     gallerySlide1.current.style.top = '100%'
        //     gallerySlide2.current.style.top = '100%'
        //     gallerySlide3.current.style.top = '100%'
        //     gallerySlide4.current.style.top = '100%'
        //     gallerySlide5.current.style.top = '100%'
        //     gallerySlide6.current.style.top = '100%'
        // })
        // test.current = true
        // }else{
        //     requestAnimationFrame(() => {
        //         gallerySlide1.current.style.top = '0%'
        //         gallerySlide2.current.style.top = '0%'
        //         gallerySlide3.current.style.top = '0%'
        //         gallerySlide4.current.style.top = '0%'
        //         gallerySlide5.current.style.top = '0%'
        //         gallerySlide6.current.style.top = '0%'
        //     })
        //     test.current = false
        // }
    }
  return (
    <div className='flex-shrink-0 flex flex-col relative'>
        <div className='mt-[6vh] w-full bg-black text-white flex items-center justify-center gap-2 pr-4 py-1 border-t border-black' onTouchStart={() => homeSwipeLeft()}>
            <svg className='h-4 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
            <h3 className='font-semibold tracking-wider text-lg'>Leave Gallery</h3>
        </div>
        <div className='flex w-[100vw] flex-grow lg:w-[60vw] relative lg:overflow-y-hidden overflow-y-auto  flex-col' onClick={() => homeIntro()}>
            <div className='flex lg:gap-1 px-1 flex-shrink-0 w-full flex-col lg:flex-row h-[100%]'>
                <div ref={gallerySlide1} className='flex-1 flex lg:flex-col gap-1 relative duration-[1.2s] top-0 lg:h-auto h-[30vh]'>
                    <div className='lg:h-[60%] lg:w-auto h-full w-full relative'><Image src={gallery1} alt="brb" fill/></div>
                    <div className='lg:h-[40%] lg:w-auto h-full w-full relative'><Image src={gallery2} alt="brb" fill/></div>
                </div>
                <div ref={gallerySlide2} className='pt-1 flex-1 flex lg:flex-col gap-1 relative duration-[1.2s] delay-300 top-0'>
                    <div className='lg:h-[30%] lg:w-auto h-full w-full relative'><Image src={gallery3} alt="brb" fill/></div>
                    <div className='lg:h-[70%] lg:w-auto h-full w-full relative'><Image src={gallery4} alt="brb" fill/></div>
                </div>
                <div ref={gallerySlide3} className='pt-1 flex-1 flex lg:flex-col gap-1 relative duration-[1.2s] delay-500 top-0'>
                    <div className='lg:h-[40%] lg:w-auto h-full w-full relative'><Image src={gallery5} alt="brb" fill/></div>
                    <div className='lg:h-[60%] lg:w-auto h-full w-full relative'><Image src={gallery6} alt="brb" fill/></div>
                </div>
            </div>
            <div className='flex lg:gap-1 px-1 flex-shrink-0 w-full lg:flex-row flex-col lg:absolute lg:top-[-100%] h-full'>
                <div ref={gallerySlide4} className='pt-1 flex-1 flex lg:flex-col gap-1 relative duration-[1.2s] top-0 lg:h-auto h-[30vh]'>
                    <div className='lg:h-[60%] lg:w-auto h-full w-full relative'><Image src={gallery7} alt="brb" fill/></div>
                    <div className='lg:h-[40%] lg:w-auto h-full w-full relative'><Image src={gallery8} alt="brb" fill/></div>
                </div>
                <div ref={gallerySlide5} className='pt-1 flex-1 flex lg:flex-col gap-1 relative duration-[1.2s] delay-300 top-0'>
                    <div className='lg:h-[30%] lg:w-auto h-full w-full relative'><Image src={gallery9} alt="brb" fill/></div>
                    <div className='lg:h-[70%] lg:w-auto h-full w-full relative'><Image src={gallery10} alt="brb" fill/></div>
                </div>
                <div ref={gallerySlide6} className='pt-1 flex-1 flex lg:flex-col gap-1 relative duration-[1.2s] delay-500 top-0'>
                    <div className='lg:h-[40%] lg:w-auto h-full w-full relative'><Image src={gallery11} alt="brb" fill/></div>
                    <div className='lg:h-[60%] lg:w-auto h-full w-full relative'><Image src={gallery12} alt="brb" fill/></div>
                </div>
            </div>
        </div>
        <div className='p__bwrapper w-full absolute bottom-0 backdrop-blur-sm h-8'></div>
    </div>
  )
}

export default Gallery