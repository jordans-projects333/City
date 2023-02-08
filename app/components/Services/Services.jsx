'use client'
import { useRef } from "react"
import Showcase from "./Showcase"

const Services = ({slider}) => {
    let showcase = useRef(null)
    const showcaseIn = () => {
        console.log(showcase.current)
        requestAnimationFrame(() => {
            showcase.current.style.left = 0
            slider.current.style.left = '-100%'
        })
    }
    return (
        <>
            <Showcase showcase={showcase} slider={slider}/>
            <div className="svh relative border-2 border-purple-500">
                <h2 className="absolute top-[0%]">services</h2>
                <div className="flex flex-col h-full pt-16">
                    <div className="flex-1 border border-emerald-500" onClick={() => showcaseIn()}></div>
                    <div className="flex-1 border border-emerald-500"></div>
                    <div className="flex-1 border border-emerald-500"></div>
                </div>
            </div>
        </>
    )
  }
  
  export default Services