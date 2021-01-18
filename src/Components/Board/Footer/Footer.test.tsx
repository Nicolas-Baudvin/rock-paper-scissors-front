import { shallow } from "enzyme";
import Footer from ".";

const mockHistoryPush = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe("<Footer />", () => {
  const handleClickRulesMock = jest.fn();
  it("should render", () => {
    const wrapper = shallow(<Footer handleClickRules={handleClickRulesMock} />);
    expect(wrapper).toBeTruthy();
  });

  it("should call useHistory mock with '/'", () => {
    const wrapper = shallow(<Footer handleClickRules={handleClickRulesMock} />);
    const menuButton = wrapper.find(".menu");

    menuButton.simulate("click");
    expect(mockHistoryPush).toHaveBeenCalledWith("/");
  });

  it("should call handleClickRulesMock", () => {
    const wrapper = shallow(<Footer handleClickRules={handleClickRulesMock} />);
    const rulesButton = wrapper.find(".rules");
    rulesButton.simulate("click");
    expect(handleClickRulesMock).toHaveBeenCalled();
  });
});
