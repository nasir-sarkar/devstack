import type { Dispatch, SetStateAction } from "react";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
import type { ITechnology } from "../../types/technology";




interface ITechnologyCardProps {
  technology: ITechnology;
  stack: ITechnology[];
  setStack: Dispatch<SetStateAction<ITechnology[]>>;
}



const TechnologyCard = ({ technology, stack, setStack }: ITechnologyCardProps) => {
  const { name, category, description, icon, rating, difficulty, badge } =
    technology;


  const isAdded = stack.some((item) => item.id === technology.id);


  const handleAddClick = () => {
    const alreadyAdded = stack.some((item) => item.id === technology.id);


    if (alreadyAdded === true) {
      toast.warning(`${name} is already in your stack`);
      return;
    }


    setStack([...stack, technology]);
    toast.success(`${name} added to your stack`);
  };



  return (
    <div className="border border-base-300 bg-base-100 rounded-2xl p-5 flex flex-col shadow-sm">
      <div className="flex justify-between items-start mb-3">
        <img src={icon} alt={name} className="h-10 w-10 object-contain" />
        <span className="badge badge-ghost badge-sm bg-base-200 font-medium">
          {badge}
        </span>
      </div>



      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-sm text-base-content/60 mt-1 flex-1">{description}</p>


      <div className="flex flex-wrap items-center gap-2 text-xs mt-4">
        <span className="badge badge-outline rounded-full">{category}</span>
        <span className="text-base-content/50">{difficulty}</span>
        <span className="ml-auto flex items-center gap-1 font-semibold">
          <FaStar className="text-warning" />
          {rating}
        </span>
      </div>



      <button
        onClick={handleAddClick}
        disabled={isAdded === true}
        className="btn btn-neutral w-full rounded-lg mt-4"
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};



export default TechnologyCard;