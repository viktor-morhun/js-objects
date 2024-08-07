'use strict';

//Task 1

let carObj = {
  brand: 'Tesla',
  model: '3',
  year: 2019,
  speed: 100,
  fuelTank: 80,
  fuelConsumption: 15,
  drivers: ['Deen', 'Sam'],
  getInfo() {
    console.log(carObj);
  },
  addDriver(name) {
    this.drivers.push(name);
  },
  checkAcces(name) {
    return this.drivers.includes(name)
  },
  calculatePath(distance) {
    let travelTime = distance/this.speed + Math.floor(distance/this.speed/4);
    let fuel = distance/100 * this.fuelConsumption;
    return `Estimated time: ${travelTime.toFixed(2)}h, fuel: ${fuel}`;
  },
}

carObj.addDriver('Bruh');

carObj.getInfo();

console.log(carObj.checkAcces('Bruh'));
console.log(carObj.calculatePath(600));

document.getElementById('car-info').addEventListener('click', carObj.getInfo);