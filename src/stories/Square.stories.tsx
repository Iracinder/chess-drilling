import React from "react"

import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Square } from "../Square"

export default {
  title: "Board/Square",
  component: Square,
  argTypes: {
    selected: {"control" : "boolean", "defaultValue": false},
    targeted: {"control" : "boolean", "defaultValue": false},
  }
} as ComponentMeta<typeof Square>

const Template: ComponentStory<typeof Square> = (args) => <Square {...args} />

export const Piece = Template.bind({})

Piece.args = {
  background: "light",
  pieceSymbol: 'Q',
}

export const Empty = Template.bind({})

Empty.args = {
  background: "dark",
}
