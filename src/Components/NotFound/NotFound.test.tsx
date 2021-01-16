
import { shallow } from 'enzyme';
import NotFound from '.';

const mockHistoryPush = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe("<NotFound />", () => {
    const wrapper = shallow(<NotFound />);
    it("should render NotFound Component", () => {
        expect(wrapper.find(".notfound").length).toEqual(1);
    });

    it("should call the func with '/'", () => {
        const button = wrapper.find(".button");
        button.simulate("click");
        expect(mockHistoryPush).toHaveBeenCalledWith("/");
    });
});