const { default: mongoose } = require("mongoose");

const commentSchema = mongoose.Schema({
  username:{
    type: String,
    required: true,
  },
  email:{
    type: String,
    required: true,
  },
  comment:{
    type: String,
    required: true,
  },
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
});

const blogsSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    discription: {
      type: String,
      required: true,
    },
    property_image: {
      type: String,
      required: true,
    },
    category:{
      type:String,
      required:true
    },

    comments: [commentSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("blogs", blogsSchema);
