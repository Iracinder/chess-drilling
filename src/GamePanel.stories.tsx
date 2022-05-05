import { GamePanel } from "./GamePanel"
import { ComponentMeta, ComponentStory } from "@storybook/react"

export default {
  title: "GamePanel",
  component: GamePanel,
} as ComponentMeta<typeof GamePanel>

const Template: ComponentStory<typeof GamePanel> = (args) => {
  return <GamePanel {...args}></GamePanel>
}

export const Default = Template.bind({})

Default.args = {
  initialTree: [
    {
      san: "e4",
      uci: "e4e5",
      fen: "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
    },
  ],
}
