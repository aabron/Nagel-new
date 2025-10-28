'use client';

import React, { useEffect, useState } from 'react';
import Navbar from "@/components/NavBar";
import ServicesSection from '@/components/Services';
import Footer from '@/components/Footer';
import Companies from '@/components/Companies'
import About from '@/components/About';

function Hero()
{
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        //simulating a delay before content fades in (you can adjust this timing)
        const timeout = setTimeout(() => {
          setIsLoaded(true);
        }, 200);
    
        //clean up the timeout
        return () => clearTimeout(timeout);
      }, []);


    return(
      <div className="min-h-screen w-full bg-white dark:bg-gray-900">
        {/* Navbar */}
        <Navbar/>
        <div id='sections' className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {/* Hero Section */}
            <section className="relative bg-slate-50 dark:bg-gray-900">
                <div className="container mx-auto px-6 py-20 lg:py-28">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Content */}
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-tight">
                                    <span className="text-blue-600">Controls</span> Engineering
                                    <br />
                                    <span className="text-slate-600 dark:text-slate-300">Solutions</span>
                                </h1>
                                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                                Nagel Controls transforms your operations, from essential production support to cutting-edge automation solutions.
                                </p>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="#services" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors justify-center inline-flex items-center justify-center">
                                    <span>Explore Services</span>
                                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </a>
                                <a href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors justify-center inline-flex items-center justify-center">
                                    <span>Get Quote</span>
                                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                </a>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200 dark:border-slate-700">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600">15+</div>
                                    <div className="text-sm text-slate-600 dark:text-slate-400">Years Experience</div>
                                </div>
                                 <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600">100+</div>
                                    <div className="text-sm text-slate-600 dark:text-slate-400">Projects Completed</div>
                                </div>
                            </div>
                        </div>

                        {/* Video */}
                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-200 dark:bg-slate-800">
                                <video 
                                    src='https://nagel-images.s3.us-east-1.amazonaws.com/8mb.video-4xe-sFKpjee3.mp4' 
                                    autoPlay 
                                    loop 
                                    muted 
                                    playsInline 
                                    className='w-full h-auto'
                                />
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600 rounded-full opacity-20 blur-xl"></div>
                            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-emerald-500 rounded-full opacity-20 blur-xl"></div>
                        </div>
                    </div>
                </div>
            </section>
    
            {/* Services Section */}
            <section id="services" className="py-20 bg-slate-50 dark:bg-gray-900">
                <ServicesSection/>
            </section>
            
            {/* About */}
            <section id="about" className="py-20 bg-slate-50 dark:bg-gray-800">
                <About/>
            </section> 

            {/* Companies Section*/}
            <section id='companies' className="py-20 bg-slate-50 dark:bg-gray-900">
              <div className="container mx-auto text-center mb-12">
                  <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Trusted by Industry Leaders</h2>
                  <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                    We're proud to work with leading companies across the automotive and manufacturing industries.
                  </p>
              </div>
              <Companies/>
            </section>

            {/* Footer Section */}
            <Footer/>
        </div>
      </div>
    );
}

export default Hero