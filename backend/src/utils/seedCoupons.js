const mongoose = require("mongoose");
const Coupon = require("../models/Coupon");

mongoose.connect('mongodb+srv://pranav_db:pranav789@cluster0.5gicprp.mongodb.net/LandingPage?retryWrites=true&w=majority');

const createCoupons = async()=>{
  for(let i=1;i<=50;i++){
    await Coupon.create({
      code:`TASKMAN-${Math.random().toString(36).substring(2,8).toUpperCase()}`,
      discount:20
    });
  }
  console.log("Coupons created");
  process.exit();
};

createCoupons();