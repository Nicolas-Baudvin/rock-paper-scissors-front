export const NEW_SHOT = "offline/NEW_SHOT";
export const NEW_WINNER = "offline/NEW_WINNER";
export const INCREMENT_SCORE = "offline/INCREMENT_SCORE";

export const newShot = (shotType) => ({
    type: NEW_SHOT,
    shotType
});

export const newWinner = (winner) => ({
    type: NEW_WINNER,
    winner
});

export const incrementScore = (increment) => ({
    type: INCREMENT_SCORE,
    increment
});