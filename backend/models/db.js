const mongoose = require("mongoose");

// connecting to mongodb
mongoose.connect('mongodb://localhost:27017/DB_Hspital').then(
  () => {
    console.log("DB Ready To Use");
  },
  (err) => {
    console.log(err);
  }
);
