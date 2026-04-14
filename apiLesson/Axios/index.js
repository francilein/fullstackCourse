import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    const result = response.data;
    res.render("index.ejs", { data: result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

app.post("/", async (req, res) => {
  console.log(req.body);

  const { type, participants } = req.body;
  console.log(type, participants);
  if (type === "" || participants === "") {
    console.log("No type or participants provided, fetching random activity.");
    try {
      const response = await axios.get(
        "https://bored-api.appbrewery.com/random",
      );
      const result = response.data;
      res.render("index.ejs", { data: result });
    } catch (error) {
      console.error("Failed to make request:", error.message);
      res.render("index.ejs", {
        error: error.message,
      });
    }
  } else {
    try {
      const response = await axios.get(
        "https://bored-api.appbrewery.com/filter",
        {
          params: {
            type : type,
            participants: participants,
          },
        },
      );
      const randomIndex = Math.floor(Math.random() * response.data.length);
      console.log("API response:", response.data[randomIndex]);
      res.render("index.ejs", { data: response.data[randomIndex] });
    } catch (error) {
      console.error("Failed to make request:", error.message);
      res.render("index.ejs", {
        error: "No activities that match your criteria.",
      });
    }
  }

});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
