import Image from "next/image";

const Breadcrumbs = () => {
  return (
    <div className="flex">
      <div className="text-black  mx-1 font-bold">One</div>
      <Image
        src="/image/keyboard_arrow_right.svg"
        className="mt-2"
        width={25}
        height={25}
      />
      <div className="text-black mx-1 font-bold">Two</div>
      <Image
        src="/image/keyboard_arrow_right.svg"
        className="mt-2"
        width={25}
        height={25}
      />
      <div className="text-gray-400 mx-1 font-bold">Three</div>
    </div>
  );
};

export default Breadcrumbs;
