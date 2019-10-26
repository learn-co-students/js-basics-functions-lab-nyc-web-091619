// Code your solution in this file!

// ✓ returns a distance in blocks
// ✓ returns a distance in blocks
// ✓ calculates distances below 42nd street

function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks - 42);
}

// ✓ returns a distance in feet
// ✓ returns a distance in feet
// ✓ calculates distances below 42nd street

function distanceFromHqInFeet(distance) {
    return distanceFromHqInBlocks(distance) * 264;
}

// 4) returns the distance travelled in feet
// 5) returns a distance in feet
// 6) returns distance when destination is below distance

function distanceTravelledInFeet(arg1, arg2) {
    return Math.abs(arg1 - arg2) * 264;
}

// 7) gives customers a free sample
// 8) charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)
// 9) charges 25 dollars for a distance over 2000 feet
// 10) does not allow rides over 2500 feet

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);

    if (distance < 400) {
        return 0;
    }
    else if (distance >= 400 && distance <= 2000) {
        return (distance - 400) * .02;
    }
    else if (distance > 2000 && distance <= 2500) {
        return 25;
    }
    else {
        return "cannot travel that far"
    }
}

