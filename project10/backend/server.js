const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb://mongo:27017/saas", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const app = express();
app.get("/", (req, res) => res.send("SaaS Backend Running"));
app.listen(5000, () => console.log("Server up on 5000"));
