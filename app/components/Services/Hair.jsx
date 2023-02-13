import React from 'react'
import hairImage from '../../images/services_1.webp'
import Image from 'next/image'

const Hair = () => {
  return (
    <div>
        <div className='w-full h-[30vh] relative -z-20'>
            <Image src={hairImage} fill alt='br' className='absolute top-0'/>
        </div>
        <div className='service'>
            <div className='px-6'>
                <h3 className='pt-4 w-full text-center font-semibold tracking-wider text-xl'>Hair Treatments</h3>
                <div className='h-[1px] bg-black w-full my-2'></div>
                <p className='mx-1'>Our highly trained stylists are here to tackle all of your needs, with the highest quality colouring that will leave you looking and feeling your best. Before a colouring service, we politely request that you pop in for a skin test. This will need to be done 48 hours prior to your appointment. Alternatively, you can sign a disclaimer to say you agree to your colour service without a skin test. This will only be needed for your first appoinment with us.</p>
                <div className='w-full flex justify-center my-2 font-semibold tracking-wider text-lg'><h4>What we offer</h4></div>
                <div className='w-full flex justify-center'><h4 className='border border-black py-2 px-4 font-semibold tracking-wider text-lg'>Book appoinment</h4></div>
            </div>
        </div>
    </div>
  )
}

export default Hair