const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const generateKeyword = require("./routes/keywordRoute");

dotenv.config();

const port = process.env.PORT || 9000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/generatekeyword", generateKeyword);

app.listen(port, () => {
  console.log(`App is listening on Port ${port}`);
});
