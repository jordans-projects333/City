import { useRef } from "react"
import { Montserrat } from '@next/font/google'
import Socials from "./Home/Socials"
const roboto = Montserrat({
    subsets: ['latin'],
    weight: ['900'],
    variable: '--font-roboto'
})



const Nav = ({hamburger, setHamburger, header}) => {
    let navPadding = useRef(0)
    if(header.current != null)navPadding.current = header.current.offsetHeight
    // console.log(header.current.offsetHeight)
    return (
         <nav className='ml-auto mb-4'>
            <div className={`fixed inset-0 h-[100lvh] pointer-events-none duration-500 ${hamburger ? "bg-black/50" : "bg-transparent"} `}></div>
            {/* <div className={`mr-4 lg:fixed lg:left-[-200%] lg:h-[100lvh] lg:w-[100vw] lg:top-0 lg:duration-300 lg:flex ${hamburger && "!left-0"}`}>
                <ul className={`flex lg:flex-col lg:bg-white lg:w-[65vw] pl-4 text-3xl font-[${roboto.variable}] font-[300]`} style={{paddingTop: navPadding.current}}>
                    <li><div className="bg-black h-[1px] w-[80%]"></div></li>
                    <li className={`mt-4 duration-700 ${hamburger ? "delay-[300ms] opacity-1" : "opacity-0"}`}>Home</li>
                    <li className={`mt-16 duration-700 ${hamburger ? " delay-[400ms] opacity-1" : "opacity-0"}`}>Gallery</li>
                    <li className={`mt-16 duration-700 ${hamburger ? "delay-[500ms] opacity-1" : "opacity-0"}`}>Services</li>
                    <li className={`mt-16 duration-700 ${hamburger ? "delay-[600ms] opacity-1" : "opacity-0"}`}>Products</li>
                </ul>
            </div> */}
            <div className={`fixed pt-[6vh] left-[-200%] h-[100lvh] w-[55vw] bg-white top-0 duration-300 flex ${hamburger && "!left-0"}`}>
                <ul className={`flex flex-col pl-4 text-3xl font-[${roboto.variable}] font-[300]`}>
                    <li><div className="bg-black h-[1px] w-[120%]"></div></li>
                    <li className={`mt-4 duration-700 ${hamburger ? "delay-[300ms] opacity-1" : "opacity-0"}`}>Home</li>
                    <li className={`mt-16 duration-700 ${hamburger ? " delay-[400ms] opacity-1" : "opacity-0"}`}>Gallery</li>
                    <li className={`mt-16 duration-700 ${hamburger ? "delay-[500ms] opacity-1" : "opacity-0"}`}>Services</li>
                    <li className={`mt-16 duration-700 ${hamburger ? "delay-[600ms] opacity-1" : "opacity-0"}`}>Products</li>
                </ul>
            </div>
            <div className='lg:hidden ml-auto h-[6vh] flex items-center px-6' onTouchStart={() => setHamburger((prev) => !prev)}>
                <div className="flex flex-col gap-[6px] ">
                    <div className={`w-[1.5rem] duration-300 h-[2px] ${hamburger ? "rotate-[45deg] translate-y-[8px] bg-white svgShadow" : 'bg-black'}`}></div>
                    <div className={`w-[1.5rem] duration-100 h-[2px] bg-black ${hamburger && "opacity-0"}`}></div>
                    <div className={`w-[1.5rem] duration-300 h-[2px] ${hamburger ? "rotate-[-45deg] translate-y-[-8px] bg-white svgShadow" : "bg-black"}`}></div>
                </div>
            </div>
            <div className={`duration-500 ${!hamburger ? 'pointer-events-none opacity-0' : 'pointer-events-auto opacity-1'}`}>
                <Socials navSocials={true}/>
            </div>
        </nav>
        // <nav className='ml-auto mb-4'>
        //     <div className={`fixed inset-0 h-[100lvh] pointer-events-none duration-500 ${hamburger ? "bg-black/50" : "bg-transparent"} `}></div>
        //     <div className={`mr-4 lg:fixed lg:left-[-200%] lg:h-[100lvh] lg:w-[100vw] lg:top-0 lg:duration-300 lg:flex ${hamburger && "!left-0"}`}>
        //         <ul className={`flex lg:flex-col lg:bg-white lg:w-[65vw] pl-4 text-3xl font-[${roboto.variable}] font-[300]`} style={{paddingTop: navPadding.current}}>
        //             <li><div className="bg-black h-[1px] w-[80%]"></div></li>
        //             <li className={`mt-4 duration-700 ${hamburger ? "delay-[300ms] opacity-1" : "opacity-0"}`}>Home</li>
        //             <li className={`mt-16 duration-700 ${hamburger ? " delay-[400ms] opacity-1" : "opacity-0"}`}>Gallery</li>
        //             <li className={`mt-16 duration-700 ${hamburger ? "delay-[500ms] opacity-1" : "opacity-0"}`}>Services</li>
        //             <li className={`mt-16 duration-700 ${hamburger ? "delay-[600ms] opacity-1" : "opacity-0"}`}>Products</li>
        //         </ul>
        //         <div className='bg-transparent flex-grow hidden lg:block' onTouchStart={() => setHamburger((prev) => !prev)}></div>
        //     </div>
        //     <div className='lg:flex hidden flex-col gap-[6px] pt-4 ml-auto pl-6 pr-6' onTouchStart={() => setHamburger((prev) => !prev)}>
        //         <div className={`w-[1.5rem] duration-300 h-[2px] bg-black ${hamburger && "rotate-[45deg] translate-y-[8px] bg-white svgShadow"}`}></div>
        //         <div className={`w-[1.5rem] duration-100 h-[2px] bg-black ${hamburger && "opacity-0"}`}></div>
        //         <div className={`w-[1.5rem] duration-300 h-[2px] bg-black ${hamburger && "rotate-[-45deg] translate-y-[-8px] bg-white svgShadow"}`}></div>
        //     </div>
        // </nav>
    )
}

export default Nav