const {
  getAllColisByUserController,
  getColisByIdControllers,
  createColisControllers,
  updateStatutColisController,
  deleteColisByIDController,
  getStatusColisByIdController
} = require("./ColisController");
const {
  getAllReviewController,
  getReviewByIdController,
  createReviewController,
  deleteReviewByIdController,
} = require("./reviewController");

module.exports = {
  /* controller colis  */
  getAllColisByUserController,
  getColisByIdControllers,
  createColisControllers,
  updateStatutColisController,
  deleteColisByIDController,
  getStatusColisByIdController,

  /* controller review */
  getAllReviewController,
  getReviewByIdController,
  createReviewController,
  deleteReviewByIdController,
};
