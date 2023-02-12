const {
  getAllColisByUser,
  getAllColisById,
  createColis,
  updateStatutColis,
  deleteUserByID,
} = require("./ColisController");
const {
  getAllReview,
  getReviewById,
  createReview,
  deleteReviewById,
} = require("./ReviewController");

module.exports = {
  /* controller colis  */
  getAllColisByUser,
  getAllColisById,
  createColis,
  updateStatutColis,
  deleteUserByID,
  /* controller review */
  getAllReview,
  getReviewById,
  createReview,
  deleteReviewById,
};
