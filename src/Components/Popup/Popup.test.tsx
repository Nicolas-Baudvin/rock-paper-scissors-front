import { shallow } from "enzyme";
import { useSelector as useSelectorMock } from "react-redux";
import Popup from ".";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));

describe("<Popup />", () => {
  beforeEach(() => {
    (useSelectorMock as jest.Mock).mockImplementation(() => ({
      error: "error message",
      showError: true,
    }));
  });

  it("should render", () => {
    const wrapper = shallow(<Popup />);
    expect(wrapper).toBeTruthy();
  });

  it("should show error", () => {
    const wrapper = shallow(<Popup />);
    const errorMessage = wrapper.find("p").text();
    expect(errorMessage).toEqual(" error message "); 
  });
});
