const Form = () => {
  return (
    <div className="w-80 h-48 px-3 pt-5 box-border border-2 hover:shadow-lg rounded-md">
      <div>
        <input
          className="border border-blue-400 appearance-none rounded  p-1 focus focus:border-blue-600 focus:outline-none active:outline-none active:border-blue-600 mb-2"
          id="text"
          type="text"
          placeholder="email"
        />
      </div>
      <div>
        <input
          className="border border-blue-400 appearance-none rounded  p-1 focus focus:border-blue-600 focus:outline-none active:outline-none active:border-blue-600 mb-2"
          id="text"
          type="password"
          placeholder="password"
        />
      </div>
      <div>
        <input
          id="one"
          type="checkbox"
          defaultChecked={false}
          className="mt-1"
        />
        <label htmlFor="one" className="pl-2">
          I agree to the Terms
        </label>
      </div>

      <div className="py-2">
        <button className="bg-blue-500 hover:bg-blue-700 rounded text-white py-1 px-4 h-8">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form;
