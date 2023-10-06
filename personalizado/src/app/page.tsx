// `app/page.tsx` is the UI for the `/` URL
import Link from "next/link"
import './globals.css'
import Example from "@/components/taskbar/TaskBar"

export default function Page() {
    return (
    <div>
      <Example/>
      <Link href="/home">Home</Link>
    </div>
    
    )
  }