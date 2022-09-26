const specialtyModel = require("../models/specialty");

// This function creates new role
const createNewspecialty = (req, res) => {
  const { specialty } = req.body;
  const newSpicality = new specialtyModel({specialty });
  newSpicality
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `specialty created`,
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

const getAllSpeciality=(req,res)=>{
specialtyModel.find({})
.then((result) => {
    res.status(201).json({
      success: true,
      message: `All Speciality`,
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


module.exports = { createNewspecialty,getAllSpeciality };