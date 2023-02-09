import React from 'react'

const SlideItem = ({obj, refFunction, touchStart, touchEnd, touchMove, mouseOver, canClick, cameFromLeft, left}) => {
  return (
    // image draggable = false onDragStart={(e) => e.preventDefault()}
    <div ref={refFunction} className='w-[100vw] lg:w-[30vw] flex-shrink-0 h-[5rem] border-2 border-blue-400' 
            onTouchStart={(e) => touchStart(e)} onTouchEnd={() => touchEnd()} onTouchMove={(e) => touchMove(e)} 
            onMouseOver={canClick ? mouseOver : undefined } onMouseEnter={() => left ? cameFromLeft.current = true : undefined } 
            onMouseLeave={() => left ? setTimeout(() => cameFromLeft.current = false, 200): undefined }>{obj}</div>
  )
}

export default SlideItem