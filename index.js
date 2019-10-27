// Code your solution in this file!
function distanceFromHqInBlocks(num) {
  return Math.abs(num - 42);
}

function distanceFromHqInFeet(num) {
  return distanceFromHqInBlocks(num) * 264;
}

function distanceTravelledInFeet(start, destination) {
  return distanceFromHqInFeet(destination) - distanceFromHqInFeet(start);
}

function calculatesFarePrice(start, destination) {
  let price;
  let costPerFoot = 0.02;
  let distanceTravelled = distanceTravelledInFeet(start, destination);
  
  if (distanceTravelled <= 400) {
    return 0;
  } else if (distanceTravelled < 2000) {
    return 0.02 * (distanceTravelled - 400)
  } else if (distanceTravelled <= 2500) {
    return 25;
  } else {
    return `cannot travel that far`
  }
}
