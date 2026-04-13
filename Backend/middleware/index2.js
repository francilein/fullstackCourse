import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

// order is very important for authorization and logging, so we need to put the logger before the authorization middleware
app.use(logger);
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Hello World! This is my express server with middleware.");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

function logger(req, res, next) {
  console.log("Request received at " + req.method + " " + req.url);
  next();
}
