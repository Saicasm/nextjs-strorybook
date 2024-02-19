import Button from "../components/Button/Button";
import type { Meta, StoryObj } from "@storybook/react";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  //   argTypes: {
  //     backgroundColor: { control: "color" },

  //     title
  //     description,
  //     imageUrl,
  //     className,
  //   },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Button",
  },
};
export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Button",
  },
};
