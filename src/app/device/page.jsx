import DeviceList from './DeviceList';
import ParticlesComponent from "../../components/Particles";


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
