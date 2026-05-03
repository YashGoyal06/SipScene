import { motion } from "framer-motion";
import { gallery } from "../data/gallery";

const Gallery = () => {
  return (
    <section id="gallery" className="py-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-h2 text-3xl md:text-5xl text-on-background mb-6">The SipScene Aesthetic</h2>
        <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          A glimpse into our world. Tag us on Instagram to be featured!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {gallery.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`relative group rounded-[2rem] overflow-hidden cursor-pointer shadow-soft hover:shadow-[0_20px_40px_rgb(93,64,55,0.15)] transition-shadow duration-500 ${
              index === 0 || index === 3 ? "md:col-span-2 lg:col-span-1" : ""
            } h-72 md:h-96`}
          >
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <span className="text-secondary-fixed font-label-sm uppercase tracking-[0.2em] mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{item.category}</span>
              <h3 className="text-white font-h3 text-2xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
