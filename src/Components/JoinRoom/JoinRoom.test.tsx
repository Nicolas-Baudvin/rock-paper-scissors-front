import { mount, shallow } from "enzyme";
import { useState as useStateMock } from "react";
import { useSelector as useSelectorMock } from "react-redux";
import JoinRoom from ".";
import {
  connectionToSocket,
  joinRoom,
  throwSocketError,
} from "../../Store/Socket/actions";
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

const mockHistoryPush = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
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

describe("<JoinRoom /> with no connection", () => {
  const setState = jest.fn();

  beforeEach(() => {
    (useSelectorMock as jest.Mock).mockImplementation(() => ({
      currentSocket: { connected: false },
      room: null,
    }));
    (useStateMock as jest.Mock).mockImplementation((init) => ["roomName", setState]);
  });

  it("should render", () => {
    const wrapper = shallow(<JoinRoom />);
    expect(wrapper).toBeTruthy();
  });

  it("should dispatch connectionToSocket action", () => {
    mount(<JoinRoom />);
    expect(mockDispatch).toHaveBeenCalledWith(connectionToSocket());
  });

  it("should call handleChange func with correct value", () => {
    const wrapper = shallow(<JoinRoom />);
    const input = wrapper.find(".create-input");
    input.simulate("change", { target: { value: "roomName" } });
    expect(setState).toHaveBeenCalledWith("roomName");
  });

  it("should redirect to menu", () => {
    const wrapper = shallow(<JoinRoom />);
    const button = wrapper.find(".button");
    button.simulate("click");
    expect(mockHistoryPush).toHaveBeenCalledWith("/");
  });

  it("should not join the room and should send an error message", () => {
    const wrapper = shallow(<JoinRoom />);
    const form = wrapper.find("form");
    form.simulate("submit", { preventDefault: jest.fn() });
    expect(mockDispatch).toHaveBeenCalledWith(
      throwSocketError(
        "Join fail : You're not connected, refresh page or back to menu, then restart. if problem persist, call an admin"
      )
    );
  });
});

describe("<JoinRoom /> connected", () => {
  const setState = jest.fn();

  beforeEach(() => {
    (useSelectorMock as jest.Mock).mockImplementation(() => ({
      currentSocket: { connected: true },
      room: mockedRoom,
    }));
    (useStateMock as jest.Mock).mockImplementation((init) => ["roomName", setState]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render", () => {
    const wrapper = shallow(<JoinRoom />);
    expect(wrapper).toBeTruthy();
  });

  it("should dispatch connectionToSocket action", () => {
    mount(<JoinRoom />);
    expect(mockDispatch).toHaveBeenCalledWith(connectionToSocket());
  });

  it("should call handleChange func with correct value", () => {
    const wrapper = shallow(<JoinRoom />),
      input = wrapper.find(".create-input");

    input.simulate("change", { target: { value: "roomName" } });
    expect(setState).toHaveBeenCalledWith("roomName");
  });

  it("should join the room", () => {
    const wrapper = shallow(<JoinRoom />),
      input = wrapper.find("input"),
      form = wrapper.find("form");

    input.simulate("change", { target: { value: "roomName" } });
    form.simulate("submit", { preventDefault: jest.fn() });
    expect(mockDispatch).toHaveBeenCalledWith(joinRoom("roomName"));
  });
});
