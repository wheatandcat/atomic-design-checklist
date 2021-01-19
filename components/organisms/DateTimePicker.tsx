import DatePicker from "@components/molecules/DatePicker";
import TimePicker from "@components/molecules/TimePicker";

const DateTimePicker = () => {
  return (
    <div className="flex w-68">
      <DatePicker />
      <TimePicker />
    </div>
  );
};

export default DateTimePicker;
