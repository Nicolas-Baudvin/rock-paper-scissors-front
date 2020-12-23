import { shallow } from 'enzyme';
import App from '.';

describe("App", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(".App").length).toEqual(1);
});
