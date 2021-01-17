const RadioButtonAndLabel = () => {
  return (
    <>
      <input id="one" type="radio" defaultChecked={true} className="mt-1" />
      <label htmlFor="one" className="pl-2">
        one
      </label>
    </>
  );
};

export default RadioButtonAndLabel;
