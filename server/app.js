require("dotenv").config();

require("./config/dbConnections.js");

const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const PORT = process.env.PORT;

// INITIALIZE EXPRESS APP - https://expressjs.com/en/4x/api.html#express
const app = express();

// MIDDLEWARE
// Set up CORS middleware
app.use(
  cors({
    origins: [process.env.FRONTEND_URL],
  })
);

app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// ROUTES - https://expressjs.com/en/starter/basic-routing.html

app.use("/", require("./routes/index.routes"));
require("./error-handling")(app);
// START SERVER
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
