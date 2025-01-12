import Image from 'next/image';
import { FaGithub, FaTelegram, FaDonate } from 'react-icons/fa';

export const dynamicParams = true;

export async function generateStaticParams() {
  try {
    const response = await fetch("https://orion-apiv1.vercel.app/developer");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const developers = await response.json();
    return developers.map((data) => ({
      slug: data.slug,
    }));
  } catch (error) {
    console.error("Error fetching developer data:", error);
    return [];
  }
}

const getDevName = async (slug) => {
  try {
    const response = await fetch(`https://orion-apiv1.vercel.app/developer/${slug}`, {
      next: {
        revalidate: 300
      }
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

const page = async ({ params }) => {
  const data = await getDevName(params.slug);

  return (
    <div className="container min-h-screen mx-auto px-4 py-12 md:py-18">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-md overflow-hidden">
        <div className="flex flex-col md:flex-row items-center p-6">
          <div className="w-32 h-32 md:w-48 md:h-48 relative mb-4 md:mb-0">
            <Image
              src={data.image}
              alt={`${data.name} Avatar`}
              className="rounded-full"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="md:ml-6 text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-800">{data.name}</h2>
            <p className="text-gray-600">{data.role}</p>
            <p className="mt-4 text-gray-600">{data.bio}</p>
            <div className="mt-4 flex justify-center md:justify-start space-x-4">
              <a href={data.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
                <FaGithub size={24} />
              </a>
              <a href={data.social.telegram} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
                <FaTelegram size={24} />
              </a>
              <a href={data.social.donate} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
                <FaDonate size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;