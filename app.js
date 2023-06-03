const express = require("express");
const app = express();
const path = require("path");
app.use(express.urlencoded({ extended: false }));
const cors = require("cors");
const connectDB = require("./config/dataBase");
const corsOptions = require("./config/corsOption");
const {
  userRoute,
  profilRoute,
  authRoute,
  annonceRoute,
  proposalRouter,
  colisRouter,
  uploadRoute,
  chatRouter,
  requestRouter,
  reviewRouter
} = require("./routes");

/* test route */
const testRoute = require("./test/routes/testFCM");
/*end test */

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
app.use(
  "/storage/media",
  express.static(path.join(__dirname, "storage", "media"))
);
app.use(
  "/storage/documents",
  express.static(path.join(__dirname, "storage", "documents"))
);
app.use("/api/upload", uploadRoute);
app.use("/api/auth", authRoute);
app.use("/api", userRoute);
app.use("/api", profilRoute);
app.use("/api/annonce", annonceRoute);
app.use("/api/proposal", proposalRouter);
app.use("/api/colis", colisRouter);
app.use("/api/review", reviewRouter);
app.use("/api/chat", chatRouter);
app.use("/api/requestRole", requestRouter);
app.use("/api/test", testRoute);

module.exports = app;
