'use client'
import React, { useRef } from 'react'
import Nav from './Nav'
import logo from '../images/logo.png'
import Image from 'next/image'


const Header = ({hamburger, setHamburger, productSnap, serviceSnap, homePage, homeSwipeLeft, homeSwipeRight}) => {
    let header = useRef(null)
    return (
        <header ref={header} className='fixed z-50 flex h-[6vh] w-full nav__wrapper'>
            <div className='absolute bottom-0 ml-8 mb-1 left-0 h-[65%] aspect-square logo crab z-30'>
                <Image src={logo} alt="logo" fill/>
            </div>
            <h2 className={`pl-2 pt-4 pb-2 text-2xl bcrab font-solitreo logoShadow z-40`}>Pretty Little Salon</h2>
            <Nav hamburger={hamburger} setHamburger={setHamburger} header={header} productSnap={productSnap} serviceSnap={serviceSnap} homePage={homePage} homeSwipeRight={homeSwipeRight} homeSwipeLeft={homeSwipeLeft}/>
        </header>
    )
}

export default Header



// const Header = ({hamburger, setHamburger}) => {
//   let header = useRef(null)
//   return (
//     <header ref={header} className="h-[6vh]">
//         <h2 className='pl-2 pt-4 text-2xl opacity-0 font-[Solitreo]'>Pretty Little Salon</h2>
//         <div className={`nav__wrapper fixed top-0 w-full h-[6vh] z-10 backdrop-blur-sm`}>
//           <div className={`duration-300 flex items-end`}>
//             <div className={`absolute h-[70%] left-[1.75rem] bottom-[.75rem] aspect-square crab z-40 ${hamburger && "flash"}`}>
//               <Image src={logo.src} alt="logo" className='logo absolute top-0'  fill/>
//             </div>
//             <h2 className={`pl-2 pt-4 pb-2 text-2xl bcrab font-[Solitreo] logoShadow z-40 ${hamburger && "flash"}`}>Pretty Little Salon</h2>
//             <Nav hamburger={hamburger} setHamburger={setHamburger} header={header}/>
//           </div>
//        </div>
//     </header>
//   )
// }

// export default Header