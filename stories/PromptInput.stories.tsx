import type { Meta, StoryObj } from "@storybook/react";
import PromptInput from "@/components/PromptInput";

const meta: Meta<typeof PromptInput> = {
  title: "Chat/PromptInput",
  component: PromptInput,
};

export default meta;
type Story = StoryObj<typeof PromptInput>;

export const Default: Story = {
  args: {
    onSubmit: (value: string) => {
      console.log("Submitted from Storybook:", value);
    },
  },
};
