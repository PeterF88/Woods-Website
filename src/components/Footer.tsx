import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

                    {/* Column 1: Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Woods Tennis Center</h3>
                        <p className="mb-2">401 S 33rd St</p>
                        <p className="mb-2">Lincoln, NE 68510</p>
                        <p className="mb-4">(402) 441-7095</p>
                        <a href="mailto:woodsleagues@gmail.com" className="text-green-400 hover:text-green-300">
                            woodsleagues@gmail.com
                        </a>
                    </div>

                    {/* Column 2: Mission */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Taking the Game to the Community</h3>
                        <p className="text-gray-400 mb-4">
                            Woods Tennis Center is a NJTL site committed to our mission; taking the game to the community.
                            Offering tennis and educational programing in Lincoln, Nebraska.
                        </p>
                    </div>

                    {/* Column 3: Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Connect</h3>
                        <div className="flex space-x-4 mb-6">
                            <a href="#" className="hover:text-green-400"><Facebook /></a>
                            <a href="#" className="hover:text-green-400"><Instagram /></a>
                            <a href="#" className="hover:text-green-400"><Twitter /></a>
                        </div>
                        <button className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded w-full md:w-auto">
                            Join Our Mailing List
                        </button>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
                    <p>&copy; 2025 by Woods Tennis Center. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};
