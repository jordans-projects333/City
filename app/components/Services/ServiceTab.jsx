'use client'
import React from 'react'
import Image from 'next/image'

const serviceTab = ({showcaseIn, imageRef, src, wrapperRef}) => {
  return (
    <div className="flex-1 lg:h-[100%] relative">
        <div ref={wrapperRef} className="relative overflow-hidden h-full lg:h-[70%]" onTouchStart={(e) => showcaseIn(e)} onMouseDown={(e) => showcaseIn(e)}>
            <Image ref={imageRef} src={src} alt="hair care" className='absolute duration-300 left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] w-[100%] h-[150%]'/>
        </div>
        <div className='hidden lg:flex absolute bottom-0 justify-center w-full'>
            <div className='border border-black px-4 py-1 mb-2'>See Treatments</div>
        </div>
    </div>
  )
}

export default serviceTab