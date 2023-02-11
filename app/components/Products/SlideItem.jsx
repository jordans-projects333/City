import React from 'react'
import Image from 'next/image'
import product1 from '../../images/Products/product_1.webp'
import product2 from '../../images/Products/product_2.webp'
import product3 from '../../images/Products/product_3.webp'
import product4 from '../../images/Products/product_4.webp'
import product5 from '../../images/Products/product_5.webp'
import product6 from '../../images/Products/product_6.webp'
const productImages = [product1, product2, product3, product4, product5, product6]

const SlideItem = ({obj, index, refFunction, touchStart, touchEnd, touchMove, mouseOver, canClick, cameFromLeft, left, productsDescription, productsPrices, sliderIndex, slideClicked}) => {
  return (
    // image draggable = false onDragStart={(e) => e.preventDefault()}
    <div ref={refFunction} className={`lg:w-[30vw] ${index == 5 ? "w-[100vw]" : 'w-[85vw]'} flex max-h-full flex-col flex-shrink-0 border-r border-black ${index == 0 && 'border-l border-black'} ${index == 5 && 'border-r border-black'}`} 
            onTouchStart={(e) => touchStart(e)} onTouchEnd={() => touchEnd()} onTouchMove={(e) => touchMove(e)} 
            onMouseOver={canClick ? mouseOver : undefined } onMouseEnter={() => left ? cameFromLeft.current = true : undefined } 
            onMouseLeave={() => left ? setTimeout(() => cameFromLeft.current = false, 200): undefined } onClick={() => slideClicked(index)}>
        <div className='w-[55%] aspect-square relative mt-11'>
            <Image src={productImages[index]} fill alt="product"/>
            <div className='absolute left-[100%] vertical bottom-0 flex h-full'>
                <div className='flex-grow w-[1px] mx-auto bg-black mt-6 mb-2'></div>
                <h3 className='ml-2 mb-4'>Purchase in store</h3>
            </div>
        </div>
        <div ref={sliderIndex} className='flex justify-center items-center gap-4 ml-8 mb-3 mt-4'>
            <div className={`${(index == 0 ? 'bg-black' : 'border-black border-[1px]')} h-[.5rem] w-[.5rem] rounded-full`}></div>
            <div className={`${(index == 1 ? 'bg-black' : 'border-black border-[1px]')} h-[.5rem] w-[.5rem] rounded-full`}></div>
            <div className={`${(index == 2 ? 'bg-black' : 'border-black border-[1px]')} h-[.5rem] w-[.5rem] rounded-full`}></div>
            <div className={`${(index == 3 ? 'bg-black' : 'border-black border-[1px]')} h-[.5rem] w-[.5rem] rounded-full`}></div>
            <div className={`${(index == 4 ? 'bg-black' : 'border-black border-[1px]')} h-[.5rem] w-[.5rem] rounded-full`}></div>
            <div className={`${(index == 5 ? 'bg-black' : 'border-black border-[1px]')} h-[.5rem] w-[.5rem] rounded-full`}></div>
        </div>
        <h3 className=' ml-4 text-xl tracking-wide font-[Montserrat] font-medium'>{obj}</h3>
        <div className='h-[2px] mx-6 bg-black w-[85%] '></div>
            <h3 className='ml-6 font-medium text-lg font-[Montserrat]'>{productsPrices[index]}</h3>
            <div className=' w-full flex-grow relative mb-4'>
                <p className='text-sm font-medium pb-8 pt-3 pl-6 pr-8 font-[Montserrat] absolute top-0 h-full text-zinc-800 overflow-x-hidden'>
                    {productsDescription[index]}
                </p>
                <div className='absolute top-[-4px] p__wrapper h-4 ml-6 left-0 right-[2rem]'></div>
                <div className='absolute bottom-[-.25rem] p__bwrapper h-5 ml-6 left-0 right-[2rem]'></div>
            </div>
        </div>
  )
}

export default SlideItem