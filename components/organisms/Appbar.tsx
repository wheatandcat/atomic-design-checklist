import SearchBar from "@components/molecules/SearchBar";
import Image from "next/image";

const AppBar = () => {
  return (
    <div className="w-full h-14 bg-blue-400 flex items-center px-3 justify-between">
      <div className="pt-2 pr-8">
        <Image src="/image/menu.svg" width={25} height={25} />
      </div>
      <div className="font-bold text-lg pr-4">News</div>
      <div className="pb-2">
        <SearchBar />
      </div>
    </div>
  );
};

export default AppBar;
