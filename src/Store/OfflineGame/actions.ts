import { OfflineAction } from "./types";

export const NEW_SHOT = "offline/NEW_SHOT";
export const NEW_WINNER = "offline/NEW_WINNER";
export const NEW_SCORE = "offline/NEW_SCORE";
export const NEW_BOT_SHOT_TYPE = "offline/NEW_BOT_SHOT_TYPE";
export const LOADING = "offline/LOADING";
export const STOP_LOADING = "offline/STOP_LOADING";
export const REPLAY_GAME = "offline/REPLAY_GAME";

export const replayGame = (): OfflineAction => ({
  type: REPLAY_GAME,
});

export const loading = (): OfflineAction => ({
  type: LOADING,
});

export const stopLoading = (): OfflineAction => ({
  type: STOP_LOADING,
});

export const newShot = (shotType: string): OfflineAction => ({
  type: NEW_SHOT,
  shotType,
});

export const newBotShotType = (shotType: string): OfflineAction => ({
  type: NEW_BOT_SHOT_TYPE,
  shotType,
});

export const newWinner = (winner: string | boolean): OfflineAction => ({
  type: NEW_WINNER,
  winner,
});

export const newScore = (score: number): OfflineAction => ({
  type: NEW_SCORE,
  score,
});
