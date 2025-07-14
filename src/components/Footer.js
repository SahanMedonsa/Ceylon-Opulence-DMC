import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaLinkedinIn } from "react-icons/fa6";

const socialLinks = [
  { href: "https://facebook.com/", icon: <FaFacebookF />, label: "Facebook" },
  { href: "https://instagram.com/", icon: <FaInstagram />, label: "Instagram" },
  { href: "https://tiktok.com/", icon: <FaTiktok />, label: "TikTok" },
  { href: "https://youtube.com/", icon: <FaYoutube />, label: "YouTube" },
  { href: "https://linkedin.com/", icon: <FaLinkedinIn />, label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 py-6 border-t border-neutral-800 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-6">
        <div className="footer-left text-center md:text-left">&copy; {new Date().getFullYear()} Ceylon Opulence DMC</div>
        <div className="footer-right flex flex-col items-center md:items-end gap-2">
          <div className="flex gap-4 social-icons">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                title={link.label}
                aria-label={link.label}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-green-500 text-white hover:text-white transition-colors text-xl shadow"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
} 