const DatePicker = () => {
  return (
    <input
      className="border-gray-300 border-2 rounded w-30 h-8 pl-2"
      type="date"
      value="2020-01-01"
      min="2020-01-01"
      max="2021-12-31"
    />
  );
};

export default DatePicker;
