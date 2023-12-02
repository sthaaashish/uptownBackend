const fs = require("fs");
const Contact =require("../model/contact")


// module.exports.customerComments = async (req, res) => {
//     try {
//       const customerComments = await CustomerReview.create(req.body)
//       return res.status(200).json(customerComments);
//     } catch (err) {
//       return res.status(400).json({
//         status: "error",
//         message: `${err}`,
//       });
//     }
//   };
//   module.exports.getReviews = async (req, res) => {
//     try {
//       const customerReviews = await customerReview.find({})
//       return res.status(200).json(customerReviews);
//     } catch (err) {
//       return res.status(400).json({
//         status: "error",
//         message: `${err}`,
//       });
//     }
//   };

 
module.exports.sendMessages = async (req, res) => {
  try {
  
    const newMessage = new Contact({
      fullname: req.body.fullname, 
      email: req.body.email,
      subject: req.body.subject, 
      message: req.body.message,
    });
    const savedMessage = await newMessage.save();

    return res.status(200).json(savedMessage);
  } catch (err) {
    return res.status(400).json({
      status: "error",
      message: `${err}`,
    });
  }
};