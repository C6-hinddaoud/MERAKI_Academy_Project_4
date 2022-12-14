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
        .then((n)=>{
          
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





const deleteReservationById = (req, res) => {
  //const patientRes = req.token.userId;
  const id = req.params.id;
  reservationModel
    .findOneAndDelete({_id:id})
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          success: false,
          message: `The reservation: ${patientRes} is not found`,
        });
      }
      res.status(200).json({
        success: true,
        message: `reservation deleted`,
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




const updateReservationbyPatientId=(req,res)=>{

  const patientRes = req.token.userId;
  const name = req.token.firstName;
  reservationModel
    .findOneAndUpdate({patientRes:patientRes}, req.body, { new: true })
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          success: false,
          message: `The Article: ${name} is not found`,
        });
      }
      res.status(202).json({
        success: true,
        message: `Reservation for  ${name} updated`,
        reservation: result,
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

const GetAllReservationInTheSameReservation=(req,res)=>{
  const id=req.params.id
reservationModel.find({doctorRes:id}, "time date").populate("doctorRes", "name -_id")
.then((result)=>{
  
res.json(result)
})
.catch((err)=>{
res.json("err")

})
}




module.exports = { createNewReservation,deleteReservationById ,updateReservationbyPatientId,GetAllReservationInTheSameReservation};
