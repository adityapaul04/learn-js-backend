const fs = require("fs");

console.log("Starting");
// fs.writeFileSync("aditya.txt", "Hello"); //Do not use writeFileSync as it uses blocking code method and synchronous.
fs.writeFile("adityanew.txt", "Aditya is a programmer", () => {  //writeFile is asynchronous, this schedules the code for later, and we should use this.
    console.log("Done writing");
    fs.readFile("adityanew.txt", (err, data) => { //readFile is used to read a file and it takes two args, the file path to be read and a callback which takes error and data as args.
        console.log(err, data.toString());
    })
})
console.log("Ending");

fs.appendFile("adityanew.txt", "adiadiadiadi", (err, data) => { //appendFile appends the data into a existing file.
    console.log("Appended")
})