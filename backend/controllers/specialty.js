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
  const { page = 1, limit = 10 } = req.query;
specialtyModel.find({})
.limit(limit * 1)
.skip((page - 1) * limit)
.exec()
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