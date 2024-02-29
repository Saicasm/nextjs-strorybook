import Card from "../components/Card/Card";
import type { Meta, StoryObj } from "@storybook/react";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;
export const VariantOne: Story = {
  args: {
    title: "Cat Card Title",
    description: "Cat Card Description",
    imageUrl:
      "https://as2.ftcdn.net/v2/jpg/04/91/61/71/1000_F_491617156_xYzmSVi3eTvOjGR7gVBCF2vvNf24AmGS.jpg",
  },
};

export const VariantTwo: Story = {
  args: {
    title: "Dog Card ",
    description: "Dog Card Description xD",
    imageUrl:
      "https://as2.ftcdn.net/v2/jpg/05/08/37/21/1000_F_508372195_H9K3KIdsqlVMDgPd0ENTa8TUXuq9L9jF.jpg",
  },
};
