"use client"

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { timelineEvents } from "@/types/timeline";
import { shuffleArray } from "@/lib/utils";
import { imageMapping } from "@/lib/imageMapping";

export default function HomePage() {
    const [videoEnded, setVideoEnded] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState<typeof timelineEvents[0] | null>(null);
    
    const shuffledEvents = useMemo(() => {
        if (!timelineEvents || timelineEvents.length === 0) {
            return [];
        }
        try {
            console.log('Original events:', timelineEvents.map(e => e?.title || 'INVALID'));
            const shuffled = shuffleArray([...timelineEvents]);
            console.log('After shuffle:', shuffled.map(e => e?.title || 'INVALID'));
            const filtered = shuffled.filter(event => {
                const isValid = event && typeof event === 'object' && event.title;
                if (!isValid) console.log('Filtered out:', event);
                return isValid;
            });
            console.log('Final filtered events:', filtered.map(e => e.title));
            return filtered;
        } catch (error) {
            console.error('Error shuffling events:', error);
            return timelineEvents;
        }
    }, []);

    return (
        <div className="relative min-h-screen">
            {/* Video container */}
            <div className={`fixed inset-0 z-0 transition-opacity duration-1000 ${videoEnded ? 'opacity-0' : 'opacity-100'}`}>
                <video
                    autoPlay
                    muted
                    onEnded={() => setVideoEnded(true)}
                    className="object-cover w-full h-full"
                >
                    <source src="/imgs/draft1.webm" type="video/webm" />
                    <source src="/imgs/draft1.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Timeline container */}
            <div
                className={`relative z-10 min-h-screen pt-24 pb-20 transition-opacity duration-1000 ${
                    videoEnded ? 'opacity-100' : 'opacity-0'
                }`}
            >
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-24"
                    >
                        <h1 className="text-5xl font-bold text-center text-white">
                            20th Anniversary Events
                        </h1>
                        <Separator className="my-8 w-1/3 mx-auto h-[2px]" />
                    </motion.div>

                    <div className="relative max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                            {shuffledEvents.filter(Boolean).map((event, index) => {
                                if (!event || !event.title) return null;
                                
                                const animationDelay = (index * 0.15) % 1.0;
                                const imageSrc = imageMapping[event.imageKey as keyof typeof imageMapping];
                                
                                return (
                                    <motion.div
                                        key={`${event.title}-${index}`}
                                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                        viewport={{ once: true, margin: "0px 0px -15% 0px" }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 100,
                                            damping: 20,
                                            delay: animationDelay
                                        }}
                                        className="relative group cursor-pointer"
                                        onClick={() => {
                                            console.log('Clicked event:', event.title, event);
                                            setSelectedEvent(event);
                                        }}
                                    >
                                        <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl h-[400px] hover:scale-[1.02] transform">
                                            {/* Background Image */}
                                            <div 
                                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                                style={{ backgroundImage: `url('${imageSrc}')` }}
                                            />
                                            
                                            {/* Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/20" />
                                            
                                            {/* Additional dark overlay at bottom */}
                                            <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/80 to-transparent" />
                                            
                                            {/* Content */}
                                            <div className="relative h-full px-6 pb-8 pt-6 flex flex-col justify-end text-white drop-shadow-lg">
                                                <div className="space-y-3">
                                                    <h3 className="font-bold leading-tight text-xl lg:text-2xl">
                                                        {event.title}
                                                    </h3>
                                                    
                                                    <p className="text-white leading-relaxed">
                                                        {event.description}
                                                    </p>
                                                    
                                                    {/* Highlights */}
                                                    <div className="flex flex-wrap gap-2">
                                                        {event.highlights.slice(0, 3).map((highlight, i) => (
                                                            <span 
                                                                key={i}
                                                                className="bg-white/30 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium"
                                                            >
                                                                {highlight}
                                                            </span>
                                                        ))}
                                                    </div>
                                                    
                                                    {/* Read More Indicator */}
                                                    <div className="flex items-center gap-2 text-sm font-medium opacity-90 group-hover:opacity-100 transition-opacity">
                                                        <span>Read full story</span>
                                                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Full Story Modal */}
            <AnimatePresence>
                {selectedEvent && (
                    (() => console.log('Rendering modal for:', selectedEvent.title))(),
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedEvent(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header with Image */}
                            <div className="relative h-64 md:h-80">
                                <div 
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: `url('${imageMapping[selectedEvent.imageKey as keyof typeof imageMapping]}')` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                
                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedEvent(null)}
                                    className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                
                                {/* Title Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <h2 className="text-3xl md:text-4xl font-bold mb-2">{selectedEvent.title}</h2>
                                    <p className="text-lg text-white/90">{selectedEvent.description}</p>
                                </div>
                            </div>
                            
                            {/* Content */}
                            <div className="p-6 md:p-8 overflow-y-auto max-h-[50vh]">
                                {/* Highlights */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {selectedEvent.highlights.map((highlight, i) => (
                                        <span 
                                            key={i}
                                            className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                                        >
                                            {highlight}
                                        </span>
                                    ))}
                                </div>
                                
                                {/* Full Story */}
                                <div className="prose prose-lg max-w-none">
                                    {selectedEvent.fullStory.split('\n').map((paragraph, i) => (
                                        <p key={i} className="mb-4 text-gray-700 leading-relaxed">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}