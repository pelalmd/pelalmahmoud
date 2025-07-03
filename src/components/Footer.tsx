import React from 'react';
import { Instagram, Facebook, Youtube, Twitter, MessageCircle } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: <Instagram size={24} />,
      url: 'https://www.instagram.com/pelal_md_/?igsh=MTQ1ajNuYnRsc3ZkcA%3D%3D#',
      label: 'Instagram'
    },
    {
      icon: <Facebook size={24} />,
      url: 'https://www.facebook.com/profile.php?id=100075415397820',
      label: 'Facebook'
    },
    {
      icon: <MessageCircle size={24} />,
      url: 'https://www.threads.net/@pelal_md_',
      label: 'Threads'
    },
    {
      icon: <Youtube size={24} />,
      url: 'https://youtube.com/@pe_lal?si=QKQbG-Ml98hZI_LD',
      label: 'YouTube'
    },
    {
      icon: <Twitter size={24} />,
      url: 'https://x.com/pelal_md?t=OlAW3YIs_iZgxPJqAKZNug&s=08',
      label: 'X (Twitter)'
    }
  ];

  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Logo and Name */}
          <div className="flex items-center justify-center space-x-3 mb-6">
            <img 
              src="https://i.ibb.co/4ZqdPHbC/20250703-152912-removebg-preview.png" 
              alt="Pelal Mahmoud Logo" 
              className="h-8 w-8 rounded-full"
            />
            <h3 className="text-xl font-bold text-white">Pelal Mahmoud</h3>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-600 transition-colors duration-300 hover:scale-110 transform"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">
              © 2025 Pelal Mahmoud. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;