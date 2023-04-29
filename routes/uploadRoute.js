const upload = require("../config/multerConfig.js");
const express = require("express");
const router = express.Router();
require("dotenv").config();
router.post(
  "/upload/",
  upload.array("image"),

  async (req, res) => {
    const media = await req.files.map((image, index) => {
      return `${process.env.path_Storage}${image.filename}`;
    });

    return res.status(202).json({ success: true, media: media });
  }
);
module.exports = router;
