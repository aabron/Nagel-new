import React from 'react';

const About = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            About <span className="text-blue-600">Nagel Controls</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            It's important to know who you are working with. Here's a little bit about us.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Engineering Excellence Since 2021
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                We are a specialized company providing controls engineering solutions to the greater Detroit area. 
                Based out of Brighton, Michigan, with upcoming expansion to Tennessee, we focus on delivering 
                high-quality controls solutions and professional panel building.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Our expertise spans all major platforms and specifications - Allen Bradley, Siemens, and beyond. 
                We're expanding our services into tool building and design, always pushing the boundaries 
                of what's possible in controls engineering.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-slate-200 dark:bg-gray-900 dark:border-gray-700">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+ Years</div>
                <div className="text-sm text-slate-600 dark:text-slate-300">of panel building experience, programming, and troubleshooting.</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-slate-200 dark:bg-gray-900 dark:border-gray-700">
                <div className="text-3xl font-bold text-blue-600 mb-2">Multiple Processors</div>
                <div className="text-sm text-slate-600 dark:text-slate-300">We have experience with multiple PLC processors and HMI systems.</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="wiring.jpg"
                alt="Controls Engineering Work"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-600 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-500 rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>

        {/* Leadership Section */}
        <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 lg:p-12 dark:from-gray-900/95 dark:to-gray-800/95">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-slate-900 mb-4 dark:text-white">Meet Our Founder</h3>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 dark:bg-gray-900 dark:border-gray-700">
              <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
                {/* Avatar placeholder */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">RN</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <h4 className="text-2xl font-bold text-slate-900 mb-2 dark:text-white">Richard Nagel</h4>
                  <p className="text-blue-600 font-medium mb-4">Owner & Operator</p>
                  <p className="text-slate-600 leading-relaxed dark:text-slate-300">
                    With over 15 years in the industry, Richard brings a passion for providing solutions to complex problems. 
                    At Nagel Controls, we aim to re-envision how things are done in the controls world and pave our own path 
                    with new ideas and innovative methods.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">Our Approach</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Precision</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Every solution is meticulously crafted to meet your exact specifications and requirements.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Innovation</h4>
              <p className="text-slate-600 dark:text-slate-300">
                We leverage cutting-edge technology and creative problem-solving to deliver superior results.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Partnership</h4>
              <p className="text-slate-600 dark:text-slate-300">
                We work closely with our clients as partners, ensuring long-term success and satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;