import { mount } from "enzyme";
import { useSelector as useSelectorMock } from "react-redux";
import OnlineResult from ".";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

describe("<OnlineResult />", () => {
  const handleClickResetMocked = jest.fn();
  let userShotType = "rock";
  let friendShotType = { username: "playerTwo", shotType: "paper" };
  const Component = () => (
    <OnlineResult
      handleClickReset={handleClickResetMocked}
      userShotType={userShotType}
      friendShotType={friendShotType}
    />
  );

  beforeEach(() => {
    (useSelectorMock as jest.Mock).mockImplementation(() => ({
      winner: "equal",
    }));
  });

  it("should render", () => {
    const wrapper = mount(<Component />);
    expect(wrapper).toBeTruthy();
  });

  it("should call handleclickResetMock", () => {
    const wrapper = mount(<Component />);
    const replayButton = wrapper.find(".board-result-final-restart");
    replayButton.simulate("click");
    expect(handleClickResetMocked).toHaveBeenCalled();
  });

  it("should display the appropriate image for user pick", () => {
    const wrapper = mount(<Component />);
    const imgSrc = wrapper.find(".board-result-picked-img").props().src;
    expect(imgSrc).toEqual(
      `${process.env.PUBLIC_URL}/img/icon-${userShotType}.svg`
    );
  });

  it("should display the appropriate image for friend pick", () => {
    const wrapper = mount(<Component />);
    const imgSrc = wrapper.find(".board-result-botpicked-img").props().src;
    expect(imgSrc).toEqual(
      `${process.env.PUBLIC_URL}/img/icon-${friendShotType.shotType}.svg`
    );
  });

  it("should display a loading message if friend hasn't pick yet", () => {
    const wrapper = mount(
      <OnlineResult
        handleClickReset={handleClickResetMocked}
        userShotType={userShotType}
        friendShotType={undefined}
      />
    );
    const loadingMessage = wrapper
      .find(".board-result-botpicked-loading")
      .text();
    expect(loadingMessage).toBeTruthy();
  });

  it("should display equality at the final result", () => {
    const wrapper = mount(<Component />);
    const winnerText = wrapper.find(".board-result-final-text").text();
    expect(winnerText).toEqual("Equality !");
  });

  it("should display 'Winner is playerOne' at the final result", () => {
    (useSelectorMock as jest.Mock).mockImplementation(() => ({
      winner: "playerOne",
    }));
    const wrapper = mount(<Component />);
    const winnerText = wrapper.find(".board-result-final-text").text();
    expect(winnerText).toEqual("Winner is playerOne");
  });

  it("should display 'Winner is playerTwo' at the final result", () => {
      (useSelectorMock as jest.Mock).mockImplementation(() => ({
        winner: "playerTwo",
      }));
    const wrapper = mount(<Component />);
    const winnerText = wrapper.find(".board-result-final-text").text();
    expect(winnerText).toEqual("Winner is playerTwo");
  });
});
