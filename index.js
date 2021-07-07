import { ftruncate } from "fs";

// Code your solution in this file!
const hq = 42;

function distanceFromHqInBlocks(blockNumber) {
    return Math.abs(blockNumber - hq);
}

function distanceFromHqInFeet(blockNumber) {
    return distanceFromHqInBlocks(blockNumber) * 264;
}

function distanceTravelledInFeet(startBlock, endBlock) {
    return Math.abs(startBlock - endBlock) * 264;
}

function calculatesFarePrice(start, destination) {
    let fare = 0;
    let distance = distanceTravelledInFeet(start, destination);

    if (distance > 400) {
        if (distance > 2000) {
            if (distance > 2500) {
                fare = `cannot travel that far`;
            } else {
                fare = 25;
            }
        } else {
            fare = (distance - 400) * .02;
        }
    } else {
        fare = 0;
    }
    return fare;
}