import { shallow } from "enzyme";
import { useState as useStateMock } from "react";
import { useSelector as useSelectorMock } from "react-redux";
import Board from ".";
import { Room } from "../../Store/Socket/types";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

const mockedRoom: Room = {
  name: "room",
  owner: { username: "test", socketID: "test" },
  messages: [],
  scores: {},
  shots: [],
  users: [{ username: "test", socketID: "test" }],
  winner: "",
};

describe("<Board />", () => {
  const setState = jest.fn();

  beforeEach(() => {
    (useSelectorMock as jest.Mock).mockImplementation(() => ({
      room: mockedRoom,
    }));
    (useStateMock as jest.Mock).mockImplementation((init) => [
      "roomName",
      setState,
    ]);
  });

  it("should render", () => {
    const wrapper = shallow(<Board />);
    expect(wrapper).toBeTruthy();
  });
});
