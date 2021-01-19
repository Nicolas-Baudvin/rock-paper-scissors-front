import { mount, shallow } from "enzyme";
import { useState as useStateMock } from "react";
import { useSelector as useSelectorMock } from "react-redux";
import Board from ".";
import { replayGame } from "../../Store/OfflineGame/actions";
import { RootState } from "../../Store/reducer";
import { playAgain, sendShotType } from "../../Store/Socket/actions";
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
  shots: [
    { username: "playerTwo", shotType: "rock" },
    { username: "playerOne", shotType: "rock" },
  ],
  users: [{ username: "test", socketID: "test" }],
  winner: "",
};

describe("<Board /> Online", () => {
  const setState = jest.fn();

  beforeEach(() => {
    localStorage.setItem("user", "playerOne");
    (useSelectorMock as jest.Mock).mockImplementation(() => ({
      room: mockedRoom,
      winner: "equal",
    }));
    (useStateMock as jest.Mock).mockImplementation((init) => [false, setState]);
  });

  /**
   * <OnlineBoard />
   */
  it("should render <OnlineBoard />", () => {
    const wrapper = mount(<OnlineBoard />);
    expect(wrapper).toBeTruthy();
  });

  it("should call dispatch", () => {
    (useStateMock as jest.Mock).mockImplementation((init) => [
      "rock",
      setState,
    ]);
    mount(<OnlineBoard />);
    expect(mockDispatch).toHaveBeenCalledWith(sendShotType("rock"));
  });

  it("should dispatch replay action", () => {
    (useStateMock as jest.Mock).mockImplementation((init) => [
      "rock",
      setState,
    ]);
    const wrapper = mount(<OnlineBoard />);
    const resetButton = wrapper.find(".board-result-final-restart");
    resetButton.simulate("click");
    expect(mockDispatch).toHaveBeenCalledWith(playAgain());
  });

  it("should call setState with friendShot", () => {
    mount(<OnlineBoard />);
    expect(setState).toHaveBeenCalledWith({
      username: "playerTwo",
      shotType: "rock",
    });
  });

  it("should have 2 as length", () => {
    const { room } = useSelectorMock((state: RootState) => state.socket);
    expect(room?.shots).toHaveLength(2);
  });
  /**
   * <Board />
   */
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
    expect(wrapper.find(Modale).length).toBeFalsy();
  });
});

describe("<Board /> Offline", () => {
  const setState = jest.fn();

  beforeEach(() => {
    (useSelectorMock as jest.Mock).mockImplementation(() => ({
      room: null,
    }));
    (useStateMock as jest.Mock).mockImplementation((init) => [true, setState]);
  });

  /**
   *  <OfflineBoard />
   */

  it("should render the OfflineBoard", () => {
    const wrapper = mount(<OfflineBoard />);
    expect(wrapper).toBeTruthy();
  });

  it("should dispatch replay game", () => {
    (useStateMock as jest.Mock).mockImplementation((init) => [
      "rock",
      setState,
    ]);
    const wrapper = mount(<OfflineBoard />);
    const resetButton = wrapper.find(".board-result-final-restart");
    resetButton.simulate("click");
    expect(mockDispatch).toHaveBeenCalledWith(replayGame());
  });

  /**
   * <Board />
   */
  it("should render", () => {
    const wrapper = shallow(<Board />);
    expect(wrapper).toBeTruthy();
  });

  it("should render the Offline component", () => {
    const wrapper = shallow(<Board />);
    expect(wrapper.contains(<OfflineBoard />)).toEqual(true);
  });

  it("should not render the OfflineBoard component", () => {
    const wrapper = shallow(<Board />);
    expect(wrapper.contains(<OnlineBoard />)).toEqual(false);
  });

  it("should render the Modale component", () => {
    const wrapper = shallow(<Board />);
    expect(wrapper.find(Modale).length).toBeTruthy();
  });
});
