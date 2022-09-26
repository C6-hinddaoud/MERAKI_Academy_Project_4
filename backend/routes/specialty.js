const express = require("express");
const { createNewspecialty } = require("../controllers/specialty");
const authentication = require("../middleware/authentication");

const authorization = require("../middleware/authorization");



const  specialtyRouter=express.Router();


specialtyRouter.post("/",authentication,authorization("Doctor_ADMIN"), createNewspecialty);//

module.exports = specialtyRouter