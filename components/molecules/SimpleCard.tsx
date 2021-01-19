import Image from "next/image";

const SimpleCard = () => {
  return (
    <div className="group box-border h-32 w-32 border-2 hover:shadow-lg rounded m-3 bg-white">
      <div className="flex justify-center items-center h-4/6">
        <Image src="/image/image.png" width={60} height={60} />
      </div>
      <hr />
      <div className="flex justify-center items-center h-2/6">one</div>
    </div>
  );
};

export default SimpleCard;
