import React from "react";

type Props = {
  name: string;
};

const Card: React.FC<Props> = (props) => {
  return (
    <div className="group box-border h-60 w-60 border-2 hover:shadow-lg rounded-xl m-3 bg-white">
      <div className="flex justify-center items-center h-4/6">
        {props.children}
      </div>
      <hr />
      <div className="flex justify-center items-center h-2/6">{props.name}</div>
    </div>
  );
};

export default Card;
