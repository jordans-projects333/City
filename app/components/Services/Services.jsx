'use client'
import { useRef, useEffect } from "react"
import Showcase from "./Showcase"
import Image from "next/image"
import service_Image2 from '../../images/services_2.jpg'
import service_Image1 from '../../images/services_1.webp'
import service_Image3 from '../../images/services_3.jpg'

const Services = ({slider}) => {
    let serviceImageWrapper1 = useRef(null)
    let serviceImageWrapper2 = useRef(null)
    let serviceImageWrapper3 = useRef(null)
    let serviceImage1 = useRef(null)
    let serviceImage2 = useRef(null)
    let serviceImage3 = useRef(null)
    let showcase = useRef(null)
    let servicesPage = useRef(null)
    const servicePageScroll = () => {
        requestAnimationFrame(() => {
            serviceImage1.current.style.transform = `translate(-50%, ${-50 + (servicesPage.current.getBoundingClientRect().top/window.innerHeight * 25)}%)`
            serviceImage2.current.style.transform = `translate(-50%, ${-50 + (servicesPage.current.getBoundingClientRect().top/window.innerHeight * 25)}%)`
            serviceImage3.current.style.transform = `translate(-50%, ${-50 + (servicesPage.current.getBoundingClientRect().top/window.innerHeight * 25)}%)`
        })
    }
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    window.addEventListener('scroll', servicePageScroll)
                }else{
                    window.removeEventListener('scroll', servicePageScroll)
                }
            })
        })
        observer.observe(servicesPage.current)
    }, [servicesPage])
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
            <div ref={servicesPage} className="svh relative">
                <h2 className="absolute top-[0%]">services</h2>
                <div className="flex flex-col h-full pt-16 px-2 gap-2">
                    <div ref={serviceImageWrapper1} className="flex-1 relative overflow-hidden" onClick={() => showcaseIn()}>
                        <Image ref={serviceImage1} src={service_Image1} alt="hair care" className='relative duration-300 left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] w-[100%] h-[150%]'/>
                    </div>
                    <div ref={serviceImageWrapper2} className="flex-1 relative overflow-hidden" onClick={() => showcaseIn()}>
                        <Image ref={serviceImage2} src={service_Image2} alt="hair care" className='relative duration-300 left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] w-[100%] h-[150%]'/>
                    </div>
                    <div ref={serviceImageWrapper3} className="flex-1 relative overflow-hidden" onClick={() => showcaseIn()}>
                        <Image ref={serviceImage3} src={service_Image3} alt="hair care" className='relative duration-300 left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] w-[100%] h-[150%]'/>
                    </div>
                </div>
            </div>
        </>
    )
  }
  
  export default Services