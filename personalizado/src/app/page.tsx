// `app/page.tsx` is the UI for the `/` URL
import Link from "next/link"
import './globals.css'
import Image from 'next/image'
import wallpaper from '../../public/img-princ.png'

export default function Page() {
    return (
      <>
        <div className="flex items-center justify-center bg-slate-900">
          <Image className=""
              src={wallpaper}
              alt="Wallpaper do site"
              // width={500} automatically provided
              // height={500} automatically provided
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
        </div>
        <div className="grid justify-center">
          <h2 className="font-bold font-['Poppins'] text-3xl">Ofertas especiais</h2>
          <p className="font-['Poppins'] text-xl">Os melhores preços</p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-4 gap-2 justify-items-center mt-20 w-3/4">
            <div className="w-72 h-52 border-2 rounded-md">01</div>
            <div className="w-72 h-52 border-2 rounded-md">02</div>
            <div className="w-72 h-52 border-2 rounded-md">03</div>
            <div className="w-72 h-52 border-2 rounded-md">04</div>
            <div className="w-72 h-52 border-2 rounded-md">05</div>
            <div className="w-72 h-52 border-2 rounded-md">06</div>
            <div className="w-72 h-52 border-2 rounded-md">07</div>
            <div className="w-72 h-52 border-2 rounded-md">08</div>
            <div className="w-72 h-52 border-2 rounded-md">09</div>
          </div>
        </div>
        
        <Link className="m-20" href="/home">Home</Link>
    </>
    )
  }