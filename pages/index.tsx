import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Card from "@components/organisms/ComponentCard";
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
import Chip from "@components/atoms/Chip";
import Toggle from "@components/atoms/Toggle";
import Like from "@components/atoms/Like";
import LinkText from "@components/atoms/Link";
import ButtonGroup from "@components/molecules/ButtonGroup";
import Banners from "@components/molecules/Banners";
import Accordion from "@components/molecules/Accordion";
import CheckboxAndLabel from "@components/molecules/CheckboxAndLabel";
import RadioButtonAndLabel from "@components/molecules/RadioButtonAndLabel";
import SearchBar from "@components/molecules/SearchBar";
import Breadcrumbs from "@components/molecules/Breadcrumbs";
import Selectbox from "@components/molecules/Selectbox";
import DatePicker from "@components/molecules/DatePicker";
import TimePicker from "@components/molecules/TimePicker";
import FileUpload from "@components/molecules/FileUpload";
import Tooltip from "@components/molecules/Tooltip";
import Pagination from "@components/molecules/Pagination";
import Table from "@components/molecules/Table";
import SimpleCard from "@components/molecules/SimpleCard";
import SimpleForm from "@components/molecules/SimpleForm";
import Modal from "@components/molecules/Modal";
import ButtonAndModal from "@components/organisms/ButtonAndModal";
import ListItem from "@components/molecules/ListItem";
import Tabs from "@components/molecules/Tabs";
import LikeText from "@components/molecules/LikeText";
import CheckboxList from "@components/organisms/CheckboxList";
import DateTimePicker from "@components/organisms/DateTimePicker";
import Form from "@components/organisms/Form";
import OverflowMenu from "@components/organisms/Menu";
import TabItems from "@components/organisms/TabItems";
import Cards from "@components/organisms/Cards";
import AppBar from "@components/organisms/Appbar";
import SNS from "@components/organisms/SNS";
import SocialButtons from "@components/organisms/SocialButtons";

type Items = {
  atoms: Item[];
  molecules: Item[];
  organisms: Item[];
};

type Item = {
  component: (props: any) => JSX.Element;
  name: string;
  use?: string[];
};

const items: Items = {
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
      name: "Simple Button",
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
      name: "Input",
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
    {
      component: Chip,
      name: "Chip",
    },
    {
      component: Like,
      name: "Like",
    },
    {
      component: LinkText,
      name: "Link",
    },
  ],
  molecules: [
    {
      component: ButtonGroup,
      name: "Button Group",
      use: ["Simple Button"],
    },
    {
      component: Banners,
      name: "Banners",
      use: ["Text", "Box", "Simple Button"],
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
      name: "Search bar",
      use: ["Text Input", "Text", "Icon"],
    },
    {
      component: Breadcrumbs,
      name: "Breadcrumbs",
      use: ["Text", "Icon"],
    },
    {
      component: Selectbox,
      name: "Select box",
      use: ["Text", "Input"],
    },
    {
      component: DatePicker,
      name: "Date Picker",
      use: ["Text", "Input", "Icon"],
    },
    {
      component: TimePicker,
      name: "Time Picker",
      use: ["Text", "Input", "Icon"],
    },
    {
      component: FileUpload,
      name: "File Upload",
      use: ["Simple Button", "Input", "Icon"],
    },
    {
      component: Tooltip,
      name: "Tooltip",
      use: ["Text", "Chip"],
    },
    {
      component: Pagination,
      name: "Pagination",
      use: ["Simple Button", "Link"],
    },
    {
      component: Table,
      name: "Table",
      use: ["Text", "Box", "Divider"],
    },
    {
      component: SimpleCard,
      name: "Card",
      use: ["Text", "Box", "Image", "Divider"],
    },
    {
      component: SimpleForm,
      name: "Simple Input Form",
      use: ["Input", "Simple Button"],
    },
    {
      component: ListItem,
      name: "List Item",
      use: ["Text", "Box", "Divider"],
    },
    {
      component: Modal,
      name: "Modal",
      use: ["Text", "Box", "Divider", "Simple Button"],
    },
    {
      component: Tabs,
      name: "Tabs",
      use: ["Simple Button", "Divider"],
    },
    {
      component: LikeText,
      name: "Like & Count",
      use: ["Like", "Text"],
    },
  ],
  organisms: [
    {
      component: CheckboxList,
      name: "Checkbox List",
      use: ["Text", "Checkbox"],
    },
    {
      component: DateTimePicker,
      name: "DateTime Picker",
      use: ["Date Picker", "Time Picker"],
    },
    {
      component: Form,
      name: "Input Form",
      use: ["Box", "Input", "Simple Button", "Checkbox & Label"],
    },
    {
      component: ButtonAndModal,
      name: "Button & Modal",
      use: ["Modal", "Simple Button"],
    },
    {
      component: OverflowMenu,
      name: "Overflow Menu",
      use: ["List Item", "Simple Button", "Icon"],
    },
    {
      component: TabItems,
      name: "Tab Contents",
      use: ["Tabs", "Box", "Text"],
    },
    {
      component: Cards,
      name: "Card list",
      use: ["Card"],
    },
    {
      component: AppBar,
      name: "App bar",
      use: ["Search bar", "Text", "Simple Button"],
    },
    {
      component: SNS,
      name: "Social Button",
      use: ["Simple Button", "Icon", "Modal"],
    },
    {
      component: SocialButtons,
      name: "Social Button List",
      use: ["Social Button"],
    },
  ],
};

