import type { Meta, StoryObj } from "@storybook/react";
import Navbar from "@/components/Navbar";

const meta: Meta<typeof Navbar> = {
  title: "Layout/Navbar",
  component: Navbar,
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
  args: {
    theme: "light",
    onToggleTheme: () => {},
  },
};

export const Dark: Story = {
  args: {
    theme: "dark",
    onToggleTheme: () => {},
  },
};
