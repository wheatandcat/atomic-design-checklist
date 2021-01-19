const ListItem = () => {
  return (
    <div className="bg-white shadow-xl rounded-sm w-40 border border-gray-400">
      <ul className="divide-y divide-gray-300">
        <li className="p-2 hover:bg-gray-100 cursor-pointer">one</li>
        <li className="p-2 hover:bg-gray-100 cursor-pointer">two</li>
        <li className="p-2 hover:bg-gray-100 cursor-pointer">three</li>
      </ul>
    </div>
  );
};

export default ListItem;
