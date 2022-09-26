const express = require("express");
const { createNewspecialty, getAllSpeciality } = require("../controllers/specialty");
const authentication = require("../middleware/authentication");

const authorization = require("../middleware/authorization");



const  specialtyRouter=express.Router();


specialtyRouter.post("/",authentication,authorization("Doctor_ADMIN"), createNewspecialty);//
specialtyRouter.get("/",getAllSpeciality)
module.exports = specialtyRouter