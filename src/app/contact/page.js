import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaLinkedinIn } from "react-icons/fa6";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="section-title text-4xl font-bold text-center mb-8 text-green-500 pt-16">Contact Us</h1>
      <p className="text-center mb-12 text-lg text-gray-600">Ready to embark on your Sri Lankan adventure? Get in touch with us today!</p>
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8 text-center">
        <h3 className="text-2xl text-green-500 font-semibold mb-6">Get In Touch</h3>
        <div className="mb-8">
          <h4 className="text-green-500 text-lg font-semibold mb-2">📞 Phone</h4>
          <p>+94 77 123 4567<br />+94 11 234 5678</p>
        </div>
        <div className="mb-8">
          <h4 className="text-green-500 text-lg font-semibold mb-2">✉️ Email</h4>
          <p>info@ceylonopulence.com<br />bookings@ceylonopulence.com</p>
        </div>
        <div className="mb-8">
          <h4 className="text-green-500 text-lg font-semibold mb-2">🏢 Office Address</h4>
          <p>123 Kandy Road<br />Colombo 07<br />Sri Lanka</p>
        </div>
        <div className="mb-8">
          <h4 className="text-green-500 text-lg font-semibold mb-2">🌐 Follow Us</h4>
          <div className="flex justify-center">
            <div className="bg-black/90 rounded-xl px-6 py-4 flex gap-4 shadow-md">
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" title="Facebook" aria-label="Facebook" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-green-500 text-white hover:text-white transition-colors text-xl">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" title="Instagram" aria-label="Instagram" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-green-500 text-white hover:text-white transition-colors text-xl">
                <FaInstagram />
              </a>
              <a href="https://tiktok.com/" target="_blank" rel="noopener noreferrer" title="TikTok" aria-label="TikTok" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-green-500 text-white hover:text-white transition-colors text-xl">
                <FaTiktok />
              </a>
              <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" title="YouTube" aria-label="YouTube" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-green-500 text-white hover:text-white transition-colors text-xl">
                <FaYoutube />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-green-500 text-white hover:text-white transition-colors text-xl">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 