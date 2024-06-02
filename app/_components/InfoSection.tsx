'use client'
import { motion } from 'framer-motion';

export default function InfoSection() {
    return (
        <div className='min-h-screen bg-white p-5 lg:p-20'>
            <div className='relative p-10 lg:p-32 rounded-tr-[100px] rounded-bl-[100px] lg:rounded-tr-[200px] lg:rounded-bl-[200px] bg-black overflow-clip'>
                <div className='z-40 flex flex-col gap-10 font-poppinsRegular text-white'>
                    <div className='text-2xl lg:text-[3.5vw]'>
                        What is <span className='font-poppinsSemiBold'>Dataverse</span>?
                    </div>
                    <div className='text-lg lg:text-[1.4vw] flex flex-col gap-4'>
                        <div>
                            Dataverse is a cutting-edge platform designed to revolutionize the way we interact with data. At its core, Dataverse represents a new frontier in data management, empowering individuals, businesses, and researchers to harness the power of their data like never before.
                        </div>
                        <div>
                            More than just a trading platform, Dataverse is a secure, decentralized ecosystem where data from various devices and sensors converge, creating a rich tapestry of insights and opportunities. With its custom blockchain technology, Dataverse ensures the integrity, security, and accessibility of data, fostering collaboration and innovation across diverse industries.
                        </div>
                        <div>Whether you&apos;re a scientist seeking to unlock the mysteries of the universe, a business owner aiming to optimize operations, or an individual looking to better understand your personal data, Dataverse provides the tools and infrastructure to transform raw data into actionable intelligence. By democratizing access to data and fostering a culture of openness and collaboration, Dataverse is paving the way for a more connected, informed, and empowered future.
                        </div>
                    </div>

                </div>

                <div className="absolute z-20 pointer-events-none top-0 bottom-0 right-0 left-0 bg-[linear-gradient(220deg,rgba(255,255,255,0)_60.05382521119378%,hsl(0,0%,0%)_120.0062716057621%)] rounded-tr-[100px] rounded-bl-[100px] lg:rounded-tr-[200px] lg:rounded-bl-[200px]">
                    <div className="z-10 w-full h-full bg-repeat opacity-[0.10] bg-[url('../public/images/bg-noise2.png')] rounded-tr-[100px] rounded-bl-[100px] lg:rounded-tr-[200px] lg:rounded-bl-[200px]"></div>
                </div>
                <div className="absolute z-0 top-0 left-0 right-0 bottom-0 h-full w-full overflow-clip ">
                    <div className="absolute w-[300vw] h-[300vh] ">
                        <motion.img
                            src="/images/Gradient4.webp"
                            alt="Gradient"
                            className=""
                            initial={{ x: 0, y: 0, rotate: 50, opacity: 1 }}
                            animate={{
                                x: -1000, y: -200, rotate: 180, opacity: 1
                            }}
                            transition={{ duration: 200, repeat: Infinity }}
                        />
                    </div>
                    <div className="absolute w-[300vw] h-[300vw] ">
                        <motion.img
                            src="/images/Gradient5.webp"
                            alt="Gradient"
                            className=""
                            initial={{ x: 400, y: -200, rotate: 50, opacity: 1 }}
                            animate={{
                                x: 1000, y: 0, rotate: 360, opacity: 1
                            }}
                            transition={{ duration: 500, repeat: Infinity }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
