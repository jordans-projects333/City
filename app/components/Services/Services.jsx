'use client'
import { useRef, useEffect } from "react"
import Showcase from "./Showcase"
import ServiceTab from "./ServiceTab"
import service_Image2 from '../../images/services_2.jpg'
import service_Image1 from '../../images/services_1.webp'
import service_Image3 from '../../images/services_3.jpg'

const Services = ({slider}) => {
    let serviceImageWrapper1 = useRef(null)
    let serviceImageWrapper2 = useRef(null)
    let serviceImageWrapper3 = useRef(null)
    let serviceImageWrapper4 = useRef(null)
    let serviceImage1 = useRef(null)
    let serviceImage2 = useRef(null)
    let serviceImage3 = useRef(null)
    let serviceImage4 = useRef(null)
    let showcase = useRef(null)
    let servicesPage = useRef(null)
    let throttle = useRef(true)
    const servicePageScroll = () => {
        if(throttle.current){
            throttle.current = false
            requestAnimationFrame(() => {
                serviceImage1.current.style.transform = `translate(-50%, ${-50 + (servicesPage.current.getBoundingClientRect().top/window.innerHeight * 25)}%)`
                serviceImage2.current.style.transform = `translate(-50%, ${-50 + (servicesPage.current.getBoundingClientRect().top/window.innerHeight * 25)}%)`
                serviceImage3.current.style.transform = `translate(-50%, ${-50 + (servicesPage.current.getBoundingClientRect().top/window.innerHeight * 25)}%)`
                serviceImage4.current.style.transform = `translate(-50%, ${-50 + (servicesPage.current.getBoundingClientRect().top/window.innerHeight * 25)}%)`
            })
            setTimeout(function () {   
                throttle.current = true;          
            }, 100);
        }
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
    const showcaseIn = (e) => {
        try {
            document.createEvent('TouchEvent')
            alert('movile')
        } catch (error) {
            alert('pc')
        }
        requestAnimationFrame(() => {
            showcase.current.style.left = 0
            showcase.current.style.transitionDuration = '600ms'
            slider.current.style.transitionDuration = '800ms'
            slider.current.style.left = '-100%'
        })
    }
    return (
        <>
            <Showcase showcase={showcase} slider={slider}/>
            <div ref={servicesPage} className="lvh relative">
                <h2 className="absolute top-[0%]">services</h2>
                <div className="flex flex-col h-full pt-16 px-2 pb-2 gap-2 lg:flex-row lg:gap-8 lg:p-8 lg:pt-12">
                    <ServiceTab imageRef={serviceImage1} src={service_Image1} wrapperRef={serviceImageWrapper1} showcaseIn={showcaseIn}/>
                    <ServiceTab imageRef={serviceImage2} src={service_Image2} wrapperRef={serviceImageWrapper2} showcaseIn={showcaseIn}/>
                    <ServiceTab imageRef={serviceImage3} src={service_Image3} wrapperRef={serviceImageWrapper3} showcaseIn={showcaseIn}/>
                    <ServiceTab imageRef={serviceImage4} src={service_Image3} wrapperRef={serviceImageWrapper4} showcaseIn={showcaseIn}/>
                </div>
            </div>
        </>
    )
  }
  
  export default Services