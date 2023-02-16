const {
  getAllColisByUser,
  getAllColisById,
  createColis,
  updateStatutColis,

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

  /* controller review */
  getAllReview,
  getReviewById,
  createReview,
  deleteReviewById,
};
