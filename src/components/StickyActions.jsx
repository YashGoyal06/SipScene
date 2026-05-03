import { MessageCircle, PhoneCall, MapPin } from "lucide-react";

const StickyActions = () => {
  return (
    <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center gap-3 bg-white/90 dark:bg-stone-900/90 backdrop-blur-md px-6 py-3 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.15)] border border-outline-variant/30 w-11/12 max-w-sm">
      
      <a href="https://wa.me/1234567890" className="flex-1 flex flex-col items-center gap-1 text-[#25D366] hover:scale-110 transition-transform">
        <MessageCircle size={22} fill="currentColor" className="opacity-20 absolute" />
        <MessageCircle size={22} />
        <span className="text-[10px] font-label-sm">WhatsApp</span>
      </a>
      
      <div className="w-[1px] h-8 bg-outline-variant/50"></div>
      
      <a href="tel:+911234567890" className="flex-1 flex flex-col items-center gap-1 text-primary hover:scale-110 transition-transform">
        <PhoneCall size={22} />
        <span className="text-[10px] font-label-sm">Call</span>
      </a>
      
      <div className="w-[1px] h-8 bg-outline-variant/50"></div>
      
      <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="flex-1 flex flex-col items-center gap-1 text-secondary hover:scale-110 transition-transform">
        <MapPin size={22} />
        <span className="text-[10px] font-label-sm">Location</span>
      </a>
      
    </div>
  );
};

export default StickyActions;
