const {
  getAllColisByUserController,
  getColisByIdControllers,
  createColisControllers,
  updateStatutColisController,
  deleteColisByIDController,
} = require("./ColisController");
const {
  getAllReview,
  getReviewById,
  createReview,
  deleteReviewById,
} = require("./ReviewController");

module.exports = {
  /* controller colis  */
  getAllColisByUserController,
  getColisByIdControllers,
  createColisControllers,
  updateStatutColisController,
  deleteColisByIDController,

  /* controller review */
  getAllReview,
  getReviewById,
  createReview,
  deleteReviewById,
};
