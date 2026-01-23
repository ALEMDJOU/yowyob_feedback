"use client";

import React from 'react';
import LinkedInNavbar from '@/components/layout/LinkedInNavbar';
import IdentityCard from '@/components/layout/IdentityCard';
import RightSidebar from '@/components/layout/RightSidebar';
import PostCreationWidget from '@/components/feed/PostCreationWidget';
import MobileBottomNav from '@/components/layout/MobileBottomNav';

export default function DashboardClient({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen pt-[70px] bg-[#0c0b0b] text-gray-100">
            <LinkedInNavbar />

            {/* FULL WIDTH LAYOUT - Removed 'container' constraint */}
            <main className="w-full max-w-[1920px] mx-auto px-0 md:px-4 lg:px-6 xl:px-8 py-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* Left Sidebar - Fixed width on large screens */}
                    <aside className="hidden md:block md:col-span-3 lg:col-span-3 xl:col-span-2">
                        <IdentityCard />
                    </aside>

                    {/* Main Feed - Flexible width */}
                    <section className="md:col-span-9 lg:col-span-6 xl:col-span-7">
                        {children}
                    </section>

                    {/* Right Sidebar - Fixed width */}
                    <aside className="hidden lg:block lg:col-span-3 xl:col-span-3">
                        <RightSidebar />
                    </aside>
                </div>
            </main>

            <MobileBottomNav />
        </div>
    );
}
