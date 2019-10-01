
const MAIN_LEVEL_ID = 1;

const PRIMARY_LEVEL_INDEX = 0; // The first level on a node is the primary level

const standardHorizontalGap = 25;
const standardVerticalGap = 50;


function getMatchingLevels(node, levels) {
    return levels.filter(level => Node.onLevel(node, level.levelId));
}

function getLevelIds(node) {
    return node.levels.map(level => level.levelId);
}

function hasLevels(node) {
    return node != null && node.levels != null && node.levels.length > 0;
}

function getLevelIndex(node, levelId) {
    let levelIndex = -1;
    if (levelId != null) {
        levelIndex = node.levels.findIndex(level => level.levelId === levelId);
    }
    return levelIndex;
}

function getLevelCount(node) {
    return node.levels.length;
}

function getLevel(node, levelId) {
    const levelIndex = getLevelIndex(node, levelId);
    if (levelIndex >= 0) {
        return node.levels[levelIndex];
    }
    return null;
}

function onLevel(node, levelId) {
    return getLevelIndex(node, levelId) >= 0;
}

function isLevelPortal(node) {
    return node.levels.length > 1;
}

function getPosition(node, levelId) {
    const level = getLevel(node, levelId);
    if (level != null) {
        return level.position;
    }
    return { x: 0, y: 0 };
}

export const Node = {
    standardHorizontalGap,
    standardVerticalGap,
    getLevelCount,
    getMatchingLevels,
    getLevelIds,
    onLevel,
    isLevelPortal,
    getPosition,
};
