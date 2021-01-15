import { Room } from "../Store/Socket/types";

const getRoomFromLocalStorage = (key: string) => {
  const stringifyRoom: string = localStorage.getItem(key) || "";

  if (!stringifyRoom) {
    return null;
  }
  const room: Room | undefined | null = JSON.parse(stringifyRoom);
  if (!room) {
    return null;
  }
  return room;
};

export default getRoomFromLocalStorage;
