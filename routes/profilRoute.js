const express = require("express");
const router = express.Router();
const {
  getAllProfils,
  getProfilByID,
  getProfilListReviewByID,
  getProfilListColisByID,
  getProfilListAnnonceByID,
} = require("../controllers/user/index");

router.get("/api/getProfilByID/", getProfilByID);
router.get("/api/getAllProfils/", getAllProfils);
router.get("/api/getProfilListReviewByID/", getProfilListReviewByID);
router.get("/api/getProfilListColisByID/", getProfilListColisByID);
router.get("/api/getProfilListAnnonceByID/", getProfilListAnnonceByID);

module.exports = router;
