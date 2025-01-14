import {
  PiSealCheckFill,
  PiCubeFill,
  PiCalendarDotsFill,
  PiCheckBold
  } from "react-icons/pi";

export const dynamicParams = true;

export async function generateStaticParams() {
  try {
    const response = await fetch("https://orion-apiv1.vercel.app/source");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const source = await response.json();
    return source.map((data) => ({
      slug: data.slug,
    }));
  } catch (error) {
    console.error("Error fetching source data:", error);
    return [];
  }
}

const getSource = async (codename) => {
  try {
    const response = await fetch(`https://orion-apiv1.vercel.app/source/${codename}`, {
      next: {
        revalidate: 300
      }
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json()
  } catch(error) {
    console.error(error);
    return null;
  }
}

const page = async ({params}) => {
  const source = await getSource(params.slug);

  return (
    <div className="mx-auto px-4 md:px-8 py-10 md:py-24">
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        {/* Sticky Card */}
        <div className="order-1 lg:order-2 lg:w-1/3 lg:pr-8">
          <div className="bg-cyan-50 rounded-lg p-4 md:p-6 lg:sticky lg:top-28">
            <img
              src={source.img}
              alt="Card Image"
              className="rounded-md mb-4"
            />
            <ul className="space-y-4 text-gray-700 font-medium">
              <li className="flex items-center">
                <span className="material-icons text-cyan-600 mr-2">
                  <PiSealCheckFill size={24} />
                </span>{""}
                Android {source.android_version}
              </li>
              <li className="flex items-center">
                <span className="material-icons text-cyan-600 mr-2"><PiCubeFill size={24} />
                </span>{source.codename}
              </li>
              <li className="flex items-center">
                <span className="material-icons text-cyan-600 mr-2">
                  <PiCalendarDotsFill size={24} />
                </span>{source.date}
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="order-2 lg:order-1 lg:w-2/3 space-y-4 md:space-y-8">
          {/* Section: About */}
          <section>
            <h1 className="text-2xl font-bold text-gray-800 mb-4 pt-8 md:pt-0">About {source.codename}</h1>
            <p className="text-gray-600 leading-relaxed lg:pr-8">
              {source.description}
            </p>
          </section>

          {/* Section: Changelog */}
          <section>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Changelogs</h1>
            <ul
              className={`list-none text-gray-600 space-y-2 ${
                source.changes.length > 12 ? 'flex flex-wrap' : ''
              }`}
            >
              {source.changes.map((change, index) => (
                <li key={index} className="flex items-start space-x-1 w-full md:w-1/2">
                  <span className="text-cyan-500">✱</span>
                  <span>{change}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

export default page;