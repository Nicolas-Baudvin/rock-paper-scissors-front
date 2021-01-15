interface FriendShot {
    [index: string]: "equal" | boolean
}

interface WinRulesObject {
    [index: string]: FriendShot
}

const winRulesObject: WinRulesObject = {
    rock: {
        paper: false,
        rock: "equal",
        scissors: true
    },
    paper: {
        paper: "equal",
        rock: true,
        scissors: false
    },
    scissors: {
        paper: true,
        rock: false,
        scissors: "equal"
    }
};

export default winRulesObject;