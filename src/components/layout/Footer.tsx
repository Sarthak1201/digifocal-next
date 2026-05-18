import Link from "next/link";
import { Linkedin, Instagram, Mail, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#624d3b] text-white pt-16 pb-8 border-t border-white/10">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: Logo & Description */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              {/* Logo from public folder */}
              <img
                src="/DigifocalLogo.jpg"
                alt="Digifocal IT Solutions"
                className="h-12 w-auto object-contain rounded-sm bg-white p-1" 
              />
            </Link>
            <p className="text-gray-200 text-sm leading-relaxed max-w-xs">
              Enterprise IT solutions and consulting partner. Driving digital transformation and business growth through technology excellence.
            </p>
            <div className="flex gap-4">
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/company/digifocal-it-solutions/?viewAsMember=true" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/digifocal.it?igsh=YXpraWE5ZnI1MGk2" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="font-semibold mb-6 text-white text-lg">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/services/software-solutions" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Software Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/automation" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Automation Services
                </Link>
              </li>
              <li>
                <Link href="/services/consulting" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Technology Consulting
                </Link>
              </li>
              <li>
                <Link href="/services/talent" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Talent Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 & 4 Combined: Contact & Address Info */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            
            {/* India Office */}
            <div>
               <h3 className="font-semibold mb-4 text-white flex items-center gap-2">
                 <span className="text-sm bg-white/10 px-2 py-0.5 rounded">INDIA</span>
               </h3>
               <p className="text-gray-300 text-sm leading-relaxed mb-4">
                 <strong>DIGIFOCAL IT SOLUTIONS PVT LTD</strong><br/>
                 233, Swastik Plaza, Pokhran Road 2, Subhash Nagar, Near Voltas, Thane (W), MH, India – 400601
               </p>
               <div className="flex items-center gap-2 text-gray-300 text-sm mb-1">
                 <Phone className="w-4 h-4" />
                 <a href="tel:02220814925" className="hover:text-white transition-colors">+91-9892571003</a>
               </div>
            </div>

            {/* USA Office & Hours */}
            <div>
              <h3 className="font-semibold mb-4 text-white flex items-center gap-2">
                 <span className="text-sm bg-white/10 px-2 py-0.5 rounded">USA</span>
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                <strong>DIGIFOCAL IT SOLUTIONS PVT LTD</strong><br/>
                8646 W Market St#113, Greensboro, NC 27409, USA
              </p>
              <div className="flex items-center gap-2 text-gray-300 text-sm mb-6">
                 <Phone className="w-4 h-4" />
                 <a href="tel:+18169596139" className="hover:text-white transition-colors">+91-9892571003</a>
              </div>

              {/* Working Hours */}
              <h3 className="font-semibold mb-2 text-white text-sm">Working Hours</h3>
              <p className="text-gray-300 text-xs leading-relaxed">
                Monday to Saturday : 10 am to 7 pm<br/>
                <span className="text-white/60">2nd & 4th Saturday closed</span>
              </p>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400 text-center md:text-left">
            © {currentYear} Digifocal IT Solutions Pvt. Ltd. All rights reserved.
          </p>
          
          <div className="flex gap-6 items-center">
             <a href="mailto:alliance@digifocal.in" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                alliance@digifocal.in
             </a>
            <div className="w-px h-4 bg-white/20 hidden md:block"></div>
            
            {/* AdSense Compliant Privacy Policy Link */}
            <Link href="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            
          </div>
        </div>
      </div>
    </footer>
  );
}