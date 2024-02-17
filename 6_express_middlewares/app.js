const express = require("express");
const app = express();
const port = 3000;
const portfolio = require("./routes/portfolio");

app.use(express.static("public")); //This is a inbuilt middleware

//This is a middleware below app level middleware
app.use("/", (req,res,next) => {
    console.log("This is middleware 1");
    next();
})

app.use("/portfolio", portfolio);

app.get("/", (req,res) => {
    res.send("App running")
})

app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})


// Middleware is essential in Express.js for several reasons:

// Modularity: Middleware allows you to break down your application's request handling logic into smaller, reusable components, making your codebase more modular and easier to maintain.

// Functionality Extension: Middleware provides a way to extend the functionality of your application by adding custom request processing logic, such as authentication, logging, error handling, and more.

// Ordering and Flow Control: Middleware functions are executed in the order they are defined, allowing you to control the flow of request processing and perform tasks before or after certain operations.

// Error Handling: Middleware can be used to handle errors that occur during request processing, allowing you to centralize error handling logic and provide consistent error responses to clients.