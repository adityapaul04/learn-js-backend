const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("This is portfolio homepage");
})

router.get("/about", (req, res) => {
    res.send("This is portfolio about page");
})

module.exports = router;


// a router is a middleware that allows you to group related routes and handlers together, providing a modular way to organize your application's routes. Routers can be thought of as mini-applications within your main Express application.

// Here are some reasons why routers are useful and why you might need them:

// Modularity: Routers allow you to modularize your application's routes into separate files or modules. This makes it easier to organize and maintain your codebase, especially as your application grows larger and more complex.

// Code Organization: By grouping related routes and handlers together, routers help improve the organization and readability of your code. Each router can handle routes for a specific feature or resource, making it easier to understand the purpose of each route and handler.

// Middleware Chain: Routers support middleware, allowing you to define middleware functions that are specific to a set of routes. This gives you finer control over the middleware chain for different parts of your application.

// Route Prefixing: Routers can be mounted at specific paths in your application, allowing you to define routes with a common prefix. This is useful for creating APIs with versioning or for organizing routes under a specific path hierarchy.

// Scalability: As your application grows, routers make it easier to scale by allowing you to divide your application into smaller, more manageable modules. This can improve development speed, maintainability, and collaboration among team members.

// Overall, routers are a powerful feature of Express.js that help you organize, modularize, and scale your application's routes in a way that promotes code reuse, maintainability, and scalability. They provide a clean and structured approach to defining and managing your application's routes and handlers.