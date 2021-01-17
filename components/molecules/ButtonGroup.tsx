const ButtonGroup = () => {
  return (
    <div className="flex">
      <button
        className="text-base rounded-r-none border-r-0  hover:scale-110 focus:outline-none px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-teal-200  
        bg-teal-100 
        text-teal-700 
        border duration-200 ease-in-out 
        border-teal-600 transition
        hover:bg-gray-200
        "
      >
        one
      </button>
      <button
        className="text-base  rounded-l-none rounded-r-none  border-r-0  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-teal-700 hover:text-teal-100 
        bg-teal-100 
        text-teal-700 
        border duration-200 ease-in-out 
        border-teal-600 transition
        hover:bg-gray-200
        "
      >
        two
      </button>
      <button
        className="text-base  rounded-l-none  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-teal-700 hover:text-teal-100 
        bg-teal-100 
        text-teal-700 
        border duration-200 ease-in-out 
        border-teal-600 transition
        hover:bg-gray-200
        "
      >
        three
      </button>
    </div>
  );
};

export default ButtonGroup;
