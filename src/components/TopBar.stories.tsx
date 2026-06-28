import type { Meta, StoryObj } from "@storybook/react";
import TopBar from "./TopBar";

const meta: Meta<typeof TopBar> = {
  title: "Components/TopBar",
  component: TopBar,
};

export default meta;
type Story = StoryObj<typeof TopBar>;

export const LoggedOut: Story = {
  render: () => <TopBar user={null} />,
};

export const LoggedIn: Story = {
  render: () => (
    <TopBar
      user={{ name: "Anna", email: "anna@mail.com" }}
      onLogout={() => console.log("logout")}
    />
  ),
};
