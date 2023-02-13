'use client'

const Showcase = ({showcase, slider, serviceTabsWrapper, treatments, setOnService}) => {
    const showcaseOut = () => {
        setOnService((prev) => !prev)
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
        <div ref={showcase} className="fixed left-[100%] top-[6vh] w-full h-[100vh] z-10 lg:absolute bg-white flex flex-col">
            <div className='service w-full bg-black border-white text-white flex items-center justify-center gap-2 pr-4 py-1' onTouchStart={() => showcaseOut()}>
                <svg className='h-4 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
                <h3 className='font-semibold tracking-wider text-lg'>Back</h3>
            </div>
            <div className="flex grow relative">
                <div className="overflow-y-scroll absolute top-0 h-full">
                    {treatments}
                </div>
            </div>
        </div>
    )
  }
  
  export default Showcase