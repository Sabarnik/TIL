import React, { useState, useEffect } from 'react';
import {
  ChevronDown,
  Eye,
  ChevronRight,
  Calendar,
  Construction,
  Ship,
  Truck,
  Wrench,
  Mountain,
  Anchor,
  Building,
  Fuel,
  Train,
  Shield,
  Zap,
  Phone,
  Download,
  Star,
  Package,
  Settings,
  Award,
  Users,
  MessageSquare,
  Mail,
  Linkedin,
  MessageCircle,
  FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AboutMegamenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [activeCategory, setActiveCategory] = useState('company');
  const [activeItem, setActiveItem] = useState(null);

  const primaryCategories = [
    {
      id: 'company',
      name: 'Corporate Profile',
      icon: <Building className="w-4 h-4" />,
      description: 'Our heritage and leadership in construction equipment'
    },
    {
      id: 'leadership',
      name: 'Board of Directors',
      icon: <Users className="w-4 h-4" />,
      description: 'Meet our executive team and board of directors'
    },
    {
      id: 'milestones',
      name: 'Milestones',
      icon: <Shield className="w-4 h-4" />,
      description: 'Key achievements and historical moments'
    },
    {
      id: 'values',
      name: 'Values & Vision',
      icon: <Star className="w-4 h-4" />,
      description: 'Our mission, vision, and core values'
    },
    {
      id: 'corporate',
      name: 'Corporate Social Responsibility',
      icon: <Shield className="w-4 h-4" />,
      description: 'Environmental responsibility and green initiatives'
    },
    {
      id: 'codeofconduct',
      name: 'Code of Conduct',
      icon: <Shield className="w-4 h-4" />,
      description: 'Our ethical guidelines and business practices'
    },
    {
      id: 'facilities',
      name: 'Facilities',
      icon: <Shield className="w-4 h-4" />,
      description: 'Our manufacturing plants and offices'
    }
  ];

  const submenuData = {
    'company': {
      items: [
        {
          name: 'Company History',
          description: 'Explore our 80+ years of engineering excellence',
          image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          name: 'Milestones',
          description: 'Key achievements in our journey',
          image: '/milestones.jpg'
        },
        {
          name: 'Awards & Recognition',
          description: 'Industry accolades and certifications',
          image: '/awards.jpg'
        },
        {
          name: 'Global Presence',
          description: 'Our international footprint and partnerships',
          image: '/global-presence.jpg'
        },
        {
          name: 'Manufacturing Facilities',
          description: 'State-of-the-art production plants',
          image: '/manufacturing.jpg'
        },
        {
          name: 'Quality Standards',
          description: 'Our commitment to excellence',
          image: '/quality-standards.jpg'
        }
      ],
      media: {
        image: '/company-banner.jpg',
        title: 'Our Legacy',
        description: '80+ years of engineering excellence in construction and material handling equipment.',
        cta: 'Learn More',
        features: ['80+ Years Experience', 'Global Presence', 'ISO Certified']
      }
    },
    'leadership': {
      items: [
        {
          name: 'Board of Directors',
          description: 'Meet our governing body and strategic advisors',
          image: '/board-directors.jpg'
        },
        {
          name: 'Executive Team',
          description: 'Our day-to-day leadership team',
          image: '/executive-team.jpg'
        },
        {
          name: 'Management Committee',
          description: 'Department heads and functional leaders',
          image: '/management-committee.jpg'
        },
        {
          name: 'Advisory Board',
          description: 'Industry experts guiding our strategy',
          image: '/advisory-board.jpg'
        }
      ],
      media: {
        image: '/leadership-banner.jpg',
        title: 'Leadership Team',
        description: 'Experienced leaders driving innovation and growth in the construction industry.',
        cta: 'Meet Our Team',
        features: ['Industry Veterans', 'Global Experience', 'Innovation Focus']
      }
    },
    'milestones': {
      items: [
        {
          name: 'Foundation & Early Years',
          description: 'Our humble beginnings and initial successes',
          image: '/foundation.jpg'
        },
        {
          name: 'Key Innovations',
          description: 'Breakthrough products and technologies',
          image: '/innovations.jpg'
        },
        {
          name: 'Expansion Phases',
          description: 'Growth of our operations and facilities',
          image: '/expansion.jpg'
        },
        {
          name: 'Recent Achievements',
          description: 'Our latest accomplishments and awards',
          image: '/achievements.jpg'
        }
      ],
      media: {
        image: '/milestones-banner.jpg',
        title: 'Our Journey',
        description: 'Key milestones that define our growth and success in the industry.',
        cta: 'View Timeline',
        features: ['80+ Years', '100+ Innovations', 'Global Reach']
      }
    },
    'values': {
      items: [
        {
          name: 'Mission Statement',
          description: 'Our purpose and reason for being',
          image: '/mission.jpg'
        },
        {
          name: 'Vision 2030',
          description: 'Our aspirations for the future',
          image: '/vision.jpg'
        },
        {
          name: 'Core Values',
          description: 'Principles that guide our actions',
          image: '/values.jpg'
        },
        {
          name: 'Ethics & Integrity',
          description: 'Our commitment to doing business right',
          image: '/ethics.jpg'
        }
      ],
      media: {
        image: '/values-banner.jpg',
        title: 'Our Values',
        description: 'Committed to excellence, innovation, and sustainable growth.',
        cta: 'Our Philosophy',
        features: ['Customer First', 'Innovation', 'Sustainability']
      }
    },
    'corporate': {
      items: [
        {
          name: 'Environmental Policy',
          description: 'Our commitment to sustainable operations',
          image: '/environmental.jpg'
        },
        {
          name: 'Green Manufacturing',
          description: 'Eco-friendly production processes',
          image: '/green-manufacturing.jpg'
        },
        {
          name: 'Community Impact',
          description: 'Initiatives that benefit local communities',
          image: '/community.jpg'
        },
        {
          name: 'Employee Welfare',
          description: 'Programs for our workforce wellbeing',
          image: '/employee-welfare.jpg'
        }
      ],
      media: {
        image: '/csr-banner.jpg',
        title: 'Sustainability',
        description: 'Leading the way in environmentally responsible manufacturing and operations.',
        cta: 'Green Initiatives',
        features: ['Carbon Neutral', 'Green Tech', 'Eco-Friendly']
      }
    },
    'codeofconduct': {
      items: [
        {
          name: 'Business Ethics',
          description: 'Our standards for ethical business practices',
          image: '/ethics.jpg'
        },
        {
          name: 'Anti-Corruption',
          description: 'Policies against bribery and corruption',
          image: '/anti-corruption.jpg'
        },
        {
          name: 'Compliance Framework',
          description: 'Ensuring adherence to laws and regulations',
          image: '/compliance.jpg'
        }
      ],
      media: {
        image: '/conduct-banner.jpg',
        title: 'Code of Conduct',
        description: 'Our commitment to ethical business practices and corporate governance.',
        cta: 'View Policy',
        features: ['Ethical Standards', 'Compliance', 'Transparency']
      }
    },
    'facilities': {
      items: [
        {
          name: 'Kolkata Headquarters',
          description: 'Our corporate office and main facility',
          image: 'https://images.unsplash.com/photo-1536421469767-80559bb6f5e1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          name: 'Manufacturing Plants',
          description: 'State-of-the-art production facilities',
          image: '/plants.jpg'
        },
        {
          name: 'R&D Centers',
          description: 'Innovation hubs driving product development',
          image: '/rd-centers.jpg'
        },
        {
          name: 'Regional Offices',
          description: 'Our presence across India',
          image: '/regional-offices.jpg'
        }
      ],
      media: {
        image: '/facilities-banner.jpg',
        title: 'Our Facilities',
        description: 'World-class manufacturing plants and offices supporting our operations.',
        cta: 'Virtual Tour',
        features: ['Modern Infrastructure', 'Advanced Equipment', 'Sustainable Design']
      }
    }
  };

  const currentSubmenu = submenuData[activeCategory as keyof typeof submenuData];
  const activeMedia = activeItem || currentSubmenu?.media;

  return (
    <>
      <style>{`
        .mega-menu-height {
          height: 50vh;
          max-height: 50vh;
        }
        .scroll-hover::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }
        .scroll-hover::-webkit-scrollbar-track {
          background: transparent;
        }
        .scroll-hover::-webkit-scrollbar-thumb {
          background: transparent;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        .scroll-hover:hover::-webkit-scrollbar-thumb {
          background: rgba(255, 193, 7, 0.3);
        }
        .scroll-hover::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 193, 7, 0.5);
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="overflow-hidden"
      >
        <div className="bg-[#0f1419]/95 backdrop-blur-md shadow-2xl border-t border-yellow-500/20 mega-menu-height overflow-y-auto scroll-hover">
          <div className="grid grid-cols-1 lg:grid-cols-12 w-full h-full min-h-0">
            
            {/* Left: Categories */}
            <div className="lg:col-span-3 border-r border-gray-700/50 min-w-0 h-full overflow-y-auto scroll-hover">
              <div className="p-4 sticky top-0 bg-[#0f1419] z-10">
                <h3 className="text-sm font-bold text-yellow-400 mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                  About Us
                </h3>
              </div>
              <div className="p-4 pt-0">
                <div className="space-y-1">
                  {primaryCategories.map((category) => (
                    <motion.div
                      key={category.id}
                      className={`cursor-pointer transition-all duration-200 rounded w-full
                        ${activeCategory === category.id
                          ? 'bg-yellow-500/8 shadow-[0_0_15px_rgba(255,193,7,0.08)]'
                          : 'hover:bg-yellow-500/8 hover:shadow-[0_0_15px_rgba(255,193,7,0.08)]'
                        }`}
                      onMouseEnter={() => {
                        setActiveCategory(category.id);
                        setActiveItem(null);
                      }}
                      whileHover={{ x: 2 }}
                    >
                      <div className="flex items-center space-x-3 px-3 py-2.5">
                        <div className={`p-1.5 rounded flex-shrink-0 ${
                          activeCategory === category.id 
                            ? 'bg-yellow-500 text-black' 
                            : 'bg-gray-700 text-yellow-400'
                        }`}>
                          {category.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className={`font-semibold text-sm ${
                            activeCategory === category.id ? 'text-yellow-400' : 'text-gray-200'
                          }`}>
                            {category.name}
                          </div>
                          <div className="text-xs text-gray-500 truncate">
                            {category.description}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Middle: Items */}
            <div className="lg:col-span-6 border-r border-gray-700/50 min-w-0 h-full overflow-y-auto scroll-hover">
              <div className="p-4 sticky top-0 bg-[#0f1419] z-10">
                <h3 className="text-sm font-bold text-yellow-400 mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                  {primaryCategories.find(cat => cat.id === activeCategory)?.name || 'Information'}
                </h3>
              </div>
              <div className="p-4 pt-0">
                <ul className="space-y-4">
                  {currentSubmenu?.items.map((item, index) => (
                    <li
                      key={index}
                      onMouseEnter={() => setActiveItem(item)}
                      className="flex items-start gap-3 border border-gray-700/40 p-3 rounded hover:border-yellow-500 transition duration-200 bg-gray-800/20 cursor-pointer"
                    >
                      <div className="pt-1">
                        <ChevronRight className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-100 hover:text-yellow-400 transition">
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

        {/* Right: Details */}
            <div className="lg:col-span-3 bg-gradient-to-br from-[#0f1419] to-[#1a2233] min-w-0 h-full overflow-y-auto scroll-hover">
              <div className="p-4 sticky top-0 bg-[#1a2233] z-10">
                <h3 className="text-sm font-bold text-yellow-400 mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                  Details
                </h3>
              </div>
              <div className="p-4 pt-0">
                <motion.div
                  key={activeMedia?.title || activeMedia?.name}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 flex flex-col"
                >
                  <div className="relative mb-3 overflow-hidden rounded">
                    <img
                      src={activeMedia?.image}
                      alt={activeMedia?.title || activeMedia?.name}
                      className="w-full h-32 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-base text-yellow-400 mb-2">
                      {activeMedia?.title || activeMedia?.name}
                    </h4>
                    <p className="text-gray-300 mb-3 leading-relaxed text-xs">
                      {activeMedia?.description}
                    </p>
                    
                    {activeMedia?.features && (
                      <div className="mb-4">
                        <h5 className="font-semibold text-yellow-400 mb-2 text-xs">Key Features:</h5>
                        <div className="space-y-1">
                          {activeMedia.features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <Award className="w-3 h-3 text-yellow-500 flex-shrink-0" />
                              <span className="text-gray-300 text-xs">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="space-y-2 sticky bottom-0 bg-[#1a2233]/80 backdrop-blur-sm py-2 -mx-4 px-4">
                      <motion.button 
                        className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black py-2 px-3 rounded font-bold text-xs transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
                        whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(255, 193, 7, 0.3)" }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Phone className="w-3 h-3" />
                        <span>{activeMedia?.cta || 'Learn More'}</span>
                      </motion.button>
                      
                      <button 
                        className="w-full border border-yellow-500/50 hover:bg-yellow-500/10 text-yellow-400 py-1.5 px-3 rounded font-semibold text-xs transition-all duration-200 flex items-center justify-center space-x-2"
                        onClick={onClose}
                      >
                        <Download className="w-3 h-3" />
                        <span>Download Brochure</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
const ProductsMegamenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [activeCategory, setActiveCategory] = useState('all-products');
  const [activeProduct, setActiveProduct] = useState(null);

  const primaryCategories = [
    {
      id: 'all-products',
      name: 'TIL Range',
      icon: <Package className="w-4 h-4" />,
      description: 'Reliable lifting and handling for Indian industries'
    },
    {
      id: 'new-arrivals',
      name: 'Manitowoc Range',
      icon: <Zap className="w-4 h-4" />,
      description: 'Heavy-duty cranes with global performance'
    },
    {
      id: 'best-sellers',
      name: 'Hyster TIL Range',
      icon: <Star className="w-4 h-4" />,
      description: 'Reliable forklifts and handling systems from Hyster-TIL'
    },
    {
      id: 'services',
      name: 'Snorkel Range',
      icon: <Settings className="w-4 h-4" />,
      description: 'Aerial work platforms and access equipment by Snorkel'
    }
  ];

  const submenuData = {
    'all-products': {
      products: [
        {
          name: 'Truck Cranes',
          description: 'High-capacity cranes ideal for tall construction sites',
          image: '/truck-cranes.jpeg',
          features: ['Telescopic Boom', 'High Lifting Range', 'On-road Mobility']
        },
        {
          name: 'Pick n Carry Cranes',
          description: 'Mobile cranes suitable for fast on-site operations',
          image: '/pick-n-carry.png',
          features: ['360° Mobility', 'Operator Cabin Comfort', 'Quick Load Handling']
        },
        {
          name: 'Rough Terrain Cranes',
          description: 'Designed for challenging job site conditions',
          image: '/rough-terrain.png',
          features: ['All-Terrain Tyres', 'Four-Wheel Steering', 'Hydraulic Outriggers']
        },
        {
          name: 'Articulating Cranes',
          description: 'Flexible, jointed cranes ideal for tight spaces',
          image: '/articulating.jpg',
          features: ['Knuckle Boom Design', 'Compact Operation', 'Remote Control']
        }
      ],
      media: {
        image: '/articulating.jpg',
        title: 'TIL Product Range',
        description: 'Comprehensive lifting solutions for all your construction needs.',
        cta: 'View All Products',
        features: ['Durable Construction', 'Advanced Safety', 'Easy Maintenance']
      }
    },
    'new-arrivals': {
      products: [
        {
          name: 'Grove Range',
          description: 'Smart lifting solutions engineered for precision and durability',
          image: '/grove-range.png',
          features: ['Advanced Safety Systems', 'Optimized Weight Distribution', 'Digital Load Monitoring']
        },
        {
          name: 'Crawler Cranes',
          description: 'Robust tracked cranes for heavy-duty lifting',
          image: '/crawler-cranes.png',
          features: ['Track Mobility', 'High Stability', 'Heavy Lifting Capacity']
        }
      ],
      media: {
        image: '/crawler-cranes.png',
        title: 'Latest Innovations',
        description: 'Cutting-edge technology and smart features for enhanced productivity.',
        cta: 'Explore New Tech',
        features: ['Smart Telematics', 'Eco-Friendly Powertrain', 'IoT Integration']
      }
    },
    'best-sellers': {
      products: [
        {
          name: 'Forklift Trucks',
          description: 'Efficient material handling for warehouses and logistics',
          image: '/forklift.png',
          features: ['Precision Steering', 'High Load Capacity', 'Compact Turning Radius']
        },
        {
          name: 'Reachstackers',
          description: 'Container handling equipment for ports and yards',
          image: '/reachstackers.png',
          features: ['Extended Reach', 'Twistlock Compatibility', 'High Stack Efficiency']
        }
      ],
      media: {
        image: '/forklift.png',
        title: 'Proven Performers',
        description: 'Most trusted equipment by businesses across India.',
        cta: 'Request Demo',
        features: ['Uptime Guarantee', 'Nationwide Service', 'Spare Part Availability']
      }
    },
    'services': {
      products: [
        {
          name: 'Boom Lifts',
          description: 'Elevated work platforms for maintenance and construction',
          image: '/boomlifts.png',
          features: ['Articulating Arm', 'Vertical and Horizontal Reach', 'Safe Cage Platform']
        }
      ],
      media: {
        image: '/boomlifts.png',
        title: 'Complete Support',
        description: 'Comprehensive after-sales support and services.',
        cta: 'Service Support',
        features: ['Certified Engineers', 'Rapid On-Site Service', 'OEM Spare Assurance']
      }
    }
  };

  const currentSubmenu = submenuData[activeCategory as keyof typeof submenuData];
  const activeMedia = activeProduct || currentSubmenu?.media;

  return (
    <>
      <style>{`
        .mega-menu-height {
          height: 50vh;
          max-height: 50vh;
        }
        .scroll-hover::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }
        .scroll-hover::-webkit-scrollbar-track {
          background: transparent;
        }
        .scroll-hover::-webkit-scrollbar-thumb {
          background: transparent;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        .scroll-hover:hover::-webkit-scrollbar-thumb {
          background: rgba(255, 193, 7, 0.3);
        }
        .scroll-hover::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 193, 7, 0.5);
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="overflow-hidden"
      >
        <div className="bg-[#0f1419]/95 backdrop-blur-md shadow-2xl border-t border-yellow-500/20 mega-menu-height overflow-y-auto scroll-hover">
          <div className="grid grid-cols-1 lg:grid-cols-12 w-full h-full min-h-0">
            
            {/* Left: Categories - Updated with consistent scroll */}
            <div className="lg:col-span-3 border-r border-gray-700/50 min-w-0 h-full overflow-y-auto scroll-hover">
              <div className="p-4 sticky top-0 bg-[#0f1419] z-10">
                <h3 className="text-sm font-bold text-yellow-400 mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                  Product Categories
                </h3>
              </div>
              <div className="p-4 pt-0">
                <div className="space-y-1">
                  {primaryCategories.map((category) => (
                    <motion.div
                      key={category.id}
                      className={`cursor-pointer transition-all duration-200 rounded w-full
                        ${activeCategory === category.id
                          ? 'bg-yellow-500/8 shadow-[0_0_15px_rgba(255,193,7,0.08)]'
                          : 'hover:bg-yellow-500/8 hover:shadow-[0_0_15px_rgba(255,193,7,0.08)]'
                        }`}
                      onMouseEnter={() => {
                        setActiveCategory(category.id);
                        setActiveProduct(null);
                      }}
                      whileHover={{ x: 2 }}
                    >
                      <div className="flex items-center space-x-3 px-3 py-2.5">
                        <div className={`p-1.5 rounded flex-shrink-0 ${
                          activeCategory === category.id 
                            ? 'bg-yellow-500 text-black' 
                            : 'bg-gray-700 text-yellow-400'
                        }`}>
                          {category.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className={`font-semibold text-sm ${
                            activeCategory === category.id ? 'text-yellow-400' : 'text-gray-200'
                          }`}>
                            {category.name}
                          </div>
                          <div className="text-xs text-gray-500 truncate">
                            {category.description}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Middle: Product Items - Updated with consistent scroll */}
            <div className="lg:col-span-6 border-r border-gray-700/50 min-w-0 h-full overflow-y-auto scroll-hover">
              <div className="p-4 sticky top-0 bg-[#0f1419] z-10">
                <h3 className="text-sm font-bold text-yellow-400 mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                  {primaryCategories.find(cat => cat.id === activeCategory)?.name || 'Products'}
                </h3>
              </div>
              <div className="p-4 pt-0">
                <ul className="space-y-4">
                  {currentSubmenu?.products.map((product, index) => (
                    <li
                      key={index}
                      onMouseEnter={() => setActiveProduct(product)}
                      className="flex items-start gap-3 border border-gray-700/40 p-3 rounded hover:border-yellow-500 transition duration-200 bg-gray-800/20 cursor-pointer"
                    >
                      <div className="pt-1">
                        <ChevronRight className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-100 hover:text-yellow-400 transition">
                          {product.name}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">{product.description}</p>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {product.features.map((feature, i) => (
                            <span key={i} className="text-xs bg-yellow-500/10 text-yellow-400 px-2 py-0.5 rounded">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Dynamic Media Panel - Updated with consistent scroll */}
            <div className="lg:col-span-3 bg-gradient-to-br from-[#0f1419] to-[#1a2233] min-w-0 h-full overflow-y-auto scroll-hover">
              <div className="p-4 sticky top-0 bg-[#1a2233] z-10">
                <h3 className="text-sm font-bold text-yellow-400 mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                  Details
                </h3>
              </div>
              <div className="p-4 pt-0">
                <motion.div
                  key={activeMedia?.title || activeMedia?.name}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 flex flex-col"
                >
                  <div className="relative mb-3 overflow-hidden rounded">
                    <img
                      src={activeMedia?.image}
                      alt={activeMedia?.title || activeMedia?.name}
                      className="w-full h-32 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-base text-yellow-400 mb-2">
                      {activeMedia?.title || activeMedia?.name}
                    </h4>
                    <p className="text-gray-300 mb-3 leading-relaxed text-xs">
                      {activeMedia?.description}
                    </p>
                    
                    {activeMedia?.features && (
                      <div className="mb-4">
                        <h5 className="font-semibold text-yellow-400 mb-2 text-xs">Key Features:</h5>
                        <div className="space-y-1">
                          {activeMedia.features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <Award className="w-3 h-3 text-yellow-500 flex-shrink-0" />
                              <span className="text-gray-300 text-xs">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="space-y-2 sticky bottom-0 bg-[#1a2233]/80 backdrop-blur-sm py-2 -mx-4 px-4">
                      <motion.button 
                        className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black py-2 px-3 rounded font-bold text-xs transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
                        whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(255, 193, 7, 0.3)" }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Phone className="w-3 h-3" />
                        <span>{activeProduct ? 'Get Quote' : activeMedia?.cta}</span>
                      </motion.button>
                      
                      <button 
                        className="w-full border border-yellow-500/50 hover:bg-yellow-500/10 text-yellow-400 py-1.5 px-3 rounded font-semibold text-xs transition-all duration-200 flex items-center justify-center space-x-2"
                        onClick={onClose}
                      >
                        <Download className="w-3 h-3" />
                        <span>Download Specs</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

const CustomerSupportMegamenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [activeCategory, setActiveCategory] = useState('heavy-industries');
  const [activePoint, setActivePoint] = useState(null);

  const primaryCategories = [
    { id: 'heavy-industries', name: 'Maintenance Contract', icon: <Mountain className="w-4 h-4" /> },
    { id: 'infrastructure', name: 'Parts & Warehouse', icon: <Building className="w-4 h-4" /> },
    { id: 'specialized', name: 'Training', icon: <Shield className="w-4 h-4" /> },
    { id: 'energy', name: 'Service Locations', icon: <Zap className="w-4 h-4" /> }
  ];

  const submenuData = {
    'heavy-industries': {
      points: [
        {
          name: 'Annual Service Contracts',
          description: 'Minimize downtime and ensure preventive care with our comprehensive contracts',
          image: '/maintenance.jpg'
        },
        {
          name: 'Pre-Purchase Consultancy',
          description: 'Expert guidance for optimal equipment investment decisions',
          image: '/consultancy.jpg'
        },
        {
          name: 'Quick Parts Delivery',
          description: 'Wide and responsive supply network for fast delivery',
          image: '/parts-delivery.jpg'
        },
        {
          name: 'Pan-India On-Site Support',
          description: 'Qualified engineers available on call across India',
          image: '/onsite-support.jpg'
        },
        {
          name: 'Rebuild & Refurbishment',
          description: 'Services to extend your equipment lifecycle',
          image: '/rebuild.jpg'
        }
      ],
      media: {
        image: '/maintenance-banner.jpg',
        title: 'Maintenance Contracts',
        description: 'Keep your machines in peak condition with our comprehensive annual maintenance services.',
        cta: 'Download Brochure'
      }
    },
    'infrastructure': {
      points: [
        {
          name: 'Authentic TIL Parts',
          description: 'Genuine parts for safety, reliability, and longer equipment life',
          image: '/authentic-parts.jpg'
        },
        {
          name: 'Real-Time Inventory',
          description: 'Advanced Warehouse Management System for parts tracking',
          image: '/inventory.jpg'
        },
        {
          name: 'Wide Range Availability',
          description: 'Filters, oils, fluids, undercarriage components & more',
          image: '/parts-range.jpg'
        },
        {
          name: 'Expert Support',
          description: 'Trained product specialists for the right-fit solutions',
          image: '/expert-support.jpg'
        },
        {
          name: 'ERP-Enabled Warehouse',
          description: 'Central warehouse at Dankuni for nationwide fulfillment',
          image: '/warehouse.jpg'
        }
      ],
      media: {
        image: '/parts-banner.jpg',
        title: 'Parts & Warehouse',
        description: 'Rapid access to critical parts with optimized logistics and warehouse coverage.',
        cta: 'Check Availability'
      }
    },
    'specialized': {
      points: [
        {
          name: 'Operator Training',
          description: 'Boost ROI & Safety with skilled operators who unlock full machine potential',
          image: '/operator-training.jpg'
        },
        {
          name: 'Hands-On Training',
          description: 'Practical sessions in basic operations and scheduled maintenance',
          image: '/hands-on.jpg'
        },
        {
          name: 'Customized Modules',
          description: 'Training tailored to operator and maintenance staff needs',
          image: '/custom-training.jpg'
        },
        {
          name: 'Downtime Prevention',
          description: 'Minimize downtime through better handling and issue prevention',
          image: '/downtime.jpg'
        },
        {
          name: 'Competitive Edge',
          description: 'Enhanced knowledge, confidence, and efficiency for your team',
          image: '/competitive-edge.jpg'
        }
      ],
      media: {
        image: '/training-banner.jpg',
        title: 'Training Programs',
        description: 'Empower your workforce with certified technical and operator training.',
        cta: 'Training Calendar'
      }
    },
    'energy': {
      points: [
        {
          name: 'Kolkata Service Center',
          description: 'Full-service support for Eastern India operations',
          image: 'https://images.unsplash.com/photo-1536421469767-80559bb6f5e1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          name: 'Chennai Service Center',
          description: 'Comprehensive support for Southern region',
          image: 'https://plus.unsplash.com/premium_photo-1697729444936-8c6a6f643312?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          name: 'Delhi NCR Service Center',
          description: 'Strategic support hub for Northern India',
          image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          name: 'Mumbai Service Center',
          description: 'West zone operational support center',
          image: 'https://images.unsplash.com/photo-1580581096469-8afb38d3dbd5?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          name: 'Singrauli Service Depot',
          description: 'Industrial logistics and support in central India',
          image: '/singrauli-service.jpg'
        }
      ],
      media: {
        image: '/locations-banner.jpg',
        title: 'Service Locations',
        description: 'Our nationwide network of service centers and support facilities.',
        cta: 'View Network'
      }
    }
  };

  const currentSubmenu = submenuData[activeCategory as keyof typeof submenuData];
  const activeMedia = activePoint || currentSubmenu?.media;

  return (
    <>
      <style>{`
        .mega-menu-height {
          height: 50vh;
          max-height: 50vh;
        }
        .scroll-hover::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }
        .scroll-hover::-webkit-scrollbar-track {
          background: transparent;
        }
        .scroll-hover::-webkit-scrollbar-thumb {
          background: transparent;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        .scroll-hover:hover::-webkit-scrollbar-thumb {
          background: rgba(255, 193, 7, 0.3);
        }
        .scroll-hover::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 193, 7, 0.5);
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="overflow-hidden"
      >
        <div className="bg-[#0f1419]/95 backdrop-blur-md shadow-2xl border-t border-yellow-500/20 mega-menu-height overflow-y-auto scroll-hover">
          <div className="grid grid-cols-1 lg:grid-cols-12 w-full h-full min-h-0">
            
            {/* Left: Categories */}
            <div className="lg:col-span-3 border-r border-gray-700/50 min-w-0 h-full overflow-y-auto scroll-hover">
              <div className="p-4 sticky top-0 bg-[#0f1419] z-10">
                <h3 className="text-sm font-bold text-yellow-400 mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                  Support Categories
                </h3>
              </div>
              <div className="p-4 pt-0">
                <div className="space-y-1">
                  {primaryCategories.map((category) => (
                    <motion.div
                      key={category.id}
                      className={`cursor-pointer transition-all duration-200 rounded w-full
                        ${activeCategory === category.id
                          ? 'bg-yellow-500/8 shadow-[0_0_15px_rgba(255,193,7,0.08)]'
                          : 'hover:bg-yellow-500/8 hover:shadow-[0_0_15px_rgba(255,193,7,0.08)]'
                        }`}
                      onMouseEnter={() => {
                        setActiveCategory(category.id);
                        setActivePoint(currentSubmenu.points[0]);
                      }}
                      whileHover={{ x: 2 }}
                    >
                      <div className="flex items-center space-x-3 px-3 py-2.5">
                        <div className={`p-1.5 rounded flex-shrink-0 ${
                          activeCategory === category.id 
                            ? 'bg-yellow-500 text-black' 
                            : 'bg-gray-700 text-yellow-400'
                        }`}>
                          {category.icon}
                        </div>
                        <span className={`font-semibold text-sm ${
                          activeCategory === category.id ? 'text-yellow-400' : 'text-gray-200'
                        }`}>
                          {category.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Middle: Point-wise Info - Updated to match Contact Us style */}
            <div className="lg:col-span-6 border-r border-gray-700/50 min-w-0 h-full overflow-y-auto scroll-hover">
              <div className="p-4 sticky top-0 bg-[#0f1419] z-10">
                <h3 className="text-sm font-bold text-yellow-400 mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                  {primaryCategories.find(cat => cat.id === activeCategory)?.name || 'Support Info'}
                </h3>
              </div>
              <div className="p-4 pt-0">
                <ul className="space-y-4">
                  {currentSubmenu?.points.map((point, index) => (
                    <li
                      key={index}
                      onMouseEnter={() => setActivePoint(point)}
                      className="flex items-start gap-3 border border-gray-700/40 p-3 rounded hover:border-yellow-500 transition duration-200 bg-gray-800/20 cursor-pointer"
                    >
                      <div className="pt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 text-yellow-500 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 11.5a2 2 0 100-4 2 2 0 000 4z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 10c0 6-7.5 11.5-7.5 11.5S4.5 16 4.5 10a7.5 7.5 0 1115 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-100 hover:text-yellow-400 transition">
                          {point.name}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">{point.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Media Panel */}
            <div className="lg:col-span-3 bg-gradient-to-br from-[#0f1419] to-[#1a2233] min-w-0 h-full overflow-y-auto scroll-hover">
              <div className="p-4 sticky top-0 bg-[#1a2233] z-10">
                <h3 className="text-sm font-bold text-yellow-400 mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                  Details
                </h3>
              </div>
              <div className="p-4 pt-0">
                <motion.div
                  key={activeMedia?.title || activeMedia?.name}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 flex flex-col"
                >
                  <div className="relative mb-3 overflow-hidden rounded">
                    <img
                      src={activeMedia?.image}
                      alt={activeMedia?.title || activeMedia?.name}
                      className="w-full h-32 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-base text-yellow-400 mb-2">
                      {activeMedia?.title || activeMedia?.name}
                    </h4>
                    <p className="text-gray-300 mb-3 leading-relaxed text-xs">
                      {activeMedia?.description}
                    </p>
                    
                    <div className="space-y-2 sticky bottom-0 bg-[#1a2233]/80 backdrop-blur-sm py-2 -mx-4 px-4">
                      <motion.button 
                        className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black py-2 px-3 rounded font-bold text-xs transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Phone className="w-3 h-3" />
                        <span>{activeMedia?.cta || 'Learn More'}</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};


const MediaMegamenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  console.log('MediaMegamenu component rendering...');
  
  const [activeCategory, setActiveCategory] = useState('blogs');
  console.log('Active category:', activeCategory);

  const primaryCategories = [
    {
      id: 'blogs',
      name: 'Blogs',
      icon: <Building className="w-4 h-4" />,
      description: 'Industry insights and company updates'
    },
    {
      id: 'video',
      name: 'Videos',
      icon: <Users className="w-4 h-4" />,
      description: 'Product demos and company highlights'
    },
    {
      id: 'news',
      name: 'News',
      icon: <Shield className="w-4 h-4" />,
      description: 'Latest company announcements'
    },
    {
      id: 'til',
      name: 'TIL@bauma2024',
      icon: <Star className="w-4 h-4" />,
      description: 'Trade show highlights and innovations'
    },
    {
      id: 'events',
      name: 'Events',
      icon: <Calendar className="w-4 h-4" />,
      description: 'Upcoming events and exhibitions'
    },
    {
      id: 'press',
      name: 'Press Release',
      icon: <FileText className="w-4 h-4" />,
      description: 'Official press announcements'
    },
    {
      id: 'downloads',
      name: 'Downloads',
      icon: <Download className="w-4 h-4" />,
      description: 'Brochures and technical documents'
    }
  ];

   const submenuData = {
    'blogs': {
      items: [
        {
          title: 'Company History',
          description: 'Tracing our 80+ years of industrial excellence and innovation.',
          image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          link: '/blogs/company-history'
        },
        {
          title: 'Industry Insights',
          description: 'Expert analysis on construction equipment trends.',
          image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=240&fit=crop&crop=center',
          link: '/blogs/industry-insights'
        }
      ],
      media: {
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=240&fit=crop&crop=center',
        title: 'Our Legacy',
        description: '80+ years of engineering excellence in construction and material handling equipment.',
        cta: 'Read Our Stories',
        features: ['80+ Years Experience', 'Global Presence', 'ISO Certified']
      }
    },
    'video': {
      items: [
        {
          title: 'Product Demonstrations',
          description: 'See our equipment in action across various applications.',
          image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=240&fit=crop&crop=center',
          link: '/videos/product-demos'
        }
      ],
      media: {
        image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=240&fit=crop&crop=center',
        title: 'Video Library',
        description: 'Comprehensive collection of product demos, interviews, and company highlights.',
        cta: 'Watch Videos',
        features: ['HD Quality', 'Multiple Languages', 'Mobile Optimized']
      }
    },
    'news': {
      items: [
        {
          title: 'Latest Press Release',
          description: 'Recent company announcements and updates.',
          image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=240&fit=crop&crop=center',
          link: '/news/press-release'
        }
      ],
      media: {
        image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=240&fit=crop&crop=center',
        title: 'Latest News',
        description: 'Stay informed with our latest announcements and industry updates.',
        cta: 'Read News',
        features: ['Breaking News', 'Industry Analysis', 'Market Insights']
      }
    },
    'til': {
      items: [
        {
          title: 'Bauma 2024 Highlights',
          description: 'Key moments from the world\'s largest construction trade fair.',
          image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=240&fit=crop&crop=center',
          link: '/til/bauma-highlights'
        }
      ],
      media: {
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=240&fit=crop&crop=center',
        title: 'TIL@bauma2024',
        description: 'Discover innovations and highlights from Bauma 2024.',
        cta: 'Explore TIL',
        features: ['Innovation Showcase', 'Live Demos', 'Expert Talks']
      }
    },
    'events': {
      items: [
        {
          title: 'Upcoming Trade Shows',
          description: 'Join us at major industry exhibitions worldwide.',
          image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=240&fit=crop&crop=center',
          link: '/events/trade-shows'
        }
      ],
      media: {
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=240&fit=crop&crop=center',
        title: 'Upcoming Events',
        description: 'Join us at our upcoming events and exhibitions worldwide.',
        cta: 'View Events',
        features: ['Global Events', 'Expert Sessions', 'Networking']
      }
    },
    'press': {
      items: [
        {
          title: 'Official Announcements',
          description: 'Latest press releases and company statements.',
          image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=240&fit=crop&crop=center',
          link: '/press/announcements'
        }
      ],
      media: {
        image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=240&fit=crop&crop=center',
        title: 'Press Releases',
        description: 'Official company announcements and press statements.',
        cta: 'Read Press',
        features: ['Official News', 'Media Kit', 'Contact Info']
      }
    },
    'downloads': {
      items: [
        {
          title: 'Product Brochures',
          description: 'Comprehensive product information and specifications.',
          image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=240&fit=crop&crop=center',
          link: '/downloads/brochures'
        }
      ],
      media: {
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=240&fit=crop&crop=center',
        title: 'Downloads',
        description: 'Access our comprehensive library of brochures and technical documents.',
        cta: 'Browse Downloads',
        features: ['Product Specs', 'User Manuals', 'Technical Guides']
      }
    }
  };

  const currentSubmenu = submenuData[activeCategory as keyof typeof submenuData];
  console.log('Current submenu data:', currentSubmenu);

  // Safe hover handler with debouncing
  const handleCategoryHover = (categoryId: string) => {
    console.log('Category hovered:', categoryId);
    try {
      setActiveCategory(categoryId);
      console.log('Category set successfully to:', categoryId);
    } catch (error) {
      console.error('Error setting category on hover:', error);
    }
  };

  console.log('Rendering MediaMegamenu with activeCategory:', activeCategory);

  return (
    <>
      <style>{`
        .mega-menu-height {
          height: 50vh;
          max-height: 50vh;
        }
        .scroll-hover::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }
        .scroll-hover::-webkit-scrollbar-track {
          background: transparent;
        }
        .scroll-hover::-webkit-scrollbar-thumb {
          background: transparent;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        .scroll-hover:hover::-webkit-scrollbar-thumb {
          background: rgba(255, 193, 7, 0.3);
        }
        .scroll-hover::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 193, 7, 0.5);
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="overflow-hidden"
      >
        <div className="bg-[#0f1419]/95 backdrop-blur-md shadow-2xl border-t border-yellow-500/20 mega-menu-height overflow-y-auto scroll-hover">
          <div className="grid grid-cols-1 lg:grid-cols-12 w-full h-full min-h-0">
            
            {/* Left: Categories */}
            <div className="lg:col-span-3 border-r border-gray-700/50 min-w-0 h-full overflow-y-auto scroll-hover">
              <div className="p-4 sticky top-0 bg-[#0f1419] z-10">
                <h3 className="text-sm font-bold text-yellow-400 mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                  Media Center
                </h3>
              </div>
              <div className="p-4 pt-0">
                <div className="space-y-1">
                  {primaryCategories.map((category) => (
                    <motion.div
                      key={category.id}
                      className={`cursor-pointer transition-all duration-200 rounded w-full
                        ${activeCategory === category.id
                          ? 'bg-yellow-500/10 shadow-[0_0_15px_rgba(255,193,7,0.1)] border border-yellow-500/30'
                          : 'hover:bg-yellow-500/8 hover:shadow-[0_0_15px_rgba(255,193,7,0.08)]'
                        }`}
                      onMouseEnter={() => setActiveCategory(category.id)}
                      whileHover={{ x: 2 }}
                    >
                      <div className="flex items-center space-x-3 px-3 py-3">
                        <div className={`p-2 rounded-lg flex-shrink-0 transition-all duration-200 ${
                          activeCategory === category.id 
                            ? 'bg-yellow-500 text-black shadow-lg' 
                            : 'bg-gray-700 text-yellow-400'
                        }`}>
                          {category.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className={`font-semibold text-sm transition-colors duration-200 ${
                            activeCategory === category.id ? 'text-yellow-400' : 'text-gray-200'
                          }`}>
                            {category.name}
                          </div>
                          <div className="text-xs text-gray-500 truncate mt-0.5">
                            {category.description}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Middle: Card-based Items */}
            <div className="lg:col-span-6 border-r border-gray-700/50 min-w-0 h-full overflow-y-auto scroll-hover">
              <div className="p-4 sticky top-0 bg-[#0f1419] z-10">
                <h3 className="text-sm font-bold text-yellow-400 mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                  {primaryCategories.find(cat => cat.id === activeCategory)?.name || 'Content'}
                </h3>
              </div>
              <div className="p-4 pt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentSubmenu?.items.map((item, index) => (
                    <div
                      key={index}
                      className="group bg-[#1c2128] border border-gray-700/40 rounded-lg overflow-hidden hover:border-yellow-500/60 hover:shadow-lg transition-all duration-300"
                    >
                      <a href={item.link} className="block h-full">
                        <div className="h-24 overflow-hidden relative">
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        </div>
                        <div className="p-3">
                          <h4 className="text-sm font-semibold text-yellow-400 group-hover:text-yellow-300 mb-1 transition-colors duration-200">
                            {item.title}
                          </h4>
                          <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Media Panel */}
            <div className="lg:col-span-3 bg-gradient-to-br from-[#0f1419] to-[#1a2233] min-w-0 h-full overflow-y-auto scroll-hover">
              <div className="p-4 sticky top-0 bg-[#1a2233] z-10">
                <h3 className="text-sm font-bold text-yellow-400 mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                  Highlights
                </h3>
              </div>
              <div className="p-4 pt-0">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col h-full"
                >
                  <div className="relative mb-4 overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={currentSubmenu?.media.image}
                      alt={currentSubmenu?.media.title}
                      className="w-full h-36 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-2 left-3 right-3">
                      <h4 className="font-bold text-white text-sm">
                        {currentSubmenu?.media.title}
                      </h4>
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                      {currentSubmenu?.media.description}
                    </p>
                    
                    <div className="mb-6">
                      <h5 className="font-semibold text-yellow-400 mb-3 text-sm">Key Features:</h5>
                      <div className="space-y-2">
                        {currentSubmenu?.media.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Award className="w-3 h-3 text-yellow-500 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-3 sticky bottom-0 bg-[#1a2233]/80 backdrop-blur-sm py-3 -mx-4 px-4">
                      <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black py-2.5 px-4 rounded-lg font-bold text-sm transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg">
                        <Eye className="w-4 h-4" />
                        <span>Explore {primaryCategories.find(c => c.id === activeCategory)?.name}</span>
                      </button>
                      
                      <button className="w-full border border-yellow-500/50 hover:bg-yellow-500/10 text-yellow-400 py-2 px-4 rounded-lg font-semibold text-sm transition-all duration-200 flex items-center justify-center space-x-2">
                        <Download className="w-4 h-4" />
                        <span>Download Resources</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};


const CareersMegamenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [activeCategory, setActiveCategory] = useState('life');
  const [activePoint, setActivePoint] = useState<{name: string, description: string, image: string} | null>(null);

  const primaryCategories = [
    { id: 'life', name: 'Life @TIL', icon: <Mountain className="w-4 h-4" /> },
    { id: 'team', name: 'Meet our Team', icon: <Building className="w-4 h-4" /> },
    { id: 'vacant', name: 'Vacancies', icon: <Shield className="w-4 h-4" /> },
    { id: 'equal', name: 'Equal Opportunity Employer', icon: <Zap className="w-4 h-4" /> }
  ];

  const submenuData = {
    'life': {
      points: [
        {
          name: 'Inclusive Culture',
          description: 'Collaborative work environment that values diversity',
          image: '/culture.jpg'
        },
        {
          name: 'Flexible Work',
          description: 'Hybrid options and adaptable working hours',
          image: '/flexible-work.jpg'
        },
        {
          name: 'Wellness Programs',
          description: 'Initiatives supporting mental and physical health',
          image: '/wellness.jpg'
        },
        {
          name: 'Recognition',
          description: 'Programs celebrating employee achievements',
          image: '/recognition.jpg'
        }
      ],
      media: {
        image: '/life.jpg',
        title: 'Life @TIL',
        description: 'Work-life balance, diversity, and innovation thrive in our dynamic culture.',
        cta: 'Explore Culture'
      }
    },
    'team': {
      members: [
        {
          name: 'Pinaki Niyogy',
          title: 'Chief Executive Officer',
          image: '/pinaki.jpg'
        },
        {
          name: 'Arvind Rishi',
          title: 'AVP- Sales & After Market',
          image: '/arvind.jpeg'
        },
        {
          name: 'Mr. Kanhaiya Gupta',
          title: 'Chief Financial Officer',
          image: '/Kanhaiya.png'
        },
        {
          name: 'Ms. Shamita Nandi',
          title: 'Chief Human Resource Officer',
          image: '/Shamita.png'
        },
        {
          name: 'Chandrani Chatterjee',
          title: 'Company Secretary',
          image: '/chandrani.jpg'
        },
        {
          name: 'Mr. Saikat Bagchi',
          title: 'Head - Supply Chain & Commercial',
          image: '/saiket.png'
        },
        {
          name: 'Rishabh P Nair',
          title: 'Head Of Brand, Content & PR',
          image: '/Risabh.png'
        }
      ],
      media: {
        image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400&h=240&fit=crop&crop=center',
        title: 'Meet Our Team',
        description: 'Get to know the passionate minds building the future of infrastructure.',
        cta: 'Meet the Team'
      }
    },
    'vacant': {
      points: [
        {
          name: 'Open Roles',
          description: 'Positions across engineering, sales, and operations',
          image: '/open-roles.jpg'
        },
        {
          name: 'Campus Programs',
          description: 'Placement and intern opportunities for students',
          image: '/campus.jpg'
        },
        {
          name: 'Hiring Process',
          description: 'Quick and transparent recruitment journey',
          image: '/hiring.jpg'
        },
        {
          name: 'Career Growth',
          description: 'Structured learning and development paths',
          image: '/growth.jpg'
        }
      ],
      media: {
        image: '/job.jpg',
        title: 'Current Openings',
        description: "Explore vacancies and apply to be a part of TIL's next chapter.",
        cta: 'View Jobs'
      }
    },
    'equal': {
      points: [
        {
          name: 'Diversity & Inclusion',
          description: 'Commitment across all departments and levels',
          image: '/diversity.jpg'
        },
        {
          name: 'Zero Tolerance',
          description: 'Against discrimination or bias of any kind',
          image: '/zero-tolerance.jpg'
        },
        {
          name: 'Women Leadership',
          description: 'Initiatives to promote gender equality',
          image: '/women-leadership.jpg'
        },
        {
          name: 'Accessibility',
          description: 'Inclusive workplace policies and facilities',
          image: '/accessibility.jpg'
        }
      ],
      media: {
        image: '/equal.jpg',
        title: 'Equal Opportunity',
        description: 'We are committed to an inclusive, safe, and diverse work environment.',
        cta: 'Our Policy'
      }
    }
  };

  const currentSubmenu = submenuData[activeCategory as keyof typeof submenuData];
  const activeMedia = activePoint || currentSubmenu?.media;

  return (
    <>
      <style>{`
        .mega-menu-height {
          height: 50vh;
          max-height: 50vh;
        }
        .scroll-hover::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }
        .scroll-hover::-webkit-scrollbar-track {
          background: transparent;
        }
        .scroll-hover::-webkit-scrollbar-thumb {
          background: transparent;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        .scroll-hover:hover::-webkit-scrollbar-thumb {
          background: rgba(255, 193, 7, 0.3);
        }
        .scroll-hover::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 193, 7, 0.5);
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="overflow-hidden"
      >
        <div className="bg-[#0f1419]/95 backdrop-blur-md shadow-2xl border-t border-yellow-500/20 mega-menu-height overflow-y-auto scroll-hover">
          <div className="grid grid-cols-1 lg:grid-cols-12 w-full h-full min-h-0">
            
            {/* Left: Categories */}
            <div className="lg:col-span-3 border-r border-gray-700/50 min-w-0 h-full overflow-y-auto scroll-hover">
              <div className="p-4 sticky top-0 bg-[#0f1419] z-10">
                <h3 className="text-sm font-bold text-yellow-400 mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                  Career Focus
                </h3>
              </div>
              <div className="p-4 pt-0">
                <div className="space-y-1">
                  {primaryCategories.map((category) => (
                    <motion.div
                      key={category.id}
                      className={`cursor-pointer transition-all duration-200 rounded w-full
                        ${activeCategory === category.id
                          ? 'bg-yellow-500/8 shadow-[0_0_15px_rgba(255,193,7,0.08)]'
                          : 'hover:bg-yellow-500/8 hover:shadow-[0_0_15px_rgba(255,193,7,0.08)]'
                        }`}
                      onMouseEnter={() => {
                        setActiveCategory(category.id);
                        if (category.id !== 'team') {
                          setActivePoint(currentSubmenu.points[0]);
                        }
                      }}
                      whileHover={{ x: 2 }}
                    >
                      <div className="flex items-center space-x-3 px-3 py-2.5">
                        <div className={`p-1.5 rounded flex-shrink-0 ${
                          activeCategory === category.id 
                            ? 'bg-yellow-500 text-black' 
                            : 'bg-gray-700 text-yellow-400'
                        }`}>
                          {category.icon}
                        </div>
                        <span className={`font-semibold text-sm ${
                          activeCategory === category.id ? 'text-yellow-400' : 'text-gray-200'
                        }`}>
                          {category.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Middle: Content */}
            <div className="lg:col-span-6 border-r border-gray-700/50 min-w-0 h-full overflow-y-auto scroll-hover">
              <div className="p-4 sticky top-0 bg-[#0f1419] z-10">
                <h3 className="text-sm font-bold text-yellow-400 mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                  {primaryCategories.find(cat => cat.id === activeCategory)?.name || 'Details'}
                </h3>
              </div>
              <div className="p-4 pt-0">
                {activeCategory === 'team' ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {currentSubmenu?.members?.map((member, index) => (
                      <div key={index} className="text-center">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-20 h-20 mx-auto rounded-full object-cover shadow-lg border-2 border-yellow-500"
                        />
                        <h4 className="mt-3 text-sm font-semibold text-yellow-400">{member.name}</h4>
                        <p className="text-xs text-gray-400">{member.title}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="space-y-4">
                    {currentSubmenu?.points?.map((point, index) => (
                      <li
                        key={index}
                        onMouseEnter={() => setActivePoint(point)}
                        className="flex items-start gap-3 border border-gray-700/40 p-3 rounded hover:border-yellow-500 transition duration-200 bg-gray-800/20 cursor-pointer"
                      >
                        <div className="pt-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-yellow-500 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 11.5a2 2 0 100-4 2 2 0 000 4z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 10c0 6-7.5 11.5-7.5 11.5S4.5 16 4.5 10a7.5 7.5 0 1115 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-100 hover:text-yellow-400 transition">
                            {point.name}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">{point.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Right: Media Panel */}
            <div className="lg:col-span-3 bg-gradient-to-br from-[#0f1419] to-[#1a2233] min-w-0 h-full overflow-y-auto scroll-hover">
              <div className="p-4 sticky top-0 bg-[#1a2233] z-10">
                <h3 className="text-sm font-bold text-yellow-400 mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                  Highlights
                </h3>
              </div>
              <div className="p-4 pt-0">
                <motion.div
                  key={activeMedia?.title || activeMedia?.name}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col h-full"
                >
                  <div className="relative mb-3 overflow-hidden rounded">
                    <img
                      src={activeMedia?.image}
                      alt={activeMedia?.title || activeMedia?.name}
                      className="w-full h-32 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-base text-yellow-400 mb-2">
                      {activeMedia?.title || activeMedia?.name}
                    </h4>
                    <p className="text-gray-300 mb-4 leading-relaxed text-xs">
                      {activeMedia?.description}
                    </p>
                    
                    <div className="space-y-2 sticky bottom-0 bg-[#1a2233]/80 backdrop-blur-sm py-2 -mx-4 px-4">
                      <motion.button 
                        className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black py-2 px-3 rounded font-bold text-xs transition-all duration-200 shadow-lg"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {activeMedia?.cta}
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

const ContactMegamenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [activeCategory, setActiveCategory] = useState('locations');
  const [activeLocation, setActiveLocation] = useState(null);

  const primaryCategories = [
    { id: 'locations', name: 'Locations', icon: <Mountain className="w-4 h-4" /> },
    { id: 'inquiry', name: 'Inquiry', icon: <Building className="w-4 h-4" /> }
  ];

  const submenuData = {
    'locations': {
      points: [
        {
          name: 'Kolkata',
          image: 'https://images.unsplash.com/photo-1536421469767-80559bb6f5e1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          title: 'Kolkata',
          description: 'Corporate headquarters of TIL, located in the heart of the city.',
          cta: 'View Kolkata Office'
        },
        {
          name: 'Chennai',
          image: 'https://plus.unsplash.com/premium_photo-1697729444936-8c6a6f643312?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          title: 'Chennai',
          description: 'Serving the southern region with excellence.',
          cta: 'View Chennai Office'
        },
        {
          name: 'Delhi NCR',
          image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          title: 'Delhi NCR ',
          description: 'Our strategic presence in the capital region.',
          cta: 'View Delhi NCR Office'
        },
        {
          name: 'Mumbai',
          image: 'https://images.unsplash.com/photo-1580581096469-8afb38d3dbd5?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          title: 'Mumbai',
          description: 'West zone operational hub for TIL.',
          cta: 'View Mumbai Office'
        },
        {
          name: 'Singrauli',
          image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=240&fit=crop&crop=center',
          title: 'Singrauli',
          description: 'Industrial logistics and support in central India.',
          cta: 'View Singrauli Depot'
        }
      ],
      media: {} // fallback not used when dynamic hover is active
    },
    'inquiry': {
      contacts: [
        { label: 'WhatsApp', value: '+91 89815 30153', icon: <MessageCircle className="w-5 h-5 text-green-400" /> },
        { label: 'Email', value: 'mktg-til@tilindia.com', icon: <Mail className="w-5 h-5 text-blue-400" /> },
        { label: 'Phone', value: '+91 033 6633 2000', icon: <Phone className="w-5 h-5 text-yellow-400" /> },
        { label: 'LinkedIn', value: 'https://www.linkedin.com/company/til-limited-ind/', icon: <Linkedin className="w-5 h-5 text-[#0A66C2]" /> }
      ],
      media: {
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=240&fit=crop&crop=center',
        title: 'Get In Touch',
        description: 'Reach out to our team through your preferred channel. We’re here to help.',
        cta: 'Contact Us'
      }
    }
  };

  const currentSubmenu = submenuData[activeCategory as keyof typeof submenuData];
  const activeMedia = activeCategory === 'locations'
    ? activeLocation || currentSubmenu.points[0]
    : currentSubmenu.media;

  return (
    <>
      <style>{`
        .mega-menu-height {
          height: 50vh;
          max-height: 50vh;
        }
        .scroll-hover::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }
        .scroll-hover::-webkit-scrollbar-track {
          background: transparent;
        }
        .scroll-hover::-webkit-scrollbar-thumb {
          background: transparent;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        .scroll-hover:hover::-webkit-scrollbar-thumb {
          background: rgba(255, 193, 7, 0.3);
        }
        .scroll-hover::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 193, 7, 0.5);
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="overflow-hidden"
      >
        <div className="bg-[#0f1419]/95 backdrop-blur-md shadow-2xl border-t border-yellow-500/20 mega-menu-height overflow-y-auto scroll-hover">
          <div className="grid grid-cols-1 lg:grid-cols-12 w-full h-full min-h-0">
            
            {/* Left: Categories */}
            <div className="lg:col-span-3 border-r border-gray-700/50 min-w-0 h-full overflow-y-auto scroll-hover">
              <div className="p-4 sticky top-0 bg-[#0f1419] z-10">
                <h3 className="text-sm font-bold text-yellow-400 mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                  Contact Channels
                </h3>
              </div>
              <div className="p-4 pt-0">
                <div className="space-y-1">
                  {primaryCategories.map((category) => (
                    <motion.div
                      key={category.id}
                      className={`cursor-pointer transition-all duration-200 rounded w-full
                        ${activeCategory === category.id
                          ? 'bg-yellow-500/8 shadow-[0_0_15px_rgba(255,193,7,0.08)]'
                          : 'hover:bg-yellow-500/8 hover:shadow-[0_0_15px_rgba(255,193,7,0.08)]'
                        }`}
                      onMouseEnter={() => {
                        setActiveCategory(category.id);
                        if (category.id === 'locations') {
                          setActiveLocation(currentSubmenu.points[0]);
                        }
                      }}
                      whileHover={{ x: 2 }}
                    >
                      <div className="flex items-center space-x-3 px-3 py-2.5">
                        <div className={`p-1.5 rounded flex-shrink-0 ${
                          activeCategory === category.id 
                            ? 'bg-yellow-500 text-black' 
                            : 'bg-gray-700 text-yellow-400'
                        }`}>
                          {category.icon}
                        </div>
                        <span className={`font-semibold text-sm ${
                          activeCategory === category.id ? 'text-yellow-400' : 'text-gray-200'
                        }`}>
                          {category.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Middle: Info List */}
            <div className="lg:col-span-6 border-r border-gray-700/50 min-w-0 h-full overflow-y-auto scroll-hover">
              <div className="p-4 sticky top-0 bg-[#0f1419] z-10">
                <h3 className="text-sm font-bold text-yellow-400 mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                  {primaryCategories.find(cat => cat.id === activeCategory)?.name || 'Contact'}
                </h3>
              </div>
              <div className="p-4 pt-0">
                {activeCategory === 'inquiry' ? (
                  <ul className="space-y-3 text-gray-200 text-sm">
                    {currentSubmenu?.contacts.map((contact, index) => {
                      const isPhone = contact.label.toLowerCase().includes('phone');
                      const isEmail = contact.label.toLowerCase().includes('email');
                      const isWhatsApp = contact.label.toLowerCase().includes('whatsapp');
                      const isLinkedIn = contact.label.toLowerCase().includes('linkedin');

                      let href = '#';
                      if (isPhone) href = `tel:${contact.value}`;
                      else if (isEmail) href = `mailto:${contact.value}`;
                      else if (isWhatsApp) href = `https://wa.me/${contact.value.replace(/\D/g, '')}`;
                      else if (isLinkedIn) href = contact.value;

                      return (
                        <li key={index}>
                          <a
                            href={href}
                            target={isLinkedIn || isWhatsApp ? "_blank" : "_self"}
                            rel={isLinkedIn || isWhatsApp ? "noopener noreferrer" : ""}
                            className="flex items-center space-x-3 hover:text-yellow-300 transition-colors"
                            aria-label={`Contact via ${contact.label}`}
                          >
                            <div>{contact.icon}</div>
                            <div>
                              <span className="block font-medium text-gray-300">{contact.label}</span>
                              <span className="text-yellow-400 underline underline-offset-2">{contact.value}</span>
                            </div>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <ul className="space-y-4">
                    {currentSubmenu?.points.map((location, index) => (
                      <li
                        key={index}
                        onMouseEnter={() => setActiveLocation(location)}
                        className="flex items-start gap-3 border border-gray-700/40 p-3 rounded hover:border-yellow-500 transition duration-200 bg-gray-800/20 cursor-pointer"
                      >
                        <div className="pt-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-yellow-500 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 11.5a2 2 0 100-4 2 2 0 000 4z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 10c0 6-7.5 11.5-7.5 11.5S4.5 16 4.5 10a7.5 7.5 0 1115 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-100 hover:text-yellow-400 transition">
                            {location.name}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Right: Dynamic Media Panel */}
            <div className="lg:col-span-3 bg-gradient-to-br from-[#0f1419] to-[#1a2233] min-w-0 h-full overflow-y-auto scroll-hover">
              <div className="p-4 sticky top-0 bg-[#1a2233] z-10">
                <h3 className="text-sm font-bold text-yellow-400 mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                  Details
                </h3>
              </div>
              <div className="p-4 pt-0">
                <motion.div
                  key={activeMedia?.title || activeMedia?.name}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col h-full"
                >
                  <div className="relative mb-3 overflow-hidden rounded">
                    <img
                      src={activeMedia?.image}
                      alt={activeMedia?.title || activeMedia?.name}
                      className="w-full h-32 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-base text-yellow-400 mb-2">
                      {activeMedia?.title || activeMedia?.name}
                    </h4>
                    <p className="text-gray-300 mb-4 leading-relaxed text-xs">
                      {activeMedia?.description}
                    </p>

                    {activeMedia?.cta && (
                      <div className="space-y-2 sticky bottom-0 bg-[#1a2233]/80 backdrop-blur-sm py-2 -mx-4 px-4">
                        <motion.button
                          className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black py-2 px-3 rounded font-bold text-xs transition-all duration-200 shadow-lg"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {activeMedia?.cta}
                        </motion.button>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};


const MainNavigation: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
      
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrollingDown(currentScrollY > lastScrollY && currentScrollY > 100);
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: 'About Us', hasSubmenu: true },
    { name: 'Products', hasSubmenu: true },
    { name: 'Customer Support', hasSubmenu: true },
    { name: 'Investor Relations', hasSubmenu: false },
    { name: 'Media', hasSubmenu: true },
    { name: 'Careers', hasSubmenu: true },
    { name: 'Contact Us', hasSubmenu: true },
  ];

  return (
    <div 
      className="relative"
      onMouseLeave={() => setActiveMenu(null)}
    >
      <motion.nav
        data-component="MainNavigation"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrollingDown ? '-translate-y-full' : 'translate-y-0'
        } ${
          isScrolled ? 'bg-[#1a2233]/85 backdrop-blur-md shadow-2xl' : 'bg-[#1a2233]'
        }`}
        style={{ marginTop: isScrolled ? '53px' : '60px' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20">
          <div className="flex h-14">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="flex-1"
                onMouseEnter={() => item.hasSubmenu && setActiveMenu(item.name)}
              >
                <motion.button 
                  className={`flex items-center justify-center space-x-1 px-4 font-bold text-sm uppercase tracking-wide transition-all duration-200 w-full h-full
                    ${
                      activeMenu === item.name 
                        ? 'bg-yellow-500 text-black'
                        : 'text-gray-200 hover:text-white hover:bg-gray-600'
                    }
                  `}
                  whileHover={{ scale: 1.005 }}
                  whileTap={{ scale: 0.995 }}
                >
                  <span>{item.name}</span>
                  {item.hasSubmenu && (
                    <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${
                      activeMenu === item.name ? 'rotate-180' : ''
                    }`} />
                  )}
                </motion.button>
              </div>
            ))}
          </div>
        </div>

        {/* Full-width Mega Menus */}
        <AnimatePresence>
          {activeMenu === 'About Us' && (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    className="absolute top-full left-0 right-0 z-50"
  >
    <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20">
      <AboutMegamenu onClose={() => setActiveMenu(null)} />
    </div>
  </motion.div>
)}

          {/* Products mega-menu */}
          {activeMenu === 'Products' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 z-50"
            >
              <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20">
                <ProductsMegamenu onClose={() => setActiveMenu(null)} />
              </div>
            </motion.div>
          )}

          {/* Industries mega-menu */}
          {activeMenu === 'Customer Support' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 z-50"
            >
              <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20">
                <CustomerSupportMegamenu onClose={() => setActiveMenu(null)} />
              </div>
            </motion.div>
          )}
          {activeMenu === 'Media' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 z-50"
            >
              <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20">
                <MediaMegamenu onClose={() => setActiveMenu(null)} />
              </div>
            </motion.div>
          )}
          {activeMenu === 'Careers' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 z-50"
            >
              <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20">
                <CareersMegamenu onClose={() => setActiveMenu(null)} />
              </div>
            </motion.div>
          )}
          {activeMenu === 'Contact Us' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 z-50"
            >
              <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20">
                <ContactMegamenu onClose={() => setActiveMenu(null)} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default MainNavigation;