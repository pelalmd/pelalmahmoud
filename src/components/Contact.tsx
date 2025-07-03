import React from 'react';
import { MessageCircle, ExternalLink } from 'lucide-react';

const Contact = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/qr/MQA62RZMUMAIJ1', '_blank');
  };

  const openKhamsat = () => {
    window.open('https://khamsat.com/user/pelal_md', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 fade-in">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6 fade-in stagger-1"></div>
          <p className="text-xl text-gray-300 fade-in stagger-2">
            Reach out for collaborations or projects
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* WhatsApp Contact */}
            <div className="bg-black border border-gray-800 rounded-lg p-8 hover:border-amber-600 transition-all duration-300 hover:scale-105 fade-in stagger-3">
              <MessageCircle className="text-amber-600 mb-4" size={40} />
              <h3 className="text-xl font-bold text-white mb-4">WhatsApp</h3>
              <p className="text-gray-300 mb-6">
                Let's discuss your project directly
              </p>
              <button 
                onClick={openWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
              >
                <MessageCircle size={20} />
                Chat Now
              </button>
            </div>

            {/* Freelance Profile */}
            <div className="bg-black border border-gray-800 rounded-lg p-8 hover:border-amber-600 transition-all duration-300 hover:scale-105 fade-in stagger-4">
              <ExternalLink className="text-amber-600 mb-4" size={40} />
              <h3 className="text-xl font-bold text-white mb-4">Freelance</h3>
              <p className="text-gray-300 mb-6">
                Check out my freelance profile
              </p>
              <button 
                onClick={openKhamsat}
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
              >
                <ExternalLink size={20} />
                View Profile
              </button>
            </div>
          </div>

          {/* Mobile Contact */}
          <div className="text-center mt-12 fade-in stagger-5">
            <p className="text-gray-300 mb-2">Mobile</p>
            <a 
              href="tel:+201274372829" 
              className="text-amber-600 hover:text-amber-700 text-xl font-semibold transition-colors duration-300"
            >
              +201274372829
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;