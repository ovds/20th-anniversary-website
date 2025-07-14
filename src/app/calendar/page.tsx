'use client';

import React from 'react';
import { Popover } from '@headlessui/react';
import Link from 'next/link';
import { timelineEvents } from '@/types/timeline';

export default function CalendarPage() {
    return (
        <main className="min-h-screen pt-20 p-8">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <Link href="/" className="text-gray-600 hover:text-gray-900 flex items-center gap-2">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        Back to Home
                    </Link>
                </div>

                <h1 className="text-3xl font-bold mb-8">20th Anniversary Events</h1>

                <div className="space-y-8">
                    {timelineEvents.map((event, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                            <div className="space-y-4">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-2xl font-semibold text-gray-900">{event.title}</h3>
                                    {event.featured && (
                                        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                                            ✨ Featured
                                        </span>
                                    )}
                                </div>
                                <p className="text-lg text-gray-700">{event.description}</p>
                                
                                {/* Highlights */}
                                <div className="flex flex-wrap gap-2">
                                    {event.highlights.map((highlight, i) => (
                                        <span 
                                            key={i}
                                            className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm"
                                        >
                                            {highlight}
                                        </span>
                                    ))}
                                </div>

                                {/* Expandable full story */}
                                <Popover className="relative">
                                    <Popover.Button className="text-blue-600 hover:text-blue-800 font-medium">
                                        Read full story →
                                    </Popover.Button>

                                    <Popover.Panel className="absolute z-10 w-96 p-4 mt-2 bg-white rounded-lg shadow-xl border">
                                        <div className="space-y-3">
                                            <h4 className="font-semibold text-lg">{event.title}</h4>
                                            <p className="text-gray-600 text-sm">{event.fullStory}</p>
                                        </div>
                                    </Popover.Panel>
                                </Popover>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
} 