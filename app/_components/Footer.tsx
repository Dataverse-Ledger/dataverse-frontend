import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGithub, FaXTwitter, FaYoutube } from 'react-icons/fa6'

export default function Footer() {
    return (
        <div className='bg-black'>
            <div className='relative px-32 py-20'>
                <div className='flex flex-col gap-10'>
                    <div className='flex lg:flex-row text-white justify-between items-center'>
                        <div className='flex flex-row gap-4 font-poppinsRegular text-[3vw] items-center'>
                            <div className='relative w-12 h-12'>
                                <Image src='/images/logo.png' alt='logo' fill />
                            </div>
                            Dataverse
                        </div>
                        <div className='text-[2.5vw] flex flex-row gap-10'>
                            <Link href=''>
                                <FaGithub />
                            </Link>
                            <Link href=''>
                                <FaXTwitter />
                            </Link>
                            <Link href=''>
                                <FaYoutube />
                            </Link>
                        </div>
                    </div>
                    <div className='flex lg:flex-row gap-4 font-poppinsRegular text-white text-2xl'>
                        <div>About</div>
                        <div className='hidden lg:flex'>|</div>
                        <div>Contact</div>
                        <div className='hidden lg:flex'>|</div>
                        <div> T & C</div>
                    </div>
                </div>
                <div className="absolute z-20 pointer-events-none top-0 bottom-0 right-0 left-0 bg-[linear-gradient(220deg,rgba(255,255,255,0)_60.05382521119378%,hsl(0,0%,0%)_120.0062716057621%)]">
                    <div className="z-10 w-full h-full bg-repeat opacity-[0.10] bg-[url('../public/images/bg-noise2.png')]"></div>
                </div>
            </div>
        </div>
    )
}
