const express = require("express");
const app = express();
const home_ = require("../routes/homepage");
const port = process.env.PORT || 3000;
app.use("/", home_);
app.use("about", home_);
app.use("contact", home_);

app.listen(port, () => {
  console.log("listening to the server on http://localhost:3000");
});
