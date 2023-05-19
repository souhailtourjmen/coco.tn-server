// const multer = require("multer");
// const path = require("path");
// const {conn} = require("../ftp");
// const Client = require("ssh2");

// var sftpStorage = require("multer-sftp");
// const MIME_TYPES = {
//   "image/jpg": "jpg",
//   "image/jpeg": "jpg",
//   "image/png": "png",
// };

// const storage = sftpStorage({
//   sftp: conn,
//   destination: function (req, file, cb) {
//     cb(null, "storage/media");
//   },
//   filename: function (req, file, cb) {
//     const name = file.originalname.split(".")[0];
//     const extension = MIME_TYPES[file.mimetype];
//     cb(null, name + Date.now() + "." + extension);
//   },
// });
// const fileFilter = (req, file, cb) => {
//   if (!file) {
//     cb(null, false);
//   } else {
//     cb(null, true);
//   }
// };
// const stpfMulter = multer({
//   storage: storage,
//   limits: { fieldSize: 10 * 1024 * 1024 },
//   fileFilter: fileFilter,
// });

// module.exports = { stpfMulter };
