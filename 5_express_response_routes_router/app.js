const express = require("express");
const app = express();
const port = 3000;
const portfolio = require("./routes/portfolio")

app.use(express.static("public"))
app.use("/portfolio", portfolio);

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.post("/", (req, res) => {
    console.log("This is post");
    res.send("This is post");
})

app.put("/", (req, res) => {
    console.log("This is put");
    res.send("This is put");
})

//static html, the file inside template
app.get("/index", (req, res) => {
    console.log("This is index.html template");
    res.sendFile("templates/index.html", {root: __dirname});
})

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
})


//responses
//res.download()
//res.send()
//res.sendFile()
//res.json()
//res.jsonp()
//res.sendStatus()
//res.render()
//res.redirect()
