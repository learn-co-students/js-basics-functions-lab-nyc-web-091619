function distanceFromHqInBlocks(destination) {
    // distance from hq in blocks passed 43 equals 1
    // distance from hq in blocks passed 50 equals 8
    // distance below 42nd street in blocks passed 34 equals 8
    let hq = 42
    return Math.abs(destination - hq) 
}

function distanceFromHqInFeet(destination) {
    // passed 43 expects 264
    // passed 50 expects 2112
    // passed 34 expects 2112
    return distanceFromHqInBlocks(destination) * 264
}

function distanceTravelledInFeet(arg1, arg2) {
    let args = Math.abs(arg1 - arg2)
    return args * 264
    // 1 block = 264 feet
}

function calculatesFarePrice(start, destination) {
    let total = distanceTravelledInFeet(start, destination)
    if (total < 400) {
        return 0
    } else if (total > 2500) {
        return "cannot travel that far"
    } else if (total > 2000 && total < 2500) {
        return 25
    } else {
        return ((total - 400) * .02) 
    }
}
// .2 cents per foot
// charges 2 cents per foot when total feet travelled is between 400 and 2000
// first 400 feet are free
// passed 50, 58 expects 25
// passed 34, 24 expects 'cannot travel that far'