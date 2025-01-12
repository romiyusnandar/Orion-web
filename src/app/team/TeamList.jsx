import Image from 'next/image';
import Link from 'next/link';

const getDev = async () => {

  const response = await fetch("https://orion-apiv1.vercel.app/developer", {
    next: {
      revalidate: 300 // caching for 5 minutes (60*5)
    }
  });
  return response.json();
};

const TeamList = async () => {
  const data = await getDev();

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Amazing Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.map((dev, index) => (
          <Link href={`/team/${dev.name}`} key={index}>
            <div className="dev-container bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer flex flex-col">
              <div className="relative h-48 bg-gradient-to-r from-cyan-500 to-purple-600">
                <Image
                  src={dev.image}
                  alt={dev.name}
                  layout="fill"
                  objectFit="cover"
                  className="mix-blend-overlay"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{dev.name}</h2>
                <p className="text-gray-600 mb-4">{dev.role}</p>
                <div className="min-h-0 md:min-h-[40px]">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {dev.device_codename.map(device => (
                      <span key={device} className="bg-cyan-50 text-cyan-600 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        {device}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default TeamList;