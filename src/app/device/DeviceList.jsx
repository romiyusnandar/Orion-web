import { getDeviceByBrand } from "@/utils/api-libs";
import Link from 'next/link';
import { Suspense } from "react";
import { FaDownload } from "react-icons/fa";
import Loading from "../loading";

const DeviceList = async ({ brand }) => {
  const getDeviceBrand = await getDeviceByBrand(brand);

  return (
    <>
      <div className="w-full bg-[#f6f8fd]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-10 md:gap-5">
            {getDeviceBrand.map((data, index) => (
              <div key={index} className="border rounded-lg p-8 md:p-4 border-neutral-300 shadow-md bg-white animate__animated animate__fadeInUp">
                <div className="flex flex-col md:flex-row items-center justify-center">
                  <div className="w-52 h-52 flex items-center justify-center overflow-hidden">
                    <Suspense fallback={<Loading/>}>
                    <img src={data.device_image} className="object-contain w-full h-full" alt={data.device_name} />
                    </Suspense>
                  </div>
                  <div className="mt-4 px-4 flex flex-col justify-center items-center md:items-start w-full">
                    <p className="bg-green-200 text-green-700 px-2 rounded-md text-sm">
                      {data.official_status}
                    </p>
                    <h3 className="mt-4 font-semibold text-base">
                      {data.device_name}
                    </h3>
                    <p className="text-base">
                      Maintainer: {data.maintainer_name}
                    </p>
                    <div className="w-full flex items-center justify-center">
                      <Link href={`/download/${data.slug}`} className="w-full">
                        <div className="mt-4 w-full flex justify-center items-center gap-2 bg-emerald-500
                        py-2 rounded-md shadow-sm text-white text-sm hover:bg-emerald-600 transition-all duration-300">
                          <FaDownload className="mr-1" />
                          Download
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DeviceList;
