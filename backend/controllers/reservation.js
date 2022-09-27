const reservationModel = require("../models/reservation");
const patientModel=require("../models/patient")

const createNewReservation = (req, res) => {
    console.log(req.token.userId)
    const userId = req.token.userId;
  const {
    date,
    time,
    doctorRes,
  } = req.body;
  const newReservation = new reservationModel({ date,
    time,
    doctorRes,
    patientRes:userId });
  newReservation
    .save()
    .then((result) => {

        patientModel.updateOne({_id:userId},{doctor:doctorRes},{ new: true })
        .then((result)=>{
            //const resDate = new Date(result.date);
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
      
    })
})
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};

module.exports = { createNewReservation };
