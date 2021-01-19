import { useState } from "react";

const TabItems = () => {
  const [open, setOpen] = useState(1);

  return (
    <div className="box-border h-48 w-56 border-2 hover:shadow-lg rounded-md">
      <nav className="flex flex-col sm:flex-row">
        {[1, 2, 3].map((v) => {
          const className =
            open === v ? "text-blue-500 border-blue-500" : "text-gray-600 ";

          return (
            <button
              key={v}
              className={`py-2 px-4 block ${className} hover:text-blue-500 focus:outline-none  border-b-2 font-medium`}
              onClick={() => setOpen(v)}
            >
              Tab {v}
            </button>
          );
        })}
      </nav>
      <div className="p-2">
        {open === 1 && <div> Tab 1 item contents </div>}
        {open === 2 && <div> Tab 2 item contents </div>}
        {open === 3 && <div> Tab 3 item contents </div>}
      </div>
    </div>
  );
};

export default TabItems;
