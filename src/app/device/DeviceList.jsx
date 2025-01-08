"use client";

import { useState, useEffect } from 'react';
import { getAllDevices, getDeviceByBrand } from "@/utils/api-libs";
import Link from 'next/link';
import ParticlesComponent from "../../components/Particles";
import { FaSearch } from "react-icons/fa";
import Loading from "../loading";

const DeviceList = () => {
  const [devices, setDevices] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDevices = async () => {
      setLoading(true);
      try {
        let data;
        if (searchTerm) {
          data = await getAllDevices(`/${searchTerm.toLowerCase()}`);
        } else if (selectedBrand !== 'All') {
          data = await getDeviceByBrand(selectedBrand.toLowerCase());
        } else {
          data = await getAllDevices();
        }
        setDevices(data);
      } catch (error) {
        console.error('Error fetching devices:', error);
      }
      setLoading(false);
    };

    fetchDevices();
  }, [searchTerm, selectedBrand]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleBrandSelect = (brand) => {
    setSelectedBrand(brand);
  };

  return (
    <div className="p-4 md:p-16">
      <ParticlesComponent id="particles" />
      <h1 className="relative text-2xl md:text-3xl font-bold mb-6">Devices</h1>
      <div className="relative flex flex-col md:flex-row gap-4 md:gap-8">
        <div className="bg-cyan-50 rounded-md p-4 md:p-6 w-full md:w-auto">
          <div className="mb-6">
            <label className="block mb-2 font-semibold text-gray-700">Codename</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearch}
                className="w-full text-cyan-600 border rounded-lg p-2 pl-10 focus:outline-none focus:ring-1 focus:ring-cyan-50"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          <div>
            <label className="block mb-2 font-semibold text-gray-700">Brand</label>
            <div className="flex flex-wrap gap-2">
              {["All", "Nothing-phone", "Xiaomi"].map((brand) => (
                <button
                  key={brand}
                  onClick={() => handleBrandSelect(brand)}
                  className={`py-2 px-4 rounded-md transition-colors ${
                    brand === selectedBrand
                      ? "bg-cyan-600 text-white hover:bg-cyan-700"
                      : "border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-100"
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {loading ? (
            <Loading />
          ) : (
            devices.map((device) => (
              <Link href={`/device/${device.slug}`} key={device.device_codename} className="bg-white opacity-90 hover:bg-cyan-50 rounded-md overflow-hidden transition-shadow duration-300 shadow-sm hover:shadow-md">
                <div className="flex p-4">
                  <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 mr-4">
                    <img
                      src={device.device_image}
                      alt={device.device_codename}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h2 className="font-semibold text-base md:text-lg text-cyan-700">{device.device_name}</h2>
                    <p className="text-xs md:text-sm text-gray-900">{device.device_codename}</p>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default DeviceList;