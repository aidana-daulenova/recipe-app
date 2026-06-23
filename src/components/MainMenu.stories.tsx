import type { Meta, StoryObj } from "@storybook/react";
import MainMenu from "./MainMenu";

const meta = {
  title: "Components/MainMenu",
  component: MainMenu,
};

export default meta;
type Story = StoryObj<typeof MainMenu>;

export const Default: Story = {
  render: () => <MainMenu />,
};
