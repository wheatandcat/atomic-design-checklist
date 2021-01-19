import { useState } from "react";

const Tabs = () => {
  const [open, setOpen] = useState(1);

  return (
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
  );
};

export default Tabs;
