import { Suspense } from "react";
import TeamList from "./TeamList";
import Loading from "../loading";
import ParticlesComponent from "@/components/Particles";

const Team = () => {
  return (
    <div className="">
      <ParticlesComponent id="particles" />
      <div className="relative">
        <Suspense fallback={<Loading/>}>
          <TeamList />
        </Suspense>
      </div>
    </div>
  )
}

export default Team;