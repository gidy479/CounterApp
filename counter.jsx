import React, {useState} from "react";


const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <div className="bg-purple-200 p-12"><h1 className="text-2xl font-bold">Count: {count}</h1></div>
      <div className="flex gap-4 mt-12 rounded-lg">
        <button
          onClick={handleIncrease}
          className="px-4 py-2 font-semibold bg-green-500 text-white rounded hover:bg-green-600"
        >
          INCREASE COUNT
        </button>
        <button
          onClick={handleDecrease}
          className="px-4 py-2 font-semibold bg-red-500 text-white rounded hover:bg-red-600"
        >
          DECREASE COUNT
        </button>
      </div>
    </div>
  );
};

export default Counter;
