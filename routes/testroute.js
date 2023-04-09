const upload = require ('../config/multerConfig.js')
const express = require("express");
const router = express.Router();
const filesPayloadExists = require("../middleware/filesPayloadExists");
const fileExtLimiter = require("../middleware/fileExtLimiter");
const fileSizeLimiter = require("../middleware/fileSizeLimiter");
router.post("/singleUpload/",fileSizeLimiter, upload.array("image"),filesPayloadExists,(req,res)=>{
    // console.log(`${req.protocol}://${req.get('host')}/storage/media/${req.file.filename}`)
    const medias=req.files.map((image,index)=>{
        return `${req.protocol}://${req.get('host')}/storage/media/${image.filename}`
    })
    console.log(medias)
    return res
    .status(202)
    .json({ success: true, message: medias });
} );
module.exports=router;