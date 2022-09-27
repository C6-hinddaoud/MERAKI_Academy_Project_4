const express = require("express");
const { createNewReservation } = require("../controllers/reservation.JS");
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");



const  reservationRouter=express.Router();


reservationRouter.post("/",authentication, authorization("Create_Reservation"),createNewReservation);//authorization("Create_Reservation"),

module.exports = reservationRouter