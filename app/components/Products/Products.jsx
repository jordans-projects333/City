'use client'
import React, { useEffect, useRef } from 'react'
import SlideItem from './SlideItem'
const productTitles = ['product1', 'product2', 'product3', 'product4', 'product5', 'product6']

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
    // Hover slider
    const slideForward = () => {
        let scrollAmount = 0
          const slideTimer = setInterval(function(){
            productPage.current.scrollLeft += 15;
            scrollAmount += 15
            if(scrollAmount > window.innerWidth){
            //   if(productPage.current.scrollLeft === (productPage.current.scrollWidth/2)){
                console.log('yum')
                  window.clearInterval(slideTimer);
              }
          }, 1);
        }
    // const slideBack = () => {
    // let slideTimer = setInterval(function(){
    //     slider.current.scrollLeft -= 15;
    //     if(slider.current.scrollLeft === 0){
    //         window.clearInterval(slideTimer);
    //     }
    // }, 1);
    // }
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
        if(movedBy < -100 && currentIndex.current < allSlideItems.current.length -1){
            currentIndex.current++
            setPositionByIndex()
        }else if(movedBy > 100 && currentIndex.current > 0){
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
        if(isDragging.current === false){
            cancelAnimationFrame(animationId.current)
        }
        // disable context menu on hold
        // window.oncontextmenu = (e) => {
        //     e.preventDefault()
        //     e.stopPropagation()
        //     return false
        // }
    }, [isDragging.current])
    return (
    <div ref={productPage} className='lvh bg-purple-200 relative overflow-x-hidden md:overflow-x-auto md:bg-blue-100'>
        <div className='hidden md:block bg-purple-400/50 absolute right-0 h-[100%] w-[20vw] top-0' onMouseOver={() => slideForward()}></div>
        <h3 className=" text-7xl whitespace-nowrap mt-4 ml-4 crab top-0">Products</h3>
        <div ref={slideContainer} className="w-[100vw] lg:w-[auto]">
            <div ref={slider} className='flex duration-500'>
                {productTitles.map((object, i) => <SlideItem obj={object} key={i} index={i} refFunction={addToSlideItems} touchStart={touchStart} touchEnd={touchEnd} touchMove={touchMove}/>)}
            </div>
        </div>
    </div>
    )
}

export default Products