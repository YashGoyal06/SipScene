import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { reviews } from "../data/reviews";

const Reviews = () => {
  return (
    <section className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-surface-container-low relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-surface-container-high rounded-full -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="max-w-container-max mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-h2 text-3xl md:text-5xl text-on-background mb-6">What Our Guests Say</h2>
          <p className="font-body-lg text-on-surface-variant leading-relaxed">Don't just take our word for it.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-white/60 dark:bg-stone-900/60 backdrop-blur-xl border border-white/40 dark:border-stone-700/40 p-10 rounded-[2.5rem] shadow-[0_8px_32px_0_rgba(93,64,55,0.05)] hover:shadow-[0_16px_48px_0_rgba(93,64,55,0.1)] flex flex-col relative group transition-all duration-500 hover:-translate-y-2"
            >
              <Quote size={48} className="text-surface-variant/50 absolute top-8 right-8 opacity-50 group-hover:text-secondary-container transition-colors duration-500" />
              
              <div className="flex gap-1.5 mb-8 text-secondary">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={22} 
                    fill={i < review.rating ? "currentColor" : "transparent"} 
                    className={i < review.rating ? "text-secondary" : "text-outline-variant/30"}
                  />
                ))}
              </div>
              
              <p className="font-body-md text-on-surface-variant flex-grow mb-10 leading-relaxed italic text-lg">"{review.text}"</p>
              
              <div className="flex items-center gap-4 border-t border-outline-variant/30 pt-6">
                <div className="w-12 h-12 bg-primary-fixed rounded-full flex items-center justify-center text-on-primary-fixed font-h3">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-label-sm text-on-background">{review.name}</h4>
                  <span className="text-xs text-on-surface-variant">Verified Guest</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
