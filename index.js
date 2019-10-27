// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber) {
    if (blockNumber > 42) {
        return blockNumber - 42;
    } else {
        return 42 - blockNumber;
    }
}

function distanceFromHqInFeet(blockNumber) {
    return distanceFromHqInBlocks(blockNumber) * 264;
}

function distanceTravelledInFeet(pointA, pointB){
    if (pointA > pointB) {
        return (pointA - pointB) * 264;
    } else {
        return (pointB - pointA) * 264;
    }
}

function calculatesFarePrice(start, destination) {
    let totalFeet = distanceTravelledInFeet(start, destination);

    if (totalFeet <= 400) {
        return 0
    } else if (totalFeet > 400 && totalFeet < 2000) {
        totalFeet -= 400;
        return totalFeet * 0.02;
    } else if (totalFeet > 2000 && totalFeet < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}
