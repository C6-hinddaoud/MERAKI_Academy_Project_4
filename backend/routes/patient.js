const express = require("express");
const { register, deletePatientbyid, updatePatientbyId } = require("../controllers/patient");
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");

const  patientRouter=express.Router();


patientRouter.post("/",register);
patientRouter.delete("/",authentication,authorization("Create_Reservation"),deletePatientbyid)
patientRouter.put("/",authentication,authorization("Create_Reservation"), updatePatientbyId)
module.exports = patientRouter;