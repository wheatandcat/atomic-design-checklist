const SimpleForm = () => {
  return (
    <div className="w-full px-3">
      <input
        className="border border-blue-400 appearance-none rounded  p-1 focus focus:border-blue-600 focus:outline-none active:outline-none active:border-blue-600 mb-2"
        id="text"
        type="text"
        placeholder="email"
      />
      <input
        className="border border-blue-400 appearance-none rounded  p-1 focus focus:border-blue-600 focus:outline-none active:outline-none active:border-blue-600 mb-2"
        id="text"
        type="password"
        placeholder="password"
      />
      <div className="flex justify-items-end items-end w-full">
        <button className="bg-blue-500 hover:bg-blue-700 rounded text-white py-1 px-4 h-8">
          Submit
        </button>
      </div>
    </div>
  );
};

export default SimpleForm;
