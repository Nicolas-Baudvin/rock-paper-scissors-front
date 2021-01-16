import { mount, shallow } from "enzyme";
import { useState as useStateMock } from "react";
import { useSelector as useSelectorMock } from "react-redux";
import CreateRoom from ".";
import {
  connectionToSocket,
  createNewRoom,
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

describe("<CreateRoom /> no connected", () => {
  const setState = jest.fn();

  beforeEach(() => {
    (useSelectorMock as jest.Mock).mockImplementation(() => ({
      currentSocket: { connected: false },
      room: null,
    }));
    (useStateMock as jest.Mock).mockImplementation((init) => [init, setState]);
  });

  it("should render", () => {
    const wrapper = shallow(<CreateRoom />);
    expect(wrapper).toBeTruthy();
  });

  it("should dispatch connectionToSocket action", () => {
    mount(<CreateRoom />);
    expect(mockDispatch).toHaveBeenCalledWith(connectionToSocket());
  });

  it("should call handleChange func with correct value", () => {
    const wrapper = shallow(<CreateRoom />);
    const input = wrapper.find(".create-input");
    input.simulate("change", { target: { value: "roomName" } });
    expect(setState).toHaveBeenCalledWith("roomName");
  });

  it("should redirect to menu", () => {
    const wrapper = shallow(<CreateRoom />);
    const button = wrapper.find(".button");
    button.simulate("click");
    expect(mockHistoryPush).toHaveBeenCalledWith("/");
  });

  it("should not create the room and should send an error message", () => {
    const wrapper = shallow(<CreateRoom />);
    const form = wrapper.find("form");
    form.simulate("submit", { preventDefault: jest.fn() });
    expect(mockDispatch).toHaveBeenCalledWith(
      throwSocketError(
        "Create fail : You're not connected, refresh page or back to menu, then restart. if problem persist, call an admin"
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
    (useStateMock as jest.Mock).mockImplementation(() => [
      "roomName",
      setState,
    ]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render", () => {
    const wrapper = shallow(<CreateRoom />);
    expect(wrapper).toBeTruthy();
  });

  it("should dispatch connectionToSocket action", () => {
    mount(<CreateRoom />);
    expect(mockDispatch).toHaveBeenCalledWith(connectionToSocket());
  });

  it("should call handleChange func with correct value", () => {
    const wrapper = shallow(<CreateRoom />),
      input = wrapper.find(".create-input");

    input.simulate("change", { target: { value: "roomName" } });
    expect(setState).toHaveBeenCalledWith("roomName");
  });

  it("should redirect to menu", () => {
    const wrapper = shallow(<CreateRoom />),
      button = wrapper.find(".button");

    button.simulate("click");
    expect(mockHistoryPush).toHaveBeenCalledWith("/");
  });

  it("should create a room", () => {
    const wrapper = shallow(<CreateRoom />),
      form = wrapper.find("form");

    form.simulate("submit", { preventDefault: jest.fn() });
    expect(mockDispatch).toHaveBeenCalledWith(createNewRoom("roomName"));
  });
});
