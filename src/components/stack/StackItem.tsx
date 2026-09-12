import type { Dispatch, SetStateAction } from "react";
import { HiX } from "react-icons/hi";
import { toast } from "react-toastify";
import type { ITechnology } from "../../types/technology";



interface IStackItemProps {
  technology: ITechnology;
  stack: ITechnology[];
  setStack: Dispatch<SetStateAction<ITechnology[]>>;
}



const StackItem = ({ technology, stack, setStack }: IStackItemProps) => {
  const handleRemoveClick = () => {
    const restTechnologies = stack.filter((item) => item.id !== technology.id);
    
    setStack(restTechnologies);
    toast.info(`${technology.name} removed from your stack`);
  };




  return (

    <div className="flex items-center justify-between gap-3 border border-base-300 rounded-xl p-3">
      <div className="flex items-center gap-3">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-8 w-8 object-contain"
        />

        <div>
          <p className="text-sm font-semibold">{technology.name}</p>
          <p className="text-xs text-base-content/50">{technology.category}</p>
        </div>

      </div>

      <span onClick={handleRemoveClick} className="text-base-content/40 cursor-pointer hover:text-error">
        <HiX size={18} />
      </span>

    </div>
  );
};



export default StackItem;