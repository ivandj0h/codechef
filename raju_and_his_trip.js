/*
Raju is planning to visit his favourite restaurant. He shall travel to it by bus. Only the buses whose numbers are divisible by 5 or by 6 shall take him to his destination. You are given a bus number N. Find if Raju can take the bus or not. Print YES if he can take the bus, otherwise print NO.
*/

const rajuBusNumbers = (num) => {
  if (num % 5 === 0 || num % 6 === 0) {
    return `YES`;
  } else {
    return `NO`;
  }
};

console.log(rajuBusNumbers(60));
