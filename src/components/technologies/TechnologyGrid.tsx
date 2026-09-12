import type { Dispatch, SetStateAction } from "react";
import TechnologyCard from "./TechnologyCard";
import type { ITechnology } from "../../types/technology";



interface ITechnologyGridProps {
  
  technologies: ITechnology[];
  stack: ITechnology[];
  setStack: Dispatch<SetStateAction<ITechnology[]>>;
}



const TechnologyGrid = ({ technologies, stack, setStack }: ITechnologyGridProps) => {
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      {technologies.map((technology, ind) => (
        <TechnologyCard
          key={ind}
          technology={technology}
          stack={stack}
          setStack={setStack}
        />
      ))}
    </div>
  );

};




export default TechnologyGrid;