// code your solution here
// Function declaration for saturdayFun
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

// Function expression for mondayWork
const mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

// Function that returns a function to wrap adjectives
function wrapAdjective(wrapper = "*") {
  return function (adjective) {
    return `You are ${wrapper}${adjective}${wrapper}!`;
  };
}

// Testing the functions
console.log(saturdayFun()); // "This Saturday, I want to roller-skate!"
console.log(saturdayFun("swim")); // "This Saturday, I want to swim!"

console.log(mondayWork()); // "This Monday, I will go to the office."
console.log(mondayWork("work from home")); // "This Monday, I will work from home."

const wrapStar = wrapAdjective("*");
console.log(wrapStar("amazing")); // "You are *amazing*!"

const wrapPipes = wrapAdjective("||");
console.log(wrapPipes("a genius")); // "You are ||a genius||!"
