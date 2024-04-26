import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "padded",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      options: ["primary", "secondary", "secondary-2", "tertiary", "link"],
      control: { type: "radio" },
    },
    size: {
      options: ["default", "sm"],
      control: { type: "radio" },
    },
    rounded: {
      options: ["default", "sm"],
      control: { type: "radio" },
    },
    width: {
      options: ["default", "full"],
      control: { type: "radio" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    mode: {
      options: ["light", "dark"],
      control: { type: "radio" },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "primary",
    size: "default",
    rounded: "full",
    width: "default",
    mode: "light",
    disabled: false,
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

export const Secondary2: Story = {
  args: {
    variant: "secondary-2",
    children: "Secondary-2 Button",
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    children: "Tertiery Button",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Link Button",
  },
};

export const PrimaryDark: Story = {
  args: {
    variant: "primary",
    mode: "dark",
    children: "Primary on Dark",
  },
};

export const SecondaryOnDark: Story = {
  args: {
    variant: "secondary",
    mode: "dark",
    children: "Secondary on Dark",
  },
};

export const Secondary2OnDark: Story = {
  args: {
    variant: "secondary-2",
    mode: "dark",
    children: "Secondary on Dark",
  },
};

export const TertiaryOnDark: Story = {
  args: {
    variant: "tertiary",
    mode: "dark",
    children: "Tertiary on Dark",
  },
};

export const LinkOnDark: Story = {
  args: {
    variant: "link",
    mode: "dark",
    children: "Link on Dark",
  },
};
