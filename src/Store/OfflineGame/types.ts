import {
  LOADING,
  NEW_BOT_SHOT_TYPE,
  NEW_SCORE,
  NEW_SHOT,
  REPLAY_GAME,
  STOP_LOADING,
  NEW_WINNER,
} from "./actions";

export interface OfflineState {
  userShotType: string;
  winner: string | boolean;
  score: number;
  botShotType: string;
  isLoading: boolean;
}

interface NewShotAction {
  type: typeof NEW_SHOT;
  shotType: string;
}

interface NewWinnerAction {
  type: typeof NEW_WINNER;
  winner: string | boolean;
}

interface NewScore {
  type: typeof NEW_SCORE;
  score: number;
}

interface NewBotShotTypeAction {
  type: typeof NEW_BOT_SHOT_TYPE;
  shotType: string;
}

interface LoadingAction {
  type: typeof LOADING;
}

interface StopLoadingAction {
  type: typeof STOP_LOADING;
}

interface ReplayGameAction {
  type: typeof REPLAY_GAME;
}

export type OfflineAction =
  | NewShotAction
  | NewWinnerAction
  | NewScore
  | NewBotShotTypeAction
  | LoadingAction
  | StopLoadingAction
  | ReplayGameAction;
