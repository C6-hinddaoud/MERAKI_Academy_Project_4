const doctorModel = require("../models/doctor");
const patientModel=require("../models/patient")

const createNewDoctor = (req, res) => {
  const { 
    name,
    salary,
   image,
     email,
     password,
     Qualification,
   
     specialty,
     


   } = req.body;
  const newDoctor = new doctorModel({ 
    name,
    salary,
    image,
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

const getAllPatientInTheSameDoctor=(req,res)=>{
const doctor=req.token.userId;
const name=req.token.name
patientModel.find({doctor})
.then((result) => {
  if(!result){
    res.status(500).json({
      success: false,
      message: `There Are no Patient in Dr:${name}`,
      specialt: result,
    });
  }else{
  res.status(201).json({
    success: true,
    message: `All Patient in Dr:${name}`,
    specialt: result,
  });
}
})
.catch((err) => {
  res.status(500).json({
    success: false,
    message: `Server Error`,
    err: err.message,
  });
});

}
const gitpatientpyName=(req,res)=>{
console.log("lkj")
  const doctor=req.token.userId;
  const name=req.token.name
  const firstName=req.query.firstName
  const regex=new RegExp(firstName,'g')
  console.log(regex)
  patientModel.find({doctor:doctor , firstName:{$regex:regex}})
  .then((result) => {
    console.log("bf", result)
    if(!result){
      res.status(500).json({
        success: false,
        message: `There Are no Patient in Dr:${name}`,
        patient: result,
      });
    }else{
    res.status(201).json({
      success: true,
      message: `This is info about  :${firstName}`,
      patient: result,
    });
  }
  })
  .catch((err) => {
    res.status(500).json({
      success: false,
      message: `Server Error`,
      err: err.message,
    });
  });
  



}


const getDoctorInformationALLdocr=(req,res)=>{
doctorModel.find({})
.then((result)=> {
  console.log("bf", result)
  if(!result){
    res.status(500).json({
      success: false,
      message: `There Are no Doctors`,
      patient: result,
    });
  }else{
  res.status(201).json({
    success: true,
    message: `This is info about  all Doctors`,
    patient: result,
  });
}
})
.catch((err)=>{

  res.status(500).json({
    success: false,
    message: `Server Error`,
    err: err.message,
  });
})
}



const deletDoctorById=(req,res)=>{

  const _id=req.params.id
  //const name=req.token.firstName
  doctorModel
  .findByIdAndDelete(_id)
  .then((result) => {
    if (!result) {
      return res.status(404).json({
        success: false,
        message: `The Doctor: ${_id} is not found`,
      });
    }
    res.status(200).json({
      success: true,
      message: `Doctor  deleted`,
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




 
 
 

 
const updateDoctorByID=(  req,res)=>{
  console.log("tesr")
  req.body.name ==undefined
             ? (name = doctorModel.name)
             : (name = req.body.name),
             req.body.salary == undefined
             
               ? (salary =doctorModel.salary)
               : (salary= req.body.salary),
               
              
               req.body.email  == undefined
             
               ? (email  = doctorModel.email  )
               : (email   = req.body.email  ),
               req.body.specialty == undefined
             
               ? (specialty  = doctorModel.specialty )
               : (specialty  = req.body.specialty ),
          
               req.body.password == undefined
             
               ? (password  = doctorModel.password )
               : (password  = req.body.password ),
       
               req.body.Qualification == undefined
             
               ? (Qualification = doctorModel.Qualification )
               : (Qualification = req.body.Qualification )
         
  
  
  
    const _id = req.params.id;
    // console.log(_id)
   
  //const name=req.token.firstName
  doctorModel
      .findByIdAndUpdate(_id, { name,
        salary,
       
         email,
         password,
         Qualification,
         specialty
        },
          
       
          { new: true })
      .then((result) => {
        if (!result) {
          return res.status(404).json({
            success: false,
            message: `The Doctor: ${_id} is not found`,
          });
        }
        res.status(202).json({
          success: true,
          message: `The update process was successful`,
          Patient: result,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: `Server Error`,
          err: err.message,
        });
      })
  
}

module.exports = { createNewDoctor ,getallDoctobySpecialty,getAllPatientInTheSameDoctor,gitpatientpyName,getDoctorInformationALLdocr,deletDoctorById,updateDoctorByID};