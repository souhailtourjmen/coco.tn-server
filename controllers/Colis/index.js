const {
  getAllColisByUserController,
  getColisByIdControllers,
  createColisControllers,
  updateStatutColisController,
  deleteColisByIDController,
  getStatusColisByIdController
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
  getStatusColisByIdController,

  /* controller review */
  getAllReview,
  getReviewById,
  createReview,
  deleteReviewById,
};
