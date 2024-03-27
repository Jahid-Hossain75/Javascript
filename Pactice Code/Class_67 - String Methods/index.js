
// String Methods - startsWith, endsWith, includes
// startsWith (searchString, position) -> check a string starts with another string
// Step - 1
const message = "Today is Thursday";
console.log(message.startsWith("Today")); // case sensitive

// Step - 2
const message_2 = "Today is Thursday";
console.log(message_2.startsWith("Today", 0)); // case sensitive




// endsWith (searchString, length) -> check a string ends with another string
const message_3 = "Today is Thursday";
console.log(message_3.endsWith("Thursday")); // case sensitive





// includes (searchString, position) -> check if a string contains another string
const message_4 = "Today is Friday";
console.log(message_4.includes("friday")); // case sensitive


// all these methods are case sensitive
