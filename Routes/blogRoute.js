
const express = require('express');
const router = express.Router();
const blogsController=require("../controller/blogsController")
const fileCheck=require("../middleware/fileCheck")
const checkUser=require("../middleware/authCheck")
const contactController=require("../controller/contactController")


router.get('/getBlogs', blogsController.getAllBlogs  );
router.get('/blogs/:id',blogsController.getBlogsById );
router.post('/createBlogs',fileCheck.fileCheck, blogsController.createBlogs);
router.patch('/addBlogComment/:id', checkUser.userCheck, blogsController.addCommentByBlogId);


module.exports = router;
