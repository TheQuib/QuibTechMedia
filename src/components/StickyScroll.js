import React, { useState, useRef, useEffect } from 'react';

const StickyScroll = ({ content }) => {
  const [currentImage, setCurrentImage] = useState(content[0].image);
  const [fadeClass, setFadeClass] = useState('opacity-100');
  const containerRef = useRef();

  const handleScroll = () => {
    const sections = document.querySelectorAll('.scroll-section');
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
        if (currentImage !== content[index].image) {
          setFadeClass('opacity-0');
          setTimeout(() => {
            setCurrentImage(content[index].image);
            setFadeClass('opacity-100');
          }, 300); // Duration of the fade-out
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentImage, content]);

  return (
    <div ref={containerRef} className="relative flex">
      <div className="w-1/2 pr-8">
        {content.map((item, index) => (
          <div
            key={index}
            className="scroll-section mb-10 min-h-screen flex flex-col justify-center"
          >
            <div className="text-2xl font-bold mb-4">{item.title}</div>
            <div className="text-gray-700 mb-4">{item.description}</div>
          </div>
        ))}
      </div>
      <div className="sticky top-0 w-1/2 h-screen flex items-center justify-center">
        <img
          src={currentImage}
          alt="Sticky"
          className={`transition-opacity duration-500 rounded-lg shadow-lg object-cover ${fadeClass}`}
          style={{ width: '75%', aspectRatio: '4 / 3' }}
        />
      </div>
    </div>
  );
};

export default StickyScroll;
