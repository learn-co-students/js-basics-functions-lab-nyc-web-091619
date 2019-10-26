// Code your solution in this file!
function distanceFromHqInBlocks(street) {
    return Math.abs(42 - street);
}

function distanceFromHqInFeet(street) {
    return distanceFromHqInBlocks(street) * 264
}

function distanceTravelledInFeet(start, end) {
    return Math.abs(end-start) * 264
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) <= 264) {
        return 0 
    }
    else if (distanceTravelledInFeet(start, destination) >= 400 && distanceTravelledInFeet(start, destination) <= 2000) {
        let result = distanceTravelledInFeet(start, destination) - 400 
        return result * .02
    }  
    else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <2500) {
        return 25
    }
    else if (distanceTravelledInFeet(start, destination) > 2500) {
        return "cannot travel that far";
    }
}