const searchComponents = (target: Item[], text: string) => {
  const list = text.split(",");

  const data = list.map((v1) => {
    return target.filter((v2) => v2.name.includes(v1));
  });

  const result = data.reduce((prev, current) => {
    return [...prev, ...current];
  }, []);

  return result.filter((v1, i1, a1) => {
    return (
      a1.findIndex(function (v2) {
        return v1.name === v2.name;
      }) === i1
    );
  });
};

const Index = () => {
  const [search, setSearch] = useState("");

  const atoms = searchComponents(items.atoms, search);
  const molecules = searchComponents(items.molecules, search);
  const organisms = searchComponents(items.organisms, search);

  return (
    <>
      <Head>
        <title>Atomic Design Check List</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="h-12 py-3 px-2  border border-indigo-200 flex items-center justify-end">
        <div className="mr-2">
          <Link href="https://github.com/wheatandcat/atomic-design-checklist">
            <div className="hover:bg-blue-200 rounded-full px-2 py-1 cursor-pointer">
              <Image src="/image/gitHub-mark.png" width={25} height={25} />
            </div>
          </Link>
        </div>
        <div className="flex font-bold hover:bg-blue-200 px-2 cursor-pointer">
          <Link href="/about">
            <div className="text-lg pt-0.5">about</div>
          </Link>
          <Link href="/about">
            <Image
              src="/image/keyboard_arrow_right.svg"
              className="pt-4"
              width={25}
              height={25}
            />
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-4">
        <div>
          <h1 className="title font-bold">Atomic Design Check List</h1>

          <div className="flex items-center justify-center w-full py-8">
            <div className="mx-2 pt-2 relative text-gray-600">
              <input
                className="border-2 border-gray-300 bg-white h-10 px-3 w-72 rounded-lg text-base font-bold focus:outline-none"
                type="search"
                name="search"
                placeholder="Search components"
                onChange={(e) => setSearch(e?.target?.value || "")}
                value={search}
              />
              {!search && (
                <button className="absolute left-64 top-0 mt-4">
                  <Image src="/image/search.svg" width={25} height={25} />
                </button>
              )}
            </div>
          </div>

          <h1 className="text-3xl font-bold">Atoms</h1>

          <div className="py-4 flex flex-wrap justify-center md:justify-start">
            {atoms.map((v, i) => (
              <Card
                name={v.name}
                use={[]}
                w="64"
                h="64"
                setSearch={setSearch}
                key={i}
              >
                <v.component />
              </Card>
            ))}
          </div>

          <h1 className="text-3xl font-bold pt-8">Molecule</h1>

          <div className="py-4 flex flex-wrap justify-center md:justify-start">
            {molecules.map((v, i) => (
              <Card
                name={v.name}
                use={v.use}
                w="64"
                h="64"
                setSearch={setSearch}
                key={i}
              >
                <v.component />
              </Card>
            ))}
          </div>

          <h1 className="text-3xl font-bold pt-8">Organism</h1>

          <div className="py-4 flex flex-wrap justify-center md:justify-start">
            {organisms.map((v, i) => (
              <Card
                name={v.name}
                use={v.use}
                w="96"
                h="96"
                setSearch={setSearch}
                key={i}
              >
                <v.component />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
