import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaLinkedinIn } from "react-icons/fa6";

const socialLinks = [
  { href: "https://facebook.com/", icon: <FaFacebookF />, label: "Facebook" },
  { href: "https://instagram.com/", icon: <FaInstagram />, label: "Instagram" },
  { href: "https://tiktok.com/", icon: <FaTiktok />, label: "TikTok" },
  { href: "https://youtube.com/", icon: <FaYoutube />, label: "YouTube" },
  { href: "https://linkedin.com/", icon: <FaLinkedinIn />, label: "LinkedIn" },
];

export default function HeroSection() {
  return (
    <section
      className="hero h-[90vh] min-h-[500px] flex items-center justify-center relative bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.45)), url('/hero-image.jpg')",
      }}
    >
      <div className="hero-content w-full max-w-3xl mx-auto flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Explore Sri Lanka's Ancient Heritage & Natural Wonders
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto">
          Experience the beauty, culture, and adventure of Ceylon through our expertly crafted tours that celebrate heritage preservation and sustainable tourism.
        </p>
        <div className="cta-buttons flex flex-wrap gap-4 justify-center mb-6">
          <a
            href="/tours"
            className="btn btn-primary bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow transition-all"
          >
            Explore Tours
          </a>
          <a
            href="/contact"
            className="btn btn-secondary bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-700 font-bold py-3 px-8 rounded-full text-lg shadow transition-all"
          >
            Contact Us
          </a>
        </div>
        <div className="social-icons flex gap-4 justify-center mt-2">
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
    </section>
  );
} 