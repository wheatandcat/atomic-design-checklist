const CheckboxAndLabel = () => {
  return (
    <>
      <input id="one" type="checkbox" defaultChecked={true} className="mt-1" />
      <label htmlFor="one" className="pl-2">
        one
      </label>
    </>
  );
};

export default CheckboxAndLabel;
