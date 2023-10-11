'use client'
import Link from 'next/link'
import Image from 'next/image'

import CamisaPersonalizada from '../../../public/images/camisa-personalizada.webp'

export default function Page(){
    return(
        <>
            <div className='flex justify-center'>
                <div className='mt-20 w-max h-max rounded-xl shadow-lg shadow-gray-300 md:shadow-xl md:shadow-gray-300'>
                    <Image
                    src={CamisaPersonalizada}
                    alt="Wallpaper do site"
                    />
                    <p>Camiseta Personalizada - Envie sua arte</p>
                </div>
            </div>
        </>
        
    )
}