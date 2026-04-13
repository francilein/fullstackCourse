import express from "express";
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true })); // urlencoded important for getting data from forms

let bowl = ["Apples", "Oranges", "Bananas"];
app.use(express.urlencoded({ extended: true }));
app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});

app.get("/", (request, response) => {
  response.render("index.ejs", {
    bowl: bowl,
  });
});

app.post("/", (request, response) => {
  console.log(request.body["newFruit"]);
  let newFruit = request.body["newFruit"];
  bowl.push(newFruit);
  response.redirect("/");
});
