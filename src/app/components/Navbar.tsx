'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const controls = useAnimation();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    });
  }, [controls]);

  useEffect(() => {
    const closeMenuOnOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isOpen && !target.closest('.navbar')) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener('click', closeMenuOnOutsideClick);

    return () => {
      document.body.removeEventListener('click', closeMenuOnOutsideClick);
    };
  }, [isOpen]);

  const buttonVariants: Variants = {
    open: {
      backgroundColor: '#3F0071', // Deep Purple
      rotate: 45,
    },
    closed: {
      backgroundColor: 'transparent',
      rotate: 0,
    },
  };

  return (
    <motion.nav
      className={`bg-gradient-to-br ${isSticky ? 'bg-black' : 'from-black to-black'} text-white py-4 fixed top-0 w-full z-50 transition-all duration-300 ease-in-out`}
      initial={{ opacity: 0, y: -50 }}
      animate={controls}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-2xl font-bold cursor-pointer">akhilfrancis.dev</span>
        </Link>
        <div className="hidden md:block">
          <ul className="flex space-x-16 text-lg font-medium"> {/* Updated styles */}
            <li>
              <Link href="/#hero">
                <span onClick={handleLinkClick} className="cursor-pointer hover:text-purple-300 transition-colors duration-300 py-4"> {/* Increased vertical padding */}
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link href="/#skills">
                <span onClick={handleLinkClick} className="cursor-pointer hover:text-purple-300 transition-colors duration-300 py-4"> {/* Increased vertical padding */}
                  Skills
                </span>
              </Link>
            </li>
            <li>
              <Link href="/#experience">
                <span onClick={handleLinkClick} className="cursor-pointer hover:text-purple-300 transition-colors duration-300 py-4"> {/* Increased vertical padding */}
                  Experience
                </span>
              </Link>
            </li>
            <li>
              <Link href="/#education">
                <span onClick={handleLinkClick} className="cursor-pointer hover:text-purple-300 transition-colors duration-300 py-4"> {/* Increased vertical padding */}
                  Education
                </span>
              </Link>
            </li>
            <li>
              <Link href="/#contact">
                <span onClick={handleLinkClick} className="cursor-pointer hover:text-purple-300 transition-colors duration-300 py-4"> {/* Increased vertical padding */}
                  Contact
                </span>
              </Link>
            </li>
            {/* Other list items */}
          </ul>
        </div>
        <div className="block md:hidden">
          <motion.button
            onClick={handleToggle}
            className="text-white focus:outline-none p-2 rounded-md"
            initial={false}
            variants={buttonVariants}
            animate={isOpen ? 'open' : 'closed'}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                animate={isOpen ? { d: "M6 18L18 6M6 6l12 12" } : { d: "M4 6h16M4 12h16m-7 6h7" }}
              />
            </svg>
          </motion.button>
        </div>
      </div>
      <motion.div
        className={`md:hidden ${isOpen ? 'block fixed inset-0 bg-gray-800 bg-opacity-75' : 'hidden'}`}
        initial={{ opacity: 0 }}
        animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <ul className="mt-24 text-center text-lg font-medium"> {/* Updated styles */}
          <li>
            <Link href="/#hero">
              <span onClick={handleLinkClick} className="cursor-pointer block py-6 hover:text-purple-300 transition-colors duration-300"> {/* Increased vertical padding */}
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link href="/#skills">
              <span onClick={handleLinkClick} className="cursor-pointer block py-6 hover:text-purple-300 transition-colors duration-300"> {/* Increased vertical padding */}
                Skills
              </span>
            </Link>
          </li>
          <li>
            <Link href="/#education">
              <span onClick={handleLinkClick} className="cursor-pointer block py-6 hover:text-purple-300 transition-colors duration-300"> {/* Increased vertical padding */}
                Education
              </span>
            </Link>
          </li>
          <li>
            <Link href="/#experience">
              <span onClick={handleLinkClick} className="cursor-pointer block py-6 hover:text-purple-300 transition-colors duration-300"> {/* Increased vertical padding */}
                Experience
              </span>
            </Link>
          </li>
          <li>
            <Link href="/#contact">
              <span onClick={handleLinkClick} className="cursor-pointer block py-6 hover:text-purple-300 transition-colors duration-300"> {/* Increased vertical padding */}
                Contact
              </span>
            </Link>
          </li>
        </ul>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
