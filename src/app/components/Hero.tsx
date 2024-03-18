// components/HeroSection.tsx
'use client'
// components/HeroSection.tsx
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    });
  }, []);

  return (
    <motion.section
      id="hero"
      className="relative h-screen flex flex-col-reverse overflow-hidden bg-gradient-to-br from-black to-purple-800 mt-16 py-16 lg:py-40"
      initial={{ opacity: 0, y: -50 }}
      animate={controls}
    >
      {/* Text content */}
      <div className="container mx-auto text-center px-8 sm:px-12 md:px-20 lg:px-32 xl:px-40 z-10 flex-grow flex flex-col justify-center lg:text-left">
        <motion.h1
          className="text-4xl lg:text-6xl font-bold mb-8 text-white" // Updated text color to white
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Hi, I'm Akhil Francis!
        </motion.h1>
        <motion.p
          className="text-lg lg:text-2xl text-white" // Updated text color to white
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          I'm a Software Engineer With A Product Mindset💡<br/>Building Awesome Products with ❤️
        </motion.p>
      </div>

      {/* Photo */}
      <div className="flex justify-center items-center lg:absolute lg:top-0 lg:right-0 lg:w-1/2 lg:h-full z-20"> {/* Increased z-index to 20 */}
      <div className="bg-gradient-to-br from-black to-purple-700 w-96 h-96 rounded-full overflow-hidden shadow-lg flex justify-center items-center"> {/* Updated background color to gradient */}
          {/* Inner square */}
          <div className="bg-gradient-to-br from-blue-900 to-transparent w-72 h-72 rounded-full overflow-hidden shadow-lg flex justify-center items-center"> {/* Updated background color to gradient */}
            <Image
              src="/akhil-francis.jpg"
              alt="Akhil Francis"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Background overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900 to-transparent opacity-50 mix-blend-multiply z-0" />
    </motion.section>
  );
};

export default HeroSection;


