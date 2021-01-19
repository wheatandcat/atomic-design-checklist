import { useState } from "react";

const Modal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-700 rounded text-white py-1 px-4 h-10"
        onClick={() => setOpen(true)}
      >
        Open Modal
      </button>

      {open && (
        <div className="bg-transparent w-screen h-screen absolute">
          <div className="p-7 flex justify-center items-center fixed left-0 top-0 w-full h-full bg-gray-900 bg-opacity-50 z-50 transition-opacity">
            <div className="bg-white flex rounded-lg w-80 relative">
              <div className="flex flex-col items-start">
                <div className="p-7 flex items-center w-full">
                  <div className="text-gray-900 font-bold text-lg">Title</div>
                </div>

                <div className="px-7 overflow-x-hidden overflow-y-auto">
                  <p>Sample</p>
                </div>

                <div className="p-7 flex justify-end items-center w-full">
                  <button
                    type="button"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-3"
                    onClick={() => setOpen(false)}
                  >
                    Ok
                  </button>
                  <button
                    type="button"
                    className="bg-transparent hover:bg-gray-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={() => setOpen(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
