const express = require("express");
const app = express();
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const profilRoute = require("./routes/profilRoute");
const authRoute = require("./routes/auth");
const annonceRoute = require("./routes/annonceRoute");
const propositionRouter = require("./routes/propositionRouter");
const colisRouter = require("./routes/colisRouter");
const corsOptions = require("./config/corsOptions");
const connectDB = require("./config/dbConn");

app.use(cors(corsOptions));

connectDB();
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  /*  Pour définir la variable NODE_ENV 
      vous pouvez utiliserla commande 
      set NODE_ENV=production dans un terminal 
  */
  const morgan = require("morgan");
  // log only 4xx and 5xx responses to console
  app.use(
    morgan("dev", {
      skip: function (req, res) {
        return res.statusCode < 400;
      },
    })
  );
}

app.use("/api/auth", authRoute);
app.use("/api", userRoute);
app.use("/api", profilRoute);
app.use("/api/annonce", annonceRoute);
app.use("/api/proposition", propositionRouter);
app.use("/api/colis", colisRouter);

module.exports = app;
