const multer = require("multer");


const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'storage/media');
  },
  filename: function (req, file, callback) {
    const name = file.originalname.split(".")[0];
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + "." + extension);
  },
});
const fileFilter = (req, file, callback) => {
  if (!file) {
    callback(null, false);
  } else {
    callback(null, true);
  }
};
const upload = multer({
  storage: storage,
  limits: { fieldSize: 10 * 1024 * 1024 },
  fileFilter: fileFilter,
});

module.exports = upload;
