let statesNeeded = new Set(['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az']);
const stations = {
    kone: new Set(['id', 'nv', 'ut']),
    ktwo: new Set(['wa', 'id', 'mt']),
    kthree: new Set(['or', 'nv', 'ca']),
    kfour: new Set(['nv', 'ut']),
    kfive: new Set(['ca', 'az']),
};
const finalStation = new Set();

export default function greedAlgorithm() {
    while (statesNeeded.size) {
        let bestStation = null;
        let statesCovered = new Set();

        for (const station in stations) {
            const states = stations[station];
            const covered = new Set([...statesNeeded].filter(item => states.has(item)));

            if (covered.size > statesCovered.size) {
                bestStation = station;
                statesCovered = covered;
            }
        }

        statesNeeded = new Set([...statesNeeded].filter(item => !statesCovered.has(item)));
        finalStation.add(bestStation);
    }

    console.log(finalStation);
};
