import type { Meta, StoryObj } from "@storybook/react";
import Recipes from "./Recipes";

const meta = {
  title: "Pages/Recipes",
  component: Recipes,
};

export default meta;
type Story = StoryObj<typeof Recipes>;

export const Default: Story = {
  render: () => <Recipes />,
};
