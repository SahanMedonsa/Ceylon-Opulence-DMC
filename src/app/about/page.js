export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="section-title text-4xl font-bold text-center mb-12 text-green-500 pt-16">About Ceylon Opulence DMC</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <div className="about-card bg-white rounded-lg shadow-md p-8 text-center">
          <h3 className="text-green-500 text-xl font-semibold mb-4">Our Story</h3>
          <p>Ceylon Opulence DMC was founded with a passionate vision to position Sri Lanka as one of the world&apos;s premier tourist destinations. We believe in showcasing the authentic beauty, rich heritage, and warm hospitality that makes our island nation truly special.</p>
        </div>
        <div className="about-card bg-white rounded-lg shadow-md p-8 text-center">
          <h3 className="text-green-500 text-xl font-semibold mb-4">Heritage Preservation</h3>
          <p>We are committed to preserving Sri Lanka&apos;s ancient heritage and cultural traditions. Our tours are designed to educate visitors about our history while ensuring these precious sites are protected for future generations.</p>
        </div>
        <div className="about-card bg-white rounded-lg shadow-md p-8 text-center">
          <h3 className="text-green-500 text-xl font-semibold mb-4">Cultural Respect</h3>
          <p>We promote responsible tourism that respects local communities and traditions. Our guides are trained to share cultural knowledge while maintaining the dignity and authenticity of local customs.</p>
        </div>
        <div className="about-card bg-white rounded-lg shadow-md p-8 text-center">
          <h3 className="text-green-500 text-xl font-semibold mb-4">Biodiversity Conservation</h3>
          <p>Sri Lanka&apos;s incredible biodiversity is one of our greatest treasures. We work closely with conservation organizations to ensure our nature tours contribute to the protection of endemic species and ecosystems.</p>
        </div>
        <div className="about-card bg-white rounded-lg shadow-md p-8 text-center">
          <h3 className="text-green-500 text-xl font-semibold mb-4">Safety & Quality</h3>
          <p>Your safety and satisfaction are our top priorities. We maintain the highest standards in tour operations, vehicle maintenance, and guide training to ensure every experience exceeds expectations.</p>
        </div>
        <div className="about-card bg-white rounded-lg shadow-md p-8 text-center">
          <h3 className="text-green-500 text-xl font-semibold mb-4">Sustainable Tourism</h3>
          <p>We are dedicated to sustainable tourism practices that benefit local communities, protect the environment, and create positive economic impact while preserving Sri Lanka&apos;s natural and cultural heritage.</p>
        </div>
      </div>
    </div>
  );
} 