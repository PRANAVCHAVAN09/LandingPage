const validator = require("validator");
const User = require("../models/User");
const Coupon = require("../models/Coupon");
const sendEmail = require("../utils/sendEmail");

exports.signup = async (req,res)=>{
  try{

    const { email } = req.body;

    // 1️⃣ Validation
    if(!email || !validator.isEmail(email)){
      return res.status(400).json({message:"Invalid Email"});
    }

    // 2️⃣ Duplicate check
    const existingUser = await User.findOne({email});
    if(existingUser){
      return res.status(400).json({message:"Email already registered"});
    }

    // 3️⃣ Get unused coupon
    const coupon = await Coupon.findOneAndUpdate(
      {isUsed:false},
      {isUsed:true},
      {new:true}
    );

    if(!coupon){
      return res.status(500).json({message:"No coupons available"});
    }

    // 4️⃣ Save user
    const newUser = await User.create({
      email,
      couponCode:coupon.code
    });

    // 5️⃣ Send email
    await sendEmail(email, coupon.code);

    res.json({message:"Signup successful! Check your email."});

  }catch(err){
    console.log(err)
    res.status(500).json({message:"Server error"});
  }
};