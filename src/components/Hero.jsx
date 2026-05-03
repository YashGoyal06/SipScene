import { motion } from "framer-motion";
import { Clock, MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative px-margin-mobile md:px-margin-desktop py-stack-lg max-w-container-max mx-auto flex flex-col md:flex-row items-center gap-gutter min-h-[85vh] pt-32"
    >
      <motion.div 
        className="flex-1 space-y-stack-md z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex gap-4 mb-4">
          <span className="bg-secondary-fixed/50 text-secondary-fixed-dim px-4 py-1 rounded-full font-label-sm flex items-center gap-1">
            <Clock size={16} /> Open Now
          </span>
          <span className="bg-surface-container-high text-on-surface-variant px-4 py-1 rounded-full font-label-sm">
            Student Friendly Café
          </span>
        </div>
        
        <h1 className="font-h1 text-4xl md:text-5xl lg:text-7xl leading-[1.1] mb-6">
          <span className="text-on-background">Where Every Sip Feels Like a </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-secondary">Scene</span>
        </h1>
        
        <p className="font-body-lg text-lg text-on-surface-variant max-w-lg leading-relaxed">
          We’re a local neighborhood café serving proper espresso and fresh pastries. No pretension, just good coffee.
        </p>
        
        <div className="flex flex-wrap gap-4 pt-6">
          <a href="#menu" className="inline-flex items-center justify-center bg-primary text-on-primary font-label-sm px-8 py-4 rounded-full shadow-[0_8px_30px_rgb(93,64,55,0.3)] hover:shadow-[0_8px_30px_rgb(93,64,55,0.5)] hover:-translate-y-1 active:scale-95 transition-all duration-300">
            View Menu
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center bg-white/50 backdrop-blur-md border border-white/20 text-on-background font-label-sm px-8 py-4 rounded-full shadow-soft hover:bg-white/80 hover:-translate-y-1 active:scale-95 transition-all duration-300 gap-2">
            <MessageCircle size={20} className="text-secondary" /> Order on WhatsApp
          </a>
        </div>
      </motion.div>

      <motion.div 
        className="flex-1 relative w-full h-[400px] md:h-[600px] rounded-[2rem] overflow-hidden shadow-soft mt-10 md:mt-0"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5P3tdrl4mWWv74ONcv_gulE-LtAhbQxMzsfmailnAd0n8-Jl4EViEKiaHbLkR5BrrHhFwOKo0o3L9o_eRU_aarQ1mu9zPfUD0dTGca4wGiOJXvorc9HBqVQuQw0DMgffxQiYLv_kqi4Qjkpp_sYOcB9EOAqCBlYJU6K6ZTzBKLUQ2A2zGErxY76fzfKShmwU9gfslrMhnyxwRsiG8kQDPHE8RMQf0zmBzLr6Ibbt6yzIH9zRDwHVamH4hmUjrdUkMPddhGNBC7p87" 
          alt="Cafe interior" 
          className="w-full h-full object-cover"
        />
        {/* Floating decorative element placeholder */}
        <motion.div 
          className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary-container rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -top-6 -right-6 w-32 h-32 bg-primary-fixed rounded-full mix-blend-multiply filter blur-xl opacity-60"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
