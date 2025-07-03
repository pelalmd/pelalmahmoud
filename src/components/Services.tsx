import React from 'react';
import { Palette, Code, Monitor, Zap, HeadphonesIcon, Smartphone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Palette size={40} />,
      title: 'Creative Design',
      description: 'Unique and innovative designs that stand out'
    },
    {
      icon: <Code size={40} />,
      title: 'Clean Code',
      description: 'Well-structured, maintainable code following best practices'
    },
    {
      icon: <Monitor size={40} />,
      title: 'UI/UX',
      description: 'User-centered design for optimal user experience'
    },
    {
      icon: <Zap size={40} />,
      title: 'Branding',
      description: 'Complete brand identity and visual consistency'
    },
    {
      icon: <HeadphonesIcon size={40} />,
      title: 'Fast Support',
      description: 'Quick response time and reliable technical support'
    },
    {
      icon: <Smartphone size={40} />,
      title: 'Responsive Layouts',
      description: 'Perfect display across all devices and screen sizes'
    }
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 fade-in">
            My Services
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto fade-in stagger-1"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className={`bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-amber-600 transition-all duration-300 hover:scale-105 fade-in stagger-${index + 1}`}
            >
              <div className="text-amber-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;