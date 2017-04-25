const app = "I don't do much."
let bumpCounter = function() {
  var counter = 0;
  function addBump() {
    counter += 1;
  }
let getBumps = function() {
    return counter;
  }
  return {addBump, getBumps}
}
let createAnimal = function(animalType){
  function deadly(deadlyDevice){
    return {animalType: animalType, deadlyDevice: deadlyDevice}
  }
  return deadly
}

let sharkCreator = createAnimal('Shark');
let sharkWithFrickinLaserbeam = sharkCreator('Laserbeam');
let sharkWithFrickinCannon = sharkCreator('Cannon');
