const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = async () => {
  try {
    await mongoose
      .connect(process.env.DATABASE_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("Connexion à MongoDB réussie !"))
      .catch(() => console.log("Connexion à MongoDB échouée !"));
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
