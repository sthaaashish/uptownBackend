const path = require("path");
const fs = require("fs");

module.exports.fileCheck = (req, res, next) => {
  console.log(req.file?.image);
  console.log(req.file);
  if (req.files?.image) {
    const file = req.files.image;
    const validExts = [".jpg", ".jpeg", ".png"];
    if (validExts.includes(path.extname(file.name))) {
      file.mv(`./upload/${file.name}`, (err) => {
        if (err) {
        }
        req.image = `/upload/${file.name}`;

        return next();
      });
    } else {
      return res.status(400).json({
        status: "error",
        message: `please provide valid image`,
      });
    }
  } else {
    return res.status(400).json({
      status: "error",
      message: `please provide image`,
    });
  }
};