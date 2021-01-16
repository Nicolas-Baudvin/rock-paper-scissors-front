import { shallow } from "enzyme";
import OnlineGame from ".";

describe("<OnlineGame />", () => {
    const wrapper = shallow(<OnlineGame />);

    it("should render", () => {
        expect(wrapper).toBeTruthy();
    });
});