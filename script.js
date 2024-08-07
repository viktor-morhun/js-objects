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
};

const carInfoElement = document.getElementById('car-info');
carInfoElement.addEventListener('click', () => carObj.getInfo());

const addDriverElement = document.getElementById('add-driver');
addDriverElement.addEventListener('click', () => carObj.addDriver());

const checkDriverElement = document.getElementById('check-driver-button');
checkDriverElement.addEventListener('click', () => carObj.checkAcces());

const calculateTripElement = document.getElementById('calculate-trip');
calculateTripElement.addEventListener('click', () => carObj.calculateTrip())


//Task 2
let timeObj = {
  hours: 0,
  minutes: 0,
  seconds: 0,

  showTime() {
    let fullTime = '';

    fullTime = this.hours > 9 
    ? this.hours + ':' 
    : '0' + this.hours + ':';

    fullTime = this.minutes > 9 
    ? fullTime + this.minutes + ':' 
    : fullTime + '0' + this.minutes + ':';

    fullTime = this.seconds > 9 
    ? fullTime + this.seconds 
    : fullTime + '0' + this.seconds;

    document.getElementById('time-result').innerHTML = fullTime;
  },
  secondsShift(initialValue) {
    const secondsAmount = initialValue ? initialValue : Number(document.getElementById('change-seconds').value);
    let minutesToAdd = Math.floor(secondsAmount / 60);
    const secondsToAdd = secondsAmount % 60;

    if (this.seconds + secondsToAdd >= 60) {
      minutesToAdd += Math.floor((this.seconds + secondsToAdd) / 60);
      this.seconds = (this.seconds + secondsToAdd) % 60;
    } else {
      this.seconds += secondsToAdd;
    }
    if (minutesToAdd) {
      this.minutesShift(minutesToAdd);
    }

    document.getElementById('change-seconds').value = '';
    this.showTime();
  },
  minutesShift(initialValue) {
    const minutesAmount = initialValue ? initialValue : Number(document.getElementById('change-minutes').value);
    let hoursToAdd = Math.floor(minutesAmount / 60);
    let minutesToAdd = minutesAmount % 60;

    if (this.minutes + minutesToAdd >= 60) {
      hoursToAdd += Math.floor((this.minutes + minutesToAdd) / 60);
      this.minutes = (this.minutes + minutesToAdd) % 60;
    } else {
      this.minutes += minutesToAdd;
    }
    if (hoursToAdd) {
      this.hoursShift(hoursToAdd);
    }

    if(!initialValue) {
      document.getElementById('change-minutes').value = '';
      this.showTime();
    }
  },
  hoursShift(initialValue) {
    const hoursAmount = initialValue ? initialValue : Number(document.getElementById('change-hours').value);
    const hoursToAdd = hoursAmount % 24;

    this.hours = (this.hours + hoursToAdd) >= 24 
    ? (this.hours + hoursToAdd) % 24 
    : this.hours + hoursToAdd;
    
    if(!initialValue) {
      document.getElementById('change-hours').value = '';
      this.showTime();
    }
  },
};

const showTimeElement = document.getElementById('show-time');
showTimeElement.addEventListener('click', () => timeObj.showTime());

const calculateSecondsElement = document.getElementById('change-seconds-button');
calculateSecondsElement.addEventListener('click', () => timeObj.secondsShift());

const calculateMinutesElement = document.getElementById('change-minutes-button');
calculateMinutesElement.addEventListener('click', () => timeObj.minutesShift());

const calculateHoursElement = document.getElementById('change-hours-button');
calculateHoursElement.addEventListener('click', () => timeObj.hoursShift());