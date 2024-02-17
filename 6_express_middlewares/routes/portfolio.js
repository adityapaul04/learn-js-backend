const express = require("express");
const router = express.Router();

//This is a middleware below for routes, route level middleware
router.use("/", (req,res,next) => {
    console.log("This is routes middleware of portfolio");
    next();
})

router.get("/", (req, res) => {
    res.send("This is portfolio home");
})

router.get("/about", (req, res) => {
    res.send("This is portfolio about");
})

module.exports = router;