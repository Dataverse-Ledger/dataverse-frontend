'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Navbar() {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className='fixed top-0 left-0 right-0 max-h-20 z-50'>
            <div className={`flex flex-row py-6 px-10 justify-between items-center font-poppinsRegular ${scroll ? 'bg-white text-black' : 'text-white'}`}>
                <Link href="/" className='flex flex-row gap-4 text-xl items-center'>
                    <div className='relative w-8 h-8'>
                        <Image src={`${scroll ? '/images/logo_black.png' : '/images/logo.png'}`} alt='logo' fill />
                    </div>
                    Dataverse
                </Link>
                <div className='flex flex-row items-center text-lg gap-10 font-poppinsThin'>
                    <Link href="https://github.com/Dataverse-Ledger" target='_blank'>
                        Github
                    </Link>
                    <Link href="https://github.com/Dataverse-Ledger/Dataverse-Ledger/blob/main/README.md" target='_blank'>
                        Doumentation
                    </Link>
                    <Link href="#features">
                        Features
                    </Link>
                    <Link href="/">
                        Whitepaper
                    </Link>
                </div>
                <div>
                    <Link href="/" className='bg-white shadow-md shadow-white text-black text-center font-poppinsThin rounded-xl px-10 py-2 text-lg lg:w-[12vw]'>
                        DEMO
                    </Link>
                </div>
            </div>
        </div>
    )
}
