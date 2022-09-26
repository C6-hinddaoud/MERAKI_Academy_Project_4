const doctorModel = require("../models/doctor");


const createNewDoctor = (req, res) => {
  const { 
    name,
    salary,
   
     email,
     password,
     Qualification,
   
     specialty,
     


   } = req.body;
  const newDoctor = new doctorModel({ 
    name,
    salary,
     email,
     password,
     Qualification,
     specialty,
     role:"63315e12248788e06c717744"
    });
  newDoctor
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `Doctor created`,
        specialt: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};


const getallDoctobySpecialty=(req,res)=>{
    console.log("hindgg")
let specialty=req.params.spicilaty
doctorModel.find({specialty:specialty})
.then((result) => {
    res.status(201).json({
      success: true,
      message: `Doctor created`,
      specialt: result,
    });
  })
  .catch((err) => {
    res.status(500).json({
      success: false,
      message: `Server Error`,
      err: err.message,
    });
  });

}



module.exports = { createNewDoctor ,getallDoctobySpecialty};