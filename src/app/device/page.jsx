import DeviceList from './DeviceList';
import ParticlesComponent from "../../components/Particles";

export const dynamicParams = true;

export async function generateStaticParams() {
  try {
    const response = await fetch("https://orion-apiv1.vercel.app/device");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const device = await response.json();
    return device.map((data) => ({
      slug: data.slug,
    }));
  } catch (error) {
    console.error("Error fetching device data:", error);
    return [];
  }
}

const page = async () => {

  return (
    <div>
      <ParticlesComponent id="particles" />
      <div className="relative">
        <DeviceList />
      </div>
    </div>
  );
};

export default page;
