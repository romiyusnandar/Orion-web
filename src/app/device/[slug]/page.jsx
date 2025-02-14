"use client";

import Link from "next/link";
import { TbDownload } from "react-icons/tb";
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

const Page = ({ params }) => {
  const [selectedBuildIndex, setSelectedBuildIndex] = useState(0);
  const [device, setDevice] = useState(null);
  const [changelog, setChangelog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [changelogLoading, setChangelogLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDevice = async () => {
      try {
        const response = await fetch(`https://orion-apiv1.vercel.app/device/${params.slug}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setDevice(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching device data:", error);
        setError("Failed to load device data");
        setLoading(false);
      }
    };

    fetchDevice();
  }, [params.slug]);

  useEffect(() => {
    const fetchChangelog = async () => {
      if (device && device.device_build[selectedBuildIndex]) {
        setChangelogLoading(true);
        try {
          const response = await fetch(device.device_build[selectedBuildIndex].device_changelog);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const text = await response.text();
          setChangelog(text);
        } catch (error) {
          console.error("Error fetching changelog:", error);
          setChangelog("Failed to load changelog");
        } finally {
          setChangelogLoading(false);
        }
      }
    };

    fetchChangelog();
  }, [device, selectedBuildIndex]);

  const handleTabClick = (index) => {
    if (index !== selectedBuildIndex) {
      setSelectedBuildIndex(index);
      setChangelog(null);
    }
  };

  if (loading) return <p className="text-center text-xl font-medium py-16 min-h-screen">Loading...</p>;
  if (error) return <p className="text-center text-xl font-medium py-16 min-h-screen">{error}</p>;
  if (!device) return null;

  const selectedBuild = device.device_build[selectedBuildIndex];

  return (
    <div className="mx-auto px-4 md:px-8 py-10 md:py-24 min-h-screen">
      <div className="max-w-6xl px-0 md:px-4">
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {/* Left Column */}
          <div className="lg:w-1/2 p-0 md:p-6">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
              <div className="w-full md:w-auto flex justify-center md:justify-start mb-4 md:mb-0">
                <Image
                  src={device.device_image}
                  alt={device.device_name}
                  width={128}
                  height={128}
                  className="object-contain rounded-lg shadow-md max-h-36 w-auto"
                />
              </div>
              <div className="mt-4 md:mt-0 text-center md:text-left">
                <h1 className="text-2xl font-bold text-gray-800">{device.device_name}</h1>
                <p className="text-gray-600 mt-1">Codename: {device.device_codename}</p>
                <p className="text-gray-600">Brand: {device.device_brand}</p>
              </div>
            </div>

            {/* Tabs */}
            <div className="mt-6 flex flex-wrap gap-2 justify-center md:justify-start">
              {device.device_build.map((build, index) => (
                <button
                  key={index}
                  onClick={() => handleTabClick(index)}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    index === selectedBuildIndex ? "bg-cyan-600 text-white" : "bg-gray-200 text-gray-800"
                  } transition-colors duration-300`}
                  disabled={index === selectedBuildIndex}
                >
                  {build.version}
                </button>
              ))}
            </div>

            {/* Maintainer Section */}
            <div className="mt-6">
              <h2 className="text-lg font-semibold text-gray-800">Maintainer</h2>
              <div className="flex items-center space-x-3 mt-2">
                <div className="w-10 h-10 rounded-full bg-cyan-600 text-white flex items-center justify-center">
                  <span className="text-lg font-bold">{selectedBuild.maintainer_name[0].toUpperCase()}</span>
                </div>
                <p className="text-gray-700 font-medium">{selectedBuild.maintainer_name}</p>
              </div>
            </div>

            {/* Download Section */}
            {/* Download Section */}
            <div className="mt-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-3">Download</h2>
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="w-full md:w-48 bg-cyan-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-cyan-700 transition-all duration-300 shadow-md hover:shadow-lg flex justify-between items-center">
                    <span className="flex items-center">
                      <TbDownload size={20} className="mr-2" />
                      Download
                    </span>
                    <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                  </Menu.Button>
                </div>

                <Menu.Items className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {selectedBuild.download_links.gapps && (
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href={selectedBuild.download_links.gapps}
                            className={`${
                              active ? 'bg-gray-100 text-cyan-600' : 'text-gray-700'
                            } group flex items-center px-4 py-3 text-sm transition-colors duration-150`}
                          >
                            <TbDownload size={20} className="mr-3 text-cyan-500" />
                            <span>
                              Download GApps
                              <span className="block text-xs text-gray-500">With Google Apps</span>
                            </span>
                          </a>
                        )}
                      </Menu.Item>
                    )}
                    {selectedBuild.download_links.vanilla && (
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href={selectedBuild.download_links.vanilla}
                            className={`${
                              active ? 'bg-gray-100 text-cyan-600' : 'text-gray-700'
                            } group flex items-center px-4 py-3 text-sm transition-colors duration-150`}
                          >
                            <TbDownload size={20} className="mr-3 text-cyan-500" />
                            <span>
                              Download Vanilla
                              <span className="block text-xs text-gray-500">Without Google Apps</span>
                            </span>
                          </a>
                        )}
                      </Menu.Item>
                    )}
                  </div>
                </Menu.Items>
              </Menu>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/2 mt-6 lg:mt-0">
            {/* Changelog Section */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Changelogs</h2>
              <hr className=""/>
              <div className="mt-4 text-gray-700 changelog-content">
                {changelogLoading ? (
                  <p>Loading changelog...</p>
                ) : changelog === null ? (
                  <p>No changelog available</p>
                ) : changelog === "Failed to load changelog" ? (
                  <p>{changelog}</p>
                ) : (
                  <ReactMarkdown>{changelog}</ReactMarkdown>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;