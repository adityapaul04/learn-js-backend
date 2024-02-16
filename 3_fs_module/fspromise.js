const fs = require("fs/promises");

async function main() {
    await fs.writeFile("aditya2.txt", "Hello Ji");

    let read = await fs.readFile("aditya2.txt");
    console.log(read.toString())

    await fs.appendFile("aditya2.txt", "How are you?")
}

main();

//Note that fs/promises can work directly without a async function we can directly write await fs.writeFile() .... and continue working when we are using ES6 modules, but in commonJS module we have to wrap up the await on a async function.