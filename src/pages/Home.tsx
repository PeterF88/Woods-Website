import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Trophy, Users, Heart, Activity } from 'lucide-react';

export const Home = () => {
    return (
        <div className="flex flex-col">
            {/* HERO SECTION - Centered, Impactful Slogan */}
            {/* Mimic OPRC: Large centered text, background image/color */}
            <section className="relative bg-[var(--color-secondary)] text-white py-32 md:py-48 flex items-center justify-center overflow-hidden">
                {/* Abstract BG elements to replace images */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#000080] to-[#004080] opacity-90 z-0"></div>
                <div className="absolute top-0 left-0 w-full h-full opacity-10 z-0">
                    <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-white blur-3xl"></div>
                    <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[var(--color-primary)] blur-3xl"></div>
                </div>

                <div className="container relative z-10 text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight leading-none">
                        Taking the Game<br />
                        <span className="text-[var(--color-accent)]">To The Community</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto font-light text-blue-100">
                        Lincoln's premier public tennis facility. Welcoming players of all ages and standards.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/group-classes" className="bg-[#87CEEB] text-[#000080] px-8 py-4 rounded-sm font-bold tracking-widest uppercase hover:bg-white transition shadow-lg">
                            Find A Class
                        </Link>
                        <Link to="/pricing" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-sm font-bold tracking-widest uppercase hover:bg-white hover:text-[#000080] transition shadow-lg">
                            View Pricing
                        </Link>
                    </div>
                </div>
            </section>

            {/* FEATURE ROW - 4 Columns (OPRC: Learn To Play, Find Team, Get Fit, Live Healthy) */}
            <section className="bg-gray-50 border-b border-gray-200">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200">

                        {/* Column 1 */}
                        <div className="p-10 text-center hover:bg-white transition duration-300 group cursor-pointer">
                            <div className="flex justify-center mb-4 text-[var(--color-primary)] group-hover:scale-110 transition-transform">
                                <Trophy size={48} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-black uppercase tracking-wider mb-2 text-gray-800">Learn To Play</h3>
                            <p className="text-gray-500 text-sm mb-4">Junior & Adult Classes. Private & Group Lessons.</p>
                            <Link to="/group-classes" className="inline-flex items-center text-[var(--color-secondary)] font-bold uppercase text-sm tracking-wide group-hover:underline">
                                Programs <ArrowRight size={14} className="ml-1" />
                            </Link>
                        </div>

                        {/* Column 2 */}
                        <div className="p-10 text-center hover:bg-white transition duration-300 group cursor-pointer">
                            <div className="flex justify-center mb-4 text-[var(--color-primary)] group-hover:scale-110 transition-transform">
                                <Users size={48} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-black uppercase tracking-wider mb-2 text-gray-800">Find Your Team</h3>
                            <p className="text-gray-500 text-sm mb-4">In-House Tournaments, Leagues & Club Events.</p>
                            <Link to="/in-house-tournaments" className="inline-flex items-center text-[var(--color-secondary)] font-bold uppercase text-sm tracking-wide group-hover:underline">
                                Tournaments <ArrowRight size={14} className="ml-1" />
                            </Link>
                        </div>

                        {/* Column 3 */}
                        <div className="p-10 text-center hover:bg-white transition duration-300 group cursor-pointer">
                            <div className="flex justify-center mb-4 text-[var(--color-primary)] group-hover:scale-110 transition-transform">
                                <Activity size={48} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-black uppercase tracking-wider mb-2 text-gray-800">Get Active</h3>
                            <p className="text-gray-500 text-sm mb-4">Cardio Tennis & Adaptive Wheelchair Programs.</p>
                            <Link to="/cardio" className="inline-flex items-center text-[var(--color-secondary)] font-bold uppercase text-sm tracking-wide group-hover:underline">
                                Fitness <ArrowRight size={14} className="ml-1" />
                            </Link>
                        </div>

                        {/* Column 4 */}
                        <div className="p-10 text-center hover:bg-white transition duration-300 group cursor-pointer">
                            <div className="flex justify-center mb-4 text-[var(--color-primary)] group-hover:scale-110 transition-transform">
                                <Heart size={48} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-black uppercase tracking-wider mb-2 text-gray-800">GIVE BACK</h3>
                            <p className="text-gray-500 text-sm mb-4">NJTL Outreach & Community Closet.</p>
                            <Link to="/outreach" className="inline-flex items-center text-[var(--color-secondary)] font-bold uppercase text-sm tracking-wide group-hover:underline">
                                Foundation <ArrowRight size={14} className="ml-1" />
                            </Link>
                        </div>

                    </div>
                </div>
            </section>

            {/* LEGACY / ABOUT SECTION (Left Text, Right Abstract/Image place) */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <h4 className="text-[var(--color-accent)] font-bold uppercase tracking-widest mb-2">Our Mission</h4>
                        <h2 className="text-4xl md:text-5xl font-black text-[var(--color-primary)] mb-6 leading-tight uppercase">
                            Taking the Game <br />to the Community
                        </h2>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            Located in the center of Lincoln, Nebraska, we are the largest public tennis facility in the city.
                            Since our founding, we have grown and transformed into a destination for tennis players of all ages and skill levels.
                            We aim to continue our legacy by providing inclusive, high-quality programming for everyone.
                        </p>
                        <div className="flex gap-4">
                            <Link to="/our-story" className="bg-[var(--color-primary)] text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-[#004d00] transition">
                                Our Story
                            </Link>
                            <Link to="/our-team" className="border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-8 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-[var(--color-primary)] hover:text-white transition">
                                Meet The Team
                            </Link>
                        </div>
                    </div>
                    <div className="lg:w-1/2 relative h-[400px] w-full bg-gray-100 rounded-lg overflow-hidden shadow-2xl skew-y-2">
                        {/* Abstract shapes to represent image placeholder */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-green-100 to-blue-50"></div>
                        <div className="absolute top-10 left-10 right-10 bottom-10 border-4 border-[var(--color-primary)] opacity-20"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-gray-400 font-bold text-xl uppercase tracking-widest">Facility Image Placeholder</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* GALLERY GRID (Feature Cards) */}
            <section className="py-24 bg-[var(--color-bg-light)]">
                <div className="container mx-auto px-4 text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-[#000080] uppercase tracking-wider mb-4">Experience The Club</h2>
                    <div className="w-24 h-1 bg-[var(--color-accent)] mx-auto"></div>
                </div>

                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="group relative h-80 bg-white shadow-lg overflow-hidden cursor-pointer">
                            <div className="absolute inset-0 bg-gray-800 group-hover:scale-105 transition-transform duration-500"></div>
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                            <div className="absolute bottom-0 left-0 p-8 text-white">
                                <h3 className="text-2xl font-bold uppercase tracking-wide mb-2">30+ Courts</h3>
                                <p className="opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300 text-sm font-medium">
                                    Indoor & Outdoor hard courts for year-round play.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="group relative h-80 bg-white shadow-lg overflow-hidden cursor-pointer">
                            <div className="absolute inset-0 bg-[#006400] group-hover:scale-105 transition-transform duration-500"></div>
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                            <div className="absolute bottom-0 left-0 p-8 text-white">
                                <h3 className="text-2xl font-bold uppercase tracking-wide mb-2">Pro Shop</h3>
                                <p className="opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300 text-sm font-medium">
                                    Get geared up with the latest racquets and apparel.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="group relative h-80 bg-white shadow-lg overflow-hidden cursor-pointer">
                            <div className="absolute inset-0 bg-[#000080] group-hover:scale-105 transition-transform duration-500"></div>
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                            <div className="absolute bottom-0 left-0 p-8 text-white">
                                <h3 className="text-2xl font-bold uppercase tracking-wide mb-2">Community Closet</h3>
                                <p className="opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300 text-sm font-medium">
                                    Access to equipment for everyone in the community.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER CTA (Already in App Footer, but maybe an extra prompt) */}
            <section className="py-20 bg-[var(--color-primary)] text-center text-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold uppercase tracking-widest mb-8">Ready To Play?</h2>
                    <Link to="/contact" className="inline-block bg-white text-[var(--color-primary)] px-10 py-4 font-bold uppercase tracking-widest hover:bg-gray-100 transition shadow-xl">
                        Contact Us Today
                    </Link>
                </div>
            </section>
        </div>
    );
};
