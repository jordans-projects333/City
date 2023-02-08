'use client'

const Showcase = ({showcase, slider}) => {
    const showcaseOut = () => {
        requestAnimationFrame(() => {
            showcase.current.style.left = '100%'
            slider.current.style.transitionDuration = '200ms'
            slider.current.style.left = 0
        })
    }
    return (
        <div ref={showcase} className="fixed left-[100%] top-[6vh] w-full h-[100vh] bg-blue-600 duration-500 z-10">
            <div className="bg-green-500 w-full h-[4rem]" onClick={() => showcaseOut()}></div>
          
        </div>
    )
  }
  
  export default Showcase