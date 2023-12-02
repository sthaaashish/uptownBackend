const { default: mongoose } = require("mongoose");

const contactSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("contact",contactSchema);
