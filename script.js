'use strict';

//Task 1
let carObj = {
  brand: 'DeLorean',
  model: 'DMC-12',
  year: 1982,
  speed: 100,
  fuelTank: 52,
  fuelConsumption: 9.8,
  drivers: ['Marty McFly', 'Doc Brown', 'Rick Sanchez', 'Morty Smith'],

  getInfo() {
    const resultElement = document.getElementById('car-result');

    resultElement.innerHTML = 
    `Car: ${this.brand} model ${this.model}, ${this.year} year,
     avg speed: ${this.speed}km/h, fuel capacity: ${this.fuelTank}l,
      fuel consumption per 100km: ${this.fuelConsumption}l.\nDrivers: ${this.drivers.join(', ')}.`;
  },
  addDriver() {
    const driverElement = document.getElementById('driver-name');

    this.drivers.push(driverElement.value.trim());
    if (document.getElementById('car-result').innerHTML){
      this.getInfo();
    } else {
      document.getElementById('car-result').innerHTML = `Driver ${driverElement.value} added.`
    }

    driverElement.value = '';
  },
  checkAcces() {
    const driversNameElement = document.getElementById('check-driver');
    const resultElement = document.getElementById('car-result');
    const driverCheck = this.drivers.includes(driversNameElement.value.trim()) 
    ? `Yes, ${driversNameElement.value} has acces.` 
    : `No, ${driversNameElement.value} hasn't acces.`;

    resultElement.innerHTML = driverCheck;
  },
  calculateTrip() {
    const distance = document.getElementById('distance').value;
    const resultElement = document.getElementById('car-result');
    const fuel = distance/100 * this.fuelConsumption;
    const travelTime = Math.round((distance/this.speed + Math.floor(distance/this.speed/4)) * 60);
    const timeHours = Math.floor(travelTime / 60);
    const timeMinutes = travelTime % 60;
    

    resultElement.innerHTML = `Estimated time: ${timeHours}hours ${timeMinutes}minutes, fuel: ${fuel.toFixed(2)}liters`;
  },
}

const carInfoElement = document.getElementById('car-info');
carInfoElement.addEventListener('click', () => carObj.getInfo());

const addDriverElement = document.getElementById('add-driver');
addDriverElement.addEventListener('click', () => carObj.addDriver());

const checkDriverElement = document.getElementById('check-driver-button');
checkDriverElement.addEventListener('click', () => carObj.checkAcces());

const calculateTripElement = document.getElementById('calculate-trip');
calculateTripElement.addEventListener('click', () => carObj.calculateTrip())


//Task 2