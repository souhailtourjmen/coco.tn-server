const { imgMulter, pdfMulter } = require("../config/multer");
const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/auth");
require("dotenv").config();
router.post(
  "/image",
  imgMulter.array("image"),
  verifyToken,
  async (req, res) => {
    const media = await req.files.map((image, index) => {
      return `${process.env.path_Storage}media/${image.filename}`;
    });

    return res.status(202).json({ success: true, media: media });
  }
);
router.post("/file", pdfMulter.array('file', 5), verifyToken, async (req, res) => {
  const fileUpload = await req.files.map((file, index) => {
    return `${process.env.path_Storage}documents/${file.filename}`;
  });

  return res.status(202).json({ success: true, files: fileUpload });
});
module.exports = router;
