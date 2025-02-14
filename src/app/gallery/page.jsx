'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Gallery = () => {
  const [galleryData, setGalleryData] = useState([]);
  const [selectedVersion, setSelectedVersion] = useState(null);

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const response = await fetch("https://orion-apiv1.vercel.app/gallery");
        const data = await response.json();
        setGalleryData(data.data || []);
      } catch (error) {
        console.error('Error fetching gallery data:', error);
      }
    };

    fetchGalleryData();
  }, []);

  const handleVersionClick = (version) => {
    setSelectedVersion(version === selectedVersion ? null : version);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">OrionOS Gallery</h1>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {galleryData.map((item) => (
            <button
              key={item._id}
              onClick={() => handleVersionClick(item.version)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedVersion === item.version
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-blue-600 hover:bg-blue-100'
              }`}
            >
              {item.version}
            </button>
          ))}
        </div>

        {selectedVersion && (
          <div className="bg-white rounded-lg shadow-xl p-4 md:p-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">{selectedVersion} Screenshots</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
              {galleryData
                .find((item) => item.version === selectedVersion)
                ?.screenshot.map((screen, index) => (
                  <div key={index} className="relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                    <Image
                      src={screen.image}
                      alt={`${selectedVersion} screenshot ${index + 1}`}
                      width={500}
                      height={500}
                      layout="responsive"
                      className="rounded-lg"
                    />
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;