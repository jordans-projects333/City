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
  const elementsEnd = () => {
    imageWrapper.current.style.transform = `translateY(0px) translateX(-50%)`
  }
  return (
    <>
      <Header hamburger={hamburger} setHamburger={setHamburger}/>
      <div ref={slider} className="relative top-0 left-0 overflow-x-hidden" onTouchStart={(e) => elementsStart(e)} onTouchMove={(e) => elementsMove(e)} onTouchEnd={() => elementsEnd()}>
        <Home imageWrapper={imageWrapper} originalPosition={originalPosition} currentPosition={currentPosition} serviceSnap={serviceSnap}/>
        <Services slider={slider} originalPosition={originalPosition} currentPosition={currentPosition} serviceSnap={serviceSnap} productSnap={productSnap}/>
        <Products originalPosition={originalPosition} currentPosition={currentPosition} productSnap={productSnap}/>
      </div>
    </>
  )
}
