import { shallow } from "enzyme";
import { useState as useStateMock } from "react";
import { useSelector as useSelectorMock } from "react-redux";
import Board from ".";
import { Room } from "../../Store/Socket/types";
import Modale from "./Modale";
import OfflineBoard from "./OfflineBoard";
import OnlineBoard from "./OnlineBoard";

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

describe("<Board /> Online", () => {
  const setState = jest.fn();

  beforeEach(() => {
    (useSelectorMock as jest.Mock).mockImplementation(() => ({
      room: mockedRoom,
    }));
    (useStateMock as jest.Mock).mockImplementation((init) => [
      false,
      setState,
    ]);
  });

  it("should render", () => {
    const wrapper = shallow(<Board />);
    expect(wrapper).toBeTruthy();
  });

  it("should render the OnlineBoard component", () => {
    const wrapper = shallow(<Board />);
    expect(wrapper.contains(<OnlineBoard />)).toEqual(true);
  });

  it("should not render the OfflineBoard component", () => {
    const wrapper = shallow(<Board />);
    expect(wrapper.contains(<OfflineBoard />)).toEqual(false);
  });

  it("should not render the Modale component", () => {
    const wrapper = shallow(<Board />);
    expect(wrapper.contains(<Modale handleClickRules={setState} />)).toEqual(false);
  });
});
