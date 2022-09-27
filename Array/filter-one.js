//! Filter method
// const numbers = [-1,-2,3,4,-5,-7];
// numbers.forEach((num) => {
//     if(num <= 0){
//         console.log(num); // -1, -2, -5, -7
//     }
// })

//! Normal forloop
const numbers = [-1, -2, 3, 4, -5, -7];
const arr = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] <= 0) {
    arr.push(numbers[i]);
  }
}
console.log(arr); //[ -1, -2, -5, -7 ]

//! filter method
const postiveNum = numbers.filter((num) => {
  return num <= 0;
});

console.log(postiveNum); //[ -1, -2, -5, -7 ]

//! Realtime filter use
// find employee overtime more than 7 hours
const employeeData = [
  { name: "Arfat", overtime: 5 },
  { name: "Aman", overtime: 7 },
  { name: "Alim", overtime: 8 },
  { name: "Aquib", overtime: 10 },
];

const reward = employeeData.filter((emp) => {
  return emp.overtime >= 7;
});

console.log(reward);

//we want only names of the person

const rewardee = reward.map((person) => person.name);
console.log(rewardee); //[ 'Aman', 'Alim', 'Aquib' ]

const prizeGIven = rewardee.forEach((prize) => {
  console.log(`Congratulations ${prize}, You have won reward`);
});
