import express from "express";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const now = new Date();

  const data = {
    title: "My EJS Page",
    message: "Coole Eishockeyteams!",
    currentSecond: now.getSeconds(), // 👈 add this
    items: ["Eisbären Berlin", "Kälner Haie", "Adler Mannheim"],
    htmlContent: "<strong>Das beste Team sind die Eisbären Berlin!</strong>",
  };

  res.render("index.ejs", data);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
