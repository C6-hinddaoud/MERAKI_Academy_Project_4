const express = require("express");
const { createNewDoctor, getallDoctobySpecialty } = require("../controllers/doctor");


const  doctorRouter=express.Router();


doctorRouter.post("/", createNewDoctor);
doctorRouter.get("/:spicilaty",getallDoctobySpecialty)
module.exports = doctorRouter;


