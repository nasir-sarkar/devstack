import { useState } from "react";
import TechnologyGrid from "./TechnologyGrid";
import YourStack from "../stack/YourStack";
import type { ITechnology } from "../../types/technology";




interface ITechnologiesProps {
  technologies: ITechnology[];
}


const Technologies = ({ technologies }: ITechnologiesProps) => {
  const [stack, setStack] = useState<ITechnology[]>([]);
  console.log(stack, "stack from Technologies");



  return (
    <div id="technologies" className="container mx-auto px-4 py-14">
      <h2 className="text-3xl font-extrabold">
        Explore the <span className="text-brand-gradient">Technologies</span>
      </h2>
      <p className="mt-2 text-base-content/60">
        Pick the technologies you want to add in your stack.
      </p>



      <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
        <TechnologyGrid
          technologies={technologies}
          stack={stack}
          setStack={setStack}
        />

        <YourStack stack={stack} setStack={setStack} />
      </div>
    </div>
  );
};



export default Technologies;