'use client';

import React from 'react';

export default function HomecomingPage() {
    return (
        <main className="min-h-screen pt-20 p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-6">Giving Back and Homecoming Day</h1>

                <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Welcome Back Alumni!</h2>
                        <p className="text-gray-600">
                            Join us as we welcome back our 17 cohorts of alumni for a day of reconnection,
                            celebration, and giving back to our school community.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Event Details</h2>
                        <div className="space-y-2">
                            <p><strong>Date:</strong> August 1st, 2024</p>
                            <p><strong>Time:</strong> TBA</p>
                            <p><strong>Location:</strong> NUS High School of Math & Science</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Program Highlights</h2>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                            <li>Alumni Sharing Sessions</li>
                            <li>Fundraising Activities</li>
                            <li>School Tours</li>
                            <li>Networking Opportunities</li>
                            <li>Commemorative Photo Sessions</li>
                        </ul>
                    </section>
                </div>
            </div>
        </main>
    );
} 