import ParticlesComponent from "../../components/Particles";

const page = () => {
  return (
    <main className="min-h-screen">
      <div className="relative min-h-screen z-0">
        <ParticlesComponent id="particles" />
      </div>
    </main>
  );
}

export default page;