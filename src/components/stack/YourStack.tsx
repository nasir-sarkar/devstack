import type { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";
import StackItem from "./StackItem";
import type { ITechnology } from "../../types/technology";



interface IYourStackProps {
  stack: ITechnology[];
  setStack: Dispatch<SetStateAction<ITechnology[]>>;
}



const YourStack = ({ stack, setStack }: IYourStackProps) => {
  
  const count = stack.length;
  console.log(count, "count from your stack");

  const handleRemoveAll = () => {
    setStack([]);
    toast.info("your stack has been cleared");
  };



  return (
    <div className="border border-base-300 bg-base-100 rounded-2xl p-5 h-fit">
      <h3 className="text-lg font-bold">Your Stack</h3>


      {count === 0 ? (
        <p className="text-sm text-base-content/50 mt-1">
          No technologies selected yet.
        </p>
      ) : (
        <p className="text-sm text-base-content/50 mt-1">
          {count} Technology Selected
        </p>
      )}


      <div className="flex flex-col gap-3 mt-4">
        {stack.length === 0 ? (
          <div className="border border-dashed border-base-300 rounded-xl py-10 text-center text-sm text-base-content/40">
            Your stack is empty.
          </div>

        ) : (
          stack.map((technology, ind) => (
            <StackItem
              key={ind}
              technology={technology}
              stack={stack}
              setStack={setStack}
            />
          ))
        )}
      </div>


      {count > 0 && (
        <button
          onClick={handleRemoveAll}
          className="btn btn-outline btn-error w-full rounded-lg mt-5"
        >
          Remove All
        </button>
      )}
    </div>
  );
};





export default YourStack;