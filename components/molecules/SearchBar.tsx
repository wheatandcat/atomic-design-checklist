import Image from "next/image";

const SearchBar = () => {
  return (
    <div className="mx-2 pt-2 relative text-gray-600 w-40">
      <input
        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-40"
        type="search"
        name="search"
        placeholder="Search"
      />
      <button type="submit" className="absolute right-0 top-0 mt-4 mr-2">
        <Image src="/image/search.svg" width={25} height={25} />
      </button>
    </div>
  );
};

export default SearchBar;
