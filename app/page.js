'use client'
import Header from "./components/Header"
import Home from "./components/Home/Home"
import Services from "./components/Services/Services"
import Products from "./components/Products/Products"
import { useRef, useState } from "react"

export default function App() {
  const [hamburger, setHamburger] = useState(false)
  let slider = useRef(null)
  let imageWrapper = useRef(null)
  let originalPosition = useRef(null)
  let currentPosition = useRef(null)
  let productSnap = useRef(null)
  let serviceSnap = useRef(null)
  let homePage = useRef(null)
  let onGallery = useRef(false)
  const elementsStart = (e) => {
    originalPosition.current = [e.touches[0].clientX, e.touches[0].clientY]
    currentPosition.current = [e.touches[0].clientX, e.touches[0].clientY]
  }
  const elementsMove = (e) => {
    currentPosition.current = [e.touches[0].clientX, e.touches[0].clientY]
    let distancey = (currentPosition.current[1] - originalPosition.current[1])
    if(distancey < 0)distancey = distancey*2
    if(distancey >= -50 && distancey <= 0){
      requestAnimationFrame(() => {
        imageWrapper.current.style.transform = `translateY(${distancey}px) translateX(-50%)`
      })
    }
  }
  const homeSwipeRight = () => {
    let scrollAmount = 0
    onGallery.current = true
    const homeSlideTimer = setInterval(function(){
        homePage.current.scrollLeft += 15;
        scrollAmount += 15
        if(scrollAmount > window.innerWidth){
            window.clearInterval(homeSlideTimer);
        }
    }, 1);
  }
  const homeSwipeLeft = () => {
    console.log('PIG')
    onGallery.current = false
    let homeslideTimer2 = setInterval(function(){
      homePage.current.scrollLeft -= 15;
      if(homePage.current.scrollLeft === 0){
          window.clearInterval(homeslideTimer2);
      }
    }, 1);
  }
  const elementsEnd = () => {
    imageWrapper.current.style.transform = `translateY(0px) translateX(-50%)`
  }
  return (
    <>
      <Header hamburger={hamburger} setHamburger={setHamburger} productSnap={productSnap} serviceSnap={serviceSnap} homePage={homePage} homeSwipeRight={homeSwipeRight} homeSwipeLeft={homeSwipeLeft}/>
      <div ref={slider} className="relative top-0 left-0 overflow-x-hidden" onTouchStart={(e) => elementsStart(e)} onTouchMove={(e) => elementsMove(e)} onTouchEnd={() => elementsEnd()}>
        <Home imageWrapper={imageWrapper} originalPosition={originalPosition} currentPosition={currentPosition} serviceSnap={serviceSnap} homePage={homePage} onGallery={onGallery} homeSwipeRight={homeSwipeRight} homeSwipeLeft={homeSwipeLeft}/>
        <Services slider={slider} originalPosition={originalPosition} currentPosition={currentPosition} serviceSnap={serviceSnap} productSnap={productSnap}/>
        <Products originalPosition={originalPosition} currentPosition={currentPosition} productSnap={productSnap}/>
      </div>
    </>
  )
}
