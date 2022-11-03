// Code your solution in this file!

const hq = 42
const feet = 264
const start = 50
const destination = 25

function distanceFromHqInBlocks(pickup) {
    if (pickup > 42) {
        return (pickup - hq);
    // return blockNumber - 42;
    } else if (pickup < 42) {
        return (hq - pickup)
    // else {
    // return 42 - pickup;
    }
}

function distanceFromHqInFeet(pickup) {
    if (pickup > 42) {
        return ((pickup - hq) * 264);
    } else if (pickup < 42) {
        return ((hq - pickup) * 264)}
// function distanceFromHqInFeet (blockNumber) {
// return distanceFromHqInBlocks(blockNumber) * 264;
}

function distanceTravelledInFeet (start, destination) {
    if (start < destination) {
      return (destination - start) * 264;
    } else {
      return (start - destination) * 264;
    }
  }


function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination)
    
  if (distance <= 400){
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * .02 
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far'
  }
}
// function calculatesFarePrice (start, destination) {
//     const distance = distanceTravelledInFeet(start, destination);
      
//     if (distance <= 400) {
//       return 0;
//     } else if (distance > 400 && distance <= 2000) {
//       return .02 * (distance - 400);
//     } else if (distance > 2000 && distance < 2500) {
//       return 25;
//     } else {
//       return 'cannot travel that far';
//     }    
