function distanceFromHqInBlocks(location) {
    let result;
    {
        if (location >= 42)
            result = location - 42
        else
            result = 42 - location
    }
    return result;

}

function distanceFromHqInFeet(location) {
    let result;
    { 
        result = (distanceFromHqInBlocks(location) * 264);
    }
    return result;
}

function distanceTravelledInFeet(start, destination) {
    let result;
    let x;
    {
        x = (distanceFromHqInFeet(start) - distanceFromHqInFeet(destination));
        result = -x
    }
    return result;
}

function calculatesFarePrice(start, destination) {
    let result;
    let x;
    {
        x = distanceTravelledInFeet(start, destination)
        if (x <= 400)
            result = 0
        else if (x <= 2001)
            result = ((x - 400) * .02)
        else if (x <= 2500)
            result = 25
        else if (x > 2500)
        result = 'cannot travel that far'
    }
    return result;
}