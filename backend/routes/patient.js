const express = require("express");
const { register } = require("../controllers/patient");
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");

const  patientRouter=express.Router();


patientRouter.post("/",register);

module.exports = patientRouter;