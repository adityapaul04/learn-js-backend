// Importing values in ES6
import { a, b, foo, MyClass } from "./export_es6.js"
import myFunction from "./export_es6.js"

console.log(a); // Output: 1
console.log(b); // Output: 2
foo(); // Call the foo function
const obj = new MyClass(); // Create an instance of MyClass

myFunction(); // Call the default exported function
