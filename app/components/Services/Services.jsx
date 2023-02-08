'use client'
import { useRef, useEffect } from "react"
import Showcase from "./Showcase"
import Image from "next/image"
import service_Image2 from '../../images/services_2.jpg'

const Services = ({slider, servicesInView, serviceImage2, servicesPage}) => {
    let serviceImageWrapper2 = useRef(null)
    let showcase = useRef(null)
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    servicesInView.current = true
                }else{
                    servicesInView.current = false
                }
            })
        })
        observer.observe(serviceImage2.current)
    }, [serviceImage2])
    const showcaseIn = () => {
        console.log(showcase.current)
        requestAnimationFrame(() => {
            showcase.current.style.left = 0
            slider.current.style.transitionDuration = '800ms'
            slider.current.style.left = '-100%'
        })
    }
    return (
        <>
            <Showcase showcase={showcase} slider={slider}/>
            <div ref={servicesPage} className="svh relative border-2 border-purple-500">
                <h2 className="absolute top-[0%]">services</h2>
                <div className="flex flex-col h-full pt-16">
                    <div className="flex-1 border border-emerald-500" onClick={() => showcaseIn()}></div>
                    <div ref={serviceImageWrapper2} className="flex-1 relative overflow-hidden" onClick={() => showcaseIn()}>
                        <Image ref={serviceImage2} src={service_Image2} alt="hair care" className='relative left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] w-[100%] h-auto scale-[1.4]'/>
                    </div>
                    <div className="flex-1 border border-emerald-500"></div>
                </div>
            </div>
        </>
    )
  }
  
  export default Services