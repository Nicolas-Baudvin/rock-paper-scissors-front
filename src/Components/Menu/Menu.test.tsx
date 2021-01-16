import { mount, shallow } from "enzyme";
import Menu from ".";
import { logOut } from "../../Store/Socket/actions";
import { useState as useStateMock } from 'react';

const mockHistoryPush = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("<Menu />", () => {
  const setState = jest.fn();

  beforeEach(() => {
    (useStateMock as jest.Mock).mockImplementation((init) => [init, setState]);
  });

  it("renders", () => {
    const wrapper = shallow(<Menu />);
    expect(wrapper.find(".menu").length).toEqual(1);
  });

  it("should call dispatch with logOut action", () => {
    mount(<Menu />);
    expect(mockDispatch).toHaveBeenCalledWith(logOut());
  });

  it("should call onChange with correct value", () => {
    const wrapper = shallow(<Menu />);
    const input = wrapper.find("input");
    input.simulate("change", { target: { value: "test" } });
    expect(setState).toHaveBeenCalledWith("test");
  });
});
