const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => { //app.get | app.post | app.put | app.delete
    res.send("hello world3")
})

app.get("/about/", (req, res) => {
    res.send("This is about me")
})

app.get("/about/:a", (req, res) => { //:a here is a route parameter variable such that anything after about/... can be accessed
    res.send(`hello ${req.params.a}`); //Here we are requesting parameter a.
})

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})

//query
app.get("/contact", (req, res) => {
    res.send(req.query)
})
//http://localhost:3001/contact?num=8227920888&&name=aditya


//To serve static files we need to create a public directory.
app.use(express.static('public'))

//To see this go to localhost:3001/a.txt