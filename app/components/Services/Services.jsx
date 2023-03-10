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
import service_Image4 from '../../images/services_4.jpg'

const Services = ({slider, serviceSnap, currentPosition, originalPosition, productSnap, serviceClickable, setOnService}) => {
    const [treatments, SetTreatents] = useState(null)
    let snapTime = useRef(false)
    let serviceImageWrapper1 = useRef(null)
    let serviceImageWrapper2 = useRef(null)
    let serviceImageWrapper3 = useRef(null)
    let serviceImageWrapper4 = useRef(null)
    let serviceImage1 = useRef(null)
    let serviceImage2 = useRef(null)
    let serviceImage3 = useRef(null)
    let serviceImage4 = useRef(null)
    let serviceText1 = useRef(null)
    let serviceText2 = useRef(null)
    let serviceText3 = useRef(null)
    let serviceText4 = useRef(null)
    let animating1 = useRef(false)
    let animating2 = useRef(false)
    let animating3 = useRef(false)
    let animating4 = useRef(false)
    let serviceTabsWrapper = useRef(null)
    let showcase = useRef(null)
    let servicesPage = useRef(null)
    let throttle = useRef(true)
    const swipeStart = (e) => {
        originalPosition.current = [e.touches[0].clientX, e.touches[0].clientY]
        currentPosition.current = [e.touches[0].clientX, e.touches[0].clientY]
        snapTime.current = true
        setTimeout(() => {
          snapTime.current = false
        }, 200)
    }
    const swipeEnd = () => {
        if(currentPosition.current[0] === originalPosition.current[0] && currentPosition.current[1] === originalPosition.current[1])return
        if(snapTime.current != true)return
        let lengthX = Math.abs(currentPosition.current[0] - originalPosition.current[0])
        let lengthY = Math.abs(currentPosition.current[1] - originalPosition.current[1])
        let theta = Math.atan(lengthY/lengthX) * (180/Math.PI)
        // Angle 30 favours y, Angle 45 neutral, Angle 60 favours x.
        if(theta > 30 && currentPosition.current[1] - originalPosition.current[1] < 0){
            productSnap.current.scrollIntoView({behavior: 'smooth'})
        }
      }
    const textScale = (el, wrapper, animating) => {
        let wrapperPercent =  (wrapper.getBoundingClientRect().height / window.innerHeight)
        let percent = el.getBoundingClientRect().top / window.innerHeight
            if(percent >= 0.05 && percent <= .05 + wrapperPercent){
                el.style.scale = 1.2
                animating.current = true
                setTimeout(() => {
                    let wrapperPercent =  (wrapper.getBoundingClientRect().height / window.innerHeight)
                    let percent = el.getBoundingClientRect().top / window.innerHeight
                    animating.current = false
                    if(percent <= 0.05 && percent >= .05 + wrapperPercent)el.style.scale = 1
                },700)

             }else{
                if(animating.current == false)el.style.scale = 1
             }
            setTimeout(function () {   
                throttle.current = true;          
            }, 100);
    }
    const servicePageScroll = () => {
        if(throttle.current){
            throttle.current = false
            requestAnimationFrame(() => {
                serviceImage1.current.style.transform = `translate(-50%, ${-50 + (servicesPage.current.getBoundingClientRect().top/window.innerHeight * 23.5)}%)`
                serviceImage2.current.style.transform = `translate(-50%, ${-50 + (servicesPage.current.getBoundingClientRect().top/window.innerHeight * 23.5)}%)`
                serviceImage3.current.style.transform = `translate(-50%, ${-50 + (servicesPage.current.getBoundingClientRect().top/window.innerHeight * 23.5)}%)`
                serviceImage4.current.style.transform = `translate(-50%, ${-50 + (servicesPage.current.getBoundingClientRect().top/window.innerHeight * 23.5)}%)`
            })
            textScale(serviceText1.current, serviceImageWrapper1.current, animating1)
            textScale(serviceText2.current, serviceImageWrapper1.current, animating2)
            textScale(serviceText3.current, serviceImageWrapper1.current, animating3)
            textScale(serviceText4.current, serviceImageWrapper1.current, animating4)
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
        // const options = {
        //     root: null, // default, use viewport
        //     rootMargin: '-25% 0px -74% 0%'
        //   }
        // const observer2 = new IntersectionObserver((entries) => {
        //     entries.forEach((entry) => {
        //         if(entry.isIntersecting){
        //             entry.target.style.scale = 1.2
        //         }else{
        //             entry.target.style.scale = 1
        //         }
        //     })
        // }, options)
        observer.observe(servicesPage.current)
        // observer2.observe(serviceText1.current)
        // observer2.observe(serviceText2.current)
        // observer2.observe(serviceText3.current)
        // observer2.observe(serviceText4.current)
    }, [servicesPage])
    
    const showcaseIn = (e, treatments) => {
        if(!serviceClickable.current)return
        serviceClickable.current = false
        setOnService((prev) => !prev)
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
                showcase.current.style.transitionDuration = '500ms'
                slider.current.style.transitionDuration = '500ms'
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
           
            <div ref={servicesPage} className={`lvh relative flex flex-col`} onTouchStart={(e) => swipeStart(e)} onTouchEnd={() => swipeEnd()}>
                <div ref={serviceSnap} className="bottom-[100%] absolute w-full h-[6vh]"></div>
            <Showcase showcase={showcase} slider={slider} serviceTabsWrapper={serviceTabsWrapper} treatments={treatments} setOnService={setOnService} serviceClickable={serviceClickable}/>
            <h3 className='text-3xl whitespace-nowrap font-[500] leading-[3rem] py-2 -z-20 w-full text-center'>Services</h3>
                <div ref={serviceTabsWrapper} className="flex flex-col flex-grow px-2 pb-2 gap-2 lg:flex-row lg:gap-8 lg:p-8 lg:pt-12">
                    <ServiceTab imageRef={serviceImage1} src={service_Image1} wrapperRef={serviceImageWrapper1} showcaseIn={showcaseIn} treatmentType={'hair'} title={'Hair'} number={12} serviceText={serviceText1}/>
                    <ServiceTab imageRef={serviceImage2} src={service_Image2} wrapperRef={serviceImageWrapper2} showcaseIn={showcaseIn} treatmentType={'face'} title={'Face'} number={9} serviceText={serviceText2}/>
                    <ServiceTab imageRef={serviceImage3} src={service_Image3} wrapperRef={serviceImageWrapper3} showcaseIn={showcaseIn} treatmentType={'nails'} title={'Nails'} number={23} serviceText={serviceText3}/>
                    <ServiceTab imageRef={serviceImage4} src={service_Image4} wrapperRef={serviceImageWrapper4} showcaseIn={showcaseIn} treatmentType={'body'} title={'Body'} number={4} serviceText={serviceText4}/>
                </div>
            </div>
        </>
    )
  }
  
  export default Services