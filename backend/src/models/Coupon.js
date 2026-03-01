const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema({
  code:String,
  discount:Number,
  isUsed:{
    type:Boolean,
    default:false
  }
});

module.exports = mongoose.model("Coupon", couponSchema);