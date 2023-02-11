import React from 'react'
import Image from 'next/image'
import product1 from '../../images/Products/product_1.webp'

const SlideItem = ({obj, refFunction, touchStart, touchEnd, touchMove, mouseOver, canClick, cameFromLeft, left}) => {
  return (
    // image draggable = false onDragStart={(e) => e.preventDefault()}
    <div ref={refFunction} className='w-[100vw] lg:w-[30vw] flex-shrink-0 border-r border-black' 
            onTouchStart={(e) => touchStart(e)} onTouchEnd={() => touchEnd()} onTouchMove={(e) => touchMove(e)} 
            onMouseOver={canClick ? mouseOver : undefined } onMouseEnter={() => left ? cameFromLeft.current = true : undefined } 
            onMouseLeave={() => left ? setTimeout(() => cameFromLeft.current = false, 200): undefined }>
        <div className='w-[55%] aspect-square relative mt-11'>
            <Image src={product1} fill alt="product"/>
            <div className='absolute left-[100%] vertical bottom-0 flex h-full'>
                <div className='flex-grow w-[1px] mx-auto bg-black mt-5 mb-2'></div>
                <h3 className='ml-2 mb-4'>Purchase in store</h3>
            </div>
        </div>
        <div className='flex justify-center items-center gap-4 ml-8 mb-3 mt-4'>
            <div className='bg-black h-[.5rem] w-[.5rem] rounded-full'></div>
            <div className='border-black border-[1px] h-[.5rem] w-[.5rem] rounded-full'></div>
            <div className='border-black border-[1px] h-[.5rem] w-[.5rem] rounded-full'></div>
            <div className='border-black border-[1px] h-[.5rem] w-[.5rem] rounded-full'></div>
            <div className='border-black border-[1px] h-[.5rem] w-[.5rem] rounded-full'></div>
            <div className='border-black border-[1px] h-[.5rem] w-[.5rem] rounded-full'></div>
            <div className='flex'>
                <div className='w-[3rem] h-[1px] my-auto bg-black'></div>
                <h2 className='mb-[4px]'>&gt;</h2>
            </div>
        </div>
        <h3 className=' ml-4 text-xl tracking-wide font-[Montserrat] font-medium'>BeautyWorks Nourishing Mask</h3>
            <div className='h-[2px] ml-6 bg-black mb-3 w-[50%]'></div>
            <p className='text-sm font-medium  pl-6 pr-8 max-h-[15vh] overflow-y-hidden font-[Montserrat] text-zinc-800'>
            Beauty Works Pearl Nourishing Argan Oil Mask is specifically formulated to deeply nourish and restructure all hair types. Improve your hair texture and shine in just 10 Minutes with our super nourishing formula. Using a combination of organic Argan Oil and Milk Protein, the renowned properties of Keratin will ensure each strand of hair is left feeling revitalised and nourished, enhancing the hairs body and tone.

Our formula acts as a deep conditioning treatment designed to repair hair, this creamy formula helps to moisturise strands and ensure they're soft and shiny. In a heavier concentration than normal conditioners. You can leave a hair mask in for an extended period of time, from 5 minutes to overnight depending on the health of your hair or hair extensions. Use weekly to restore nourishment to hair extensions
            </p>
    </div>
  )
}

export default SlideItem