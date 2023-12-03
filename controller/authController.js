const User=require('../model/user')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



module.exports.userLogin = async (req, res) => {
    const { email, password } = req.body;
  try {
    const userExist = await User.findOne({
      email: email,
    });
    if (userExist) {
      const validPassword = bcrypt.compareSync(password, userExist.password);
      if (validPassword) {
        const token = jwt.sign(
          { id: userExist._id, isAdmin: userExist.isAdmin },
          "stha2121"
        );
        return res.status(200).json({
          token,
          email,
          fullname:userExist.fullname,
          isAdmin: userExist.isAdmin,
        });
      } else {
        return res.status(404).json({
          status: "error",
          message: "invalid credentials",
        });
      }
    } else {
      return res.status(404).json({
        status: "error",
        message: "user doesnot exist",
      });
    }
  } catch (err) {
    return res.status(400).json({
      status: "error",
      message: `${err}`,
    });
  }
};

module.exports.userRegister = async (req, res) => {
    const { email, password,fullname,} = req.body;
    try{
        const userExist=await User.findOne({email:email})
        if(userExist){
            return res.status(404).json({
                status:"error",
                message:"email already exist"
            })
        }else{
            const hassPass=await bcrypt.hash(password,12);
            await User.create({
                email,
                password:hassPass,
                fullname,
                profession
            })
            return res.status(201).json({
                status:"success",
                message:"succesfully registered1"
            })
        }

    }catch(err){
        return res.status(400).json({
            status: "400",
            message: `${err}`,
        })
    }
}