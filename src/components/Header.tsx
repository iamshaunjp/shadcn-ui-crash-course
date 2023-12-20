import React from 'react'
import { Wine } from 'lucide-react'
import { Navigation } from '../components/Navigation'
import Link from "next/link"
import logo from '../../public/logo.png'
import Image from "next/image"

const Header = () => {
  return (
    <header className=' flex flex-row justify-between h-28 w-full bg-rose-950 items-center p-5 shadow-lg'>
        <div className='mr-16'>
        <Navigation />
        </div>
        <Link href="/">
          <div className="flex-shrink-0">
            <Image
                src={logo}
                alt='logo image'
                width={300}
            />
          </div>
        </Link>
    </header>
  )
}

export default Header