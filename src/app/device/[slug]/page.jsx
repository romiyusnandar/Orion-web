"use client";

import Link from "next/link";
import { TbDownload } from "react-icons/tb";
import { useState } from 'react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

const Page = async ({params}) => {
  const [selectedBuildIndex, setSelectedBuildIndex] = useState(0);

  const { data: device, error: deviceError } = useSWR(
    `https://orion-apiv1.vercel.app/device/${params.slug}`,
    fetcher
  );

  const { data: changelog, error: changelogError } = useSWR(
    () => device && device.device_build[selectedBuildIndex].device_changelog,
    url => fetch(url).then(res => res.text())
  );

  if (deviceError) <p className="text-center text-xl font-medium py-16 min-h-screen">Failed to load data.</p>;
  if (!device) return <p className="text-center text-xl font-medium py-16 min-h-screen">Loading...</p>;

  const handleTabClick = (index) => {
    setSelectedBuildIndex(index);
  };

  const selectedBuild = device.device_build[selectedBuildIndex];

  return (
    <div className="mx-auto px-4 md:px-8 py-10 md:py-24">
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
            <div className="mt-3">
              <hr/>
              <div className="mt-2 mb-3">
                <Link
                  href={selectedBuild.download_link}
                  className="w-32 bg-cyan-600 text-white py-2 rounded-md font-medium hover:bg-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl flex justify-center items-center cursor-pointer"
                >
                  <span className="mr-2">Download</span>
                  <TbDownload size={22} />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/2 mt-6 lg:mt-0">
            {/* Changelog Section */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Changelogs</h2>
              <hr className=""/>
              <div className="mt-4 text-gray-700 changelog-content">
                {changelogError ? (
                  <p>Failed to load changelog</p>
                ) : !changelog ? (
                  <p>Loading changelog...</p>
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