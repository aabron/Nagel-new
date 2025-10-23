import React, { useState } from "react";
// import DarkModeToggle from "../DarkModeToggle";
import Link from "next/link";
import { isMobile } from "react-device-detect";

const Navbar = ({ isNotHome }: { isNotHome?: boolean }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 dark:bg-gray-900/95 dark:border-gray-700">
            <div className="container mx-auto px-6">
                {isMobile ? (
                    <>
                        {/* Mobile Layout */}
                        <div className="flex items-center justify-between h-20">
                            {/* Logo */}
                            <Link href="/" className="flex items-center">
                                <img 
                                    className="h-12 w-auto" 
                                    src="/site-images/nagel_nobg.png" 
                                    alt="Nagel Controls Logo" 
                                />
                            </Link>
                            
                            {/* Mobile Menu Button */}
                            <button
                                onClick={handleMenuToggle}
                                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-gray-800 transition-colors"
                                aria-label="Toggle menu"
                            >
                                <div className="space-y-1.5">
                                    <div className={`w-6 h-0.5 bg-slate-700 dark:bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                                    <div className={`w-6 h-0.5 bg-slate-700 dark:bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                                    <div className={`w-6 h-0.5 bg-slate-700 dark:bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                                </div>
                            </button>
                        </div>

                        {/* Mobile Dropdown Menu */}
                        {isMenuOpen && (
                            <div className="pb-6 space-y-3">
                                <Link
                                    href='/recent-projects'
                                    className="block text-center py-3 px-4 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
                                    onClick={handleMenuToggle}
                                >
                                    Recent Projects
                                </Link>
                                <Link
                                    href='/contact'
                                    className="block text-center py-3 px-4 rounded-lg bg-slate-100 text-slate-700 font-medium hover:bg-slate-200 transition-colors dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                                    onClick={handleMenuToggle}
                                >
                                    Contact Us
                                </Link>
                            </div>
                        )}
                    </>
                ) : (
                    /* Desktop Layout */
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center">
                            <img 
                                className="h-16 w-auto" 
                                src="nagel_nobg.png" 
                                alt="Nagel Controls Logo" 
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="flex items-center space-x-6">
                            {/* Navigation Links */}
                            <div className="hidden md:flex items-center space-x-8">
                                <a 
                                    href={isNotHome ? "/#services" : "#services"} 
                                    className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
                                >
                                    Services
                                </a>
                                <a 
                                    href={isNotHome ? "/#about" : "#about"} 
                                    className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
                                >
                                    About
                                </a>
                                <a 
                                    href={isNotHome ? "/#companies" : "#companies"} 
                                    className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
                                >
                                    Clients
                                </a>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex items-center space-x-4">
                                <Link
                                    href='/recent'
                                    className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
                                >
                                    Projects
                                </Link>
                                <Link
                                    href='/contact'
                                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors justify-center inline-flex items-center justify-center"
                                >
                                    Get Quote
                                </Link>
                                {/* <DarkModeToggle /> */}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;