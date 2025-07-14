'use client';

import React from 'react';
import Link from 'next/link';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { timelineEvents } from '@/types/timeline';

export default function CalendarPreview() {
    // Just show the first featured event since we don't have dates anymore
    const featuredEvent = timelineEvents.find(event => event.featured) || timelineEvents[0];

    return (
        <Link href="/calendar">
            <div className="bg-white rounded-3xl p-6 hover:shadow-lg transition-all cursor-pointer">
                <div className="mb-2 flex items-center gap-2">
                    <CalendarIcon className="h-5 w-5 text-gray-600" />
                    <div className="flex gap-2">
                        {featuredEvent.highlights.slice(0, 2).map((highlight, i) => (
                            <span key={i} className="bg-gray-100 text-sm rounded-full px-3 py-1">
                                {highlight}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="text-gray-400">Featured Event</div>
                <div className="text-xl font-bold">{featuredEvent.title}</div>
            </div>
        </Link>
    );
} 