import React from "react";
import Image from "next/image";

type Props = {
  size?: string;
  imageSize?: number;
  name?: string;
};

const SimpleCard: React.FC<Props> = (props) => {
  return (
    <div
      className={`group box-border h-${props.size || "32"} w-${
        props.size || "32"
      } border-2 hover:shadow-lg rounded m-1 bg-white`}
    >
      <div className="flex justify-center items-center h-4/6">
        <Image
          src="/image/image.png"
          width={props.imageSize || 60}
          height={props.imageSize || 60}
        />
      </div>
      <hr />
      <div className="flex justify-center items-center h-2/6">
        {props.name || "one"}
      </div>
    </div>
  );
};

export default SimpleCard;
