'use client'
import React, { useEffect, useRef } from 'react'
import SlideItem from './SlideItem'
import Footer from '../Footer'
const productTitles = ['BeautyWorks Nourishing Mask', 'Olaplex Bundle', 'Beauty Works Argon Oil', 'Beauty Works 10-in-1 Miracle Spray', 'Beauty Works Pearl Nourishing DUO', 'Beauty Works Anti Yellow Shampoo']
const productPrices = ['£15.00','£70.00','£10.00','£15.00','£15.00','£10.00']
const productsDescription = [
    'Beauty Works Nourishing Argan Oil Mask is specifically formulated to deeply nourish and restructure all hair types. Improve your hair texture and shine in just 10 Minutes with our super nourishing formula. Using a combination of organic Argan Oil and Milk Protein, the renowned properties of Keratin will ensure each strand of hair is left feeling revitalised and nourished, enhancing the hairs body and tone. Our formula acts as a deep conditioning treatment designed to repair hair, this creamy formula helps to moisturise strands and ensure they are soft and shiny. In a heavier concentration than normal conditioners. You can leave a hair mask in for an extended period of time, from 5 minutes to overnight depending on the health of your hair or hair extensions. Use weekly to restore nourishment to hair extensions',
    'Olaplex Hero Bundle has you covered with three intensive strengthening treatments that work together to cleanse, nourish, fortify and protect your mane. Combining a shampoo and conditioner duo with a reparative treatment, all crafted with high-performance ingredients and technology, the trio promise to leave your hair vibrant, shiny, manageable and resilient to external damaging factors.\n\nSuitable for all hair types.\nFree from parabens, sulphates and phosphates.\nVegan. Cruelty-free.\nMade in the USA.\n \nThe Set Contains:\nNo.3 Hair Perfector (100ml)\n An at-home bond builder that utilises the same active ingredient found in all professional Olaplex products. Suitable for all hair types, the innovative formula works on a molecular level to revitalise and regenerate dry, damaged strands that have been broken due to chemical, thermal and mechanical effects. Ideal for weekly use in between salon services to maintain strong, healthy-looking hair.\n\n No.4 Bond Maintenance™ Shampoo (250ml)\nA resilience-boosting hair cleanser formulated with Olaplex’s patented technology that finds and re-links broken disulphide bonds in the hair, repairing damage while strengthening the hair structure. Helping to increase moisture levels for improved elasticity, the nourishing shampoo preserves the quality and longevity of colour to prevent fading and oxidisation whilst gently removing the build-up of dirt, excess oils and hair products to leave your hair clean, silky soft and glossy.\n\nNo.5 Bond Maintenance™ Conditioner (250ml)\nA rehydrating and bond-repairing treatment also formulated with the same patented technology as the shampoo. Ideal for those with coloured or damaged hair types thanks to its colour-preserving properties, it provides a burst of much needed hydration for a glossy shine. Effectively detangling and helping to make tresses more manageable, the silky textured fluid hydrates and strengthens, while working to repair the damage caused by colouring and styling. Locks are left smoother, glossier and much healthier.',
    'The rejuvenating treatment is formulated with a blend of the finest Argan oils to deeply nourish hair and leave it healthy looking with ultimate shine. Fully nourish extensions and use daily on wet or dry hair, tame frizz and flyways, repairing split ends, and restoring mirror-like shine. Simply apply on towel-dried hair to detangle and improve manageability on extensions and natural hair types. Argan oil is an age-old beauty secret that has many uses, helping to hydrate and soften your hair. With its high content of antioxidants, essential fatty acids, and vitamin E, the benefits of argan oil naturally help increase hairs elasticity and consistently restore shine to dull, lifeless hair. Beauty Works Argan Oil in 90ml formula is 100% vegan friendly our natural ingredients deliver soft manageable hair.',
    'Treat your hair to Beauty Works Ten-in-One Miracle Spray, a multi-tasking hair treatment that works to nourish, repair and protect your locks during heat styling. Fortified with argan and macadamia, the innovative formula replenishes lost oils in the hair and helps to eliminate frizz, restore mirror-like shine and prevent split ends. This haircare essential is formulated to maintain, protect and restore the health of your hair in one simply spray.',
    'Beauty Works Pearl Nourishing Duo 250ml Sulphate Free. Treat hair and hair extensions to Beauty Works Argan Oil Pearl Nourishing Shampoo and Conditioner Duo set. Maintain healthy hair extensions with the Beauty Works essential haircare, leave hair feeling revitalised, full of body and shine with a selection of hair care specifically formulated with essential ingredients that have been developed to expand the lifespan and performance of your hair extensions.',
    'Beauty Works Anti-Yellow Shampoo 200ml, neutralises yellow & brassy tones to reduce the appearance of discolouration, whilst giving shine to dull hair. Beauty Works Anti Yellow Shampoo formula is 100% vegan friendly our natural ingredients deliver soft manageable hair.'
]

