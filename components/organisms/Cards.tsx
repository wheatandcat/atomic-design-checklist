import SimpleCard from "@components/molecules/SimpleCard";

const Cards = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <SimpleCard size="24" imageSize={40} name="1" />
      <SimpleCard size="24" imageSize={40} name="2" />
      <SimpleCard size="24" imageSize={40} name="3" />
      <SimpleCard size="24" imageSize={40} name="4" />
      <SimpleCard size="24" imageSize={40} name="5" />
      <SimpleCard size="24" imageSize={40} name="6" />
    </div>
  );
};

export default Cards;
