import React from 'react'
import { SiNextdotjs } from 'react-icons/si';

type feature = {
    key: number;
    name: string;
    description: string;
    icon: string;
}

const iconMap: any = {
    SiNextdotjs: <SiNextdotjs className='text-5xl text-blue-500' />,
};

const features: feature[] = [
    {
        key: 1,
        name: "Custom Blockchain",
        description: "Custom blockchain created using Avalanche HyperSDK for high performance, scalability, and security, tailored to manage and trade scientific data efficiently",
        icon: "SiNextdotjs"
    },
    {
        key: 1,
        name: "Dataverse CLI",
        description: "The Dataverse CLI allows for seamless data transactions, blockchain queries, and workflow automation for advanced users.",
        icon: "SiNextdotjs"
    },
    {
        key: 1,
        name: "JSON RPC for sensors and Devices",
        description: "Easily integrate sensors and devices using our JSON RPC interface for real-time data capture and management.",
        icon: "SiNextdotjs"
    },
    {
        key: 1,
        name: "Secure And Immutable",
        description: "Experience top-tier security with immutable records, ensuring your data is tamper-proof and verifiable.",
        icon: "SiNextdotjs"
    },
    {
        key: 1,
        name: "User Friendly Frontend",
        description: "Our intuitive frontend interface allows for easy navigation, data visualization, and management.",
        icon: "SiNextdotjs"
    },
    {
        key: 1,
        name: "Make your Data Globaly Available",
        description: "Expand your data's reach by making it globally accessible for collaboration and sharing among researchers worldwide.",
        icon: "SiNextdotjs"
    },
]
export default function Features() {

    return (
        <div className='min-h-screen bg-white relative pb-20'>
            <div className='flex flex-col gap-4 px-20 pt-20'>
                <span className='text-stroke-black text-white font-poppinsSemiBold text-7xl'>Features</span>
                <div className='border-b border-black'></div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 px-20 pt-10'>
                {features.map((f) => (
                    <div key={f.key} className="bg-white shadow-xl text-black p-10 flex flex-col gap-4 border-2 text-xl rounded-lg">
                        <div>{iconMap[f.icon]}</div>
                        <div className='font-poppinsSemiBold'>{f.name}</div>
                        <div className='font-poppinsRegular'>{f.description}</div>
                    </div>
                ))}
            </div>
            <div className="z-20 pointer-events-none absolute top-0 bottom-0 right-0 left-0" >
                <div className="z-10 w-full h-full bg-repeat opacity-[0.15] bg-[url('../public/images/bg-noise2.png')]"></div>
            </div>
        </div>
    )
}
