const mongoose = require("mongoose");
const notificationSchema = mongoose.Schema(
  {
    notification: {
      body: {
        type: String,
      },
      screen: {
        type: String,
      },
      subtitle: {
        type: String,
      },
      title: {
        type: String,
      },
      icon: {
        type: String,
      },
    },
    data: {
      type: Object,
    },
    isRead: {
      type: Boolean,
      required: true,
    },
    to: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profil",
    },
    from: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profil",
    },
    created: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Notification", notificationSchema);
