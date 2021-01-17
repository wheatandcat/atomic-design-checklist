import Card from "@components/molecules/Card";
import Button from "@components/atoms/Button";

const items = {
  atoms: [
    {
      component: Button,
      name: "Button",
    },
    {
      component: Button,
      name: "Button",
    },
  ],
};

const Index = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="hero">
        <h1 className="title">Atomic Design Check List</h1>
        <p className="text-center text-teal-500 text-2xl py-4">
          This is an Example.
        </p>

        <h1 className="text-3xl font-bold">Atoms</h1>

        <div className="pt-10  flex flex-wrap">
          {items.atoms.map((v, i) => (
            <Card name={v.name} key={i}>
              <v.component />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
