import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const PremiumCafeLoader = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide the loader after ~2000ms
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 800); // 800ms fade out transition
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-b from-surface via-surface-container-lowest to-surface-container-high pointer-events-none overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="relative flex flex-col items-center justify-center text-center">
        {/* Subtle animated steam elements behind text */}
        <div className="absolute -top-12 flex space-x-6 opacity-30">
          <motion.div
            className="w-1 h-16 bg-gradient-to-t from-primary/0 via-primary/50 to-primary/0 rounded-full blur-sm"
            animate={{ 
              y: [10, -20, 10], 
              opacity: [0.2, 0.6, 0.2] 
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="w-1 h-20 bg-gradient-to-t from-primary/0 via-primary/50 to-primary/0 rounded-full blur-sm"
            animate={{ 
              y: [0, -30, 0], 
              opacity: [0.1, 0.5, 0.1] 
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.div
            className="w-1 h-14 bg-gradient-to-t from-primary/0 via-primary/50 to-primary/0 rounded-full blur-sm"
            animate={{ 
              y: [5, -15, 5], 
              opacity: [0.3, 0.7, 0.3] 
            }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          />
        </div>

        {/* Brand Name */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-black text-primary font-h1 tracking-tight z-10"
        >
          SipScene Café
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-4 font-body-md text-on-surface-variant uppercase tracking-[0.2em] text-xs md:text-sm z-10"
        >
          Brewing your experience...
        </motion.p>

        {/* Minimal Progress Line */}
        <div className="mt-8 w-48 h-[2px] bg-outline-variant/30 overflow-hidden rounded-full z-10">
          <motion.div
            className="h-full bg-primary rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
          />
        </div>
      </div>
      
      {/* Background soft glow */}
      <motion.div
        className="absolute bottom-0 w-[150vw] h-[50vh] bg-secondary-container/10 rounded-t-[100%] blur-[100px]"
        initial={{ y: "20%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
    </motion.div>
  );
};

export default PremiumCafeLoader;
