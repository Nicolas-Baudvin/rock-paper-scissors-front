export interface Props {
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  username: string;
  selected: string;
}

export interface PathByGameType {
  [index: string]: string;
}

export interface ButtonProps {
    value: string,
    classname: string,
    text: string
}