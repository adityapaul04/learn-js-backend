We need to restart the server manually everytime we make any changes to the code to reflect those changes.
So, there is a package named nodemon which makes the server restart automatically when we make any changes to the code to remove the pain of manually restarting the server.
The nodemon package is installed using "npm i nodemon or npm install nodemon"

Now, let's see commonJS and ES6 modules:
CommonJS Modules:
CommonJS modules were introduced by Node.js and are used primarily in server-side JavaScript environments.
Syntax: CommonJS modules use require() to import modules and module.exports or exports to export values from a module.
Behavior: CommonJS modules are loaded synchronously, meaning that they are loaded and evaluated one after another. They allow for dynamic loading of modules at runtime.

ES6 Modules:
ES6 modules are a standardized module system introduced by ECMAScript 6 (ES2015) and are supported by modern browsers and Node.js with some additional configurations.
Syntax: ES6 modules use import and export statements to import and export values between modules.
Behavior: ES6 modules are loaded asynchronously and are subject to static analysis, meaning that dependencies must be known at compile time. This allows for better tree-shaking (removing unused code) and more efficient bundling during build processes.


***NOTE***
By default node uses the commonJS, but if we want to use ES6 module syntax, we need to tell the system. how?
by going to the package.json file which was created during init and type this "type": "module"