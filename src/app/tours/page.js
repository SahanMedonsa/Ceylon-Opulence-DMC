export default function Tours() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="section-title text-4xl font-bold text-center mb-12 text-green-500">Tours & Experiences</h1>
      {/* Cultural Heritage Tours */}
      <div className="mb-12">
        <h3 className="text-2xl text-green-500 font-semibold mb-6 border-b-2 border-green-500 pb-2">Cultural Heritage Tours</h3>
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h4 className="text-xl text-green-500 font-semibold mb-2">Ancient Kingdoms Explorer</h4>
          <p className="mb-4">Journey through the ancient capitals of Anuradhapura and Polonnaruwa, exploring magnificent stupas, ancient palaces, and archaeological wonders that tell the story of Sri Lanka&apos;s glorious past.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-2">
            <div className="bg-gray-100 rounded p-4 text-center"><strong className="text-green-500">Duration:</strong><br />5 Days / 4 Nights</div>
            <div className="bg-gray-100 rounded p-4 text-center"><strong className="text-green-500">Highlights:</strong><br />Ancient Stupas, Rock Fortress</div>
            <div className="bg-gray-100 rounded p-4 text-center"><strong className="text-green-500">Difficulty:</strong><br />Moderate</div>
            <div className="bg-gray-100 rounded p-4 text-center"><strong className="text-green-500">Group Size:</strong><br />Max 12 People</div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h4 className="text-xl text-green-500 font-semibold mb-2">Kandy Cultural Experience</h4>
          <p className="mb-4">Discover the hill capital of Kandy, home to the sacred Temple of the Tooth Relic, traditional dance performances, and the beautiful Royal Botanical Gardens.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-2">
            <div className="bg-gray-100 rounded p-4 text-center"><strong className="text-green-500">Duration:</strong><br />3 Days / 2 Nights</div>
            <div className="bg-gray-100 rounded p-4 text-center"><strong className="text-green-500">Highlights:</strong><br />Temple of Tooth, Cultural Show</div>
            <div className="bg-gray-100 rounded p-4 text-center"><strong className="text-green-500">Difficulty:</strong><br />Easy</div>
            <div className="bg-gray-100 rounded p-4 text-center"><strong className="text-green-500">Group Size:</strong><br />Max 15 People</div>
          </div>
        </div>
      </div>
      {/* Nature & Wildlife Tours */}
      <div className="mb-12">
        <h3 className="text-2xl text-green-500 font-semibold mb-6 border-b-2 border-green-500 pb-2">Nature & Wildlife Tours</h3>
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h4 className="text-xl text-green-500 font-semibold mb-2">Yala Safari Adventure</h4>
          <p className="mb-4">Experience the thrill of wildlife spotting in Yala National Park, home to leopards, elephants, sloth bears, and hundreds of bird species in their natural habitat.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-2">
            <div className="bg-gray-100 rounded p-4 text-center"><strong className="text-green-500">Duration:</strong><br />2 Days / 1 Night</div>
            <div className="bg-gray-100 rounded p-4 text-center"><strong className="text-green-500">Highlights:</strong><br />Leopard Spotting, Bird Watching</div>
            <div className="bg-gray-100 rounded p-4 text-center"><strong className="text-green-500">Difficulty:</strong><br />Easy</div>
            <div className="bg-gray-100 rounded p-4 text-center"><strong className="text-green-500">Group Size:</strong><br />Max 8 People</div>
          </div>
        </div>
      </div>
      {/* Beach & Coastal Tours */}
      <div className="mb-12">
        <h3 className="text-2xl text-green-500 font-semibold mb-6 border-b-2 border-green-500 pb-2">Beach & Coastal Tours</h3>
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h4 className="text-xl text-green-500 font-semibold mb-2">Southern Coast Paradise</h4>
          <p className="mb-4">Relax on pristine beaches, explore historic Galle Fort, and enjoy water sports along Sri Lanka&apos;s stunning southern coastline.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-2">
            <div className="bg-gray-100 rounded p-4 text-center"><strong className="text-green-500">Duration:</strong><br />4 Days / 3 Nights</div>
            <div className="bg-gray-100 rounded p-4 text-center"><strong className="text-green-500">Highlights:</strong><br />Galle Fort, Beach Activities</div>
            <div className="bg-gray-100 rounded p-4 text-center"><strong className="text-green-500">Difficulty:</strong><br />Easy</div>
            <div className="bg-gray-100 rounded p-4 text-center"><strong className="text-green-500">Group Size:</strong><br />Max 20 People</div>
          </div>
        </div>
      </div>
    </div>
  );
} 