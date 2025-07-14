export default function Gallery() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="section-title text-4xl font-bold text-center mb-8 text-green-500 pt-16">Photo Gallery</h1>
      <p className="text-center mb-12 text-lg text-gray-600">Explore the beauty of Sri Lanka through our curated collection of stunning photographs</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
        <div className="gallery-category bg-white rounded-lg shadow-md overflow-hidden hover:-translate-y-1 transition-transform">
          <img src="/image1.jpg" alt="Heritage Sites" className="w-full h-52 object-cover" />
          <h3 className="p-6 text-green-500 text-xl text-center">Heritage Sites</h3>
        </div>
        <div className="gallery-category bg-white rounded-lg shadow-md overflow-hidden hover:-translate-y-1 transition-transform">
          <img src="/image1.jpg" alt="Nature & Wildlife" className="w-full h-52 object-cover" />
          <h3 className="p-6 text-green-500 text-xl text-center">Nature & Wildlife</h3>
        </div>
        <div className="gallery-category bg-white rounded-lg shadow-md overflow-hidden hover:-translate-y-1 transition-transform">
          <img src="/image1.jpg" alt="Beaches & Coastline" className="w-full h-52 object-cover" />
          <h3 className="p-6 text-green-500 text-xl text-center">Beaches & Coastline</h3>
        </div>
        <div className="gallery-category bg-white rounded-lg shadow-md overflow-hidden hover:-translate-y-1 transition-transform">
          <img src="/image1.jpg" alt="Cultural Events" className="w-full h-52 object-cover" />
          <h3 className="p-6 text-green-500 text-xl text-center">Cultural Events</h3>
        </div>
        <div className="gallery-category bg-white rounded-lg shadow-md overflow-hidden hover:-translate-y-1 transition-transform">
          <img src="/image1.jpg" alt="Beaches & Coastline" className="w-full h-52 object-cover" />
          <h3 className="p-6 text-green-500 text-xl text-center">Beaches & Coastline</h3>
        </div>
        <div className="gallery-category bg-white rounded-lg shadow-md overflow-hidden hover:-translate-y-1 transition-transform">
          <img src="/image1.jpg" alt="Beaches & Coastline" className="w-full h-52 object-cover" />
          <h3 className="p-6 text-green-500 text-xl text-center">Beaches & Coastline</h3>
        </div>
      </div>
    </div>
  );
} 