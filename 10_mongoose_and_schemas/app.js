const express = require("express");
const mongoose = require("mongoose");
const Course = require("./models/Course.js");
const app = express();
const port = 3000;

async function connectDb() {
    await mongoose.connect("mongodb://localhost:27017/practice");
}

connectDb();

app.get("/", (req,res) => {
    const course = new Course({courseName: "Python", coursePrice: 4000})
    course.save();
    res.send("Hello ji");
})

app.listen(port, ()=>{
    console.log(`App is running on port ${port}`);
})

