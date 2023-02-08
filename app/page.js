'use client'
import Header from "./components/Header"
import Home from "./components/Home/Home"
import Services from "./components/Services/Services"
import Products from "./components/Products/Products"
import Footer from "./components/Footer"
import { useRef } from "react"

export default function App() {
  let slider = useRef(null)
  return (
    <>
      <Header/>
      <div ref={slider} className="duration-700 absolute top-0 left-0">
        <Home/>
        <Services slider={slider}/>
        <Products/>
        <Footer/>
      </div>
    </>
  )
}
