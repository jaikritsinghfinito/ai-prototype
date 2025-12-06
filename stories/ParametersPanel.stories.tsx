import type { Meta, StoryObj } from "@storybook/react";
import ParametersPanel from "@/components/ParametersPanel";

const meta: Meta<typeof ParametersPanel> = {
  title: "Controls/ParametersPanel",
  component: ParametersPanel,
};

export default meta;
type Story = StoryObj<typeof ParametersPanel>;

export const Light: Story = {
  args: { isDark: false },
};

export const Dark: Story = {
  args: { isDark: true },
};
