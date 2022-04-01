import React from "react"

import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Board } from "../board"

export default {
  title: "Board",
  component: Board,
  /*
  argTypes: {
    selected: {"control" : "boolean", "defaultValue": false},
    targeted: {"control" : "boolean", "defaultValue": false},
  }*/
} as ComponentMeta<typeof Board>

const Template: ComponentStory<typeof Board> = (args) => <Board {...args}/>

export const Empty = Template.bind({})

Empty.args = {
  fen: "1r1q2k1/1bp5/p2p4/1p2pP2/4P3/2NPn3/PPP3PP/R5K1 w - - 0 23",
}