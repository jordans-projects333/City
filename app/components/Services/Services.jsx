'use client'
import { useRef, useEffect, useState } from "react"
import Hair from "./Hair"
import Nails from "./Nails"
import Body from "./Body"
import Face from "./Face"
import Showcase from "./Showcase"
import ServiceTab from "./ServiceTab"
import service_Image2 from '../../images/services_2.jpg'
import service_Image1 from '../../images/services_1.webp'
import service_Image3 from '../../images/services_3.jpg'

const Services = ({slider}) => {
    const [treatments, SetTreatents] = useState(null)
    let serviceImageWrapper1 = useRef(null)
    let serviceImageWrapper2 = useRef(null)
    let serviceImageWrapper3 = useRef(null)
    let serviceImageWrapper4 = useRef(null)
    let serviceImage1 = useRef(null)
    let serviceImage2 = useRef(null)
    let serviceImage3 = useRef(null)
    let serviceImage4 = useRef(null)
    let serviceTabsWrapper = useRef(null)
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
    const showcaseIn = (e, treatments) => {
        console.log(treatments)
        switch(treatments){
            case 'hair':
                SetTreatents(<Hair/>)
                break
            case 'face':
                SetTreatents(<Face/>)
                break
            case 'nails':
                SetTreatents(<Nails/>)
                break
            case 'body':
                SetTreatents(<Body/>)
                break
            default :
                SetTreatents(<></>)
        }
        try {
            document.createEvent('TouchEvent')
            requestAnimationFrame(() => {
                showcase.current.style.left = 0
                showcase.current.style.transitionDuration = '600ms'
                slider.current.style.transitionDuration = '800ms'
                slider.current.style.left = '-100%'
            })
        } catch (error) {
            requestAnimationFrame(() => {
                showcase.current.style.left = 0
                showcase.current.style.transitionDuration = '0ms'
                showcase.current.style.opacity = 0
                serviceTabsWrapper.current.style.transitionDuration = '100ms'
                serviceTabsWrapper.current.style.opacity = 0
                showcase.current.style.position = 'absolute'
            })
            setTimeout(() => {
                requestAnimationFrame(() => {
                    showcase.current.style.transitionDuration = '500ms'
                    showcase.current.style.opacity = 1
                })
            }, 100)
        }
    }
    return (
        <>
           
            <div ref={servicesPage} className="lvh relative">
            <Showcase showcase={showcase} slider={slider} serviceTabsWrapper={serviceTabsWrapper} treatments={treatments}/>
                <h2 className="absolute top-[0%]">services</h2>
                <div ref={serviceTabsWrapper} className="flex flex-col h-full pt-16 px-2 pb-2 gap-2 lg:flex-row lg:gap-8 lg:p-8 lg:pt-12">
                    <ServiceTab imageRef={serviceImage1} src={service_Image1} wrapperRef={serviceImageWrapper1} showcaseIn={showcaseIn} treatmentType={'hair'}/>
                    <ServiceTab imageRef={serviceImage2} src={service_Image2} wrapperRef={serviceImageWrapper2} showcaseIn={showcaseIn} treatmentType={'face'}/>
                    <ServiceTab imageRef={serviceImage3} src={service_Image3} wrapperRef={serviceImageWrapper3} showcaseIn={showcaseIn} treatmentType={'nails'}/>
                    <ServiceTab imageRef={serviceImage4} src={service_Image3} wrapperRef={serviceImageWrapper4} showcaseIn={showcaseIn} treatmentType={'body'}/>
                </div>
            </div>
        </>
    )
  }
  
  export default Services