const express = require("express");
const { createNewDoctor, getallDoctobySpecialty, getAllPatientInTheSameDoctor, gitpatientpyName } = require("../controllers/doctor");
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");


const  doctorRouter=express.Router();


doctorRouter.post("/", createNewDoctor);
doctorRouter.get("/spicilaty/:spicilaty",getallDoctobySpecialty)
doctorRouter.get("/search_1",authentication,authorization("Doctor_ADMIN"),getAllPatientInTheSameDoctor)
doctorRouter.get("/search_2",authentication,gitpatientpyName)
module.exports = doctorRouter;


