import { useState } from "react";
import { Send, Clock, Calendar, MessageSquare, User, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
      setFormData({ name: "", phone: "", date: "", time: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section id="contact" className="py-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="flex flex-col md:flex-row gap-12 bg-white/40 dark:bg-stone-900/40 backdrop-blur-xl border border-white/40 dark:border-stone-700/40 rounded-[3rem] p-8 md:p-14 shadow-[0_20px_50px_rgba(93,64,55,0.05)]">
        
        {/* Info Column */}
        <div className="flex-1 space-y-10">
          <div>
            <h2 className="font-h2 text-3xl md:text-5xl text-on-background mb-6">Book a Table</h2>
            <p className="font-body-lg text-on-surface-variant leading-relaxed">
              Planning a date, a meeting, or just a quiet afternoon? Let us know when you're coming.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary-container/30 flex items-center justify-center text-secondary shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-label-sm text-on-background uppercase tracking-wider mb-1">Opening Hours</h4>
                <p className="font-body-md text-on-surface-variant">Mon-Fri: 10 AM - 10 PM</p>
                <p className="font-body-md text-on-surface-variant">Sat-Sun: 9 AM - 11 PM</p>
              </div>
            </div>
            
            <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-[#25D366]/10 text-[#25D366] px-6 py-4 rounded-2xl hover:bg-[#25D366]/20 transition-colors font-label-sm w-full md:w-auto">
              <MessageSquare size={20} /> Quick Booking via WhatsApp
            </a>
          </div>
        </div>

        {/* Form Column */}
        <div className="flex-1 bg-white dark:bg-stone-900 p-10 rounded-[2rem] shadow-lg border border-outline-variant/10">
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-20 h-20 bg-secondary-container text-on-secondary-container rounded-full flex items-center justify-center mb-6">
                  <Send size={32} />
                </div>
                <h3 className="font-h3 text-2xl text-on-background mb-2">Thanks!</h3>
                <p className="font-body-md text-on-surface-variant">We'll contact you shortly to confirm your booking.</p>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit} 
                className="space-y-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <div className="relative">
                      <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-outline" />
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name" 
                        className={`w-full bg-surface pl-12 pr-4 py-3 rounded-xl border ${errors.name ? 'border-error' : 'border-outline-variant'} focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors font-body-md`}
                      />
                    </div>
                    {errors.name && <span className="text-error text-xs font-label-sm">{errors.name}</span>}
                  </div>
                  
                  <div className="space-y-1">
                    <div className="relative">
                      <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-outline" />
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number" 
                        className={`w-full bg-surface pl-12 pr-4 py-3 rounded-xl border ${errors.phone ? 'border-error' : 'border-outline-variant'} focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors font-body-md`}
                      />
                    </div>
                    {errors.phone && <span className="text-error text-xs font-label-sm">{errors.phone}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <Calendar size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-outline" />
                    <input 
                      type="date" 
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-surface pl-12 pr-4 py-3 rounded-xl border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors font-body-md text-on-surface"
                    />
                  </div>
                  <div className="relative">
                    <Clock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-outline" />
                    <input 
                      type="time" 
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full bg-surface pl-12 pr-4 py-3 rounded-xl border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors font-body-md text-on-surface"
                    />
                  </div>
                </div>

                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Special requests or occasion?" 
                  rows="4"
                  className="w-full bg-surface p-4 rounded-xl border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors font-body-md resize-none"
                ></textarea>

                <button 
                  type="submit" 
                  className="w-full bg-primary text-on-primary font-label-sm py-4 rounded-xl hover:opacity-90 active:scale-[0.98] transition-all shadow-soft mt-4"
                >
                  Confirm Booking
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Contact;
