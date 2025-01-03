"use client"

import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

// icons
import { IoLogoAndroid } from "react-icons/io5";
import { IoRocket } from "react-icons/io5";
import { IoIosLock } from "react-icons/io";
import { ImPaintFormat } from "react-icons/im";
import { MdSecurityUpdateGood } from "react-icons/md";
import { BsArrowRightCircleFill } from "react-icons/bs";

const Home = () => {

  useEffect(() => {
    AOS.init()
  }, []);

  return (
    <>
      <main>
        <div className="home">
          <header className="w-full min-h-screen flex items-center overflow-hidden">
            <div className="container mx-auto px-4">
              <div className="flex flex-col mt-32 sm:mt-1 md:mt-5 lg:mt-0 lg:flex-row items-center">
                <div className="lg:w-1/2">
                  <h1 className="mb-4 text-3xl sm:mt-20 lg:text-4xl font-bold animate__animated animate__fadeInUp animate__delay-1s ">
                    OrionOS Project
                  </h1>
                  <p className="mb-4 text-sm md:text-base animate__animated animate__fadeInUp animate__delay-1s">
                    OrionOS is a Android Custom ROM based on LineageOS & crDroidAndroid, Offering a stable experience
                    with extensive customization features and performance enhancements.
                  </p>
                  <div className="flex gap-3 justify-center lg:justify-normal">
                    <Link className="grab flex items-center px-3 py-2 animate__animated animate__fadeInUp animate__delay-1s"
                    href="/download"
                    >
                      <IoLogoAndroid size={20} className="mr-2"/>
                      Grab your orion
                    </Link>
                    <Link className="new flex items-center px-3 py-2 animate__animated animate__fadeInUp animate__delay-1s"
                    href="/changelog"
                    >
                      What's new
                      <BsArrowRightCircleFill size={20} className="ml-2" />
                    </Link>
                  </div>
                </div>
                <div className="lg:w-1/2 text-center mt-5 md:mt-10 mb-10">
                  <img src="./about.jpg" alt="orionPage" className="mx-auto animate__animated animate__fadeInRight animate__delay-1s" />
                </div>
              </div>
            </div>
          </header>
          <div className="features w-full min-h-screen py-12 px-5">
            <div className="container mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-3xl lg:text-4xl font-bold mt-20">
                  Why choose OrionOS?
                </h1>
                <p className="mt-4">
                  Bellow is our feature
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center" data-aos="fade-up" data-aos-duration="1000">
                <div className="feature-item">
                  <IoRocket size={45} className="mb-3 mx-auto icon" />
                  <h2 className="text-2xl font-semibold">
                    Smooth AF
                  </h2>
                  <p className="mt-4">
                    Unleash the beast in your phone with the top-notch performance that you get out of the box.
                  </p>
                </div>
                <div className="feature-item">
                  <IoIosLock size={45} className="mb-3 mx-auto icon" />
                  <h2 className="text-2xl font-semibold">
                    Secure
                  </h2>
                  <p className="mt-4">
                    We have enhanced <strong>app locks</strong> and <strong>face unlocks</strong> which make our ROM secure.
                  </p>
                </div>
                <div className="feature-item">
                  <ImPaintFormat size={45} className="mb-3 mx-auto icon" />
                  <h2 className="text-2xl font-semibold">
                    Customizable
                  </h2>
                  <p className="mt-4">
                    Most parts of the ROM are customizable. The feature is for everyone.
                  </p>
                </div>
                <div className="feature-item">
                  <MdSecurityUpdateGood size={45} className="mb-3 mx-auto icon" />
                  <h2 className="text-2xl font-semibold">
                    OTA Update
                  </h2>
                  <p className="mt-4">
                    We provide timely stable OTA updates which make this ROM just like your stock ROM.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;