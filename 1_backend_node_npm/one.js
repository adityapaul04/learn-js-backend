var slug = require("slugify");

let a = slug("hello world");
console.log(a)

let b = slug("hello world", "_");
console.log(b)