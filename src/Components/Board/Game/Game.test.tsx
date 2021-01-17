import { shallow } from 'enzyme';
import arrayButton from './utils/arrayButtons';
import Game from '.';

describe("<Game />", () => {
    const handleClickMock = jest.fn();
    const wrapper = shallow(<Game handleClickShotType={handleClickMock} />);
    it("should render", () => {
        expect(wrapper).toBeTruthy();
    });

    it("should call handleClick", () => {
        arrayButton.forEach((button) => {
            const gameButton = wrapper.find(`.${button.classname}`);
            gameButton.simulate("click");
            expect(handleClickMock).toHaveBeenCalledWith(button.shotType);
        });
    });
});