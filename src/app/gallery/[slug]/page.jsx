import Image from "next/image";

export const dynamicParams = true;

export async function generateStaticParams() {
  const response = await fetch("https://orion-apiv1.vercel.app/gallery");
  const slugs = await response.json();
  return slugs.map((data) => ({
    slug: data.slug
  }));
}

const getScreenshot = async (slug) => {
  const response = await fetch(`https://orion-apiv1.vercel.app/gallery/${slug}`, {
    next: {
      revalidate: 300,
    },
  });

  return response.json();
};

const Page = async ({ params: { slug } }) => {
  const ss = await getScreenshot(slug);

  return (
    <div className="gallery w-full">
      <div className="p-4 py-24 container mx-auto">
        <div className="flex flex-col">
          <h1 className="font-bold p-4 text-xl animate__animated animate__fadeInUp">
            Orion version: {ss.version}
          </h1>
          <div className="border rounded-lg p-4 border-neutral-300 shadow-md bg-white animate__animated animate__fadeInUp">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {ss.screenshot.map((img, indx) => (
                <Image
                  key={indx}
                  src={img.image}
                  width={500}
                  height={500}
                  alt="screenshots"
                  className="rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
