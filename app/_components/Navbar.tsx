import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <div className='fixed top-0 left-0 right-0 max-h-40'>
            <div className='flex flex-row py-6 px-10 justify-between font-sfRegular'>
                <Link href="/" className=' text-xl'>
                    Dataverse
                </Link>
                <div className='flex flex-row gap-10'>
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
