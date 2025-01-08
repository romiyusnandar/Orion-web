import { getAllDevices } from '../../utils/api-libs';
import DeviceList from './DeviceList';
import ParticlesComponent from "../../components/Particles";

const Download = async () => {
  const allDevice = await getAllDevices();

  return (
    <div>
      <ParticlesComponent id="particles" />
      <div className="relative">
        <DeviceList />
      </div>
    </div>
  );
};

export default Download;
