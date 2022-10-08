const express = require("express");
const { createNewDoctor, getallDoctobySpecialty, getAllPatientInTheSameDoctor, gitpatientpyName, getDoctorInformationALLdocr, deletDoctorById, updateDoctorByID } = require("../controllers/doctor");
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");


const  doctorRouter=express.Router();


doctorRouter.post("/", createNewDoctor);
doctorRouter.get("/spicilaty/:spicilaty",getallDoctobySpecialty)
doctorRouter.get("/search_1",authentication,authorization("Doctor_ADMIN"),getAllPatientInTheSameDoctor)
doctorRouter.get("/search_2",authentication,gitpatientpyName)


doctorRouter.get("/allDoctors",getDoctorInformationALLdocr)
// doctorRouter
doctorRouter.delete("/delete/:id",deletDoctorById)
doctorRouter.put("/update/:id",updateDoctorByID)
module.exports = doctorRouter;