"use client"

import { motion } from 'framer-motion';
import { events } from "@/types/events";
import Link from 'next/link';

export default function Timeline() {
    const colors = [
        'rgba(34, 197, 94, 0.9)', // Green
        'rgba(59, 130, 246, 0.9)', // Blue  
        'rgba(168, 85, 247, 0.9)', // Purple
        'rgba(239, 68, 68, 0.9)',  // Red
        'rgba(245, 158, 11, 0.9)'  // Orange
    ];

    const eventIcons = [
        // Mascot Launch - Eagle
        <svg key="mascot" className="text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>,
        // Games Day - Sports Ball
        <svg key="games" className="text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>,
        // Research Congress - Microscope
        <svg key="research" className="text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7.01 5 5 7.01 5 9.5S7.01 14 9.5 14 14 11.99 14 9.5 11.99 5 9.5 5z"/>
        </svg>,
        // Speech Day - Graduation Cap
        <svg key="speech" className="text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
        </svg>,
        // Nanosatellite - Satellite
        <svg key="satellite" className="text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 8l-6 6h4v6h4v-6h4l-6-6zm9-4h-2.5l-.71-.71c-.39-.39-.9-.58-1.41-.58H11.62c-.51 0-1.02.19-1.41.58L9.5 4H7c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"/>
        </svg>
    ];

    return (
        <div className="mt-20 px-4">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                className="flex justify-center items-center"
            >
                <div className="relative w-full">
                    {/* Desktop Timeline - Horizontal */}
                    <div className="hidden md:block">
                        {/* Timeline Line */}
                        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-white/20 via-white/40 to-white/20 -translate-y-0.5 rounded-full" />
                        
                        {/* Timeline Events */}
                        <div className="flex items-center justify-center gap-8 lg:gap-12">
                            {events.slice(0, 5).map((event, index) => (
                                <motion.div
                                    key={event.title}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ 
                                        duration: 0.5, 
                                        delay: 0.8 + (index * 0.15),
                                        type: "spring",
                                        stiffness: 150,
                                        damping: 12
                                    }}
                                    className="relative group cursor-pointer"
                                >
                                    {/* Glow Effect */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div 
                                            className="absolute inset-0 rounded-full blur-xl scale-150"
                                            style={{ backgroundColor: colors[index] }}
                                        />
                                    </div>
                                    
                                    {/* Hexagon Shape */}
                                    <div className="relative">
                                        <svg 
                                            width="80" 
                                            height="80" 
                                            viewBox="0 0 80 80" 
                                            className="transform transition-all duration-300 group-hover:scale-110 drop-shadow-2xl filter"
                                        >
                                            <defs>
                                                <linearGradient id={`grad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                                    <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
                                                    <stop offset="100%" stopColor="rgba(255,255,255,0.85)" />
                                                </linearGradient>
                                                <filter id={`shadow-${index}`}>
                                                    <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.3"/>
                                                </filter>
                                            </defs>
                                            
                                            <polygon
                                                points="40,10 66,25 66,55 40,70 14,55 14,25"
                                                fill={`url(#grad-${index})`}
                                                stroke="rgba(255,255,255,0.8)"
                                                strokeWidth="2"
                                                filter={`url(#shadow-${index})`}
                                                className="transition-all duration-300 group-hover:fill-white group-hover:stroke-white"
                                            />
                                            
                                            {/* Center Circle with Color */}
                                            <circle
                                                cx="40"
                                                cy="40"
                                                r="18"
                                                fill={colors[index]}
                                                className="transition-all duration-300"
                                            />
                                        </svg>
                                        
                                        {/* Event Icon */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="transform transition-all duration-300 group-hover:scale-110">
                                                <div className="w-8 h-8 text-white">
                                                    {eventIcons[index]}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Tooltip */}
                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-6 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none transform group-hover:translate-y-1">
                                        <div className="bg-white/95 backdrop-blur-md text-gray-900 px-4 py-3 rounded-xl text-base font-semibold whitespace-nowrap shadow-2xl border border-white/20">
                                            {event.title}
                                            {/* Tooltip Arrow */}
                                            <div className="absolute top-full left-1/2 -translate-x-1/2">
                                                <div className="border-6 border-transparent border-t-white/95" style={{borderTopWidth: '6px', borderLeftWidth: '6px', borderRightWidth: '6px'}} />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Timeline - Vertical */}
                    <div className="md:hidden px-4">
                        {/* Timeline Events */}
                        <div className="flex flex-col gap-8 relative">
                            {/* Vertical Timeline Line - Positioned relative to hexagons */}
                            <div className="absolute left-[35px] top-0 bottom-0 w-1 bg-gradient-to-b from-white/20 via-white/40 to-white/20 rounded-full" />
                            
                            {events.slice(0, 5).map((event, index) => (
                                <motion.div
                                    key={event.title}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ 
                                        duration: 0.5, 
                                        delay: 0.8 + (index * 0.15),
                                        type: "spring",
                                        stiffness: 150,
                                        damping: 12
                                    }}
                                    className="relative group cursor-pointer flex items-center"
                                >
                                    {/* Glow Effect */}
                                    <div className="absolute left-0 inset-y-0 opacity-0 group-active:opacity-100 transition-opacity duration-300">
                                        <div 
                                            className="absolute inset-0 rounded-full blur-xl scale-150"
                                            style={{ backgroundColor: colors[index] }}
                                        />
                                    </div>
                                    
                                    {/* Hexagon Shape - Positioned Left, Bigger */}
                                    <div className="relative flex-shrink-0">
                                        <svg 
                                            width="70" 
                                            height="70" 
                                            viewBox="0 0 80 80" 
                                            className="transform transition-all duration-300 group-active:scale-105 drop-shadow-2xl filter"
                                        >
                                            <defs>
                                                <linearGradient id={`grad-mobile-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                                    <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
                                                    <stop offset="100%" stopColor="rgba(255,255,255,0.85)" />
                                                </linearGradient>
                                                <filter id={`shadow-mobile-${index}`}>
                                                    <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.3"/>
                                                </filter>
                                            </defs>
                                            
                                            <polygon
                                                points="40,10 66,25 66,55 40,70 14,55 14,25"
                                                fill={`url(#grad-mobile-${index})`}
                                                stroke="rgba(255,255,255,0.8)"
                                                strokeWidth="2"
                                                filter={`url(#shadow-mobile-${index})`}
                                                className="transition-all duration-300"
                                            />
                                            
                                            {/* Center Circle with Color */}
                                            <circle
                                                cx="40"
                                                cy="40"
                                                r="18"
                                                fill={colors[index]}
                                                className="transition-all duration-300"
                                            />
                                        </svg>
                                        
                                        {/* Event Icon */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="transform transition-all duration-300">
                                                <div className="w-4 h-4">
                                                    {eventIcons[index]}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Mobile Event Title - Positioned Right with Wrapping */}
                                    <div className="ml-4 flex-1">
                                        <div className="text-white font-semibold text-base leading-tight max-w-[200px] break-words">
                                            {event.title}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
            
            {/* Call-to-Action Button */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
                className="flex justify-center mt-16"
            >
                <Link href="/gallery">
                    <button className="bg-white/90 hover:bg-white text-gray-900 font-bold py-4 px-8 rounded-full text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-white/20">
                        Explore Our Journey
                        <svg className="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </button>
                </Link>
            </motion.div>
        </div>
    );
}