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
                        <Image src='/images/logo.png' alt='logo' fill />
                    </div>
                    Dataverse
                </Link>
                <div className='flex flex-row items-center gap-10 font-poppinsThin'>
                    <Link href="/">
                        Dashboard
                    </Link>
                    <Link href="/">
                        Whitepaper
                    </Link>
                    <Link href="/">
                        Use Cases
                    </Link>
                </div>
                <div>
                    <Link href="/">
                        Dashboard
                    </Link>
                </div>
            </div>
        </div>
    )
}
