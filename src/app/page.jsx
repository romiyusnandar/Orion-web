"use client"


import Image from "next/image";

function Home() {
  return (
    <>
      <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dibuat dari Nusantara. <br /> Untuk Siapa Saja!
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Mengembangkan sistem operasi Android yang bersih, bebas bloatware,
            dan ramah pada segala jenis perangkat.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700">
              Unduh
            </button>
            <button className="border border-red-600 text-red-600 px-6 py-3 rounded-lg font-medium hover:bg-red-50">
              Sumber
            </button>
          </div>
        </div>
        <div className="mt-10 relative">
          <div className="absolute -top-10 -right-10 bg-red-600 rounded-full w-48 h-48"></div>
          <div className="relative z-10 flex gap-4">
            <div className="w-48 h-96 bg-gray-200 rounded-lg flex items-center justify-center">
              <Image
                src="/orion-fw.jpg"
                alt="Phone preview 1"
                width={200}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="w-48 h-96 bg-gray-200 rounded-lg flex items-center justify-center">
              <Image
                src="/your-phone2.png"
                alt="Phone preview 2"
                width={200}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
