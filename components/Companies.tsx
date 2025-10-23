import React from 'react';

const CompanyLogos = () => {
  const companyLogos = [
    {
      src: 'https://www.treetowntech.com/wp-content/uploads/2025/02/Treetown_Tech_WHITE_Logo.webp',
      alt: 'Treetown Tech',
      name: 'Treetown Tech'
    },
    {
      src: '/KM.jpg',
      alt: 'KM',
      name: 'KM'
    },
    {
      src: 'https://www.stellantis.com/content/dam/stellantis-corporate/assets/stell-logo-white.svg',
      alt: 'Stellantis',
      name: 'Stellantis'
    },
    {
      src: 'https://www.yanfeng.com/sites/default/files/YF_logo_AI_8.png',
      alt: 'Yanfeng',
      name: 'Yanfeng'
    },
    {
      src: 'https://www.permobil.com/icons/Permobil_logo.svg',
      alt: 'Permobil',
      name: 'Permobil'
    },

    {
      src: 'https://www.wichita.edu/industry_and_defense/NIAR/images/Official-NIAR-Logo-White-Text.png',
      alt: 'NIAR',
      name: 'NIAR'
    },
    {
      src: 'https://media.licdn.com/dms/image/v2/C4D0BAQFUx-z9dtQENQ/company-logo_200_200/company-logo_200_200/0/1672823771627/ewellix_logo?e=1762992000&v=beta&t=667uZirlWZvBP0-pMZv66k1F58MrcYdI7AX9Wq-5Se8',
      alt: 'Ewellix',
      name: 'Ewellix'
    },
    {
      src: 'https://i0.wp.com/www.intevaproducts.com/wp-content/uploads/2025/06/inteva-logo.png?fit=1200%2C247&ssl=1',
      alt: 'Inteva',
      name: 'DMS'
    }
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-6">
        {/* Logo Grid */}
        <div className="flex flex-wrap justify-center gap-8 items-center">
          {companyLogos.map((company, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center p-6 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-lg hover:border-blue-200 transition-all duration-300 min-h-[100px] max-w-[200px] max-h-[150px]"
            >
              <img 
                src={company.src} 
                alt={`${company.name} logo`} 
                className={`max-w-full max-h-28 w-auto h-[100px] object-contain transition-all duration-300 ${company.name === 'Treetown Tech' || company.name === 'Stellantis' || company.name === 'DMS' ? 'invert' : ''}`}
              />
            </div>
          ))}
        </div>

        {/* Testimonial Section */}
        
        {/* <div className="mt-20">
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">What Our Clients Say</h3>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Don't just take our word for it - hear from the companies we've helped succeed.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
                <div className="flex items-start mb-4">
                  <div className="flex text-yellow-400 mr-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-slate-600 mb-4 italic">
                  "Nagel Controls delivered exceptional results on our automation project. Their expertise in PLC programming and attention to detail made all the difference."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-medium text-sm">JD</span>
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">John Doe</div>
                    <div className="text-sm text-slate-600">Manufacturing Engineer</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
                <div className="flex items-start mb-4">
                  <div className="flex text-yellow-400 mr-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-slate-600 mb-4 italic">
                  "Professional, reliable, and innovative. Nagel Controls helped us solve complex automation challenges with creative solutions."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-medium text-sm">SM</span>
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">Sarah Miller</div>
                    <div className="text-sm text-slate-600">Plant Manager</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help optimize your operations with our proven controls engineering solutions.
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Start Your Project
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;