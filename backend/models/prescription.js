const mongoose = require("mongoose");

const prescriptionSchema = new mongoose.Schema({
    medicine: [{ type: String}],
  patient:{type: mongoose.Schema.Types.ObjectId,ref:"patient" }
});

module.exports = mongoose.model("prescription", prescriptionSchema);