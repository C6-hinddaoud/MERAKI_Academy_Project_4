const express = require("express");
const { createNewPers } = require("../controllers/prescription");




const  prescriptionRouter=express.Router();


prescriptionRouter.post("/:id", createNewPers);

module.exports  = prescriptionRouter