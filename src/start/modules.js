const fileUpload = require("express-fileupload");
const cors = require("cors");
const authRoute = require("../routes/аuth.route");

const modules = (app, express) => {
    app.use(cors());
    app.use(fileUpload());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static(`${process.cwd()}/uploads`));
    app.use("/api/auth", authRoute);
};

module.exports = modules;
