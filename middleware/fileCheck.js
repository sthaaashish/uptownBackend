const path = require("path");
const fs = require("fs").promises; // Using fs.promises for async file operations

module.exports.fileCheck = (req, res, next) => {
  if (req.files?.property_image) {
    const file = req.files.property_image;
    const validExts = [".jpg", ".jpeg", ".png"];
    
    if (validExts.includes(path.extname(file.name))) {
      const uploadPath = path.join(__dirname, "upload", file.name);

      file.mv(uploadPath, async (err) => {
        if (err) {
          console.error(err);
          return res.status(500).json({
            status: "error",
            message: "Internal Server Error",
          });
        }

        req.property_image = `/upload/${file.name}`;
        return next();
      });
    } else {
      return res.status(400).json({
        status: "error",
        message: "Please provide a valid image",
      });
    }
  } else {
    return res.status(400).json({
      status: "error",
      message: "Please provide an image",
    });
  }
};

module.exports.updateCheck = async (req, res, next) => {
  if (req.files?.property_image && req.body?.imagePath) {
    const file = req.files.property_image;
    const validExts = ['.jpg', '.jpeg', '.png'];

    if (validExts.includes(path.extname(file.name))) {
      const uploadPath = path.join(__dirname, "upload", file.name);

      try {
        await file.mv(uploadPath);

        if (await fs.access(req.body.imagePath, fs.constants.F_OK)) {
          await fs.unlink(req.body.imagePath);
        }

        req.property_image = `/upload/${file.name}`;
        return next();
      } catch (err) {
        console.error(err);
        return res.status(500).json({
          status: "error",
          message: "Internal Server Error",
        });
      }
    } else {
      return res.status(400).json({
        status: 'error',
        message: 'Please provide a valid image',
      });
    }
  } else {
    return next();
  }
};
