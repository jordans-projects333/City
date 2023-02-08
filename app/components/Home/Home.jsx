'use client'
import { useRef } from "react"

const Home = () => {
  let imageWrapper = useRef(null)
  let originalPosition = useRef(null)
  let currentPosition = useRef(null)
  const swipeStart = (e) => {
    originalPosition.current = [e.touches[0].clientX, e.touches[0].clientY]
    currentPosition.current = [e.touches[0].clientX, e.touches[0].clientY]
  }
  const swipeMove = (e) => {
    currentPosition.current = [e.touches[0].clientX, e.touches[0].clientY]
    let distancey = (currentPosition.current[1] - originalPosition.current[1])
    if(distancey < 0)distancey = distancey*2
    // if(distancey >= -50 && distancey <= 50) imageWrapper.current.style.transform = `translateY(${distancey}px) translateX(-50%)`
    if(distancey >= -50 && distancey <= 50){
      requestAnimationFrame(() => {
        imageWrapper.current.style.transform = `translateY(${distancey}px) translateX(-50%)`
      })
    }
  }
  const swipeEnd = () => {
    imageWrapper.current.style.transform = `translateY(0px) translateX(-50%)`
    if(currentPosition.current[0] === originalPosition.current[0] && currentPosition.current[1] === originalPosition.current[1])return
    let lengthX = Math.abs(currentPosition.current[0] - originalPosition.current[0])
    let lengthY = Math.abs(currentPosition.current[1] - originalPosition.current[1])
    let theta = Math.atan(lengthY/lengthX) * (180/Math.PI)
    // Angle 30 favours y, Angle 45 neutral, Angle 60 favours x.
    if(theta < 30){
      ((currentPosition.current[0] - originalPosition.current[0]) > 0) ? console.log('right') : console.log('left')
    }else{
      ((currentPosition.current[1] - originalPosition.current[1]) > 0) ? console.log('down') : console.log('up')
    }
  }
  return (
    <div className="svh bg-orange-500 pt-[6vh] overflow-x-hidden relative" onTouchStart={(e) => swipeStart(e)} onTouchMove={(e) => swipeMove(e)} onTouchEnd={() => swipeEnd()}>
      <h3 className=' text-7xl whitespace-nowrap ml-2 crab leading-[3rem]'>Hair & Beauty</h3>
      <div ref={imageWrapper} className="absolute top-[calc(6vh+.5rem)] duration-500 bg-orange-300 left-[50%] translate-x-[-50%] w-[80%] h-[65%]">hjjj</div>
    </div>
  )
}

export default Home