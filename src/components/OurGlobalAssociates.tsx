import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Make sure global.d.ts has:
// declare const __IMAGE_BASE_PATH__: string;

const OurGlobalAssociates = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.2,
    once: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  const logos = [
    { name: 'GROVE', src: `${__IMAGE_BASE_PATH__}/clogo1.png` },
    { name: 'HYSTER', src: `${__IMAGE_BASE_PATH__}/clogo2.png` },
    { name: 'MANITOWOC', src: `${__IMAGE_BASE_PATH__}/clogo3.png` },
    { name: 'SNORKEL', src: `${__IMAGE_BASE_PATH__}/clogo4.png` },
  ];

  return (
    <section className="relative bg-cover bg-center py-16 overflow-hidden">
      {/* Background Image with Fixed Parallax Effect */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('${__IMAGE_BASE_PATH__}/global.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          willChange: 'transform',
        }}
      />

      {/* Lighter Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/40 z-0" />

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Our <span className="text-yellow-400">Global</span> Associates
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="w-12 h-0.5 bg-yellow-400 rounded-full mx-auto mb-5"
          />

          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto text-base text-white/90 leading-relaxed mb-12"
          >
            We strive to uphold excellence in design and manufacturing by partnering
            with internationally renowned associates, enabling us to elevate our
            infra-equipment manufacturing capabilities to a global scale. With our
            steadfast commitment to quality and customer centricity, we aim to deliver
            exceptional solutions that meet the demands of the global market.
          </motion.p>

          {/* Logo Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto"
          >
            {logos.map((logo) => (
              <motion.div
                key={logo.name}
                variants={logoVariants}
                className="group flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/15 hover:border-yellow-400/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/10"
                style={{
                  width: '140px',
                  height: '100px',
                  margin: '0 auto',
                }}
              >
                <div className="flex items-center justify-center w-full h-full p-4">
                  <img
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    className={`max-w-full max-h-full object-contain transition-all duration-300 ${
                      logo.name === 'HYSTER'
                        ? 'filter grayscale brightness-75'
                        : 'filter brightness-0 invert'
                    } group-hover:grayscale-0 group-hover:brightness-100 group-hover:invert-0`}
                    style={{
                      width: 'auto',
                      height: 'auto',
                      maxWidth: '120px',
                      maxHeight: '80px',
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/10 to-transparent z-0" />
    </section>
  );
};

export default OurGlobalAssociates;
