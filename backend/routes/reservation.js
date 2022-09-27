const express = require("express");
const { deleteReservationById } = require("../controllers/reservation.JS");
const { updateReservationbyPatientId } = require("../controllers/reservation.JS");
const { createNewReservation } = require("../controllers/reservation.JS");
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");



const  reservationRouter=express.Router();


reservationRouter.post("/",authentication, authorization("Create_Reservation"),createNewReservation);//authorization("Create_Reservation"),
reservationRouter.delete("/",authentication,deleteReservationById)
reservationRouter.put("/",authentication,updateReservationbyPatientId)
module.exports = reservationRouter