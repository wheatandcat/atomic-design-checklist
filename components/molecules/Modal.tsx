const Modal = () => {
  return (
    <div className="box-border h-32 w-48 border-2 hover:shadow-lg rounded-md">
      <div className="px-2 text-base font-bold">title</div>
      <div className="border border-gray-300 w-full" />
      <div className="px-2 h-16">sample sample sample</div>
      <div className="border border-gray-300 w-full" />
      <div className="flex items-end px-1 py-1">
        <button className="bg-blue-500 hover:bg-blue-700 rounded text-white px-2 h-6 mx-2 w-16">
          ok
        </button>
        <button className="bg-transparent hover:bg-gray-500 text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent rounded h-6 w-16">
          close
        </button>
      </div>
    </div>
  );
};

export default Modal;
