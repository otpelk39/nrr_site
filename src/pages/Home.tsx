import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const handymanServices = [
  {
    title: 'Faucet Repairs and Replacement',
    image: 'https://images.pexels.com/photos/6000065/pexels-photo-6000065.jpeg',
    alt: 'Faucet repair service'
  },
  {
    title: 'Trim Repairs and Installation',
    image: 'https://images.pexels.com/photos/6267516/pexels-photo-6267516.jpeg',
    alt: 'Interior trim work'
  },
  {
    title: 'Toilet Repairs and Installation',
    image: 'https://images.pexels.com/photos/6492397/pexels-photo-6492397.jpeg',
    alt: 'Toilet repair service'
  },
  {
    title: 'Deck and Fence Repairs',
    image: 'https://images.pexels.com/photos/5997992/pexels-photo-5997992.jpeg',
    alt: 'Deck repair service'
  },
  {
    title: 'Flooring Repairs',
    image: 'https://images.pexels.com/photos/5714007/pexels-photo-5714007.jpeg',
    alt: 'Flooring repair service'
  },
  {
    title: 'Shower and Tub Repairs',
    image: 'https://images.pexels.com/photos/6585778/pexels-photo-6585778.jpeg',
    alt: 'Shower repair service'
  },
  {
    title: 'Lighting Installation',
    image: 'https://images.pexels.com/photos/6267557/pexels-photo-6267557.jpeg',
    alt: 'Lighting installation service'
  },
  {
    title: 'Drywall Repairs',
    image: 'https://images.pexels.com/photos/8005397/pexels-photo-8005397.jpeg',
    alt: 'Drywall repair service'
  }
];

const exteriorServices = [
  {
    title: 'Siding Repair & Replacement',
    description: 'Vinyl, wood, fiber cement, patching holes, fixing loose panels',
    image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg',
    alt: 'House siding repair'
  },
  {
    title: 'Deck & Porch Repairs',
    description: 'Board replacement, railing fixes, step repairs, staining/sealing',
    image: 'https://images.pexels.com/photos/5997992/pexels-photo-5997992.jpeg',
    alt: 'Deck repair'
  },
  {
    title: 'Door & Window Repairs',
    description: 'Exterior door installation, weatherstripping, caulking, screen repair',
    image: 'https://images.pexels.com/photos/3990359/pexels-photo-3990359.jpeg',
    alt: 'Door and window repair'
  },
  {
    title: 'Gutter Cleaning & Repair',
    description: 'Clearing debris, reattaching gutters, fixing leaks, installing guards',
    image: 'https://images.pexels.com/photos/6474515/pexels-photo-6474515.jpeg',
    alt: 'Gutter repair'
  },
  {
    title: 'Fence Repair & Installation',
    description: 'Wood, vinyl, chain link, posts, gates',
    image: 'https://images.pexels.com/photos/6480198/pexels-photo-6480198.jpeg',
    alt: 'Fence repair'
  },
  {
    title: 'Exterior Painting & Touch-Ups',
    description: 'Trim, siding, doors, touch-up painting, pressure washing prep',
    image: 'https://images.pexels.com/photos/6474141/pexels-photo-6474141.jpeg',
    alt: 'Exterior painting'
  },
  {
    title: 'Roof Leak Repairs',
    description: 'Shingle replacement, small patch jobs, flashing fixes',
    image: 'https://images.pexels.com/photos/6474343/pexels-photo-6474343.jpeg',
    alt: 'Roof repair'
  },
  {
    title: 'Exterior Wood Rot & Trim Repair',
    description: 'Replacing or repairing rotted fascia, soffit, trim, or decorative features',
    image: 'https://images.pexels.com/photos/6474494/pexels-photo-6474494.jpeg',
    alt: 'Wood rot repair'
  },
  {
    title: 'Concrete & Masonry Repairs',
    description: 'Sidewalks, steps, porches, small cracks, tuck-pointing',
    image: 'https://images.pexels.com/photos/6474626/pexels-photo-6474626.jpeg',
    alt: 'Concrete repair'
  },
  {
    title: 'Power Washing & Surface Cleaning',
    description: 'Siding, decks, patios, driveways, walkways',
    image: 'https://images.pexels.com/photos/6474464/pexels-photo-6474464.jpeg',
    alt: 'Power washing service'
  }
];

