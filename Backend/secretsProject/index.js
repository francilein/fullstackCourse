import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
import express from "express";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true })); // urlencoded important for getting data from forms

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (request, response) => {
  var password = request.body["password"];
  checkPassword(password, response);
});

function checkPassword(password, response) {
  if (password === "ILoveProgramming") {
    console.log("Correct password");
    response.sendFile(__dirname + "/public/secret.html");
  } else {
    console.log("Incorrect password");
    response.redirect("/");
  }
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
