import { ButtonProps, PathByGameType } from "../../types";

export const buttons: Array<ButtonProps> = [
  {
    value: "IA",
    classname: "selected-red",
    text: "Play against AI",
  },
  {
    value: "Create",
    classname: "selected-blue",
    text: "Create a room",
  },
  {
    value: "Join",
    classname: "selected-yellow",
    text: "Join a room",
  },
];

export const URLNameByGameType: PathByGameType = {
  IA: "/game/vsIA",
  Create: "/game/create/",
  Join: "/game/join/",
};