export function Home() {
  React.useEffect(() => {
    const animateHero = () => {
      setTimeout(() => {
        const title = document.getElementById('hero-title');
        if (title) title.classList.remove('opacity-0', 'transform', 'translate-y-8');
      }, 300);

      setTimeout(() => {
        const subtitle = document.getElementById('hero-subtitle');
        if (subtitle) subtitle.classList.remove('opacity-0', 'transform', 'translate-y-8');
      }, 500);

      setTimeout(() => {
        const buttons = document.getElementById('hero-buttons');
        if (buttons) buttons.classList.remove('opacity-0', 'transform', 'translate-y-8');
      }, 700);
    };

    animateHero();
  }, []);

  return (
    <>
      <section className="relative min-h-screen md:h-screen flex items-center justify-center text-white pt-20 md:pt-0">
        <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent z-10"></div>
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/3935325/pexels-photo-3935325.jpeg" 
            alt="Beautiful modern living room" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="container mx-auto px-4 z-20 text-center">
          <h1 
            id="hero-title"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 opacity-0 transform translate-y-8 transition-all duration-700 delay-300"
          >
            Crafting Beautiful Spaces
          </h1>
          <p 
            id="hero-subtitle"
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 opacity-0 transform translate-y-8 transition-all duration-700 delay-500"
          >
            Expert remodeling and repair services that transform your vision into reality
          </p>
          <div 
            id="hero-buttons"
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 opacity-0 transform translate-y-8 transition-all duration-700 delay-700"
          >
            <Link 
              to="/services" 
              className="w-full sm:w-auto bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-3 rounded-md transition-colors text-lg font-medium"
            >
              Explore Our Services
            </Link>
            <Link 
              to="/project-planner" 
              className="w-full sm:w-auto bg-transparent hover:bg-white/10 border-2 border-white text-white px-6 py-3 rounded-md transition-colors text-lg font-medium"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive home improvement solutions tailored to your needs
            </p>
          </div>

          {/* Handyman Services */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={{
                  enabled: true,
                  hideOnClick: true
                }}
                pagination={{
                  clickable: true,
                  type: 'bullets'
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: true,
                  pauseOnMouseEnter: true
                }}
                loop={true}
                className="w-full h-full"
              >
                {handymanServices.map((service, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative w-full h-full">
                      <img 
                        src={service.image} 
                        alt={service.alt}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                        <h4 className="text-white text-xl font-semibold">{service.title}</h4>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary-900 mb-4">Handyman Services</h3>
              <p className="text-lg text-gray-700 mb-6">
                From minor repairs to home maintenance, our skilled handymen are here to help with all your home improvement needs. No job is too small for our experienced team.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <ChevronRight className="w-5 h-5 text-secondary-500 mr-2" />
                  Plumbing repairs and maintenance
                </li>
                <li className="flex items-center text-gray-700">
                  <ChevronRight className="w-5 h-5 text-secondary-500 mr-2" />
                  Drywall repairs and painting
                </li>
                <li className="flex items-center text-gray-700">
                  <ChevronRight className="w-5 h-5 text-secondary-500 mr-2" />
                  Flooring repairs and installation
                </li>
                <li className="flex items-center text-gray-700">
                  <ChevronRight className="w-5 h-5 text-secondary-500 mr-2" />
                  Door and window maintenance
                </li>
                <li className="flex items-center text-gray-700">
                  <ChevronRight className="w-5 h-5 text-secondary-500 mr-2" />
                  General home repairs
                </li>
              </ul>
              <Link 
                to="/services#handyman" 
                className="inline-flex items-center bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-3 rounded-md transition-colors text-lg font-medium"
              >
                Learn More
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>

          {/* Kitchen Remodeling */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl font-bold text-primary-900 mb-4">Kitchen Remodeling</h3>
              <p className="text-lg text-gray-700 mb-6">
                From simple updates to complete transformations, we bring your dream kitchen to life. Our expert team handles everything from cabinet refacing and countertop installations to full-scale renovations.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <ChevronRight className="w-5 h-5 text-secondary-500 mr-2" />
                  Custom cabinet design and installation
                </li>
                <li className="flex items-center text-gray-700">
                  <ChevronRight className="w-5 h-5 text-secondary-500 mr-2" />
                  Countertop replacement and installation
                </li>
                <li className="flex items-center text-gray-700">
                  <ChevronRight className="w-5 h-5 text-secondary-500 mr-2" />
                  Backsplash design and installation
                </li>
                <li className="flex items-center text-gray-700">
                  <ChevronRight className="w-5 h-5 text-secondary-500 mr-2" />
                  Lighting and electrical upgrades
                </li>
              </ul>
              <Link 
                to="/services#kitchens" 
                className="inline-flex items-center bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-3 rounded-md transition-colors text-lg font-medium"
              >
                Learn More
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="order-1 lg:order-2 relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3214064/pexels-photo-3214064.jpeg" 
                alt="Modern kitchen remodel" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bathroom Renovations */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg" 
                alt="Modern bathroom renovation" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary-900 mb-4">Bathroom Renovations</h3>
              <p className="text-lg text-gray-700 mb-6">
                Create your perfect bathroom sanctuary with our comprehensive renovation services. Whether you need a simple refresh or a complete remodel, we deliver stunning results.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <ChevronRight className="w-5 h-5 text-secondary-500 mr-2" />
                  Tub and shower installations
                </li>
                <li className="flex items-center text-gray-700">
                  <ChevronRight className="w-5 h-5 text-secondary-500 mr-2" />
                  Vanity and cabinet upgrades
                </li>
                <li className="flex items-center text-gray-700">
                  <ChevronRight className="w-5 h-5 text-secondary-500 mr-2" />
                  Tile work and flooring
                </li>
                <li className="flex items-center text-gray-700">
                  <ChevronRight className="w-5 h-5 text-secondary-500 mr-2" />
                  Plumbing fixture updates
                </li>
              </ul>
              <Link 
                to="/services#bathrooms" 
                className="inline-flex items-center bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-3 rounded-md transition-colors text-lg font-medium"
              >
                Learn More
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>

          {/* Exterior Repairs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl font-bold text-primary-900 mb-4">Exterior Repairs</h3>
              <p className="text-lg text-gray-700 mb-6">
                We handle a wide range of exterior repairs to maintain your home's beauty and protection. From minor fixes to targeted improvements, we keep your home in top condition.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <ChevronRight className="w-5 h-5 text-secondary-500 mr-2" />
                  Siding repair and replacement
                </li>
                <li className="flex items-center text-gray-700">
                  <ChevronRight className="w-5 h-5 text-secondary-500 mr-2" />
                  Deck and porch repairs
                </li>
                <li className="flex items-center text-gray-700">
                  <ChevronRight className="w-5 h-5 text-secondary-500 mr-2" />
                  Door and window maintenance
                </li>
                <li className="flex items-center text-gray-700">
                  <ChevronRight className="w-5 h-5 text-secondary-500 mr-2" />
                  Gutter cleaning and repair
                </li>
                <li className="flex items-center text-gray-700">
                  <ChevronRight className="w-5 h-5 text-secondary-500 mr-2" />
                  Fence repair and installation
                </li>
              </ul>
              <Link 
                to="/services#exterior" 
                className="inline-flex items-center bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-3 rounded-md transition-colors text-lg font-medium"
              >
                Learn More
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="order-1 lg:order-2 relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={{
                  enabled: true,
                  hideOnClick: true
                }}
                pagination={{
                  clickable: true,
                  type: 'bullets'
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: true,
                  pauseOnMouseEnter: true
                }}
                loop={true}
                className="w-full h-full"
              >
                {exteriorServices.map((service, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative w-full h-full">
                      <img 
                        src={service.image} 
                        alt={service.alt}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                        <h4 className="text-white text-xl font-semibold">{service.title}</h4>
                        <p className="text-white/80 text-sm mt-2">{service.description}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Our Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">We make remodeling simple with our streamlined approach</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">1</div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Consultation</h3>
              <p className="text-gray-700">We discuss your vision, requirements, and budget to understand your project fully.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">2</div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Design</h3>
              <p className="text-gray-700">Our designers create detailed plans and 3D models to visualize your project.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">3</div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Construction</h3>
              <p className="text-gray-700">Our skilled craftsmen execute the plans with precision and attention to detail.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">4</div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Completion</h3>
              <p className="text-gray-700">We perform a final walkthrough to ensure everything meets our high standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">Contact us today to schedule a consultation and take the first step towards your dream home.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/project-planner" 
              className="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-md transition-colors text-lg font-medium"
            >
              Start Your Project
            </Link>
            <a 
              href="tel:+17035551234" 
              className="bg-transparent hover:bg-white/10 border-2 border-white text-white px-8 py-4 rounded-md transition-colors text-lg font-medium"
            >
              Call Us Today
            </a>
          </div>
        </div>
      </section>
    </>
  );
}