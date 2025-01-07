import ParticlesComponent from "../../components/Particles";

const page = () => {
  return (
    <main className="min-h-screen">
      <div className="relative min-h-screen z-0">
        {/* <ParticlesComponent id="particles" /> */}
      </div>

      <div className="flex items-center justify-between min-h-screen px-10 bg-pink-50">
      {/* Bagian Teks di Kiri */}
      <div className="max-w-md">
        <h1 className="text-4xl font-bold text-black mb-4">
          Terhubung dengan pengguna lainnya.
        </h1>
        <p className="text-gray-700">
          Dapatkan informasi terbaru melalui Channel dan Grup diskusi yang telah
          diikuti banyak pengguna.
        </p>
      </div>

      {/* Bagian Tombol di Kanan */}
      <div className="flex space-x-4">
        {/* Tombol Channel */}
        <button className="flex items-center px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
          <span className="mr-2">Channel</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.752 11.168l-7.064 3.528A1 1 0 016 13.844V6.993a1 1 0 01.647-.937l7.063-2.827a1 1 0 011.341.937v7.172a1 1 0 01-.299.733zm0 0L21 16m-6.248-4.832L21 8m-9 16H5a2 2 0 01-2-2v-4m0 0a2 2 0 012-2h6a2 2 0 012 2v4m0 0a2 2 0 002 2h4a2 2 0 002-2v-4m0 0a2 2 0 00-2-2h-6"
            />
          </svg>
        </button>

        {/* Tombol Community */}
        <button className="flex items-center px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition">
          <span className="mr-2">Community</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2h5M16 8a4 4 0 11-8 0 4 4 0 018 0zm6 12h-6m2-4h.01"
            />
          </svg>
        </button>
      </div>
    </div>
    </main>
  );
}

export default page;