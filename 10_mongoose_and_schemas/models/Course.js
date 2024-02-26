const mongoose = require("mongoose");

const CourseSchema = mongoose.Schema({
    courseName: String,
    coursePrice: Number,
})

module.exports = mongoose.model("Course", CourseSchema)