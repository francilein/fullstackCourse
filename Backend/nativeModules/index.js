const fs = require("fs"); // File system module to read files

/*
fs.writeFile("message.txt", "Hello from Node.js!", (err) => {
  if (err) throw err;
  console.log("message.txt created successfully.");
});
*/
fs.readFile("index.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
