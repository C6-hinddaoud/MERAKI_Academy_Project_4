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
        author: result,
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
const _id=req.token.userId
const name=req.token.firstName
patientModel
.findByIdAndDelete(_id)
.then((result) => {
  if (!result) {
    return res.status(404).json({
      success: false,
      message: `The patient: ${name} is not found`,
    });
  }
  res.status(200).json({
    success: true,
    message: `Patient ${name} deleted`,
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


  const _id = req.token.userId;
const name=req.token.firstName
  patientModel
    .findByIdAndUpdate(_id, req.body, { new: true })
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          success: false,
          message: `The Patient: ${_id} is not found`,
        });
      }
      res.status(202).json({
        success: true,
        message: `the ${name} updated`,
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
