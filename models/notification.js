const mongoose = require("mongoose");
const notificationSchema = mongoose.Schema(
  {
    message: {
        type: String,
        required: true,
      },
      isRead: {
        type: Boolean,
        required: true,
      },
      to: {
        type: Schema.Types.ObjectId,
        ref: 'Profil',
      },
      from: {
        type: Schema.Types.ObjectId,
        ref: 'Profil',
      },
      created: {
        type: Date,
        default: Date.now,
      },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Notification", notificationSchema);
