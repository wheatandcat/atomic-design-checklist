const Banner = () => {
  return (
    <>
      <div className="flex py-1 pl-2 md:text-left md:flex-row md:items-center md:justify-between bg-gray-700 rounded-md w-full m-1">
        <div>
          <div className="text-gray-300 text-xs">Sample</div>
          <div className="text-gray-300 text-xs">test</div>
        </div>

        <div className="mt-3 md:mt-0 md:ml-2">
          <div className="inline-block rounded-md text-lg font-semibold py-2 px-4 text-purple-400 hover:text-purple-500 cursor-pointer">
            Action
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
