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
// console.log(patientModel.firstName)
const updateObject = {
  firstName: req.body.firstname === undefined ?  patientModel.firstName
  : req.body.firstName,
}

// nullish coalescing operator
let firstName = req.body.firstName ?? patientModel.firstName
req.body.firstName ==undefined
           ? (firstName = patientModel.firstName)
           : (firstName = req.body.firstName),
           req.body.lastName == undefined
           
             ? (lastName = patientModel.lastName)
             : (lastName = req.body.lastName),
             
             req.body.age == undefined
           
             ? (age = patientModel.age)
             : (age = req.body.age),
              
             req.body.email  == undefined
           
             ? (email  = patientModel.email  )
             : (email   = req.body.email  ),
             req.body.country == undefined
           
             ? (country  = patientModel.country )
             : (country  = req.body.country ),
        
             req.body.password == undefined
           
             ? (password  = patientModel.password )
             : (password  = req.body.password ),
     
             req.body.phone == undefined
           
             ? (phone = patientModel.phone )
             : (phone  = req.body.phone )
       



  const _id = req.params.id;
  // console.log(_id)
  console.log(firstName)
//const name=req.token.firstName
  patientModel
    .findByIdAndUpdate(_id, {firstName,
      lastName,
      age,
      country,
      email,
      password,
     
      
      phone,
      },
        
     
        { new: true })
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
