import Card from "@components/molecules/Card";
import Text from "@components/atoms/Text";
import Img from "@components/atoms/Image";
import Button from "@components/atoms/Button";
import Checkbox from "@components/atoms/Checkbox";
import RadioButton from "@components/atoms/RadioButton";
import Divider from "@components/atoms/Divider";
import TextInput from "@components/atoms/TextInput";
import Progress from "@components/atoms/Progress";
import Icon from "@components/atoms/Icon";
import Box from "@components/atoms/Box";
import Toggle from "@components/atoms/Toggle";
import ButtonGroup from "@components/molecules/ButtonGroup";
import Banners from "@components/molecules/Banners";
import Accordion from "@components/molecules/Accordion";
import CheckboxAndLabel from "@components/molecules/CheckboxAndLabel";
import RadioButtonAndLabel from "@components/molecules/RadioButtonAndLabel";
import SearchBar from "@components/molecules/SearchBar";
import Breadcrumbs from "@components/molecules/Breadcrumbs";
import CheckboxList from "@components/organisms/CheckboxList";

const items = {
  atoms: [
    {
      component: Text,
      name: "Text",
    },
    {
      component: Img,
      name: "Image",
    },
    {
      component: Button,
      name: "Button",
    },
    {
      component: Icon,
      name: "Icon",
    },
    {
      component: Checkbox,
      name: "Checkbox",
    },
    {
      component: RadioButton,
      name: "Radio Button",
    },
    {
      component: Divider,
      name: "Divider",
    },
    {
      component: TextInput,
      name: "Text Input",
    },
    {
      component: Progress,
      name: "Progress",
    },
    {
      component: Box,
      name: "Box",
    },
    {
      component: Toggle,
      name: "Toggle",
    },
  ],
  molecules: [
    {
      component: ButtonGroup,
      name: "Button Group",
      use: ["Button"],
    },
    {
      component: Banners,
      name: "Banners",
      use: ["Text", "Box", "Button"],
    },
    {
      component: Accordion,
      name: "Accordion",
      use: ["Text", "Icon", "Box"],
    },
    {
      component: CheckboxAndLabel,
      name: "Checkbox & Label",
      use: ["Text", "Checkbox"],
    },
    {
      component: RadioButtonAndLabel,
      name: "RadioButton & Label",
      use: ["Text", "RadioButton"],
    },
    {
      component: SearchBar,
      name: "Search Bar",
      use: ["Text Input", "Text", "Icon"],
    },
    {
      component: Breadcrumbs,
      name: "Breadcrumbs",
      use: ["Text", "Icon"],
    },
  ],
  organisms: [
    {
      component: CheckboxList,
      name: "Checkbox List",
      use: ["Text", "Checkbox"],
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

        <div className="py-4  flex flex-wrap">
          {items.atoms.map((v, i) => (
            <Card name={v.name} key={i}>
              <v.component />
            </Card>
          ))}
        </div>

        <h1 className="text-3xl font-bold pt-8">Molecule</h1>

        <div className="py-4 flex flex-wrap">
          {items.molecules.map((v, i) => (
            <Card name={v.name} key={i}>
              <v.component />
            </Card>
          ))}
        </div>

        <h1 className="text-3xl font-bold pt-8">Organism</h1>

        <div className="py-4 flex flex-wrap">
          {items.organisms.map((v, i) => (
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
