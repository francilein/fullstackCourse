import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});

app.get("/", (req, res) => {
  res.send("<h1>Hello, World!</h1> <p>Welcome to my Express server.</p>");
  console.log("Received a request to the root route.");
});

app.get("/about", (req, res) => {
  res.send(
    "<h1>About Us</h1><p>This is a simple Express server. </br> <em>made by me :)</em></p>",
  );
  console.log("Received a request to the about route.");
});

app.get("/contact", (req, res) => {
  res.send(
    "<h1>Contact Us</h1><p>You can reach us at <a href='mailto: franca.zoe.lenz@exxeta.com'>Email Us</a></p>",
  );
  console.log("Received a request to the contact route.");
});
