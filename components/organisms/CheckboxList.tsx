const CheckboxList = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <input
          id="one"
          type="checkbox"
          defaultChecked={true}
          className="mt-1"
        />
        <label htmlFor="one" className="pl-2">
          one
        </label>
      </div>
      <div className="flex items-center">
        <input
          id="two"
          type="checkbox"
          defaultChecked={false}
          className="mt-1"
        />
        <label htmlFor="two" className="pl-2">
          two
        </label>
      </div>
      <div className="flex items-center">
        <input
          id="three"
          type="checkbox"
          defaultChecked={false}
          className="mt-1"
        />
        <label htmlFor="three" className="pl-2">
          three
        </label>
      </div>
    </div>
  );
};

export default CheckboxList;
