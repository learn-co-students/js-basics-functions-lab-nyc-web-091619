// Code your solution in this file!

function distanceTravelledInFeet(start, end) {
    return blocksToFeet(Math.abs(end-start));
}

function blocksToFeet(blocks){
    return blocks * 264;
}

function distanceFromHqInBlocks(location){
    return Math.abs(42 - location)
}

function distanceFromHqInFeet(location){
    return blocksToFeet(distanceFromHqInBlocks(location));
}

function calculatesFarePrice(start, end) {
    const feet = distanceTravelledInFeet(start, end);
   
    if (feet > 2500){
        return "cannot travel that far"
    }
    if (feet > 2000){
        return 25;
    }
    if (feet > 400){
        return .02 * (feet-400);
    }

    return 0;
}