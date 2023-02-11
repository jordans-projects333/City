'use client'
import React, { useEffect, useRef } from 'react'
import SlideItem from './SlideItem'
import Footer from '../Footer'
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
    <div ref={productPage} className='lvh relative overflow-x-hidden lg:overflow-x-auto flex flex-col'>
        <h3 className=" text-7xl whitespace-nowrap ml-4 crab absolute top-0 font-[PlayfairDisplay] font-medium ">Products</h3>
        <div ref={slideContainer} className="w-[100vw] lg:w-[auto] flex-grow">
            <div ref={slider} className='flex duration-500'>
           
                {productTitles.map((object, i) => {
                    if(i === 2)return <SlideItem obj={'pink'} key={i} index={i} refFunction={addToSlideItems} touchStart={touchStart} touchEnd={touchEnd} touchMove={touchMove} mouseOver={slideBack} canClick={true} cameFromLeft={cameFromLeft} left={true}/>
                    if(i === 3)return <SlideItem obj={object} key={i} index={i} refFunction={addToSlideItems} touchStart={touchStart} touchEnd={touchEnd} touchMove={touchMove} mouseOver={slideForward} canClick={true} left={false}/>
                    return <SlideItem obj={object} key={i} index={i} refFunction={addToSlideItems} touchStart={touchStart} touchEnd={touchEnd} touchMove={touchMove} canClick={false} left={false}/>
                })}
            </div>
        </div>
        <Footer/>
    </div>
    )
}

export default Products