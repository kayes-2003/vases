"use client";


import Image from "next/image"
import Blur from "@/public/ceramic-02.jpg"
import { ReactTyped } from "react-typed"
import Link from "next/link";
import Carousal from "./carousel";


const Hero = () => {
  return (
    <div className="h-screen w-full bg-[#ecf0f3] relative">
        <Image
        src={Blur}
        alt="blur"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="absolute animate-pulse"
        />

        <div className="flex flex-col text-center mx-auto max-w-[1260px] items-center justify-center pt-24 sm:mb-20">
            <h1 className="text-5xl sm:text-8xl font-bold tracking-tight z-20">
                A software {" "}
                <span className="bg-gradient-to-r from-[#ff781f] to-[#ffaf7a] text-transparent bg-clip-text">Agency</span>
            </h1>
            <h1 className="text-5xl sm:text-8xl font-bold z-20">with a twist</h1>
            <h2 className="text-2xl sm:text-4xl mt-4">specializing in {" "}
                <ReactTyped 
                strings={[
                    'web development',
                    'mobile development',
                'UI/UX development',
                'branding',
                ]}
                typeSpeed={200}
                backSpeed={100}
                loop    
                /> {""}
            </h2>
            <div className="items-center mx-auto justify-center text-center pt-16 z-20">
                <Link href="/pricing">
                    <button className="bg-black text-white text-2xl px-10 py-5 rounded-lg shadow-xl shadow-black/40 hover:bg-black/70 cursor-pointer">
                        See plans
                    </button>
                </Link>
                <p className="pt-6 font-bold text-lg ">
                    Subscriptions based model with no hidden fees. Unlimited Requests 
                </p>
            </div>
        </div>
            <div className="py-8 sm:py-20 md:py-16 lg:py-24">
            <Carousal />
            </div>

    </div>
  )
}

export default Hero