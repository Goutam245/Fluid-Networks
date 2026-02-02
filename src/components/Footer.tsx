import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

interface FooterProps {
  variant?: "fn" | "cit";
}

const Footer = ({ variant = "fn" }: FooterProps) => {
  const fnLinks = {
    services: ["Managed IT", "Cyber Security", "Data Backups", "Communications", "Cloud Office™"],
    company: ["About Us", "Our Team", "Careers", "Blog", "Contact"],
    resources: ["Support", "Knowledge Base", "Downloads", "Privacy Policy", "Terms"],
  };

  const citLinks = {
    solutions: ["Managed IT", "Co-Managed IT", "Security", "Cloud", "Compliance"],
    industries: ["Healthcare", "Finance", "Manufacturing", "Legal"],
    company: ["About", "Careers", "Partners", "Blog", "Contact"],
  };

  const links = variant === "fn" ? fnLinks : citLinks;

  return (
    <footer className="relative">
      {/* Gradient Border Top */}
      <div className={`h-1 w-full ${variant === "fn" ? "bg-gradient-fn" : "bg-gradient-cit"}`} />

      <div className="bg-foreground text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  variant === "fn" ? "bg-gradient-fn" : "bg-gradient-cit"
                }`}>
                  <span className="text-white font-bold text-xl">
                    {variant === "fn" ? "F" : "C"}
                  </span>
                </div>
                <span className="text-xl font-bold font-heading">
                  {variant === "fn" ? "Fluid Networks" : "Complete IT"}
                </span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                {variant === "fn"
                  ? "Power over Ethernet. Transforming businesses through innovative technology solutions."
                  : "Trusted Technology Partnership. Empowering businesses with comprehensive IT solutions."}
              </p>

              {/* Contact Info */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-white/60">
                  <Phone className="w-4 h-4" />
                  <span>(844) 323-9732</span>
                </div>
                <div className="flex items-center gap-3 text-white/60">
                  <Mail className="w-4 h-4" />
                  <span>info@{variant === "fn" ? "fluidnets" : "complete"}.net</span>
                </div>
                <div className="flex items-center gap-3 text-white/60">
                  <MapPin className="w-4 h-4" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </motion.div>

            {/* Links Columns */}
            {Object.entries(links).map(([title, items], index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
              >
                <h4 className="font-semibold text-lg mb-6 capitalize">{title}</h4>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-white/60 hover:text-white transition-colors text-sm"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} {variant === "fn" ? "Fluid Networks" : "Complete IT"}. All rights reserved.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {[Facebook, Twitter, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 text-white/60 hover:text-white ${
                    variant === "fn"
                      ? "hover:bg-fn-primary/20"
                      : "hover:bg-cit-primary/20"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
