import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuItems } from "../data/menuItems";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("Coffee");
  const categories = ["Coffee", "Snacks", "Desserts", "Mocktails"];

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-h2 text-3xl md:text-5xl text-on-background mb-6">Featured Menu</h2>
        <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          From rich espresso to delectable bites, explore our curated selection of favorites.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full font-label-sm transition-all duration-300 ${
              activeCategory === category 
                ? "bg-primary text-on-primary shadow-soft" 
                : "bg-surface-container-high text-on-surface-variant hover:bg-surface-variant"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredItems.map(item => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.4 }}
              className="bg-white dark:bg-stone-900 rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(93,64,55,0.08)] group flex flex-col border border-surface-container-highest transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {item.tag && (
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-stone-900/90 backdrop-blur-md text-primary px-4 py-1.5 rounded-full font-label-sm text-xs shadow-sm z-20">
                    {item.tag}
                  </div>
                )}
              </div>
              <div className="p-8 flex flex-col flex-grow relative bg-white dark:bg-stone-900">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-h3 text-xl text-on-background pr-2 leading-tight">{item.name}</h3>
                  <span className="font-h3 text-xl text-primary bg-primary/5 px-3 py-1 rounded-lg">₹{item.price}</span>
                </div>
                <p className="font-body-md text-on-surface-variant flex-grow mb-8 leading-relaxed">{item.description}</p>
                <button className="w-full py-4 bg-surface text-primary rounded-xl font-label-sm group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300 shadow-sm border border-outline-variant/20">
                  Add to Order
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Menu;
