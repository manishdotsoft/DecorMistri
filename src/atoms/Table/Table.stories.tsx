import { theme } from "../../thems/primitives/theme";
import Table from "./Table";

export default {
  title: "atoms/Table",
  component: Table,
  tags: ["autodocs"],

  argTypes: {
    data: { control: "object" },
    rowBackgroundColor: { control: "color" },
    headerBackgroundColor: { control: "color" },
    headerTextColor: { control: "color" },
    borderColor: { control: "color" },
  },
};

export const DefaultTable = {
  args: {
    data: [
      {
        name: "Abhishek Kumar",
        service: "Interior Decor",
        phone: "123-456-7890",
        email: "abidecor@gmail.com",
        address: "noida, Uttar Pradesh, India ,pin-225001",
      },
      {
        name: "Manish Kumar",
        service: "Home Styling",
        phone: "987-654-3210",
        email: "manish.decor@gmail.com",
        address: "utter Pradesh, India ,pin-221001",
      },
      {
        name: "Bikram Debnath",
        service: "Wall Painting",
        phone: "555-123-4567",
        email: "bikram@gmail.com",
        address: "west bengal, India ,pin-713513",
      },
      {
        name: "Gupi Debnath",
        service: "Furniture Setup",
        phone: "1111-1111-11",
        email: "iamgupidebnath@gmail.com",
        address: "west bengal, India ,pin-713513",
      },
    ],
    rowBackgroundColor: theme.palette.background.paper,

    // headerTextColor: theme.palette.primary.dark,
    borderColor: theme.palette.secondary.light,
  },
};

export const CustomTable = {
  args: {
    data: [
      {
        name: "Gupi Debnath",
        service: "Lighting Setup",
        phone: "987-654-3210",
        email: "iamgupidebnath.@gmail.com",
        address: "west bengal, India ,pin-713513",
      },
      {
        name: "bikram Debnath",
        service: "Curtain Installation",
        phone: "555-987-6543",
        email: "bik@gmail.com",
        address: "west bengal, India ,pin-713513",
      },
    ],
    rowBackgroundColor: theme.palette.background.paper,

    // headerTextColor: theme.palette.primary.dark,
    borderColor: theme.palette.secondary.light,
  },
};

export const EmptyTable = {
  args: {
    data: [],
    rowBackgroundColor: theme.palette.background.default,

    // headerTextColor: theme.palette.secondary.dark,
    borderColor: theme.palette.secondary.light,
  },
};
