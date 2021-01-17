import { useState } from "react";

const Toggle = () => {
  const [checked, setChecked] = useState<boolean>(false);

  const bg = checked ? "bg-blue-200" : "bg-gray-200";

  return (
    <>
      <div className="relative inline-block w-14 align-middle select-none transition ease-in">
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          className="absolute block w-8 h-8 rounded-full bg-white border-2 border-gray-200 appearance-none cursor-pointer"
          onChange={(v) => {
            setChecked(v.target.checked);
          }}
        />
        <label
          htmlFor="toggle"
          className={`block overflow-hidden h-6 mt-1 rounded-full cursor-pointer ${bg}`}
        />
      </div>
      <style jsx>{`
        input:checked {
          left: 1.5rem;
        }

        :focus {
          outline: none;
        }
      `}</style>
    </>
  );
};

export default Toggle;
