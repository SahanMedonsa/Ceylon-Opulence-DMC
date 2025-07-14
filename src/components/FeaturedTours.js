const tours = [
  {
    title: "Cultural Heritage Experience",
    description:
      "Explore ancient temples, historic cities, and traditional villages while learning about Sri Lanka's rich cultural tapestry spanning over 2,500 years.",
    image: "/image1.jpg",
  },
  {
    title: "Wildlife & Nature Safari",
    description:
      "Discover diverse ecosystems, spot exotic wildlife, and experience the natural beauty of Sri Lanka's national parks and nature reserves.",
    image: "/image1.jpg",
  },
  {
    title: "Beach & Coastal Adventure",
    description:
      "Relax on pristine beaches, enjoy water sports, and explore coastal towns along Sri Lanka's stunning shoreline.",
    image: "/image1.jpg",
  },
];

export default function FeaturedTours() {
  return (
    <section className="featured-tours py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-3xl md:text-4xl font-bold text-center mb-12 text-green-500">
          Featured Tours & Experiences
        </h2>
        <div className="tours-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {tours.map((tour) => (
            <div
              key={tour.title}
              className="tour-card bg-white rounded-lg shadow-md overflow-hidden hover:-translate-y-1 transition-transform"
            >
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-52 object-cover"
              />
              <div className="tour-card-content p-6">
                <h3 className="text-green-500 text-xl font-semibold mb-2">
                  {tour.title}
                </h3>
                <p className="text-gray-600 mb-4">{tour.description}</p>
                <a
                  href="/tours"
                  className="btn btn-primary bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full text-base shadow transition-all"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 