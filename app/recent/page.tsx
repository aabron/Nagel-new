'use client';

import React, { useState } from "react";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

function Recent() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [mediaIndex, setMediaIndex] = useState(0);
    
    const projects = [
        {
            title: "Y2 Punch Press",
            description: "The Machine to the right is the Y2 punch press. A punch press that was programmed and had the panel built by us at Nagel Controls. The product is going to Mexico and had the HMI translated into spanish as well. The cabinet utilizes a Siemenes plc.",
            technologies: ["Siemens PLC", "HMI Programming", "Spanish Translation", "Panel Building"],
            images: [
                "machine.jpg",
                "wiring.jpg"
            ]
        },
        {
            title: "Permobil Wheelchair Assembly",
            description: "This was a table created for PerMobil. The purpose was to measure the distance between the wheels in order to make sure that both wheels were straight. Otherwise the wheelchair would not move correctly. Using Keyence cameras we created a setup where a camera measures the width between them and tells the operator whether or not is within acceptable margins.",
            technologies: ["Keyence Vision Systems", "Quality Control", "Precision Measurement", "Assembly Automation"],
            images: ["20240208_141110.jpg"]
        },
        {
            title: "KM Bezel Press",
            description: "Automated bezel pressing system for KM automotive components. This precision system ensures consistent pressure and positioning for quality automotive interior parts production.",
            technologies: ["Precision Pressing", "Automotive Components", "Quality Assurance", "Automated Systems"],
            images: ["KM Bezel Presslam-1.jpg"]
        },
        {
            title: "311D Sonic Welding",
            description: "Two robot cell utilizing Fanuc robots to weld leather to plastic via sonic welding. The sonic welding is done via a Sonopet J2, the machine has been sent to Mexico for installation at Inoac.",
            technologies: ["Fanuc Robotics", "Sonic Welding", "Sonopet J2", "Automated Welding"],
            images: ["IMG_9629.JPG"],
            videos: ["https://nagel-images.s3.us-east-1.amazonaws.com/8mb.video-4xe-sFKpjee3.mp4", "https://nagel-images.s3.us-east-1.amazonaws.com/IMG_9633.mp4"]
        }
    ];

    const getCurrentProjectMedia = () => {
        const project = projects[currentIndex];
        return [...project.images, ...(project.videos || [])];
    };

    const nextMedia = () => {
        const mediaLength = getCurrentProjectMedia().length;
        setMediaIndex((prev) => prev === mediaLength - 1 ? 0 : prev + 1);
    };

    const prevMedia = () => {
        const mediaLength = getCurrentProjectMedia().length;
        setMediaIndex((prev) => prev === 0 ? mediaLength - 1 : prev - 1);
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        );
        setMediaIndex(0);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
        setMediaIndex(0);
    };

    return(
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <Navbar isNotHome={true} />
            
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-20">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                        Recent <span className="text-blue-600">Projects</span>
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Explore our latest controls engineering solutions and see how we've helped companies 
                        optimize their automation systems and manufacturing processes.
                    </p>
                </div>
            </section>

            {/* Projects Showcase */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-6">
                    {/* Project Navigation */}
                    <div className="flex justify-center mb-12">
                        <div className="flex space-x-2 bg-slate-100 dark:bg-gray-800 rounded-lg p-2">
                            {projects.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setCurrentIndex(index);
                                        setMediaIndex(0);
                                    }}
                                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                                        currentIndex === index
                                            ? 'bg-blue-600 text-white'
                                            : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-gray-700'
                                    }`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Current Project */}
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            {/* Project Info */}
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                                        {projects[currentIndex].title}
                                    </h2>
                                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                                        {projects[currentIndex].description}
                                    </p>
                                </div>

                                {/* Technologies Used */}
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                                        Technologies & Solutions
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        {projects[currentIndex].technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg text-sm font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Project Navigation Buttons */}
                                <div className="flex space-x-4">
                                    <button
                                        onClick={prevSlide}
                                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors justify-center inline-flex items-center justify-center"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                        Previous
                                    </button>
                                    <button
                                        onClick={nextSlide}
                                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors justify-center inline-flex items-center justify-center"
                                    >
                                        Next
                                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Media Display */}
                            <div className="relative">
                                <div className="bg-slate-100 dark:bg-gray-800 rounded-2xl p-8">
                                    {/* Media Navigation */}
                                    {getCurrentProjectMedia().length > 1 && (
                                        <>
                                            <button 
                                                onClick={prevMedia}
                                                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200"
                                            >
                                                <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                </svg>
                                            </button>
                                            <button 
                                                onClick={nextMedia}
                                                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200"
                                            >
                                                <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </button>
                                        </>
                                    )}
                                    
                                    {/* Current Media */}
                                    {(() => {
                                        const allMedia = getCurrentProjectMedia();
                                        const currentMedia = allMedia[mediaIndex];
                                        const isVideo = currentMedia?.endsWith('.MOV') || currentMedia?.endsWith('.mp4');

                                        return (
                                            <div className="relative rounded-xl overflow-hidden shadow-xl">
                                                {isVideo ? (
                                                    <video
                                                        src={currentMedia}
                                                        controls
                                                        muted
                                                        playsInline
                                                        className="w-full h-auto"
                                                    />
                                                ) : (
                                                    <img
                                                        src={currentMedia}
                                                        alt={`${projects[currentIndex].title} - Media ${mediaIndex + 1}`}
                                                        className="w-full h-auto object-cover"
                                                    />
                                                )}
                                            </div>
                                        );
                                    })()}

                                    {/* Media Counter */}
                                    {getCurrentProjectMedia().length > 1 && (
                                        <div className="flex justify-center mt-6 space-x-2">
                                            {getCurrentProjectMedia().map((_, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => setMediaIndex(index)}
                                                    className={`w-3 h-3 rounded-full transition-colors ${
                                                        mediaIndex === index
                                                            ? 'bg-blue-600'
                                                            : 'bg-slate-300 hover:bg-slate-400'
                                                    }`}
                                                />
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-slate-50 dark:bg-gray-800">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                        Ready to Start Your Next Project?
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
                        Let's discuss how we can help you achieve similar results with our proven controls engineering solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors justify-center inline-flex items-center justify-center">
                            Get Started Today
                        </a>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    );
}

export default Recent;