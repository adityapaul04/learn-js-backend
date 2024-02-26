const express = require("express");
const port = 3000;
const app = express();

app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//     res.send("Hello Ji")
// })


//Here we are using ejs to pass data along with a file to "/". The file is stored in views folder as index.ejs and its extension should be .ejs
app.get("/", (req,res) => {
    let name = "Aditya"
    let userId = "adi"
    res.render("index", {name:name, userId:userId})
})

app.listen(port , () => {
    console.log(`The server is running on port ${port}`)
});