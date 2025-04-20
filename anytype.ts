// any type for variables
let thing: any;
thing = 1;                  // number
thing = "das";              // string
console.log("thing:", thing); // Output: "das"

// any type with objects
let title: any;
title = 56; // number
title = {
    firstName: "John",
    lastName: "Doe"
}; // object
console.log("title:", title); // Output: { firstName: "John", lastName: "Doe" }

// any type in arrays
let arr: any[] = ["hello", true, 45, null];
arr.push({
    id: 90,
    name: "John"
}); // adding an object
console.log("arr:", arr);

// function with 'any' parameters
function add(a: any, b: any): any {
    return a + b;
}
console.log(add("my age is ", 21)); // Output: "my age is 21"
