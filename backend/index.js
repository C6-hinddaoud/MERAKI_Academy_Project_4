const express = require("express");
const cors = require("cors");
const patientRouter = require("./routes/patient");
const roleRouter = require("./routes/role");
const specialtyRouter = require("./routes/specialty");
const doctorRouter = require("./routes/doctor");
const loginRouter = require("./routes/login");
const reservationRouter = require("./routes/reservation");
const prescriptionRouter = require("./routes/prescription");

require("dotenv").config();
require("./models/db");

const app = express();
const PORT = 5000;


app.use(cors());
//app.use(express.json());
app.use(express.json({ limit: "50mb" }));
app.use("/patients",patientRouter)
app.use("/roles",roleRouter)
app.use("/specialties",specialtyRouter)
app.use("/doctors",doctorRouter)
app.use("/login",loginRouter)
app.use("/reservation",reservationRouter)
app.use("/prescription",prescriptionRouter)
// Import Routers




// Routes Middleware


// Handles any other endpoints [unassigned - endpoints]
app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
