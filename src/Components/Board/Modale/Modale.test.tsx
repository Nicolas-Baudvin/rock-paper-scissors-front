import { shallow } from "enzyme";
import Modale from ".";

describe("<Modale />", () => {
  const handleClickRulesMock = jest.fn();
  const wrapper = shallow(<Modale handleClickRules={handleClickRulesMock} />);
  it("should render", () => {
    expect(wrapper).toBeTruthy();
  });

  it("should call handleClickRulesMock on Click", () => {
    const closeButton = wrapper.find(".modale-close");
    closeButton.simulate("click");
    expect(handleClickRulesMock).toHaveBeenCalled();
  });
});
