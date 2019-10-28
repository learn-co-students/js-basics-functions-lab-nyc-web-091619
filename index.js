// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    if (block > 42){
        return block - 42 ;
    } else {
        return 42 - block;
    }
}

function distanceFromHqInFeet (block) {
    return distanceFromHqInBlocks(block) * 264 ;
}

function distanceTravelledInFeet(block1, block2) {
    if (block1 > block2) {
        return (block1-block2) * 264;
    } else {
        return (block2-block1) * 264;
    }
}

function calculatesFarePrice(block1, block2) {
    const feet = distanceTravelledInFeet(block1, block2);

    if (feet <= 400) {
        return 0;
    } else if (400 < feet&&feet <= 2000){
        return (feet - 400) * 0.02;
    } else if (2000 < feet&&feet < 2500){
        return 25;
    } else {
        return 'cannot travel that far';
    }
}