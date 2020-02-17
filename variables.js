// Javascript Variables
// Variables are a way for a programming language to store data types for later retrieval.
// Common data types are integers, floats, strings, arrays and objects.

// Traditional ES5 Variables (no const or let )
// Declare a variable and assign it an integer value 

var example_var_a = 10; //es5 style declaration 
var example_var_b = 12.2;

// ES6 Variable Declaration 

const example_var_c = 15; //This is a constant variable that can not be updated after declaration. 
let example_var_d = 26; // This is a standard javascript variable using the 'let' syntax. This will restrict the variable to have block scope, instead of functional scope. 

// Identify Data Type of Variable using 'typeof' operator
console.log(typeof example_var_b)

// Convert Numbers to String Data Types
example_var_b.toString();

//Change number of decimals associated to number 
var x = 9.656;
x.toFixed(0);           // returns 10
x.toFixed(2);           // returns 9.66
x.toFixed(4);           // returns 9.6560
x.toFixed(6);           // returns 9.656000

// String Methods

// Sub string returns a selected portion of a string variable
let str = 'Mozilla';
console.log(str.substring(1, 3));
// expected output: "oz"
console.log(str.substring(2));
// expected output: "zilla"

// Slice method returns a new string created from the selected portion of an older string variable
str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
// expected output: "the lazy dog."

console.log(str.slice(4, 19));
// expected output: "quick brown fox"

console.log(str.slice(-4));
// expected output: "dog."

console.log(str.slice(-9, -5));
// expected output: "lazy"