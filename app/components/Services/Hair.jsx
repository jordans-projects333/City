import React, { useState } from 'react'
import hairImage from '../../images/services_1.webp'
import Image from 'next/image'
import Socials from '../Home/Socials'

const Hair = () => {
    const [buttonAnimating, setButtonAnimating] = useState(false)
    const buttonClicked = () => {
        console.log('clicked')
        if(buttonAnimating)return
        setButtonAnimating(true)
        setTimeout(() => {
            setButtonAnimating(false)
        }, 500)
    }
  return (
    <div>
        <div className='w-full h-[30vh] relative -z-20 overflow-hidden'>
            <Image src={hairImage} fill alt='br' className='absolute top-0 zoom'/>
        </div>
        <div className='service relative'>
            <div className='px-6'>
                <h3 className='pt-4 w-full text-center font-semibold tracking-wider text-3xl'>Hair Treatments</h3>
                <div className='h-[1px] bg-black w-full my-2'></div>
                <p className='mx-1'>Our highly trained stylists are here to tackle all of your needs, with the highest quality colouring that will leave you looking and feeling your best. Before a colouring service, we politely request that you pop in for a skin test. This will need to be done 48 hours prior to your appointment. Alternatively, you can sign a disclaimer to say you agree to your colour service without a skin test. This will only be needed for your first appoinment with us.</p>
                <div className='w-full flex justify-center pb-2 pt-4 font-semibold tracking-wider text-2xl'><h4>What we offer</h4></div>
                <div className='border-t border-black pt-2'>
                    <div className='flex w-full justify-between text-xl font-medium px-2 pb-4'>
                        <h3>Dry cut</h3>
                        <h3>£12.00</h3>
                    </div>
                    <div className='flex w-full justify-between text-xl font-medium px-2 pb-4'>
                        <h3>Cut & Blowdry</h3>
                        <h3>£26.00</h3>
                    </div>
                    <div className='flex w-full justify-between text-xl font-medium px-2 pb-4'>
                        <h3>Dry cut</h3>
                        <h3>£12.00</h3>
                    </div>
                    <div className='flex w-full justify-between text-xl font-medium px-2 pb-4'>
                        <h3>Cut & Blowdry</h3>
                        <h3>£26.00</h3>
                    </div>
                    <div className='flex w-full justify-between text-xl font-medium px-2 pb-4'>
                        <h3>Dry cut</h3>
                        <h3>£12.00</h3>
                    </div>
                    <div className='flex w-full justify-between text-xl font-medium px-2 pb-4'>
                        <h3>Cut & Blowdry</h3>
                        <h3>£26.00</h3>
                    </div>
                    <div className='flex w-full justify-between text-xl font-medium px-2 pb-4'>
                        <h3>Dry cut</h3>
                        <h3>£12.00</h3>
                    </div>
                    <div className='flex w-full justify-between text-xl font-medium px-2 pb-4'>
                        <h3>Dry cut</h3>
                        <h3>£12.00</h3>
                    </div>
                    <div className='flex w-full justify-between text-xl font-medium px-2 pb-4'>
                        <h3>Cut & Blowdry</h3>
                        <h3>£26.00</h3>
                    </div>
                    <div className='flex w-full justify-between text-xl font-medium px-2 pb-4'>
                        <h3>Dry cut</h3>
                        <h3>£12.00</h3>
                    </div>
                    <div className='flex w-full justify-between text-xl font-medium px-2 pb-4'>
                        <h3>Dry cut</h3>
                        <h3>£12.00</h3>
                    </div>
                    <div className='flex w-full justify-between text-xl font-medium px-2 pb-4'>
                        <h3>Cut & Blowdry</h3>
                        <h3>£26.00</h3>
                    </div>
                    <div className='flex w-full justify-between text-xl font-medium px-2 pb-4'>
                        <h3>Dry cut</h3>
                        <h3>£12.00</h3>
                    </div>
                    <div className='flex w-full justify-between text-xl font-medium px-2 pb-4'>
                        <h3>Dry cut</h3>
                        <h3>£12.00</h3>
                    </div>
                    <div className='flex w-full justify-between text-xl font-medium px-2 pb-4'>
                        <h3>Cut & Blowdry</h3>
                        <h3>£26.00</h3>
                    </div>
                    <div className='flex w-full justify-between text-xl font-medium px-2 pb-4'>
                        <h3>Dry cut</h3>
                        <h3>£12.00</h3>
                    </div>
                    <div className='flex w-full justify-between text-xl font-medium px-2 pb-4'>
                        <h3>Dry cut</h3>
                        <h3>£12.00</h3>
                    </div>
                    <div className='flex w-full justify-between text-xl font-medium px-2 pb-4'>
                        <h3>Cut & Blowdry</h3>
                        <h3>£26.00</h3>
                    </div>
                    <div className='flex w-full justify-between text-xl font-medium px-2 pb-4'>
                        <h3>Dry cut</h3>
                        <h3>£12.00</h3>
                    </div>
                    <div className='flex w-full justify-between text-xl font-medium px-2 pb-4'>
                        <h3>yo cut</h3>
                        <h3>£12.00</h3>
                    </div>
                    <div className={`w-full flex justify-center pb-[calc(5rem)] pt-4 ${buttonAnimating && 'buttonClick'}`} onTouchStart={() => buttonClicked()}><h4 className='border border-black py-2 px-4 font-semibold tracking-wider text-lg'>Book appoinment</h4></div>
                </div>
                <Socials/>
            </div>
        </div>
    </div>
  )
}

export default Hair