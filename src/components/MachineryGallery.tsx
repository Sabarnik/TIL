'use client'

import { type FC, useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export interface Machine {
  id: string
  title: string
  img: string
  specs: string[]
  price: string
  tag?: 'NEW' | 'POPULAR' | 'FEATURED'
}

const MACHINES: Machine[] = [
  {
    id: 'rough-terrain',
    title: 'Rough-Terrain Crane',
    img: `${__IMAGE_BASE_PATH__}/rough-terrain.png`,
    specs: ['Off-road ready', '32 m boom', '80 t capacity'],
    price: '$185,000',
    tag: 'POPULAR',
  },
  {
    id: 'truck-crane',
    title: 'Truck Crane',
    img: `${__IMAGE_BASE_PATH__}/truck-cranes.jpeg`,
    specs: ['High mobility', '200 t max', 'Long-reach boom'],
    price: '$220,000',
    tag: 'POPULAR',
  },
  {
    id: 'pick-carry',
    title: 'Pick-n-Carry Crane',
    img: `${__IMAGE_BASE_PATH__}/pick-n-carry.png`,
    specs: ['Compact design', '25 t capacity', 'Tight radius'],
    price: '$95,000',
    tag: 'NEW',
  },
  {
    id: 'grove',
    title: 'Grove™ Range',
    img: `${__IMAGE_BASE_PATH__}/grove-range.png`,
    specs: ['Telescopic boom', 'Full-power lift', '300 t max'],
    price: '$350,000',
    tag: 'FEATURED',
  },
  {
    id: 'crawler',
    title: 'Crawler Crane',
    img: `${__IMAGE_BASE_PATH__}/crawler-cranes.png`,
    specs: ['Mud-friendly', '400 t max', 'Wide tracks'],
    price: '$420,000',
    tag: 'POPULAR',
  },
  {
    id: 'reachstacker',
    title: 'ReachStacker',
    img: `${__IMAGE_BASE_PATH__}/reachstackers.png`,
    specs: ['Container lift', '45 t', 'Port-grade power'],
    price: '$150,000',
    tag: 'POPULAR',
  },
  {
    id: 'forklift',
    title: 'Forklift Truck',
    img: `${__IMAGE_BASE_PATH__}/forklift.png`,
    specs: ['Warehouse pro', '3 t lift', 'Electric / Diesel'],
    price: '$45,000',
    tag: 'POPULAR',
  },
  {
    id: 'boom-lift',
    title: 'Boom Lift',
    img: `${__IMAGE_BASE_PATH__}/boomlifts.png`,
    specs: ['45 m reach', 'Hybrid drive', '360° rotation'],
    price: '$75,000',
    tag: 'NEW',
  },
]

const ProductCard: FC<{ machine: Machine; isActive: boolean }> = ({
  machine,
  isActive,
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`relative w-full h-full max-w-[16rem] max-h-[16rem] overflow-hidden rounded-xl shadow-lg transition-all duration-500 ${
        isActive ? 'scale-110 z-10' : 'scale-90'
      } group`}
      style={{
        boxShadow: isActive ? '0 10px 25px -5px rgba(0, 0, 0, 0.3)' : 'none',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient margin effect */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{
          background: 'linear-gradient(to right, #F1B434, #FFE352)',
          padding: '2px',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-full h-full bg-white rounded-lg" />
      </motion.div>

      <img
        src={machine.img}
        alt={machine.title}
        className="w-full h-full object-contain bg-white p-4 relative z-0"
      />

      {/* Title inside card */}
      <motion.span
        className="absolute top-4 left-0 right-0 inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#F1B434] to-[#FFE352] text-lg font-bold tracking-tight text-center"
        initial={{ 
          opacity: 0,
          letterSpacing: "-0.05em"
        }}
        animate={{
          opacity: 1,
          letterSpacing: "0.02em",
        }}
        transition={{ 
          duration: 0.8,
          delay: 0.3,
          ease: [0.16, 0.77, 0.47, 0.97]
        }}
      >
        {machine.title}
      </motion.span>

      {/* Always visible Explore Now button */}
      <motion.button
        className={`absolute flex items-center justify-center gap-1 text-white px-3 py-1.5 rounded-lg text-xs z-10 ${
          isHovered ? 'bottom-4 right-4' : 'bottom-4 left-1/2 -translate-x-1/2'
        }`}
        style={{
          background: 'linear-gradient(to right, #F1B434, #FFE352)'
        }}
        whileHover={{
          background: 'linear-gradient(to right, #FFE352, #F1B434)'
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut"
        }}
      >
        <ArrowRight size={12} />
        Explore Now
      </motion.button>

      {/* Hover overlay with details */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-end opacity-0 group-hover:opacity-100 p-4 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a2233]/90 via-[#1a2233]/50 to-transparent" />
        
        <div className="relative z-10 space-y-2">
          <ul className="text-gray-100 font-sans text-xs space-y-1">
            {machine.specs.map((spec, i) => (
              <li key={i} className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F1B434] mr-2"></span>
                {spec}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  )
}

const MachineryGallery: FC<{ products?: Machine[] }> = ({
  products = MACHINES,
}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const totalItems = products.length
  const radius = 350 // Distance from center

  // For mobile touch events
  const [touchStartX, setTouchStartX] = useState(0)
  const [touchEndX, setTouchEndX] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered && !isDragging) {
        setActiveIndex((prev) => (prev + 1) % totalItems)
      }
    }, 3000)
    
    return () => clearInterval(interval)
  }, [isHovered, isDragging, totalItems])

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    
    const container = containerRef.current
    if (!container) return
    
    const containerWidth = container.offsetWidth
    const movementX = e.clientX - startX
    const movementPercentage = (movementX / containerWidth) * 100
    
    const sensitivity = 2
    const indexChange = Math.floor(movementPercentage / sensitivity)
    
    if (indexChange !== 0) {
      const newIndex = (activeIndex - indexChange + totalItems) % totalItems
      setActiveIndex(newIndex)
      setStartX(e.clientX)
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.touches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      // Swipe left
      setActiveIndex((prev) => (prev + 1) % totalItems)
    }

    if (touchStartX - touchEndX < -50) {
      // Swipe right
      setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems)
    }
  }

  // Calculate angle for each item
  const getAngle = (index: number) => {
    const angle = (360 / totalItems) * index
    return angle
  }

  return (
    <section className="py-8 md:py-16 bg-gradient-to-b from-[#f8f9fa] to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Our Product <span className="text-[#F1B434]">Portfolio</span>
          </h2>
           <div className="w-24 h-1 bg-gradient-to-r from-[#F1B434] to-[#FFE352] mx-auto rounded-full"></div>

          <p className="text-[#1a2233]/80 max-w-2xl mx-auto text-sm md:text-base">
            Explore our premium range of heavy machinery designed for performance and durability
          </p>
          
        </div>

        <div className="relative">
          {/* Tags outside the carousel */}
          <motion.div
            className="flex justify-center mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            key={`tag-${activeIndex}`}
          >
            <span
              className={`text-xs font-bold px-3 py-1 rounded-full ${
                products[activeIndex].tag === 'NEW'
                  ? 'bg-[#F1B434] text-white'
                  : products[activeIndex].tag === 'POPULAR'
                  ? 'bg-[#1a2233] text-white'
                  : 'bg-[#FFE352] text-[#1a2233]'
              } shadow-md`}
            >
              {products[activeIndex].tag}
            </span>
          </motion.div>

          {/* Mobile simple carousel */}
          <div className="md:hidden">
            <div className="relative h-[300px] flex items-center justify-center overflow-hidden">
              <div className="flex w-full h-full items-center justify-center">
                <ProductCard machine={products[activeIndex]} isActive={true} />
              </div>
              
              {/* Mobile arrows */}
              <button
                className="absolute left-2 z-20 bg-white p-2 rounded-full shadow-lg hover:bg-[#F1B434]/10 active:scale-95 transition-transform"
                onClick={() =>
                  setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems)
                }
                aria-label="Previous machine"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#1a2233]"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                className="absolute right-2 z-20 bg-white p-2 rounded-full shadow-lg hover:bg-[#F1B434]/10 active:scale-95 transition-transform"
                onClick={() =>
                  setActiveIndex((prev) => (prev + 1) % totalItems)
                }
                aria-label="Next machine"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#1a2233]"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
            
            {/* Mobile indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-[#F1B434]' : 'bg-[#1a2233]/20'
                  }`}
                  aria-label={`Go to item ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop 3D carousel */}
          <div className="hidden md:block">
            <div
              ref={containerRef}
              className="relative h-[450px] flex items-center justify-center"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeaveCapture={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="relative w-full h-full"
                style={{ perspective: '1000px' }}
              >
                <motion.div
                  animate={{ rotateY: -getAngle(activeIndex) }}
                  transition={{ 
                    duration: 1.5, 
                    ease: [0.32, 0.72, 0, 1],
                    type: "spring",
                    stiffness: 100,
                    damping: 20
                  }}
                  className="absolute w-full h-full"
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {products.map((machine, index) => {
                    const angle = getAngle(index)
                    const transform = `rotateY(${angle}deg) translateZ(${radius}px)`
                    const isActive = index === activeIndex

                    return (
                      <div
                        key={machine.id}
                        style={{
                          transform,
                          transformStyle: 'preserve-3d',
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          width: '16rem',
                          height: '16rem',
                          margin: '-8rem 0 0 -8rem',
                        }}
                      >
                        <ProductCard machine={machine} isActive={isActive} />
                      </div>
                    )
                  })}
                </motion.div>
              </div>

              {/* Desktop arrows */}
              <button
                className="absolute left-4 z-20 bg-white p-3 rounded-full shadow-lg hover:bg-[#F1B434]/10 hover:scale-110 active:scale-95 transition-transform"
                onClick={() =>
                  setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems)
                }
                aria-label="Previous machine"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#1a2233]"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                className="absolute right-4 z-20 bg-white p-3 rounded-full shadow-lg hover:bg-[#F1B434]/10 hover:scale-110 active:scale-95 transition-transform"
                onClick={() =>
                  setActiveIndex((prev) => (prev + 1) % totalItems)
                }
                aria-label="Next machine"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#1a2233]"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MachineryGallery