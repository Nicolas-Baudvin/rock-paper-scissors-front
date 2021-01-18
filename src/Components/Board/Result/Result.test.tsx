import { mount, shallow } from "enzyme";
import { useSelector as useSelectorMock } from "react-redux";
import Result from ".";
import { newShot } from "../../../Store/OfflineGame/actions";
import { RootState } from "../../../Store/reducer";
import BotPick from "./BotPick";
import Final from "./Final";
import UserPick from "./userPick";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

describe("<Result />", () => {
  let userShotType = "rock";
  const handleClickResetMock = jest.fn();

  beforeEach(() => {
    (useSelectorMock as jest.Mock).mockImplementation(() => ({
      botShotType: "paper",
      isLoading: false,
    }));
  });

  it("should render", () => {
    const wrapper = mount(
      <Result
        userShotType={userShotType}
        handleClickReset={handleClickResetMock}
      />
    );
    expect(wrapper).toBeTruthy();
  });

  it("should dispatch the new shot", () => {
    mount(
      <Result
        userShotType={userShotType}
        handleClickReset={handleClickResetMock}
      />
    );
    expect(mockDispatch).toHaveBeenCalledWith(newShot(userShotType));
  });

  it("should render the final result when loading is falsy", () => {
    const wrapper = mount(
      <Result
        userShotType={userShotType}
        handleClickReset={handleClickResetMock}
      />
    );

    expect(wrapper.find(Result).length).toBeTruthy();
  });

  it("should have the right shotType value", () => {
    mount(
      <Result
        userShotType={userShotType}
        handleClickReset={handleClickResetMock}
      />
    );
    const { botShotType: shotType, isLoading } = useSelectorMock(
      (state: RootState) => state.offline
    );
    expect(shotType).toEqual("paper");
    expect(isLoading).toEqual(false);
  });
});

describe("<Final />", () => {
  const handleClickResetMock = jest.fn();

  beforeEach(() => {
    (useSelectorMock as jest.Mock).mockImplementation(() => ({
      winner: "equal",
    }));
  });

  it("should call handleClickReset func", () => {
    const wrapper = mount(<Final handleClickReset={handleClickResetMock} />);
    const replayButton = wrapper.find(".board-result-final-restart");
    replayButton.simulate("click");
    expect(handleClickResetMock).toHaveBeenCalled();
  });

  it("should have the correct winner", () => {
    mount(<Final handleClickReset={handleClickResetMock} />);
    (useSelectorMock as jest.Mock).mockImplementation(() => ({
      winner: "equal",
    }));
    const { winner } = useSelectorMock((state: RootState) => state.offline);
    expect(winner).toEqual("equal");
  });

  it("should render the equality text", () => {
    (useSelectorMock as jest.Mock).mockImplementation(() => ({
      winner: "equal",
    }));
    const wrapper = mount(<Final handleClickReset={handleClickResetMock} />);
    const winnerText = wrapper.find(".board-result-final-winner").text();
    expect(winnerText).toEqual("Equality");
  });

  it("should render the win text", () => {
    (useSelectorMock as jest.Mock).mockImplementation(() => ({
      winner: true,
    }));
    const wrapper = mount(<Final handleClickReset={handleClickResetMock} />);
    const winnerText = wrapper.find(".board-result-final-winner").text();
    expect(winnerText).toEqual("You win !");
  });

  it("should render the loose text", () => {
    (useSelectorMock as jest.Mock).mockImplementation(() => ({
      winner: false,
    }));
    const wrapper = mount(<Final handleClickReset={handleClickResetMock} />);
    const winnerText = wrapper.find(".board-result-final-winner").text();
    expect(winnerText).toEqual("You loose");
  });
});

describe("<BotPick />", () => {
  let botShotType = "paper";
  beforeEach(() => {
    (useSelectorMock as jest.Mock).mockImplementation(() => ({
      isLoading: false,
    }));
  });

  it("should render", () => {
    const wrapper = shallow(<BotPick botShotType={botShotType} />);
    expect(wrapper).toBeTruthy();
  });

  it("should display loading message", () => {
    (useSelectorMock as jest.Mock).mockImplementation(() => ({
      isLoading: true,
    }));
    const wrapper = shallow(<BotPick botShotType={botShotType} />);
    const loadingText = wrapper.find(".board-result-botpicked-loading");
    expect(loadingText.text()).toEqual("Waiting for bot ...");
  });
});
