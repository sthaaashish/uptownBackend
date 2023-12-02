const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const blogRoute = require("./Routes/blogRoute");
const propertyRoute = require("./Routes/propertyRoute");
const reviewRoute = require("./Routes/reviewRoute");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const authRoute = require("./Routes/authRoute");

mongoose.set("strictQuery", true);
mongoose
  .connect(
    "mongodb+srv://asaashish345:stha2121@cluster0.m3otbm1.mongodb.net/"
  )
  .then((data) => {
    app.listen(5000, () => {
      console.log("Server Running");
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/upload", express.static("upload"));
app.use(cors());
app.use(express.json());
app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
    abortOnLimit: true,
    createParentPath: true,
  })
);
app.use(authRoute)
app.use(reviewRoute);
app.use(propertyRoute);
app.use(blogRoute);

app.use((req, res) => {
  return res.status(404).json({
    status: "error",
    message: "Not found",
  });
});
