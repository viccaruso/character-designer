export function makeStatsString(headCount, middleCount, bottomCount) {
    return `You clicked on the head ${headCount} ${(headCount === 1) ? 'time' : 'times'}, on the middle ${middleCount} ${(middleCount === 1) ? 'time' : 'times'}, and on the bottom ${bottomCount} ${(bottomCount === 1) ? 'time' : 'times'}. And everybody loves your character's catchphrases:`;
}

