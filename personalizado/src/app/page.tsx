import './globals.css'
import Image from 'next/image'
import wallpaper from '../../public/images/Wallpaper.png'

import Favicon from '/public/images/Metadata/logo.ico';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meu Mundo Personalizado',
  description: 'Generated by create next app',
  icons: [{ rel: 'icon', url: Favicon.src }],
};
export default function Page() {
    return (
    <div>
      <Image
          src={wallpaper}
          alt="Wallpaper do site"
        />
    </div>
    )
  }