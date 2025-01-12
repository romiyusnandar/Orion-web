import DeviceList from './DeviceList';
import ParticlesComponent from "../../components/Particles";

const Download = async () => {

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
