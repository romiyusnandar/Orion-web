import Image from "next/image";
import Link from "next/link";
import { PiCodeFill } from "react-icons/pi";
import { TbDownload } from "react-icons/tb";
import ParticlesComponent from "../components/Particles";

const Home = () => {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Section 1 */}
      <div className="relative min-h-screen bg-gradient-to-br z-[-1]">
        <ParticlesComponent id="particles" />
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-12 lg:gap-8">
              {/* Text Section */}
              <div className="lg:w-1/2 text-left">
                <h1 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  OrionOS. <br className="hidden sm:block" />
                  Minimal<span className="text-cyan-600"> Design.</span> <br className="hidden sm:block" />
                  Maximum<span className="text-cyan-600"> Performance.</span>
                </h1>
                <p className="text-gray-600 md:text-lg mb-8 max-w-2xl mx-auto lg:mx-0">
                  Developing a clean, bloatware-free, and device-friendly
                  Android operating system that pushes the boundaries of performance.
                </p>
                <div className="flex flex-row gap-4 justify-start">
                  <Link
                    href="/device"
                    className="w-32 bg-cyan-600 text-white py-2 rounded-md font-medium hover:bg-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl flex justify-center items-center"
                  >
                    <span className="mr-2">Download</span>
                    <TbDownload size={22} />
                  </Link>
                  <Link
                    href="/source"
                    className="w-28 border-2 border-cyan-600 text-cyan-600 py-2 rounded-md font-medium hover:bg-cyan-50 transition-all duration-200 shadow-md hover:shadow-lg flex justify-center items-center"
                  >
                    <span className="mr-2">Source</span>
                    <PiCodeFill size={22} />
                  </Link>
                </div>
              </div>

              {/* Image Section */}
              <div className="lg:w-1/2 mt-12 lg:mt-0">
                <div className="z-10 flex gap-6 justify-center">
                  <div className="w-40 h-80 rounded shadow-2xl flex items-center justify-center overflow-hidden transform hover:scale-105 transition-transform duration-300">
                    <Image
                      src="/orion-fw.jpg"
                      alt="Phone preview 1"
                      width={160}
                      height={320}
                    />
                  </div>
                  <div className="w-40 h-80 rounded shadow-2xl flex items-center justify-center overflow-hidden transform hover:scale-105 transition-transform duration-300">
                    <Image
                      src="/orion-fw.jpg"
                      alt="Phone preview 2"
                      width={160}
                      height={320}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 z-20">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">More Features</h2>
          <p className="text-gray-600 mb-4">
            Discover the extensive features and customization options available with OrionOS.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;
