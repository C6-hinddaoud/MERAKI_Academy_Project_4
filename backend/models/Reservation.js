const mongoose = require("mongoose");
//const bcrypt=require("bcrypt")
const reservationSchema = new mongoose.Schema({
  date: { type: Date},
  time:{ type: String },

  doctorRes:{type: mongoose.Schema.Types.ObjectId,ref:"doctor" },
  patientRes:{type: mongoose.Schema.Types.ObjectId,ref:"patient" }
  
});

// userSchema.pre("save" , async function(){

 
// this.password=await bcrypt.hash(this.password,5)
// this.email=await this.email.toLowerCase();
// })

module.exports=mongoose.model("reservation",reservationSchema)