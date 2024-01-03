// Створіть об'єкт room з параметри:
// ключ height зі значенням 3
// ключ tv зі значенням samsung
// ключ big зі значенням true

// const room = {
//     height: 3,
//     tv: 'samsung',
//     big: true,
//   };
  
//   console.log(room);

// Виведіть в alert тип даних параметра big

// alert(typeof room.big);

// Перевірте, що цей об'єкт не є порожнім і що в ньому є ключ age.
// let user = {
//   name: "John",
//   age: 30
// };

// if (Object.keys(user).length > 0 && user.hasOwnProperty('age')) {
//     console.log('Об\'єкт не порожній і має ключ "age"');
//   } else {
//     console.log('Об\'єкт порожній або не має ключа "age"');
//   }

// let users = {
//     user_1: {
//       name: "John",
//       age: 30
//     },
//     user_2: {
//       name: "Bob",
//       age: 21
//     },
//     user_3: {
//       name: "Anna",
//       age: 19
//     }
//   };
  
//   // Отримати елемент, де name === "Bob"
//   let userBob = Object.values(users).find(user => user.name === "Bob");
  
//   console.log(userBob);
//   // Видалити об'єкт з name === "Anna"
// delete users[userBob];

// console.log(users);const obj = {
//     id: 5,
//     token: 12343423
//   };
  
//   const { id } = obj;
  
//   console.log(id);
// Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
// Метод, який виводить на екран інформацію про автомобіль.
// Додавання ім’я водія у список
// Перевірка водія на наявність його ім’я у списку
// Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 

const car = {
    manufacturer: "Toyota",
    model: "Camry",
    year: 2022,
    averageSpeed: 120,
    fuelTankCapacity: 60,
    fuelConsumption: 8,
    drivers: [],
  
    displayInfo() {
      console.log(`
        Manufacturer: ${this.manufacturer}
        Model: ${this.model}
        Year: ${this.year}
        Average Speed: ${this.averageSpeed} km/h
        Fuel Tank Capacity: ${this.fuelTankCapacity} liters
        Fuel Consumption: ${this.fuelConsumption} liters per 100 km
        Drivers: ${this.drivers.join(", ") || "No drivers"}
      `);
    },
  
    addDriver(driverName) {
      this.drivers.push(driverName);
      console.log(`${driverName} has been added to the list of drivers.`);
    },
  
    checkDriver(driverName) {
      const isDriverInList = this.drivers.includes(driverName);
      if (isDriverInList) {
        console.log(`${driverName} is in the list of drivers.`);
      } else {
        console.log(`${driverName} is not in the list of drivers.`);
      }
    },
  
    calculateTrip(distance) {
      const breakTimeEvery = 4;
      const breakDuration = 1;
      const speed = this.averageSpeed;
      const consumption = this.fuelConsumption;
      const tankCapacity = this.fuelTankCapacity;
  
      let totalTime = (distance / speed) + Math.floor(distance / (breakTimeEvery * speed)) * breakDuration;
      let totalFuel = (distance / 100) * consumption;
  
      console.log(`
        Distance: ${distance} km
        Total Time: ${totalTime.toFixed(2)} hours
        Total Fuel Needed: ${totalFuel.toFixed(2)} liters
      `);
    },
  };
  
  // Використання методів
  car.displayInfo();
  car.addDriver("John");
  car.checkDriver("Jane");
  car.calculateTrip(500);
