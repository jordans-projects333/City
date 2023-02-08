'use client'
import Header from "./components/Header"
import Home from "./components/Home/Home"
import Services from "./components/Services/Services"
import Products from "./components/Products/Products"
import Footer from "./components/Footer"
import { useRef } from "react"

export default function App() {
  let slider = useRef(null)
  let imageWrapper = useRef(null)
  let originalPosition = useRef(null)
  let currentPosition = useRef(null)
  const elementsStart = (e) => {
    originalPosition.current = [e.touches[0].clientX, e.touches[0].clientY]
    currentPosition.current = [e.touches[0].clientX, e.touches[0].clientY]
  }
  const elementsMove = (e) => {
    // service image paralax
    // if(servicesInView){
    //   requestAnimationFrame(() => {
    //     console.log('eeaaaa')
    //     // serviceImage2.current.style.transfrom = `translate(50% ${50+(servicesPage.current.getBoundingClientRect().top/window.innerHeight * 10)}%)`
    //     serviceImage2.current.style.transform = `translate(-50%, ${-50 + (servicesPage.current.getBoundingClientRect().top/window.innerHeight * 40)}%) scale(1.4)`
    //   })
    // }
    // moving elements
    currentPosition.current = [e.touches[0].clientX, e.touches[0].clientY]
    let distancey = (currentPosition.current[1] - originalPosition.current[1])
    if(distancey < 0)distancey = distancey*2
    if(distancey >= -50 && distancey <= 50){
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
      <Header/>
      <div ref={slider} className="relative top-0 left-0 overflow-x-hidden" onTouchStart={(e) => elementsStart(e)} onTouchMove={(e) => elementsMove(e)} onTouchEnd={() => elementsEnd()}>
        <Home imageWrapper={imageWrapper} originalPosition={originalPosition} currentPosition={currentPosition}/>
        <Services slider={slider}/>
        <Products/>
        <Footer/>
      </div>
    </>
  )
}
