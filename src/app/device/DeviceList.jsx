"use client";

import { useState, useEffect } from 'react';
import { getAllDevices, getDeviceByBrand } from "@/utils/api-libs";
import Link from 'next/link';
import { FaSearch } from "react-icons/fa";
import Loading from "../loading";

const DeviceList = () => {
  const [devices, setDevices] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [loading, setLoading] = useState(true);
  const [totalDevices, setTotalDevices] = useState(null);

  useEffect(() => {
    const fetchTotalDevices = async () => {
      try {
        const allDevices = await getAllDevices();
        setTotalDevices(allDevices.length);
      } catch (error) {
        console.error('Error fetching devices:', error);
        setTotalDevices(0);
      }
    };

    fetchTotalDevices();
  }, []);

  useEffect(() => {
    const fetchDevices = async () => {
      setLoading(true);
      try {
        let data;
        if (selectedBrand !== 'All') {
          data = await getDeviceByBrand(selectedBrand.toLowerCase());
        } else {
          data = await getAllDevices(searchTerm);
        }
        setDevices(data);
      } catch (error) {
        console.error('Error fetching devices:', error);
        setDevices([]);
      }
      setLoading(false);
    };

    const debounce = setTimeout(() => {
      fetchDevices();
    }, 300);

    return () => clearTimeout(debounce);
  }, [searchTerm, selectedBrand]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setSelectedBrand('All');
  };

  const handleBrandSelect = (brand) => {
    setSelectedBrand(brand);
    setSearchTerm('');
  };

  return (
    <div className="p-4 min-h-screen md:p-16">
      <div className="py-8">
        <h1 className="text-2xl md:text-3xl font-bold">Devices</h1>
        <p className="text-lg mb-1 md:mb-6">
          Explore our lineup of {totalDevices !== null ? totalDevices : "< counting />"} officially launched devices.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 md:gap-8">
        <div className="w-full md:w-1/4">
          <div className="bg-cyan-50 rounded-md p-4 md:p-6">
            <div className="mb-6">
              <label className="block mb-2 font-medium text-gray-700">Search by name or codename</label>
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
              <div className="flex flex-wrap gap-2 sticky max-w-full">
                {["All", "Itel", "Motorola","Nothing-phone", "Google", "Xiaomi"].map((brand) => (
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
        </div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {loading ? (
            <p className="text-md font-medium min-h-screen">Loading....</p>
          ) : devices.length > 0 ? (
            devices.map((device) => (
              <Link href={`/device/${device.slug}`} key={device.device_codename} className="bg-white hover:bg-cyan-50 rounded-md overflow-hidden transition-shadow duration-300 shadow-sm hover:shadow-md">
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
                    <p className="text-xs md:text-sm font-medium text-gray-900">{device.device_codename}</p>
                    <div className="mt-2">
                      <span className={`text-xs px-2 py-1 rounded-full inline-block ${
                        device.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {device.status === 'active' ? 'Active' : 'Inactive'}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">No devices found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default DeviceList;
