import { shallow } from "enzyme";
import Buttons from ".";
import { buttons, URLNameByGameType } from "./utils";

const mockHistoryPush = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe("<NotFound />", () => {
  const wrapper = shallow(
    <Buttons setSelected={jest.fn()} username="test" selected="" />
  );

  it("should render Buttons Component", () => {
    expect(wrapper.find("button").length).toEqual(3);
  });

  it("should call the func with appropriate url slug", () => {
    const RedirectButtons = wrapper.find("button");
    RedirectButtons.forEach((button, index) => {
      button.simulate("click");
      const slugExpected = URLNameByGameType[buttons[index].value];
      expect(mockHistoryPush).toHaveBeenCalledWith(slugExpected);
    });
  });
});
