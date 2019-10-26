function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks - 42)
};

function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * 264
};

function distanceTravelledInFeet(start, end) {
    return Math.abs(start - end) * 264
};

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <=2000) {
        return parseFloat((distance * .02 - 400 * .02).toFixed(2))
    } else if (distance > 2000 && distance <2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }    
}
