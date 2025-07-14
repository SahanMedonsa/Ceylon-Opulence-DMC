import { FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";

export default function QuickContact() {
  return (
    <section className="quick-contact bg-gray-50 py-16">
      <div className="quick-contact-card bg-white rounded-2xl shadow-lg max-w-3xl mx-auto p-10 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-neutral-800">Ready to Start Your Adventure?</h2>
        <p className="text-gray-600 mb-8 text-center">
          Get in touch with us to plan your perfect Sri Lankan experience
        </p>
        <div className="quick-contact-info w-full flex flex-col gap-4">
          <div className="quick-contact-item flex items-center gap-4 text-lg text-neutral-800 bg-gray-100 rounded-lg px-6 py-3">
            <FaPhoneAlt className="text-green-500 text-xl" />
            <span>+94 77 123 4567</span>
          </div>
          <div className="quick-contact-item flex items-center gap-4 text-lg text-neutral-800 bg-gray-100 rounded-lg px-6 py-3">
            <FaEnvelope className="text-green-500 text-xl" />
            <span>info@ceylonopulence.com</span>
          </div>
          <div className="quick-contact-item flex items-center gap-4 text-lg text-neutral-800 bg-gray-100 rounded-lg px-6 py-3">
            <FaGlobe className="text-green-500 text-xl" />
            <span>www.ceylonopulence.com</span>
          </div>
        </div>
      </div>
    </section>
  );
} 