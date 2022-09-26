const mongoose = require("mongoose");
//const bcrypt=require("bcrypt")
const specialtySchema = new mongoose.Schema({

    specialty:{ type: String }
  
});

// userSchema.pre("save" , async function(){

 
// this.password=await bcrypt.hash(this.password,5)
// this.email=await this.email.toLowerCase();
// })

module.exports=mongoose.model("specialty",specialtySchema)