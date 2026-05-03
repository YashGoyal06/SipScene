import { MapPin, Phone, Navigation, Clock } from "lucide-react";

const Location = () => {
  return (
    <section className="py-stack-md px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto">
      <div className="bg-white/40 dark:bg-stone-900/40 backdrop-blur-xl border border-white/40 dark:border-stone-700/40 rounded-[3rem] p-10 md:p-16 shadow-[0_20px_50px_rgba(93,64,55,0.05)] text-center relative overflow-hidden">
        
        {/* Decorative background element */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="w-20 h-20 mx-auto bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-8 rotate-3">
          <MapPin size={36} />
        </div>

        <h2 className="font-h2 text-3xl md:text-5xl text-on-background mb-6">Drop By</h2>
        <p className="font-body-lg text-on-surface-variant max-w-lg mx-auto leading-relaxed mb-10">
          Located in the heart of the city, SipScene is your perfect urban escape. Come for the coffee, stay for the vibe.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          <div className="flex flex-col items-center">
            <span className="font-label-sm uppercase tracking-widest text-primary mb-2 flex items-center gap-2"><MapPin size={16}/> Address</span>
            <span className="font-body-md text-on-surface-variant">123 Cafe Street, City Center</span>
            <span className="font-body-md text-on-surface-variant">Bhopal, MP 462001</span>
          </div>
          <div className="hidden md:block w-px h-12 bg-outline-variant/30"></div>
          <div className="flex flex-col items-center">
            <span className="font-label-sm uppercase tracking-widest text-primary mb-2 flex items-center gap-2"><Clock size={16}/> Hours</span>
            <span className="font-body-md text-on-surface-variant">Mon - Sun: 8:00 AM - 10:00 PM</span>
            <span className="font-body-md text-on-surface-variant">Happy Hour: 4:00 PM - 6:00 PM</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary font-label-sm px-8 py-4 rounded-full shadow-[0_8px_30px_rgba(93,64,55,0.3)] hover:-translate-y-1 active:scale-95 transition-all duration-300">
            <Navigation size={20} /> Get Directions
          </a>
          <a href="tel:+911234567890" className="inline-flex items-center justify-center gap-2 bg-white border border-outline-variant/30 text-on-background font-label-sm px-8 py-4 rounded-full hover:shadow-soft hover:-translate-y-1 active:scale-95 transition-all duration-300">
            <Phone size={20} /> Call Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Location;
