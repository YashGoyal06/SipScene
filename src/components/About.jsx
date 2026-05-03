import { Coffee, Heart, Zap } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const highlights = [
    {
      icon: <Coffee size={24} className="text-secondary" />,
      title: "Freshly Brewed Coffee",
      desc: "Beans roasted to perfection for that ideal cup."
    },
    {
      icon: <Heart size={24} className="text-secondary" />,
      title: "Cozy Ambience",
      desc: "Warm lighting and comfy seats for your best moments."
    },
    {
      icon: <Zap size={24} className="text-secondary" />,
      title: "Quick WhatsApp Orders",
      desc: "Skip the line and order directly via WhatsApp."
    }
  ];

  return (
    <section id="about" className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-surface-container-low">
      <div className="max-w-container-max mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="font-h2 text-3xl md:text-5xl text-on-background mb-6">Our Story</h2>
          <p className="font-body-lg text-on-surface-variant leading-relaxed">
            SipScene started with a simple idea: bringing specialty coffee to our neighborhood without the snobbery. We focus on small-batch roasts, genuine hospitality, and providing a space where you can actually hear your friends talk.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div 
              key={index}
              className="bg-white/40 dark:bg-stone-900/40 backdrop-blur-xl border border-white/40 dark:border-stone-700/40 rounded-3xl p-10 shadow-[0_8px_32px_0_rgba(93,64,55,0.05)] hover:shadow-[0_16px_48px_0_rgba(93,64,55,0.1)] hover:-translate-y-2 transition-all duration-500 text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-secondary-container to-surface rounded-2xl flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500 rotate-3 group-hover:rotate-6">
                {item.icon}
              </div>
              <h3 className="font-h3 text-xl text-on-background mb-3">{item.title}</h3>
              <p className="font-body-md text-on-surface-variant">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
