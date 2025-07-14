export default function IntroSection() {
  return (
    <section className="intro-section bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="intro-content text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-500">Welcome to Ceylon Opulence DMC</h2>
          <p className="text-lg md:text-xl mb-8 text-gray-600">
            We are dedicated to positioning Sri Lanka as a premier tourist destination through exceptional travel experiences that honor our rich cultural heritage, preserve our natural biodiversity, and ensure the safety and satisfaction of every visitor.
          </p>
          <a
            href="/about"
            className="btn btn-primary bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow transition-all"
          >
            Learn More About Us
          </a>
        </div>
      </div>
    </section>
  );
} 