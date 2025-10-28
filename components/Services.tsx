import React from 'react';

const ServiceCard = ({ title, description, img, icon }: { title: string, description: string, img: string, icon: string }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-lg border border-slate-200 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 overflow-hidden dark:bg-gray-900 dark:border-gray-700 max-w-[400px]">
      {/* Image */}
      <div className="relative lg:h-132 h-48 overflow-hidden">
        <img 
          src={img} 
          className='w-full h-full object-contain group-hover:scale-105 transition-transform duration-300' 
          alt={`${title} service`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-blue-100 rounded-lg mr-4">
            <div className="text-blue-600 text-xl">{icon}</div>
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
        </div>
        <p className='text-slate-600 leading-relaxed dark:text-slate-300'>{description}</p>
        
        {/* Learn More Link */}
        {/* <div className="mt-6">
          <button className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors">
            Learn More
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div> */}
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: 'Poka Yoke and Vision Systems',
      description: 'Error-proofing systems engineered for accuracy, consistency, and quality assurance.',
      img: '20240208_141110.jpg',
      icon: '🔧'
    },
    {
      title: 'Seamless Automation',
      description: 'Fully integrated automation systems built for performance and reliability.',
      img: 'machine.jpg',
      icon: '⚙️'
    },
    {
      title: 'Panel Building',
      description: 'We provide turnkey panel building solutions, from schematic design to final assembly.',
      img: 'cabinet.jpg',
      icon: '🔌'
    },
    {
      title: 'PLC and HMI Programming',
      description: 'From logic to interface, we build complete PLC and HMI solutions built for performance and ease of use.',
      img: 'Capture.PNG',
      icon: '💻'
    },
    {
      title: 'Robot Programming',
      description: 'End-to-end robot programming, from setup to system optimization.',
      img: 'IMG_0493.jpeg',
      icon: '🤖'
    },
    // {
    //   title: 'Automation Solutions',
    //   description: 'Introducing end-to-end automation solutions for factory operations.',
    //   img: '/site-images/slide3.jpg',
    // },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
          We build solutions that make automation simple, effective, and perfectly suited to your operation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row lg:flex-wrap lg:justify-center gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              img={service.img}
              icon={service.icon}
            />
          ))}
        </div>

        {/* CTA Section
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Every project is unique. Let us design a custom controls engineering solution that perfectly fits your requirements.
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Get Custom Quote
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ServicesSection;
