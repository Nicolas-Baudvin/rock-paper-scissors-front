import { Room } from "../Store/Socket/types";
import getRoomFromLocalStorage from "./getRoomFromLocalStorage";

const fakeRoom: Room = {
  owner: { username: "PlayerOne", socketID: "test" },
  name: "roomName",
  shots: [],
  users: [{ username: "PlayerOne", socketID: "test" }],
  messages: [],
  scores: { PlayerOne: 0 },
  winner: "",
};

describe("get room from localstorage", () => {
  beforeEach(() => {
    localStorage.setItem("room", JSON.stringify(fakeRoom));
  });

  afterEach(() => {
    localStorage.clear();
  });

  it("should return room", () => {
    expect(getRoomFromLocalStorage("room")).toEqual(fakeRoom);
  });

  it("should return null", () => {
      expect(getRoomFromLocalStorage("fail")).toEqual(null);
  });

  it("should return null whith no room in localStorage", () => {
    localStorage.setItem("room", "");
    expect(getRoomFromLocalStorage("room")).toEqual(null);
  })
});
