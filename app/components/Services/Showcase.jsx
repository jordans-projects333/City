'use client'

const Showcase = ({showcase, slider, serviceTabsWrapper, treatments}) => {
    const showcaseOut = () => {
        console.log('egg rendered', treatments)
        try {
            document.createEvent('TouchEvent')
            requestAnimationFrame(() => {
                showcase.current.style.left = '100%'
                showcase.current.style.transitionDuration = '400ms'
                slider.current.style.transitionDuration = '400ms'
                slider.current.style.left = 0
            })
        } catch (error) {
            requestAnimationFrame(() => {
                
                showcase.current.style.transitionDuration = '100ms'
                showcase.current.style.opacity = 0
            })
            setTimeout(() => {
                requestAnimationFrame(() => {
                showcase.current.style.left = '100%'
                serviceTabsWrapper.current.style.transitionDuration = '500ms'
                serviceTabsWrapper.current.style.opacity = 1
                })
            }, 100)
        }
    }
    return (
        <div ref={showcase} className="fixed left-[100%] top-[6vh] w-full h-[100vh] z-10 lg:absolute bg-white">
            <div className="bg-green-500 w-full h-[4rem]" onClick={() => showcaseOut()}></div>
            {treatments}
        </div>
    )
  }
  
  export default Showcase