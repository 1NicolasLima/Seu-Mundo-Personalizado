// `app/page.tsx` is the UI for the `/` URL
import Link from "next/link"
import './globals.css'
import Image from 'next/image'
import wallpaper from '../../public/img-princ.png'

export default function Page() {
    return (
    <div>
      <Link href="/home">Home</Link>
      <Image
          src={wallpaper}
          alt="Wallpaper do site"
          // width={500} automatically provided
          // height={500} automatically provided
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
    </div>
    
    )
  }