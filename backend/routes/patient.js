const express = require("express");
const { register, deletePatientbyid, updatePatientbyId } = require("../controllers/patient");
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");

const  patientRouter=express.Router();


patientRouter.post("/",register);
patientRouter.delete("/:id",deletePatientbyid)//authentication,authorization("Create_Reservation"),
patientRouter.put("/:id",updatePatientbyId)//authentication,authorization("Create_Reservation"), 
module.exports = patientRouter;