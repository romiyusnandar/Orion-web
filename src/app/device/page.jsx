import { Suspense } from 'react';
import { getAllDevices } from '../../utils/api-libs';
import DeviceList from './DeviceList';
import Loading from '../loading';
import { SiXiaomi } from "react-icons/si";

const Download = async () => {
  const allDevice = await getAllDevices();

  return (
    <div>
      <DeviceList />
    </div>
    // <div className="device-list w-full py-24 bg-[#f6f8fd]">
    //   <div className="container mx-auto">
    //     <h1 className="head px-4 font-bold text-base md:text-xl lg:text-2xl animate__animated animate__fadeInDown animate__fadeInDown animate__delay-1s">
    //       Grab your Orion!
    //     </h1>
    //     <p className="head px-4 text-base md:text-xl lg:text-lg animate__animated animate__fadeInDown animate__delay-1s">
    //       There are {allDevice.length} devices officially supported!
    //     </p>
    //     {/* device per brand */}
    //     <div className="p-4">
    //       <h1 className="brand pt-8 pl-4 flex gap-2 items-center font-mono font-semibold text-xl animate__animated animate__fadeInLeft animate__delay-1s">
    //         <img src="https://i.ibb.co.com/3rxQVcx/nothing-icon.png"
    //         alt='nothing-icon'
    //         className="w-9 h-9 rounded-md"
    //         />
    //         Nothing Phone
    //       </h1>
    //       <hr className="divider my-2 bg-gray-300 h-0.5 animate__animated animate__backInUp aminate__delay-1s" />
    //       <Suspense fallback={<Loading/>}>
    //         <DeviceList brand="nothing-phone" />
    //       </Suspense>
    //     </div>
    //     <div className="p-4">
    //       <h1 className="brand pt-8 pl-4 flex gap-2 items-center font-mono font-semibold text-xl animate__animated animate__fadeInLeft animate__delay-1s">
    //         <SiXiaomi size={30} className="text-orange-500"/>
    //         Xiaomi
    //       </h1>
    //       <hr className="divider my-2 bg-gray-300 h-0.5 animate__animated animate__backInUp aminate__delay-1s" />
    //       <Suspense fallback={<Loading/>}>
    //         <DeviceList brand="xiaomi" />
    //       </Suspense>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Download;
