// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLocation) {
    return Math.abs(42 - pickUpLocation)
}

function distanceFromHqInFeet(pickUpLocation) {
    return Math.abs(42 - pickUpLocation) * 264
}

function distanceTravelledInFeet(pickUpLocation, dropOffLocation) {
    return Math.abs(dropOffLocation - pickUpLocation) * 264
}

function calculatesFarePrice(start, destination) {
    const distance = Math.abs(destination - start) * 264
    if (distance <= 400) {
        return 0
    } else {
        if (distance < 2500) {
            if (distance < 2000) {
                return (distance - 400) * 0.02
            }
            return 25
        } else {
            return 'cannot travel that far'
        }
    }
}