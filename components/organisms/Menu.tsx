import { useState } from "react";
import Image from "next/image";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative w-full h-full flex justify-center items-center"
      onClick={() => {
        if (open) {
          setOpen(false);
        }
      }}
    >
      <div>
        <button
          className="bg-gray-200 hover:bg-gray-300 rounded-full w-7 h-7 border focus:outline-none"
          onClick={() => {
            setOpen(true);
          }}
        >
          <Image src="/image/more_horiz.svg" width={25} height={25} />
        </button>
      </div>
      {open && (
        <div className="relative">
          <div className="bg-white shadow-xl rounded-sm w-40 border border-gray-400 absolute top-0 right-0 z-10">
            <ul className="divide-y divide-gray-300">
              <li className="p-2 hover:bg-gray-100 cursor-pointer">one</li>
              <li className="p-2 hover:bg-gray-100 cursor-pointer">two</li>
              <li className="p-2 hover:bg-gray-100 cursor-pointer">three</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
