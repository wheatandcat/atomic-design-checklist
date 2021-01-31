const ProfileCard = () => {
  return (
    <div className="border w-full hover:shadow-none relative flex flex-col mx-2 shadow-lg">
      <img
        className="max-h-20 w-full absolute top-0"
        style={{ zIndex: 0 }}
        src="https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?cs=srgb&dl=pexels-johannes-plenio-1103970.jpg&fm=jpg"
        alt=""
      />
      <div className="w-full flex m-3 ml-4 text-white" style={{ zIndex: 1 }}>
        <img
          className="w-28 h-28 p-1 bg-white rounded-full"
          src="https://placehold.jp/80x80.png"
          alt=""
        />
        <div className="text-sm mt-11 ml-3 font-bold flex flex-col">
          <div className="text-white">Foo</div>

          <div className="text-black pt-1">Bar</div>
        </div>
      </div>
      <div className="flex absolute bottom-0 font-bold right-0 text-xs text-gray-500 space-x-0 my-3.5 mr-3">
        <div className="border rounded-full border-gray-300 p-1 px-4 cursor-pointer hover:bg-gray-700 hover:text-white">
          follow
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
