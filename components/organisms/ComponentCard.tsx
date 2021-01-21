import React, { useState } from "react";
import Image from "next/image";

type Props = {
  name: string;
  use: string[];
  w: string;
  h: string;
  setSearch: (text: string) => void;
};

const Card: React.FC<Props> = (props) => {
  const [tooltip, setTooltip] = useState(false);

  return (
    <div
      className={`group box-border h-${props.h} w-${props.w} border-2 hover:shadow-lg rounded-xl m-3 bg-white`}
      onClick={() => {
        if (tooltip) {
          setTooltip(false);
        }
      }}
    >
      <div className="flex justify-center items-center h-4/6">
        {props.children}
      </div>
      <hr />
      <div className="flex justify-center items-center h-2/6">
        {props.name}
        {props.use.length > 0 && (
          <div
            className="ml-2 rounded-full w-6 h-5 pl-1 bg-blue-200 hover:bg-blue-400 cursor-pointer relative"
            onClick={() => setTooltip(!tooltip)}
          >
            <Image src="/image/link.svg" width={16} height={16} />
            {tooltip && (
              <div className="w-40 border-2 border-gray-400 bg-gray-200 rounded-lg py-3 absolute z-10 bottom-full pointer-events-none">
                <div className="text-sm px-3 pb-2 text-blue-500 font-bold border-blue-500 underline cursor-pointer pointer-events-auto">
                  <span
                    className="hover:bg-blue-200"
                    onClick={() =>
                      props.setSearch([...props.use, props.name].join(","))
                    }
                  >
                    ■ Dependence
                  </span>
                </div>
                <div className="border border-gray-300 w-full mb-2" />

                {props.use.map((v) => (
                  <div key={v} className="text-xs px-3 p-0.5">
                    ・{v}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
