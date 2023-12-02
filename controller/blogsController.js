const Blogs = require("../model/blogs");
const fs = require("fs");

module.exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blogs.find({});
    return res.status(200).json(blogs);
  } catch (err) {
    return res.status(400).json({
      status: "error",
      message: `${err}`,
    });
  }
};
module.exports.getBlogsById = async (req, res) => {
  try {
    const blogs = await Blogs.findOne({ _id: req.params.id });
    return res.status(200).json(blogs);
  } catch (err) {
    return res.status(400).json({
      status: "error",
      message: `${err}`,
    });
  }
};
module.exports.createBlogs = async (req, res, next) => {
  const { title, discription } = req.body;

  try {
    await Blogs.create({
      title,
      discription,
      image: req.image,
    });
    return res.status(200).json({
      status: "sucess",
      message: "successfully created",
    });
  } catch (err) {
    return res.status(400).json({
      status: "error",
      message: `${err}`,
    });
  }
};

module.exports.addCommentByBlogId = async (req, res) => {
  try {
    const blog = await Blogs.findById(req.params.id);
    blog.comments.push({ comment:req.body.comment, username:req.body.username,email:req.body.email});
    await blog.save();
    return res.status(200).json(blog);
  } catch (err) {
    return res.status(400).json({
      status: "error",
      message: `${err}`,
    });
  }
};



