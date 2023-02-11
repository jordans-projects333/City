'use client'
import React, { useEffect, useRef } from 'react'
import SlideItem from './SlideItem'
import Footer from '../Footer'
const productTitles = ['BeautyWorks Nourishing Mask', 'Olaplex Bundle', 'product3', 'product4', 'product5', 'product6']
const productPrices = ['£15.00','£70.00','','','','']
const productsDescription = [
    'Beauty Works Pearl Nourishing Argan Oil Mask is specifically formulated to deeply nourish and restructure all hair types. Improve your hair texture and shine in just 10 Minutes with our super nourishing formula. Using a combination of organic Argan Oil and Milk Protein, the renowned properties of Keratin will ensure each strand of hair is left feeling revitalised and nourished, enhancing the hairs body and tone. Our formula acts as a deep conditioning treatment designed to repair hair, this creamy formula helps to moisturise strands and ensure they are soft and shiny. In a heavier concentration than normal conditioners. You can leave a hair mask in for an extended period of time, from 5 minutes to overnight depending on the health of your hair or hair extensions. Use weekly to restore nourishment to hair extensions',
    'Olaplex Hero Bundle has you covered with three intensive strengthening treatments that work together to cleanse, nourish, fortify and protect your mane. Combining a shampoo and conditioner duo with a reparative treatment, all crafted with high-performance ingredients and technology, the trio promise to leave your hair vibrant, shiny, manageable and resilient to external damaging factors.<br>Suitable for all hair types.<br>Free from parabens, sulphates and phosphates.<br>Vegan. Cruelty-free.<br>Made in the USA.<br>The Set Contains:<br>>No.3 Hair Perfector (100ml)<br> An at-home bond builder that utilises the same active ingredient found in all professional Olaplex products. Suitable for all hair types, the innovative formula works on a molecular level to revitalise and regenerate dry, damaged strands that have been broken due to chemical, thermal and mechanical effects. Ideal for weekly use in between salon services to maintain strong, healthy-looking hair.<br> No.4 Bond Maintenance™ Shampoo (250ml)<br>A resilience-boosting hair cleanser formulated with Olaplex’s patented technology that finds and re-links broken disulphide bonds in the hair, repairing damage while strengthening the hair structure. Helping to increase moisture levels for improved elasticity, the nourishing shampoo preserves the quality and longevity of colour to prevent fading and oxidisation whilst gently removing the build-up of dirt, excess oils and hair products to leave your hair clean, silky soft and glossy.<br>No.5 Bond Maintenance™ Conditioner (250ml)<br>A rehydrating and bond-repairing treatment also formulated with the same patented technology as the shampoo. Ideal for those with coloured or damaged hair types thanks to its colour-preserving properties, it provides a burst of much needed hydration for a glossy shine. Effectively detangling and helping to make tresses more manageable, the silky textured fluid hydrates and strengthens, while working to repair the damage caused by colouring and styling. Locks are left smoother, glossier and much healthier.',
    '',
    '',
    '',
    ''
]

const Products = () => {
    let productPage = useRef(null)
    let allSlideItems = useRef([])
    let slider = useRef(null)
    let slideContainer = useRef(null)
    let isDragging = useRef(false)
    let currentTranslation = useRef(0)
    let prevTranslation = useRef(0)
    let animationId = useRef(null)
    let currentIndex = useRef(0)
    let startPos = useRef(0)
    let cameFromLeft = useRef(false)
    // Hover slider
    const slideForward = () => {
        if(productPage.current.scrollLeft === 0 && cameFromLeft.current === true){
            let scrollAmount = 0
            const slideTimer = setInterval(function(){
                productPage.current.scrollLeft += 15;
                scrollAmount += 15
                if(scrollAmount > window.innerWidth){
                //   if(productPage.current.scrollLeft === (productPage.current.scrollWidth/2)){
                    window.clearInterval(slideTimer);
                }
            }, 1);
            }
        }
    const slideBack = () => {
        if( productPage.current.scrollLeft === productPage.current.scrollWidth - productPage.current.clientWidth){
            let slideTimer = setInterval(function(){
                productPage.current.scrollLeft -= 15;
                if(productPage.current.scrollLeft === 0){
                    window.clearInterval(slideTimer);
                }
            }, 1);
        }
    }
    // Swipe slider
    function animation() {
        slider.current.style.transform = `translateX(${currentTranslation.current}px)`
        if(isDragging.current) requestAnimationFrame(animation)
    }
    const setPositionByIndex = () => {
        currentTranslation.current = currentIndex.current * -window.innerWidth
        prevTranslation.current = currentTranslation.current
        slider.current.style.transform = `translateX(${currentTranslation.current}px)`
    }
    const touchStart = (e) => {
        isDragging.current = true
        startPos.current = e.touches[0].clientX
        animationId.current = requestAnimationFrame(animation)
    }
    const touchMove = (e) => {
        currentTranslation.current = prevTranslation.current + e.touches[0].clientX - startPos.current

    }
    const touchEnd = () => {
        isDragging.current = false
        cancelAnimationFrame(animationId.current)
        let movedBy = currentTranslation.current - prevTranslation.current
        if(movedBy < -50 && currentIndex.current < allSlideItems.current.length -1){
            currentIndex.current++
            setPositionByIndex()
        }else if(movedBy > 50 && currentIndex.current > 0){
            currentIndex.current--
            setPositionByIndex()
        }else{
            setPositionByIndex()
        }
    }
    const addToSlideItems = (el) => {
        if(el && !allSlideItems.current.includes(el)){
            allSlideItems.current.push(el)
        }
    }
    useEffect(() => {
        // disable context menu on hold
        window.oncontextmenu = (e) => {
            e.preventDefault()
            e.stopPropagation()
            return false
        }
    })
    return (
    <div ref={productPage} className='lvh relative overflow-x-hidden lg:overflow-x-auto flex flex-col h-[70lvh]'>
        <h3 className=" text-7xl whitespace-nowrap ml-4 crab absolute top-0 font-[PlayfairDisplay] font-medium ">Products</h3>
        <div ref={slideContainer} className="w-[100vw] lg:w-[auto] flex-grow">
            <div ref={slider} className='flex duration-500 h-full'>
           
                {productTitles.map((object, i) => {
                    if(i === 2)return <SlideItem obj={'pink'} key={i} index={i} refFunction={addToSlideItems} touchStart={touchStart} touchEnd={touchEnd} touchMove={touchMove} mouseOver={slideBack} canClick={true} cameFromLeft={cameFromLeft} left={true} productsDescription={productsDescription} productsPrices={productPrices}/>
                    if(i === 3)return <SlideItem obj={object} key={i} index={i} refFunction={addToSlideItems} touchStart={touchStart} touchEnd={touchEnd} touchMove={touchMove} mouseOver={slideForward} canClick={true} left={false} productsDescription={productsDescription} productsPrices={productPrices}/>
                    return <SlideItem obj={object} key={i} index={i} refFunction={addToSlideItems} touchStart={touchStart} touchEnd={touchEnd} touchMove={touchMove} canClick={false} left={false} productsDescription={productsDescription} productsPrices={productPrices}/>
                })}
            </div>
        </div>
        <Footer/>
    </div>
    )
}

export default Products