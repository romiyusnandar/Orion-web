import ParticlesComponent from "../../components/Particles";

const page = () => {
  return (
    <main className="min-h-screen">
      <div className="relative min-h-screen z-0">
        {/* <ParticlesComponent id="particles" /> */}
      </div>
      
      <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center mb-8">Bukan stok-Android biasa.</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl px-4">
        {/* Card 1 */}
        <div className="bg-red-500 text-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-white text-red-500 rounded-full flex items-center justify-center mr-4">
              {/* Replace this icon */}
              <span>👥</span>
            </div>
            <h2 className="text-xl font-semibold">Antusias</h2>
          </div>
          <p>Dikembangkan oleh pengembang yang memiliki antusias, dan berpengalaman pada bidangnya.</p>
        </div>

        {/* Card 2 */}
        <div className="bg-red-500 text-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-white text-red-500 rounded-full flex items-center justify-center mr-4">
              {/* Replace this icon */}
              <span>⚙️</span>
            </div>
            <h2 className="text-xl font-semibold">Kustomisasi</h2>
          </div>
          <p>Menggabungkan beberapa fitur dari berbagai sumber yang telah ditinjau dan dipercaya.</p>
        </div>

        {/* Card 3 */}
        <div className="bg-red-500 text-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-white text-red-500 rounded-full flex items-center justify-center mr-4">
              {/* Replace this icon */}
              <span>🧹</span>
            </div>
            <h2 className="text-xl font-semibold">Bersih</h2>
          </div>
          <p>Nikmati pengalaman baru menggunakan Android yang bebas iklan, bloatware, dan antarmuka yang bersih.</p>
        </div>

        {/* Card 4 */}
        <div className="bg-red-500 text-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-white text-red-500 rounded-full flex items-center justify-center mr-4">
              {/* Replace this icon */}
              <span>🔒</span>
            </div>
            <h2 className="text-xl font-semibold">Privasi</h2>
          </div>
          <p>Memberikan akses penuh kepada pengguna untuk mengontrol dan memodifikasi perangkat.</p>
        </div>
      </div>
    </div>
    </main>
  );
}

export default page;