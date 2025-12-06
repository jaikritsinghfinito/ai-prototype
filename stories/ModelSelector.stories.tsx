import type { Meta, StoryObj } from "@storybook/react";
import ModelSelector from "@/components/ModelSelector";

const meta: Meta<typeof ModelSelector> = {
  title: "Sidebar/ModelSelector",
  component: ModelSelector,
};

export default meta;
type Story = StoryObj<typeof ModelSelector>;

export const Light: Story = {
  args: { isDark: false },
};

export const Dark: Story = {
  args: { isDark: true },
};
