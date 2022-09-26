const modelPres=require("../models/prescription")
const modelpatient=require("../models/patient")
const createNewPers=(req,res)=>{
    const{medicine}=req.body
const newpres=new modelPres({
    medicine
})
.save()
.then((result)=>{
   const patientId=req.params.id
console.log("reslll",result)
   modelpatient.updateOne({_id:patientId},{ $push: { prescription: result.medicine} })
   .then((result)=>{
    console.log(result)
   })
   .catch((err)=>{
    console.log(err)
   })
    res.status(201).json({
        success: true,
        message: `reservation created`,
        updatePatient: result,
      });



})
.catch((err)=>{res.status(500).json({
    success: false,
    message: `Server Error`,
    err: err.message,})

console.log(result._id)
res.status(201).json({
success: true,
message: `reservation created`,
Reservation: result,
});
})
}

module.exports ={createNewPers}