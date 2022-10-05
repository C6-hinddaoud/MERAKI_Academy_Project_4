const patientModel = require("../models/patient");
const reservation = require("../models/reservation");
const register = (req, res) => {
  const {
    firstName,
    lastName,
    age,
    country,
    email,
    password,
    role,
    doctor,
    phone,
    prescription
  } = req.body;

  
  const newPatient = new patientModel({
    firstName,
    lastName,
    age,
    country,
    email,
    password,
    role,
    doctor,
    phone,
    prescription,
    role:"63315dcf248788e06c717742"
  });
  newPatient
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `Account Created Successfully`,
        patient: result,
      });
    })
    .catch((err) => {
      if (err.keyPattern) {
        return res.status(409).json({
          success: false,
          message: `The email already exists`,
        });
      }
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};

const deletePatientbyid=(req,res) => {
const _id=req.params.id
//const name=req.token.firstName
patientModel
.findByIdAndDelete(_id)
.then((result) => {
  if (!result) {
    return res.status(404).json({
      success: false,
      message: `The patient: ${_id} is not found`,
    });
  }
  res.status(200).json({
    success: true,
    message: `Patient  deleted`,
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


const updatePatientbyId=(req,res)=>{
console.log("update")




  const _id = req.params.id;
  console.log(_id)
  console.log(req.body.firstName)
//const name=req.token.firstName
  patientModel
    .findByIdAndUpdate(_id, {firstName}=req.body
       , { new: true })
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          success: false,
          message: `The Patient: ${_id} is not found`,
        });
      }
      res.status(202).json({
        success: true,
        message: `the updated`,
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


module.exports = {
  register,deletePatientbyid ,updatePatientbyId
};
