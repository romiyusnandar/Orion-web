import Image from 'next/image';
import Link from 'next/link';

const getSource = async () => {

  const response = await fetch("https://orion-apiv1.vercel.app/source", {
    next: {
      revalidate: 300 // caching for 5 minutes (60*5)
    }
  });
  return response.json();
};

const page = async () => {
  const data = await getSource();
  return (
    <div className="p-4 min-h-0 md:min-h-screen md:p-16">
      <h1 className="text-2xl md:text-3xl font-bold mb-8 mt-4">Source</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.map((source, index) => (
          <Link href={`/source/${source.slug}`} key={index}>
            <div className="cursor-pointer flex flex-col">
              <div className="relative h-48 group w-full">
                <Image
                  src={source.img}
                  alt={source.codename}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
                  <span className="text-white font-bold text-lg">{source.codename}</span>
                </div>
              </div>
              <div className="pt-2 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold text-gray-800">{source.codename}</h2>
                <p className="text-gray-600">{source.date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default page;