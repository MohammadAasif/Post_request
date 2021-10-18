const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;
const db = mongoose.connection;

const router = require("./routes");
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.get("/", (req, res) => res.send("Hello User! How can i help you?"));
app.use(router);

app.listen(port, () => {
  try {
    mongoose.connect("mongodb://127.0.0.1:27017/e_comm");
    db.on("error", () => console.log(`Database connection error`));
    db.once("open", function () {
      console.log("Mongodb connected.");
    });
  } catch (error) {
    console.log(`Connection Error! ${error}`);
  }
  console.log(`Application listening on ${port} port!`);
});
