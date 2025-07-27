"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import Timeline from "@/components/Timeline";
import Image from "next/image";

export default function HomePage() {
    const [videoEnded, setVideoEnded] = useState(false);

    return (
        <div className="relative">
            {/* Video container */}
            <div className={`absolute inset-0 z-0 transition-opacity duration-1000 ${videoEnded ? 'opacity-0' : 'opacity-0'} pointer-events-none`}>
                <video
                    autoPlay
                    muted
                    onEnded={() => setVideoEnded(true)}
                    className="object-cover w-full h-screen"
                >
                    <source src="/imgs/draft1.webm" type="video/webm" />
                    <source src="/imgs/draft1.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Timeline container */}
            <div className="relative z-10">
                {/* Hero Section */}
                <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-0">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <Image
                            src="/imgs/nush-bg.png"
                            alt="NUS High School"
                            fill
                            className="object-cover object-top blur-sm scale-110"
                            priority
                        />
                    </div>
                    
                    {/* Dark Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-black/40" />
                    
                    {/* Hero Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
                    >
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                            NUS High School
                        </h1>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-8">
                            20th Anniversary
                        </h2>
                        <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
                            Two decades of innovation, discovery, and excellence in mathematics and science education. 
                            Celebrating the achievements that have shaped our legacy and the bright minds that continue to drive us forward.
                        </p>
                        
                        {/* Timeline Component */}
                        <Timeline />
                    </motion.div>
                </div>
                
            </div>
        </div>
    );
}