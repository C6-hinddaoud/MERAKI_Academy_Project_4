const mongoose = require("mongoose");
const bcrypt=require("bcrypt")
const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
 salary:{type: Number},
image:{ type: String},
  email: { type: String, required: true , unique: true},
  password: { type: String, required: true },
  Qualification:{type: String},

  specialty:{type: mongoose.Schema.Types.ObjectId,ref:"specialty" },
  role:{type: mongoose.Schema.Types.ObjectId,ref:"role" }
  
});

doctorSchema.pre("save" , async function(){

 
this.password=await bcrypt.hash(this.password,5)
this.email=await this.email.toLowerCase();
})


module.exports=mongoose.model("doctor",doctorSchema)