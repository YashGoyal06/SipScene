import { Camera, Share2, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-surface-container-low rounded-t-[2.5rem] mt-20 pt-16 pb-8">
      <div className="w-full px-8 md:px-24 flex flex-col md:flex-row justify-between items-start gap-16 max-w-container-max mx-auto mb-16">
        
        <div className="max-w-sm space-y-6">
          <div className="text-4xl font-black text-primary font-h1">SipScene Café</div>
          <p className="font-body-md text-on-surface-variant leading-relaxed text-lg">
            Where every sip feels like a scene. We blend high-quality coffee with a perfect aesthetic to give you the ultimate café experience.
          </p>
          <div className="flex gap-4 pt-4">
            <a href="#" className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-colors">
              <Camera size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-colors">
              <Share2 size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-colors">
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full md:w-auto">
          <div className="flex flex-col gap-4">
            <h4 className="font-label-sm uppercase tracking-wider text-primary">Explore</h4>
            <a href="#home" className="text-on-surface-variant hover:text-primary transition-colors font-body-sm">Home</a>
            <a href="#menu" className="text-on-surface-variant hover:text-primary transition-colors font-body-sm">Menu</a>
            <a href="#about" className="text-on-surface-variant hover:text-primary transition-colors font-body-sm">About Us</a>
            <a href="#gallery" className="text-on-surface-variant hover:text-primary transition-colors font-body-sm">Gallery</a>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-label-sm uppercase tracking-wider text-primary">Legal</h4>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors font-body-sm">Privacy Policy</a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors font-body-sm">Terms of Service</a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors font-body-sm">Refunds</a>
          </div>
          
          <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
            <h4 className="font-label-sm uppercase tracking-wider text-primary">Contact</h4>
            <p className="text-on-surface-variant font-body-sm">hello@sipscene.com</p>
            <p className="text-on-surface-variant font-body-sm">+91 123 456 7890</p>
            <p className="text-on-surface-variant font-body-sm">Bhopal, MP, India</p>
          </div>
        </div>
      </div>
      
      <div className="border-t border-outline-variant/30 pt-8 max-w-container-max mx-auto px-8 md:px-24 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-body-sm text-sm text-on-surface-variant">
          © {new Date().getFullYear()} SipScene Café. All rights reserved.
        </p>
        <p className="font-body-sm text-sm text-on-surface-variant">
          Designed with ❤️ for café lovers
        </p>
      </div>
    </footer>
  );
};

export default Footer;
