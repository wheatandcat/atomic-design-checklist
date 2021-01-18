import DatePicker from "@components/molecules/DatePicker";
import TimePicker from "@components/molecules/TimePicker";

const DateTimePicker = () => {
  return (
    <div className="flex w-60">
      <DatePicker />
      <TimePicker />
    </div>
  );
};

export default DateTimePicker;
