// Code your solution here

//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
// function findMatching = drivers.filter(driver => driver.length > 6);
const drivers = [
  {
    id: 1,
    name: 'Bobby',
    hometown: 'Pittsburgh' },
  {
    id: 2,
    name: 'Sammy',
    hometown: 'New York' } ,
  {
    id: 3,
    name: 'Sally',
    hometown: 'Cleveland' },
  {
    id: 4,
    name: 'Annette',
    hometown: 'Los Angeles' },
  {
    id: 5,
    name: 'Bobby',
    hometown: 'Tampa Bay' }
];

for(let i = 0; i <= 4; i++){
  console.log(drivers[i].hometown)
} //i < drivers.length

for(const element of drivers){
  console.log(element.hometown)
}

drivers.forEach(function(driver){
  console.log(driver)
})








/**
 * Filter array items based on search criteria (query)
 */ 


function findMatching(drivers, attribute){
  return drivers.filter(function(driver){
    return driver.toLowerCase() === attribute.toLowerCase()})
}

function fuzzyMatch(drivers, attribute){
  return drivers.filter(function(driver){
    return driver.toLowerCase().substring(0, attribute.length) === attribute.toLowerCase()
  })
}

function matchName(drivers, argument){
  return drivers.filter(function(driver){
    return driver.name === argument
  })
}










// let drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Bobby']
// let pos = drivers.indexOf(drivers);


// let iterations = 0;

// let matchName = drivers.filter((obj) => {
//   iterations++;
//   if(obj.id === drivers.id){
//     return true;
//   }
//   return false;
// })
// log(matchName[0], 'after looping', iterations);
// iterations=0;

// let found = drivers.some((obj, index) => {
//   iterations++;
//   if(obj.id === drivers.id){
//     return true;
//   }
//   return false;
// })
// log(found.toString(), 'after looping', iterations);
// }