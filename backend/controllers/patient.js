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
   // prescription
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

const login = () => {};

module.exports = {
  register,
};
