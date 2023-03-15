const mongoose = require("mongoose");
const contentSchema = mongoose.Schema(
  {
    name: {
        type: String,
        maxlength: 54,
      },
      width: {
        type: String,
        maxlength: 16,
      },
      length: {
        type: String,
        maxlength: 16,
      },
      height: {
        type: String,
        maxlength: 16,
      },
      weight: {
        type: String,
        maxlength: 16,
      },
      images: [{ type: mongoose.Schema.Types.ObjectId, ref: "Image" }],
    
  },
 
);
module.exports = mongoose.model("Content", contentSchema);