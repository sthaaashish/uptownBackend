const path = require("path");
const fs = require("fs").promises; 

// module.exports.fileCheck = async (req, res, next) => {
//   try {
//     if (req.file?.property_image) {
//       const file = req.file.property_image;
//       const validExts = [".jpg", ".jpeg", ".png"];

//       if (validExts.includes(path.extname(file.name))) {
//         const uploadPath = path.join(__dirname, "upload", file.name);

//         await fs.rename(file.tempFilePath, uploadPath);

//         req.property_image = `/upload/${file.name}`;
//         return next();
//       } else {
//         return res.status(400).json({
//           status: "error",
//           message: "Please provide a valid image",
//         });
//       }
//     } else {
//       return res.status(400).json({
//         status: "error",
//         message: "Please provide an image",
//       });
//     }
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({
//       status: "error",
//       message: "Internal Server Error",
//     });
//   }
// };



module.exports.fileCheck = (req, res, next) => {
  console.log(req.file?.property_image);
  console.log(req.file);
  if (req.files?.property_image) {
    const file = req.files.property_image;
    const validExts = [".jpg", ".jpeg", ".png"];
    if (validExts.includes(path.extname(file.name))) {
      file.mv(`./upload/${file.name}`, (err) => {
        if (err) {
        }
        req.property_image = `/upload/${file.name}`;

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




// module.exports.updateCheck = async (req, res, next) => {
//   if (req.files?.property_image && req.body?.imagePath) {
//     const file = req.files.property_image;
//     const validExts = ['.jpg', '.jpeg', '.png'];

//     if (validExts.includes(path.extname(file.name))) {
//       const uploadPath = path.join(__dirname, "upload", file.name);

//       try {
//         await file.mv(uploadPath);

//         if (await fs.access(req.body.imagePath, fs.constants.F_OK)) {
//           await fs.unlink(req.body.imagePath);
//         }

//         req.property_image = `/upload/${file.name}`;
//         return next();
//       } catch (err) {
//         console.error(err);
//         return res.status(500).json({
//           status: "error",
//           message: "Internal Server Error",
//         });
//       }
//     } else {
//       return res.status(400).json({
//         status: 'error',
//         message: 'Please provide a valid image',
//       });
//     }
//   } else {
//     return next();
//   }
// };



module.exports.updateCheck = (req, res, next) => {

  if (req.files?.property_image && req.body?.imagePath) {



    const file = req.files.property_image;
    const validExts = ['.jpg', '.jpeg', '.png'];
    if (validExts.includes(path.extname(file.name))) {
      file.mv(`./upload/${file.name}`, (err) => {
        if (err) {

        }

        fs.unlink(`.${req.body.imagePath}`, (err) => {

        })

        req.property_image = `/upload/${file.name}`;

        return next();
      });


    } else {
      return res.status(400).json({
        status: 'error',
        message: `please provide valid image`
      });
    }




  } else {
    next();
  }







}