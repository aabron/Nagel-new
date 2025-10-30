import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <img 
                className="h-32 w-auto mb-4 invert" 
                src="Nagel_Controls-removebg-preview.png" 
                alt="Nagel Controls Logo" 
              />
              <p className="text-slate-300 leading-relaxed max-w-md">
                Re-envisioning controls engineering with innovative solutions and proven expertise. 
                Serving the Detroit area and beyond with professional automation solutions.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/nagel-controls/" 
                className="flex items-center justify-center w-10 h-10 bg-slate-800 rounded-lg hover:bg-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-300 hover:text-blue-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/recent-projects" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Recent Projects
                </a>
              </li>
              <li>
                <a href="#companies" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Our Clients
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <svg className="w-5 h-5 mt-1 mr-3 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <a 
                    href="mailto:richard.nagel@nagelcontrols.com" 
                    className="text-slate-300 hover:text-blue-400 transition-colors"
                  >
                    richard.nagel@nagelcontrols.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-5 h-5 mt-1 mr-3 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <span className="text-slate-300">+1 (517) 499 7264</span>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-5 h-5 mt-1 mr-3 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <span className="text-slate-300">1175 Rickett rd, Suite 1, Brighton, MI</span>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="text-slate-400 mb-4 md:mb-0">
            <p>&copy; 2024 Nagel Controls LLC. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
