const express = require("express");
const { createNewDoctor, getallDoctobySpecialty, getAllPatientInTheSameDoctor } = require("../controllers/doctor");
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");


const  doctorRouter=express.Router();


doctorRouter.post("/", createNewDoctor);
doctorRouter.get("/spicilaty/:spicilaty",getallDoctobySpecialty)
doctorRouter.get("/search_1",authentication,authorization("Doctor_ADMIN"),getAllPatientInTheSameDoctor)
module.exports = doctorRouter;


