import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: '' },
    { name: 'About', id: '#about' },
    { name: 'Skills', id: '#skills' },
    { name: 'Projects', id: '#projects' },
    { name: 'Certifications', id: '#certifications' },
    { name: 'Contact', id: '#contact' },
    { name: 'Resume', id: 'https://docs.google.com/document/d/1KPJXcDZbL-OtMNjcR5QnAUr7htAzY_lP/edit' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-[#272a2c] backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 px-3">
          <div className="flex-shrink-0">
            <a
              href=""
              className="text-2xl font-bold text-gray-800 dark:text-white hover:text-[#0284c7] dark:hover:text-[#7dd3fc] transition-colors"
            >
              Portfolio
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4 text-xl">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.id}
                className={`dark:text-white ${
                  location.hash === item.id ? 'text-blue-600 font-bold border-b-2 border-blue-600' : 'text-gray-500 hover:text-blue-500'
                }`}
              >
                {item.name}
              </a>
            ))}



            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#0F172A] transition-colors"
            >
              {isDarkMode ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#0F172A] transition-colors"
            >
              {isDarkMode ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#0F172A] transition-colors"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-dark-100 shadow-lg px-3">
          <div className="container py-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.id}
                className={`block py-2 nav-link ${
                  location.hash === item.id ? 'text-blue-600 font-bold border-b-2 border-blue-600' : 'text-gray-500 hover:text-blue-500'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 