// import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from "@storybook/test";
// import { Button } from "../../src/lib/components/react";

// // More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
// const meta = {
//   title: "Example/Button",
//   component: Button,
//   parameters: {
//     // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
//     layout: "padded",
//   },
//   // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
//   tags: ["autodocs"],
//   // More on argTypes: https://storybook.js.org/docs/api/argtypes
//   argTypes: {
//     variant: {
//       options: [
//         "default",
//         "secondary",
//         "ghost",
//         "accent",
//         "link",
//         "link-inverted",
//       ],
//       control: { type: "radio" },
//     },
//     size: {
//       options: ["default", "sm", "icon"],
//       control: { type: "radio" },
//     },
//     rounded: {
//       options: ["default", "md", "lg"],
//       control: { type: "radio" },
//     },
//     width: {
//       options: ["default", "full"],
//       control: { type: "radio" },
//     },
//     disabled: {
//       control: { type: "boolean" },
//     },
//   },
//   // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
//   args: { onClick: fn() },
// } satisfies Meta<typeof Button>;

// export default meta;
// type Story = StoryObj<typeof meta>;

// // More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
// export const Primary: Story = {
//   args: {
//     variant: "default",
//     size: "default",
//     rounded: "default",
//     width: "default",
//     disabled: false,
//     children: "Primary Button",
//   },
// };

// export const Secondary: Story = {
//   args: {
//     variant: "secondary",
//     children: "Secondary Button",
//   },
// };

// export const Ghost: Story = {
//   args: {
//     variant: "ghost",
//     children: "Ghost Button",
//   },
// };

// export const Accent: Story = {
//   args: {
//     variant: "accent",
//     children: "Accent Button",
//   },
// };

// export const Link: Story = {
//   args: {
//     variant: "link",
//     children: "Link Button",
//   },
// };

// export const LinkInverted: Story = {
//   args: {
//     variant: "link-inverted",
//     children: "Link Inverted Button",
//   },
// }