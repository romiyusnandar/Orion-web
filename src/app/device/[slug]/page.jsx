import Link from "next/link";
import { marked } from 'marked';
import { notFound } from "next/navigation";
import { FaDownload } from "react-icons/fa";
import { MdOutlineAndroid } from "react-icons/md";
import { TbDeviceMobileCode } from "react-icons/tb"
import { MdOutlineScreenshot } from "react-icons/md";
import { MdErrorOutline } from "react-icons/md";

export const dynamicParams = true;

export async function generateStaticParams() {
  const response = await fetch("https://orion-apiv1.vercel.app/device");
  const device = await response.json();
  return device.map((data) => ({
    slug: data.slug,
  }));
};

const getDeviceBySlug = async (slug) => {
  const response = await fetch(`https://orion-apiv1.vercel.app/device/${slug}`, {
    next: {
      revalidate: 300
    }
  });
  if (!response.ok) {
    notFound();
  };
  return response.json();
};

const getChangelog = async(url) => {
  const changelog = await fetch(url, {
    next: {
      revalidate: 300
    }
  });
  if (!changelog.ok) {
    return "error"
  };
  const changelogText = await changelog.text();
  return marked(changelogText);
}

const Page = async ({params}) => {
  const data = await getDeviceBySlug(params.slug);
  const changelog = await getChangelog(data.device_changelog);

  return (
    <div className="download-page w-full py-24 bg-[#f6f8fd]">
      <div className="container mx-auto">
        <div className="device flex flex-col gap-2 p-4 animate__animated animate__fadeInLeft animate__delay-1s">
          <h1 className="font-bold text-2xl text-neutral-800">
            {data.device_name}
          </h1>
          <p className="text-neutral-500 flex items-center gap-2">
            {data.device_codename} | <MdOutlineAndroid size={20} className="text-emerald-500"/> {data.android_version} | {data.build_status}
          </p>
        </div>

        <div className="grid md:grid-cols-2 p-4 gap-4 mt-4 animate__animated animate__fadeInUp animate__delay-1s">
          <div className="border border-neutral-300 rounded-lg p-4 bg-white">
            <h3 className="flex items-center gap-2 text-xl font-semibold pb-3 border-b border-neutral-300">
              <TbDeviceMobileCode size={23}/> Build Info
            </h3>
            <div className="mt-4 text-base  flex flex-col gap-1">
              <p>Release Frequency: <span className="font-mono text-neutral-600">{data.release_frequency}</span></p>
              <p>Require Custom Recovery: <span className="font-mono text-neutral-600">{data.require_custom_recovery}</span></p>
              <p>Maintainer: <span className="font-mono text-neutral-600">{data.maintainer_name}</span></p>
            </div>
          </div>

          <div className="flex flex-col gap-2 items-center">
            <Link
            href={data.download_link}
            className="inline-flex justify-center items-center gap-2 rounded-lg py-2 px-3 font-semibold outline-2
            outline-offset-2 transition-colors bg-emerald-500 text-white hover:bg-emerald-600 active:text-white/80 w-full">
              <FaDownload /> Download
            </Link>
            <Link
            href="/gallery"
            className="inline-flex justify-center items-center gap-2 rounded-lg py-2 px-3 font-semibold outline-2
            outline-offset-2 transition-colors bg-transparent text-neutral-600 hover:shadow-md border-neutral-300 border-2 active:text-white/80 w-full">
              <MdOutlineScreenshot size={20}/> Screenshot
            </Link>
          </div>
        </div>
        <h2 className="ch text-xl font-bold border-b border-neutral-300 mt-4 md:mt-8 pb-2 p-4 animate__animated animate__fadeInUp animate__delay-1s">
          Changelogs
        </h2>
        <article className="prose prose-headings:text-sm prose-headings:text-neutral-800 mt-2 md:mt-4 text-neutral-600 p-4">
        { changelog === "error" ?
        <div className="ch flex items-center gap-2 text-red-600">
          <MdErrorOutline size={25} />
          <p className="ch animate__animated animate__fadeInLeft animate__delay-1s">Error fetching changelogs</p>
        </div> :
        <div dangerouslySetInnerHTML={{ __html: changelog }} />}
      </article>
      </div>

    </div>
  )
}

export default Page;