const Products = () => {
    let productPage = useRef(null)
    let throttle = useRef(true)
    let productPageTitle = useRef(null)
    let allSlideItems = useRef([])
    let sliderIndex = useRef([])
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
        try {
            document.createEvent('TouchEvent')
        } catch (error) {
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
    }
    const setPositionByIndex = () => {
        console.log('triggered')
        console.log('index', currentIndex.current)
        console.log('before', currentTranslation.current)
        currentTranslation.current = currentIndex.current * -window.innerWidth * 0.85
        console.log('after', currentTranslation.current)
        prevTranslation.current = currentTranslation.current
        console.log('prev', prevTranslation.current)
        slider.current.style.transform = `translateX(${currentTranslation.current}px)`
        productPageTitle.current.style.transitionDuration = '150ms'
        productPageTitle.current.style.opacity = 0
        if(currentIndex.current != 1 || currentIndex != 5)sliderIndex.current[currentIndex.current].style.opacity = 0
        setTimeout(() => {
            sliderIndex.current[currentIndex.current].style.transitionDuration = '300ms'
            sliderIndex.current[currentIndex.current].style.opacity = 1
            productPageTitle.current.style.transitionDuration = '500ms'
            productPageTitle.current.style.opacity = 1
        }, 300)
    }
    const touchStart = (e) => {
        startPos.current = e.touches[0].clientX
        // console.log(4)
    }
    const touchMove = (e) => {
        console.log('what2')
        isDragging.current = true
        if(throttle.current){
            throttle.current = false
            currentTranslation.current = prevTranslation.current + e.touches[0].clientX - startPos.current
            let swipeDistance = (currentTranslation.current + (window.innerWidth * currentIndex.current * .85))
            if(swipeDistance > -80 && swipeDistance < 0)requestAnimationFrame(animation)
            setTimeout(() => {
                throttle.current = true
            },150)
        }

    }
    const touchEnd = () => {
        isDragging.current = false
        let movedBy = currentTranslation.current - prevTranslation.current
        if(movedBy < -15 && currentIndex.current < allSlideItems.current.length -1){
            currentIndex.current++
            setPositionByIndex()
        }else if(movedBy > 15 && currentIndex.current > 0){
            currentIndex.current--
            setPositionByIndex()
        }else{
            currentTranslation.current = currentIndex.current * -window.innerWidth * 0.85
            prevTranslation.current = currentTranslation.current
            slider.current.style.transform = `translateX(${currentTranslation.current}px)`
        }
    }
    const addToSlideItems = (el) => {
        if(el && !allSlideItems.current.includes(el)){
            allSlideItems.current.push(el)
        }
    }
    const addToSliderIndex = (el) => {
        if(el && !sliderIndex.current.includes(el)){
            sliderIndex.current.push(el)
        }
    }
    const slideClicked = (i) => {
        console.log('index of clicked', i)
        if(i == currentIndex.current +1){
            currentIndex.current++
            setPositionByIndex()
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
    <div ref={productPage} className='lvh relative overflow-x-hidden lg:overflow-x-auto flex flex-col'>
        <h3 ref={productPageTitle} className=" text-7xl whitespace-nowrap ml-4 crab absolute top-0 font-[PlayfairDisplay] font-medium">Products</h3>
        <div ref={slideContainer} className="w-[100vw] lg:w-[auto] flex-grow">
            <div ref={slider} className='flex duration-500 h-full'>
           
                {productTitles.map((object, i) => {
                    if(i === 2)return <SlideItem obj={object} key={i} index={i} refFunction={addToSlideItems} sliderIndex={addToSliderIndex} touchStart={touchStart} touchEnd={touchEnd} touchMove={touchMove} mouseOver={slideBack} canClick={true} cameFromLeft={cameFromLeft} left={true} productsDescription={productsDescription} productsPrices={productPrices} slideClicked={slideClicked}/>
                    if(i === 3)return <SlideItem obj={object} key={i} index={i} refFunction={addToSlideItems} sliderIndex={addToSliderIndex} touchStart={touchStart} touchEnd={touchEnd} touchMove={touchMove} mouseOver={slideForward} canClick={true} left={false} productsDescription={productsDescription} productsPrices={productPrices} slideClicked={slideClicked}/>
                    return <SlideItem obj={object} key={i} index={i} refFunction={addToSlideItems} sliderIndex={addToSliderIndex} touchStart={touchStart} touchEnd={touchEnd} touchMove={touchMove} canClick={false} left={false} productsDescription={productsDescription} productsPrices={productPrices} slideClicked={slideClicked}/>
                })}
            </div>
        </div>
        <Footer/>
    </div>
    )
}

export default Products