import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const location = useLocation();
  const headerRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > 50) {
          headerRef.current.classList.add('bg-white/80', 'backdrop-blur-lg', 'shadow-md');
        } else {
          headerRef.current.classList.remove('bg-white/80', 'backdrop-blur-lg', 'shadow-md');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header ref={headerRef} className="fixed w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-lg">
        <nav className="container mx-auto px-4 py-2 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src="/resources/site_images/site_images/logo_n_background.svg" alt="NOVA Repair & Remodel" className="h-12 md:h-20" />
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-gray-700 font-semibold text-lg hover:text-secondary-600 transition-colors ${
                location.pathname === '/' ? 'text-secondary-600' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`text-gray-700 font-semibold text-lg hover:text-secondary-600 transition-colors ${
                location.pathname === '/services' ? 'text-secondary-600' : ''
              }`}
            >
              Services
            </Link>
            <Link 
              to="/showcase" 
              className={`text-gray-700 font-semibold text-lg hover:text-secondary-600 transition-colors ${
                location.pathname === '/showcase' ? 'text-secondary-600' : ''
              }`}
            >
              Portfolio
            </Link>
            <Link 
              to="/project-planner" 
              className={`text-gray-700 font-semibold text-lg hover:text-secondary-600 transition-colors ${
                location.pathname === '/project-planner' ? 'text-secondary-600' : ''
              }`}
            >
              Get Started
            </Link>
          </div>
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </nav>
        <div 
          className={`md:hidden bg-white/80 backdrop-blur-lg absolute w-full py-4 px-4 shadow-lg ${
            mobileMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-700 font-semibold text-lg hover:text-secondary-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="text-gray-700 font-semibold text-lg hover:text-secondary-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/showcase" 
              className="text-gray-700 font-semibold text-lg hover:text-secondary-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link 
              to="/project-planner" 
              className="text-gray-700 font-semibold text-lg hover:text-secondary-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-16 md:pt-24">{children}</main>

      <footer className="bg-primary-950 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="/resources/site_images/site_images/logo_n_background.svg" alt="NOVA Repair & Remodel" className="h-16" />
              </div>
              <p className="text-gray-400 mb-4">Transforming homes with expert craftsmanship for over 15 years.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Facebook
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Twitter
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Instagram
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/showcase" className="text-gray-400 hover:text-white transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/project-planner" className="text-gray-400 hover:text-white transition-colors">
                    Get Started
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/services#kitchens" className="text-gray-400 hover:text-white transition-colors">
                    Kitchen Remodeling
                  </Link>
                </li>
                <li>
                  <Link to="/services#bathrooms" className="text-gray-400 hover:text-white transition-colors">
                    Bathroom Renovations
                  </Link>
                </li>
                <li>
                  <Link to="/services#handyman" className="text-gray-400 hover:text-white transition-colors">
                    Handyman Services
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                    All Services
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <span className="text-gray-400">1234 Main Street, Alexandria, VA 22314</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-gray-400">(703) 555-1234</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-gray-400">info@novarepairandremodel.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} NOVA Repair and Remodel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}