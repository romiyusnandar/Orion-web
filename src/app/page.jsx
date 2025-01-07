import Image from "next/image";
import Link from "next/link";
import { PiCodeFill } from "react-icons/pi";
import { TbDownload } from "react-icons/tb";
import ParticlesComponent from "../components/Particles";
import { PiRocketLaunchFill } from "react-icons/pi";
import { PiLockKeyFill } from "react-icons/pi";
import { MdSecurityUpdateGood } from "react-icons/md";
import { LuMinimize2 } from "react-icons/lu";
import { PiHeartFill } from "react-icons/pi";
import { BiLogoTelegram } from "react-icons/bi";
import { PiChatFill } from "react-icons/pi";

const Home = () => {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Section 1 */}
      <div className="relative min-h-screen bg-gradient-to-br z-0">
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
                <div className="flex flex-row gap-4 justify-start relative z-10">
                  <Link
                    href="/device"
                    className="w-32 bg-cyan-600 text-white py-2 rounded-md font-medium hover:bg-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl flex justify-center items-center cursor-pointer"
                  >
                    <span className="mr-2">Download</span>
                    <TbDownload size={22} />
                  </Link>
                  <Link
                    href="/source"
                    className="w-28 border-2 border-cyan-600 text-cyan-600 py-2 rounded-md font-medium hover:bg-cyan-50 transition-all duration-200 shadow-md hover:shadow-lg flex justify-center items-center cursor-pointer"
                  >
                    <span className="mr-2">Source</span>
                    <PiCodeFill size={22} />
                  </Link>
                </div>
              </div>

              {/* Image Section */}
              <div className="lg:w-1/2 mt-12 lg:mt-0">
                <div className="z-10 flex gap-6 justify-center">
                  <div className="w-40 h-80 rounded shadow-2xl flex items-center justify-center overflow-hidden ">
                    <Image
                      src="/orion-fw.jpg"
                      alt="Phone preview 1"
                      width={160}
                      height={320}
                    />
                  </div>
                  <div className="w-40 h-80 rounded shadow-2xl flex items-center justify-center overflow-hidden ">
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
      <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8 z-0">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl mb-16">Why Choose Orion<span className="text-cyan-600">OS</span>?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-20">
              {/* card 1 */}
              <div className="bg-cyan-600 text-white p-6 rounded-lg shadow-md flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center mb-4">
                    <PiRocketLaunchFill size={32} />
                    <h3 className="text-xl font-semibold ml-4">Lightweight</h3>
                  </div>
                  <p className="mb-4">Engineered to run fast and efficiently, without dragging down your device. Experience the power of Android in its lightest form.</p>
                </div>
              </div>
              {/* card 2 */}
              <div className="bg-cyan-600 text-white p-6 rounded-lg shadow-md flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center mb-4">
                    <PiLockKeyFill size={32} />
                    <h3 className="text-xl font-semibold ml-4">Secure</h3>
                  </div>
                  <p className="mb-4">Your privacy comes first. With advanced protection, rest assured your device is always in safe hands.</p>
                </div>
              </div>
              {/* card 3 */}
              <div className="bg-cyan-600 text-white p-6 rounded-lg shadow-md flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center mb-4">
                    <MdSecurityUpdateGood size={32} />
                    <h3 className="text-xl font-semibold ml-4">Up-to-Date</h3>
                  </div>
                  <p className="mb-4">Receive the latest features and security updates regularly. We keep your device relevant and ready for what's next.</p>
                </div>
              </div>
              {/* card 4 */}
              <div className="bg-cyan-600 text-white p-6 rounded-lg shadow-md flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center mb-4">
                    <LuMinimize2 size={32} />
                    <h3 className="text-xl font-semibold ml-4">Minimalist</h3>
                  </div>
                  <p className="mb-4">Designed with a focus on elegance and usability. Say goodbye to clutter and embrace a sleek, distraction-free interface.</p>
                </div>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl mb-10">Completely<span className="text-cyan-600"> Free</span>. No Cost, No Catch.</h2>
            <p className="text-gray-900 text-left md:text-center mb-10">Our operating system is completely free to use, empowering you to explore its full potential without limits—so long as it's not used for commercial
              purposes. Even the smallest contribution helps keep this project and website thriving, ensuring it remains accessible to all.
            </p>
            <div className="w-full flex justify-start md:justify-center">
              <Link
                href="https://t.me/orionosdonate/7"
                className="px-4 border-2 border-cyan-600 text-cyan-600 py-2 rounded-md font-medium hover:bg-cyan-50 transition-all duration-200 shadow-md hover:shadow-lg flex items-center cursor-pointer"
                target="_blank">
                Give support
                <PiHeartFill size={22} className="ml-2"/>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="px-4 sm:px-6 lg:px-16 py-16 lg:py-32 bg-cyan-50 z-0">
        <div className="container mx-auto lg:px-6 sm:px-0">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-8 lg:mb-0 lg:mr-8">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Connect with a world of like-minded individuals.
              </h1>
              <p className="text-gray-900 max-w-xl">
                Stay updated with the latest insights through Channels
                and Discussion Groups trusted by a growing community.
              </p>
            </div>

            <div className="flex flex-row gap-4 justify-start">
              <Link
                href="https://t.me/OrionOS_Update"
                target="_blank"
                className="px-4 bg-cyan-600 text-white py-2 rounded-md font-medium hover:bg-cyan-700 transition-all duration-200 flex items-center justify-center cursor-pointer"
              >
                Channel
                <BiLogoTelegram size={22} className="ml-2" />
              </Link>
              <Link
                href="https://t.me/OrionOS_prjkt"
                target="_blank"
                className="px-4 border-2 border-cyan-700 text-cyan-600 py-2 rounded-md font-medium hover:bg-cyan-100 transition-all duration-200 flex items-center justify-center cursor-pointer"
              >
                Discussion
                <PiChatFill size={22} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
