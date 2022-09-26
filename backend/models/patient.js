const mongoose = require("mongoose");
const bcrypt=require("bcrypt")
const patientSchema = new mongoose.Schema({
    
  firstName: { type: String, required: true },
  lastName: { type: String },
  age: { type: Number },
  country: { type: String },
  email: { type:String, required: true , unique: true},
  password: { type: String, required: true },
  role:{type: mongoose.Schema.Types.ObjectId,ref:"role" },
  doctor:{type: mongoose.Schema.Types.ObjectId,ref:"doctor" },
  prescription:[{ type: String }],
  phone:{ type: String }
});

patientSchema.pre("save" , async function(){

 
this.password=await bcrypt.hash(this.password,5)
this.email=await this.email.toLowerCase();
})

module.exports=mongoose.model("patient",patientSchema)