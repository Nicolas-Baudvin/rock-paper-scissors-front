import { shallow } from "enzyme";
import { useSelector as useSelectorMock } from "react-redux";
import OfflineHeader from "./OfflineHeader";
import OnlineHeader from "./OnlineHeader";
import { Score, User } from "./types";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));

describe("<OfflineHeader />", () => {
  const score = 0;
  beforeEach(() => {
    (useSelectorMock as jest.Mock).mockImplementation(() => ({
      score: score,
    }));
  });

  it("should render", () => {
    const wrapper = shallow(<OfflineHeader />);
    expect(wrapper).toBeTruthy();
  });

  it("should display user's score", () => {
    const wrapper = shallow(<OfflineHeader />),
      expectedScoreText = wrapper.find(".board-header-score__item--nbr").text();

    expect(parseInt(expectedScoreText, 10)).toEqual(score);
  });
});

describe("<OnlineHeader", () => {
  const mockedUsers: Array<User> = [
    { username: "playerOne" },
    { username: "playerTwo" },
  ];
  const mockedScores: Score = { playerOne: 0, playerTwo: 1 };

  it("should render", () => {
    const wrapper = shallow(
      <OnlineHeader users={mockedUsers} scores={mockedScores} />
    );
    expect(wrapper).toBeTruthy();
  });

  it("shoud display users", () => {
    const wrapper = shallow(
      <OnlineHeader users={mockedUsers} scores={mockedScores} />
    );
    const usernames = wrapper.find(".board-header-score__item--subtitle");

    usernames.forEach((userNode, i) => {
      expect(userNode.text()).toEqual(` ${mockedUsers[i].username} `);
    });
  });

  it("should display score by user", () => {
    const wrapper = shallow(
      <OnlineHeader users={mockedUsers} scores={mockedScores} />
    );
    const scores = wrapper.find(".board-header-score__item--nbr");

    scores.forEach((score, i) => {
      const parsedScore = parseInt(score.text());
      expect(parsedScore).toEqual(mockedScores[mockedUsers[i].username]);
    });
  });
});
