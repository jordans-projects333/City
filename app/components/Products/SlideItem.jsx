import React from 'react'

const SlideItem = ({obj, refFunction, touchStart, index, touchEnd, touchMove}) => {
  return (
    // image draggable = false onDragStart={(e) => e.preventDefault()}
    <div ref={refFunction} className='w-[100vw] md:w-[30vw] flex-shrink-0 h-[5rem] border-2 border-blue-400' onTouchStart={(e) => touchStart(e)} onTouchEnd={() => touchEnd()} onTouchMove={(e) => touchMove(e)}>{obj}</div>
  )
}

export default SlideItem