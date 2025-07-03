import React from 'react';
import { Download } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'HTML5', color: 'bg-orange-500' },
    { name: 'CSS3', color: 'bg-blue-500' },
    { name: 'JavaScript', color: 'bg-yellow-500' },
    { name: 'React', color: 'bg-cyan-500' },
    { name: 'Next.js', color: 'bg-gray-800' },
    { name: 'Sass', color: 'bg-pink-500' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 fade-in">
            Who Am I
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto fade-in stagger-1"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 fade-in stagger-2">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              I'm a passionate frontend web developer with a deep love for creating modern, 
              interactive interfaces. My journey in web development is driven by creativity 
              and attention to detail, focusing on clean code and user-centered design. 
              I specialize in building responsive, performant web applications that provide 
              exceptional user experiences across all devices.
            </p>
          </div>

          {/* Skills Section */}
          <div className="mb-12 fade-in stagger-3">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">My Skills</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className={`${skill.color} text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-300`}
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </div>

          {/* CV Download Button */}
          <div className="text-center fade-in stagger-4">
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
              <Download size={20} />
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;