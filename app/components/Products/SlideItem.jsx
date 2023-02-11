import React from 'react'
import Image from 'next/image'
import product1 from '../../images/Products/product_1.webp'
import product2 from '../../images/Products/product_2.webp'
import product3 from '../../images/Products/product_3.webp'
import product4 from '../../images/Products/product_4.webp'
import product5 from '../../images/Products/product_5.webp'
import product6 from '../../images/Products/product_6.webp'
const productImages = [product1, product2, product3, product4, product5, product6]

const SlideItem = ({obj, index, refFunction, touchStart, touchEnd, touchMove, mouseOver, canClick, cameFromLeft, left, productsDescription, productsPrices}) => {
  return (
    // image draggable = false onDragStart={(e) => e.preventDefault()}
    <div ref={refFunction} className={`lg:w-[30vw] w-[85vw] max-h-[70vh] overflow-y-auto overflow-x-hidden flex-shrink-0 border-r border-black ${index == 1 && 'bg-white'} ${index == 3 && 'bg-white'}`} 
            onTouchStart={(e) => touchStart(e)} onTouchEnd={() => touchEnd()} onTouchMove={(e) => touchMove(e)} 
            onMouseOver={canClick ? mouseOver : undefined } onMouseEnter={() => left ? cameFromLeft.current = true : undefined } 
            onMouseLeave={() => left ? setTimeout(() => cameFromLeft.current = false, 200): undefined }>
        <div className='w-[55%] aspect-square relative mt-11'>
            <Image src={productImages[index]} fill alt="product"/>
            <div className='absolute left-[100%] vertical bottom-0 flex h-full'>
                <div className='flex-grow w-[1px] mx-auto bg-black mt-6 mb-2'></div>
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
        </div>
        <h3 className=' ml-4 text-xl tracking-wide font-[Montserrat] font-medium'>{obj}</h3>
        <div className='h-[2px] mx-6 bg-black w-[100%]'></div>
            <h3 className='ml-6 font-medium text-lg mb-1 font-[Montserrat]'>{productsPrices[index]}</h3>
            <p className='text-sm font-medium mb-4 pl-6 pr-8 font-[Montserrat] text-zinc-800'>
                {productsDescription[index]}
            </p>
    </div>
  )
}

export default SlideItem