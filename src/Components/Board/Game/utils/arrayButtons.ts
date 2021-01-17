interface ButtonsProps {
    shotType: "rock" | "paper" | "scissors";
    classname: string
}

const arrayButton: Array<ButtonsProps> = [
  {
    shotType: "rock",
    classname: "board-game-rock",
  },
  {
    shotType: "paper",
    classname: "board-game-paper",
  },
  {
    shotType: "scissors",
    classname: "board-game-scissors"
  },
];

export default arrayButton;