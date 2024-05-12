require("dotenv/config");
const express = require("express");
const config = require("../config");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const authRoute = require("./routes/аuth.route");

const app = express();
app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(express.static(`${process.cwd()}/uploads`));
app.use("/api/auth", authRoute);


const port = config.port || 3000;

app.listen(port, () => {
  console.log("listening on port " + port);
});
